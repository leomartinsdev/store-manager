const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { allSalesFromDB, saleFromDB, saleIdFromDB, saleIdFromModel } = require('../mocks/sales.mock');

describe('Testes do sales.model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recupera todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([allSalesFromDB]);
    const sales = await salesModel.findAll();

    expect(sales).to.be.an('array');
    expect(sales).to.have.length(3);
    expect(sales).to.be.deep.equal(allSalesFromDB);
  });

  it('Recupera uma única venda específica', async function () {
    sinon.stub(connection, 'execute').resolves([saleFromDB]);
    const sale = await salesModel.findById(1);

    expect(sale).to.be.an('array');
    expect(sale).to.be.deep.equal(saleFromDB);
  });

  it('Insere uma venda com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([saleIdFromDB]);

    const inputData = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];

    const insertId = await salesModel.registerSale(inputData);

    expect(insertId).to.be.an('number');
    expect(insertId).to.be.deep.equal(saleIdFromModel);
  });
});