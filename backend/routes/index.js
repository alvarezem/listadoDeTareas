const express = require('express');
const auth = require('../middlewares/auth');
const usuarioCtrl = require('../controllers/usuarios.controller');
const api = express();

api.use('/tareas', auth, require('./tareas.routes'));
api.use('/signup', usuarioCtrl.signUp);
api.use('/signin', usuarioCtrl.signIn);
api.use('/usuarios', require('./usuarios.routes'));

api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tiene acceso'})
})

module.exports = api;