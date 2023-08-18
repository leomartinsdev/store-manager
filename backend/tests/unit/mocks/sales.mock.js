const date = '2023-08-18T19:33:26.000Z';

const saleIdFromDB = { insertId: 55 };
const saleIdFromModel = 55;

const allSalesFromDB = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date,
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date,
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date,
  },
];

const saleFromDB = [
  {
    productId: 1,
    quantity: 5,
    date,
  },
  {
    productId: 2,
    quantity: 10,
    date,
  },
];

module.exports = {
  allSalesFromDB,
  saleFromDB,
  saleIdFromDB,
  saleIdFromModel,
};