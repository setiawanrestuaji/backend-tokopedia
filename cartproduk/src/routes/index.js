const express = require('express');
const Route = express.Router();

const cartRoute = require('../modules/users/route')

Route
    .use(`/api/v1/cart`, cartRoute)

module.exports = Route