const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { allProductsFromModel, productFromModel, newProductFromModel, productIdFromModel } = require('../mocks/products.mock');

describe('Testando o products.service:', function () {
  afterEach(function () {
    sinon.restore();
  });

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

  it('Buscando um produto com id inválido', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);
    const searchedId = 999;

    const responseService = await productsService.findById(searchedId);
    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data).to.deep.equal({ message: 'Product not found' });
  });

  it('Insere um produto com sucesso', async function () {
    sinon.stub(productsModel, 'registerProduct').resolves(productIdFromModel);
    sinon.stub(productsModel, 'findById').resolves(newProductFromModel);
    const inputData = {
      name: 'ProdutXYZ',
    };
    
    const responseService = await productsService.registerProduct(inputData);
    expect(responseService.status).to.equal('CREATED');
    expect(responseService.data).to.deep.equal(newProductFromModel);
  });

  it('Atualiza um produto com sucesso', async function () {
    const expectedProductReturn = { id: 1, name: 'Martelo do Batman' };
    sinon.stub(productsModel, 'updateProduct').resolves(expectedProductReturn);
    sinon.stub(productsModel, 'findById').resolves(expectedProductReturn);

    const inputId = 1;
    const inputName = { name: 'Martelo do Batman' };

    const responseService = await productsService.updateProduct(inputName.name, inputId);
    const expectedResponse = { status: 'SUCCESSFUL', data: { id: 1, name: 'Martelo do Batman' } };
    expect(responseService).to.deep.equal(expectedResponse);
  });
});
