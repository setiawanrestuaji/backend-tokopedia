const express = require('express');
const Route = express.Router();

const pembeliRoute = require('../modules/users/route')

Route
    .use(`/api/v1/pembeli`, pembeliRoute)

module.exports = Route