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

module.exports = {
  findAll,
  findById,
};