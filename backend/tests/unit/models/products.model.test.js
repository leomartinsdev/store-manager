const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { allProductsFromDB, productFromDB, productIdFromModel, productIdFromDB } = require('../mocks/products.mock');

describe('Testes do products.model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recupera todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([allProductsFromDB]);
    const products = await productsModel.findAll();

    expect(products).to.be.deep.equal(allProductsFromDB);
    expect(products).to.have.length(3);
    expect(products).to.be.an('array');
  });

  it('Recupera um produto com id específico', async function () {
    sinon.stub(connection, 'execute').resolves([[productFromDB]]);
    const product = await productsModel.findById(1);

    expect(product).to.be.deep.equal(productFromDB);
    expect(product).to.be.an('object');
  });

  it('Insere um produto com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([productIdFromDB]);
    const inputData = { name: 'ProdutoX' };
    const insertId = await productsModel.registerProduct(inputData);

    expect(insertId).to.be.a('number');
    expect(insertId).to.equal(productIdFromModel);
  });
});