const productIdFromDB = { insertId: 55 };
const productIdFromModel = 55;

const allProductsFromDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const productFromDB = {
  id: 1,
  name: 'Martelo de Thor',
};

// No console.log, o resultado do update é o seguinte:
const dbUpdateReturn = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1 Changed: 1 Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1,
  },
  undefined,
];

const dbUpdateSecondReturn = [
  [{ id: 1, name: 'Martelo do Batman' }],
  undefined,
];

const allProductsFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const productFromModel = {
  id: 1,
  name: 'Martelo de Thor',
};

const productFromModelInvalid = {
    message: 'Product not found',
};

const newProductFromModel = {
  id: 55,
  name: 'ProdutoXYZ',
};

const allProductsFromService = {
  status: 'SUCCESSFUL',
  data: allProductsFromModel,
};

const productFromServiceValid = {
  status: 'SUCCESSFUL',
  data: productFromModel,
};

const productFromServiceInvalid = {
  status: 'NOT_FOUND',
  data: { message: 'Product not found' },
};

const insertServiceValid = {
  status: 'CREATED',
  data: newProductFromModel,
};

module.exports = {
  allProductsFromDB,
  productFromDB,
  allProductsFromModel,
  productFromModel,
  productFromModelInvalid,
  allProductsFromService,
  productFromServiceValid,
  productFromServiceInvalid,
  productIdFromDB,
  productIdFromModel,
  newProductFromModel,
  insertServiceValid,
  dbUpdateReturn,
  dbUpdateSecondReturn,
};