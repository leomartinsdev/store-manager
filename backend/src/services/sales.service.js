const { salesModel } = require('../models');
const { productsModel } = require('../models');

const validateNewSale = require('./validations/validationsValues');

const findAll = async () => {
  const sales = await salesModel.findAll();

  return { status: 'SUCCESSFUL', data: sales };
};

const findById = async (id) => {
  const sale = await salesModel.findById(id);

  if (sale.length !== 0) return { status: 'SUCCESSFUL', data: sale };

  return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
};

const verifyId = async (newSale) => {
  const response = await Promise.all(newSale
    .map(({ productId }) => productsModel.findById(productId)));

  const errorResult = response.some((result) => result === undefined);
  if (errorResult) {
    return { status: 'NOT_FOUND', message: 'Product not found' };
  }
};

const registerSale = async (newSale) => {
  const error = validateNewSale(newSale);
  if (error) return { status: error.status, data: { message: error.message } };

  const idError = await verifyId(newSale);
  if (idError) return { status: idError.status, data: { message: idError.message } };

  const saleId = await salesModel.registerSale(newSale);
  const sale = await salesModel.findById(saleId);

  if (sale) {
    const soldItems = sale.map((item) => ({ productId: item.productId, quantity: item.quantity }));

    return {
      status: 'CREATED',
      data: {
        id: saleId,
        itemsSold: soldItems,
      },
    };
  }
};

module.exports = {
  findAll,
  findById,
  registerSale,
};