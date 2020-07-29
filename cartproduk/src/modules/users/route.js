const express = require('express');
const Route = express.Router()

const { getAllCarts, getDetailCart, insertCart, deleteCart } = require('./controller')

Route
    .get('/', getAllCarts)
    .get('/:id', getDetailCart)
    .post('/', insertCart)
    .delete('/:id', deleteCart)

module.exports = Route