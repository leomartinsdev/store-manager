const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { allProductsFromService, productFromServiceValid, productFromServiceInvalid, allProductsFromModel, productFromModel } = require('../mocks/products.mock');

describe('Realizando os testes de Products Controller', function () {
  it('Recuperando todos os produtos', async function () {
    sinon.stub(productsService, 'findAll').resolves(allProductsFromService);
    const req = {
      params: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsFromModel);
  });

  it('Recuperando o produto de id = 1', async function () {
    sinon.stub(productsService, 'findById').resolves(productFromServiceValid);
    const req = {
      params: { id: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productFromModel);
  });

  it('Recuperando o produto de id inválido', async function () {
    sinon.stub(productsService, 'findById').resolves(productFromServiceInvalid);
    const req = {
      params: { id: 999 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  afterEach(function () {
    sinon.restore();
  });
});