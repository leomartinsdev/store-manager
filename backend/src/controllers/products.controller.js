const { productsService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

/* Função que recebe uma requisição para retornar todos os produtos e envia a resposta */
const findAll = async (_req, res) => {
  const { status, data } = await productsService.findAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

/* Função que recebe uma requisição para retornar um produto e envia a resposta */
const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsService.findById(id);

  return res.status(mapStatusHTTP(status)).json(data);
};

const registerProduct = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await productsService.registerProduct(name);
  
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
  findById,
  registerProduct,
};