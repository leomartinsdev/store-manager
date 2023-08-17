const { productsModel } = require('../models');

const findAll = async () => {
  const products = await productsModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
};

const findById = async (id) => {
  const product = await productsModel.findById(id);

  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

  return { status: 'SUCCESSFUL', data: product };
};

const registerProduct = async (newProductName) => {
  const insertId = await productsModel.registerProduct(newProductName);
  const newProductData = await productsModel.findById(insertId);
  // if (!newProductData) return {};

  return { status: 'CREATED', data: newProductData };
};

module.exports = {
  findAll,
  findById,
  registerProduct,
};