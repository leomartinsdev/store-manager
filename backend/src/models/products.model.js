const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(products);
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(product);
};

const registerProduct = async (newProductName) => {
  const name = newProductName;

  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUE (?);',
    [name],
    );
  return insertId;
};

module.exports = {
  findAll,
  findById,
  registerProduct,
};