const mongoose = require('mongoose');
const URI = 'mongodb+srv://admin:1234@cluster0.e6db6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error(err));

module.exports = mongoose;