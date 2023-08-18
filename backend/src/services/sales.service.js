const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();

  return { status: 'SUCCESSFUL', data: sales };
};

const findById = async (id) => {
  const sale = await salesModel.findById(id);

  if (sale.length !== 0) return { status: 'SUCCESSFUL', data: sale };

  return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
};

const registerSale = async (newSale) => {
  console.log('newsale no serv:', newSale);
  const saleId = await salesModel.registerSale(newSale);
  const sale = await salesModel.findById(saleId);

  if (sale) {
    const soldItems = sale.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));

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