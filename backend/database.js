const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db)
    .then(db => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error(err));

module.exports = mongoose;