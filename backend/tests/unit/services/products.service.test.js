const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { allProductsFromModel, productFromModel } = require('../mocks/products.mock');

describe('Testando o products.service:', function () {
  it('Buscando todos os produtos', async function () {
    sinon.stub(productsModel, 'findAll').resolves(allProductsFromModel);
    const responseService = await productsService.findAll();
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(allProductsFromModel);
  });

  it('Buscando apenas um produto', async function () {
    sinon.stub(productsModel, 'findById').resolves(productFromModel);
    const searchedId = 1;

    const responseService = await productsService.findById(searchedId);
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(productFromModel);
  });
});
