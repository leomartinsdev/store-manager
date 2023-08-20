const { salesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findAll = async (_req, res) => {
  const { status, data } = await salesService.findAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.findById(id);

  return res.status(mapStatusHTTP(status)).json(data);
};

const registerSale = async (req, res) => {
  const newSale = req.body;
  const { status, data } = await salesService.registerSale(newSale);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
  findById,
  registerSale,
};