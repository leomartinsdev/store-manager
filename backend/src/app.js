const express = require('express');
const productsRouter = require('./routes/productsRouter');
// oi
const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use('/products', productsRouter);

module.exports = app;

/*
Inicialmente iria fazer o projeto dessa forma, sem usar routes. Porém, como não tinha me desafiado a usar routes em nenhuma atividade, decidi tentar.
Além disso, usar routes tem a função de deixar o código mais organizado. Aproveitei que ainda estava no começo do projeto, uni o útil ao agradável e resolvi
usar routes.

app.get('/products', async (req, res) => {
    const products = await productsModel.findAll();
    if (products) {
      return res.status(200).json(products);
    }
    return res.status(400).json({ message: 'Não foi possível listar os produtos' });
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await productsModel.findById(id);
  if (product) {
    return res.status(200).json(product);
  }
  return res.status(404).json({ message: 'Product not found' });
});

*/
