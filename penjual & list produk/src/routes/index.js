const express = require('express');
const Route = express.Router();

const userRoute = require('../modules/users/route')
const produkRoute = require('../modules/produk/route')

Route
    .use(`/api/v1/user`, userRoute)
    .use(`/api/v1/produk`, produkRoute)

module.exports = Route