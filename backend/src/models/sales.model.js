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

module.exports = {
  findAll,
  findById,
};