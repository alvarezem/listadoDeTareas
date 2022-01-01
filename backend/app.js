const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const cors = require('cors');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/tareas', require('./routes/tareas.routes'));

module.exports = app;