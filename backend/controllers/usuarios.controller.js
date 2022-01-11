const usuarioCtrl = {}
const Usuario = require('../models/Usuario')
const service = require('../services')

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


//LOGIN
const signUp = (req, res) => {
    const user = new Usuario({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })

    user.avatar = user.gravatar();

    user.save(err => {
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}`})

        return res.status(200).send({ token: service.createToken(user) })
    })
}

const signIn = (req, res) => {
    Usuario.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: err})
        if(!user) return res.status(404).send({ message: 'No existe el usuario'})

        return user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return res.status(500).send({ message: `Error al ingresar: ${err}`})
            if(!isMatch) return res.status(404).send({ message: `Error de contraseña: ${req.body.email}`})

            req.user = user
            res.status(200).send({
                message: 'Te has logueado correctamente',
                token: service.createToken(user) })
        })
        
        
    }).select('_id email +password');
}


    
module.exports = usuarioCtrl;
module.exports = {
    signUp,
    signIn,
}