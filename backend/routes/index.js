const express = require('express');
const api = express();

api.use('/tareas', require('./tareas.routes'));

module.exports = api;