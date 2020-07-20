const express = require('express');
const Route = express.Router()

const { getAllProduk, getDetailProduk, insertProduk, deleteProduk, updateProduk} = require('./controller')

Route
    .get('/', getAllProduk)
    .get('/:id', getDetailProduk)
    .put('/:id', updateProduk)
    .post('/', insertProduk)
    .delete('/:id', deleteProduk)

module.exports = Route