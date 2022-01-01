const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const api = require('./routes');
const config = require('./config');

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api)

module.exports = app;