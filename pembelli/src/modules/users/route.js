const express = require('express');
const Route = express.Router()

const { getAllUsers, getDetailUser, insertUser, deleteUser } = require('./controller')

Route
    .get('/', getAllUsers)
    .get('/:id', getDetailUser)
    .post('/', insertUser)
    .delete('/:id', deleteUser)

module.exports = Route