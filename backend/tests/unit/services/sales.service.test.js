const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');

const { allSalesFromModel, saleFromModel, saleIdFromModel, newSaleFromModel, newSaleFromService } = require('../mocks/sales.mock');

describe('Testes do sales.service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recupera todas as vendas', async function () {
    sinon.stub(salesModel, 'findAll').resolves(allSalesFromModel);
    const responseService = await salesService.findAll();

    expect(responseService.data).to.be.an('array');
    expect(responseService.data).to.have.length(3);
    expect(responseService.data).to.be.deep.equal(allSalesFromModel);
    expect(responseService.status).to.equal('SUCCESSFUL');
  });

  it('Recupera uma única venda específica', async function () {
    sinon.stub(salesModel, 'findById').resolves(saleFromModel);
    const responseService = await salesService.findById(1);

    expect(responseService.data).to.be.an('array');
    expect(responseService.data).to.be.deep.equal(saleFromModel);
    expect(responseService.status).to.equal('SUCCESSFUL');
  });
      
  it('Insere uma venda com sucesso', async function () {
    sinon.stub(salesModel, 'registerSale').resolves(saleIdFromModel);
    sinon.stub(salesModel, 'findById').resolves(newSaleFromModel);
    
    const responseService = await salesService.registerSale(newSaleFromModel);
    expect(responseService.status).to.equal('CREATED');
    expect(responseService.data).to.deep.equal(newSaleFromService.data);
  });
});