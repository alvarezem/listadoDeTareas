const usuarioCtrl = {}
const Usuario = require('../models/Usuario')

//CRUD

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioCtrl.crearUsuario = async (req, res) => {
    const nuevaUsuario = new Usuario(req.body)
    await nuevaUsuario.save()
    res.send({message: 'Usuario creado'})
}

usuarioCtrl.getUsuario = async (req, res) => {
    const Usuario = await Usuario.findById(req.params.id)
    res.send(Usuario)
}

usuarioCtrl.editarUsuario = async (req, res) => {
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: 'Usuario actualizado'})
}

usuarioCtrl.borrarUsuario = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message: 'Usuario borrado'})
}

    
module.exports = usuarioCtrl;