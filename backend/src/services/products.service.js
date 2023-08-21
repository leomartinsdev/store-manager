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

  return { status: 'CREATED', data: newProductData };
};

const verifyId = async (id) => {
  const response = await productsModel.findById(id);

  if (response === undefined) {
    return { status: 'NOT_FOUND', message: 'Product not found' };
  }
};

const updateProduct = async (name, id) => {
  const idError = await verifyId(id);
  if (idError) return { status: idError.status, data: { message: idError.message } };

  const updatedProduct = await productsModel.updateProduct(name, id);

  return { status: 'SUCCESSFUL', data: updatedProduct };
};

module.exports = {
  findAll,
  findById,
  registerProduct,
  updateProduct,
};