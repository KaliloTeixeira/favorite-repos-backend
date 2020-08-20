const mongoose = require('mongoose');
const { query } = require('express');

const Product = mongoose.model('Product');

module.exports = {
    async listProducts(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        // .json() envia a resposta como Estrutura de Dados (json)
        return res.json(products);
    },

    async showProduct(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async createProduct(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async updateProduct(req, res) {
        // const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });


        return res.json('tudo certo');
    },

    async removeProduct(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};