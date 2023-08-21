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

const allSalesFromModel = [
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

const saleFromModel = [
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

const newSaleFromModel = [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ];

const allSalesFromService = {
  status: 'SUCCESSFUL',
  data: allSalesFromModel,
};

const saleFromServiceValid = {
  status: 'SUCCESSFUL',
  data: saleFromModel,
};

const newSaleFromService = {
  status: 'CREATED',
  data: {
    id: 55,
    itemsSold: newSaleFromModel,
  },
};

module.exports = {
  allSalesFromDB,
  saleFromDB,
  saleIdFromDB,
  saleIdFromModel,
  allSalesFromModel,
  saleFromModel,
  newSaleFromModel,
  newSaleFromService,
  allSalesFromService,
  saleFromServiceValid,
};