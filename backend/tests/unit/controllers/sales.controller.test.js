const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');

const { allSalesFromService, saleFromServiceValid, allSalesFromModel, saleFromModel, newSaleFromService, newSaleFromModel } = require('../mocks/sales.mock');

describe('Testando sales.controller', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todos as vendas', async function () {
    sinon.stub(salesService, 'findAll').resolves(allSalesFromService);
    const req = {
      params: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSalesFromModel);
  });

  it('Recupera uma venda específica', async function () {
    sinon.stub(salesService, 'findById').resolves(saleFromServiceValid);
    const req = {
      params: { id: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleFromModel);
  });

  it('Insere uma venda com sucesso', async function () {
    sinon.stub(salesService, 'registerSale').resolves(newSaleFromService);
    const req = { body: { newSaleFromModel } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.registerSale(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newSaleFromService.data);
  });
});