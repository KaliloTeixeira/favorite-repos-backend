const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//O parametro REQ contém as informações da requisição realizada pelo navegador
//O resposta é a resposta que daremos à requisição


routes.get('/products', ProductController.listProducts);
routes.get('/products/:id', ProductController.showProduct);
routes.post('/products', ProductController.createProduct);
routes.put('/products/:id', ProductController.updateProduct);
routes.delete('/products/:id', ProductController.removeProduct);


module.exports = routes;