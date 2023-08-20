const addSaleSchema = require('./salesSchemas');

const checkMsg = (batata) => {
  const msg = batata.includes('required') ? 'CONFLICT' : 'INVALID_VALUE';
  return msg;
};

const validateNewSale = (sales) => {
  for (let i = 0; i < sales.length; i += 1) {
    const { error } = addSaleSchema.validate(sales[i]);
    if (error) {
      return { status: checkMsg(error.message), message: error.message };
    }
  }
};

module.exports = validateNewSale;