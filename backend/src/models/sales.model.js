const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute(
    `SELECT SP.sale_id, SP.product_id, SP.quantity, S.date
    FROM sales AS S
    INNER JOIN sales_products AS SP
    ON S.id = SP.sale_id
    ORDER BY sale_id, product_id;`,
  );
  return camelize(sales);
};

const findById = async (salesId) => {
  const [sale] = await connection.execute(`SELECT SP.product_id, SP.quantity, S.date
    FROM sales AS S
    INNER JOIN sales_products AS SP
    ON S.id = SP.sale_id
    WHERE SP.sale_id = ?
    ORDER BY sale_id, product_id;`, [salesId]);
  return camelize(sale);
};

const registerSale = async (newSale) => {
  const saleDate = new Date();

  console.log('newsale no m1:', newSale);

  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUE (?);',
    [saleDate],
  );

  await Promise.all(newSale.map(async (sale) => {
    const { productId, quantity } = sale;
    await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?);',
      [insertId, productId, quantity],
    );
  }));

  return insertId;
};

module.exports = {
  findAll,
  findById,
  registerSale,
};