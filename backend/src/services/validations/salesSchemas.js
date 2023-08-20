const Joi = require('joi');

const addSaleSchema = Joi.object().keys({
  productId: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
}).messages({
  'any.required': '{#label} is required',
  'number.min': '{#label} must be greater than or equal to 1',
});

module.exports = addSaleSchema;