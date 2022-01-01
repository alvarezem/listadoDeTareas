const mongoose = require('mongoose');
const URI = 'mongodb+srv://alvarezem:424843emma@cluster0.a1wsj.mongodb.net/listadoDeCliente?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error(err));

module.exports = mongoose;