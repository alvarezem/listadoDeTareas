const { Router } = require('express');
const router = Router();

//CRUD
const usuarioCtrl = require('../controllers/usuarios.controller copy');

router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.crearUsuario);
router.put('/:id', usuarioCtrl.editarUsuario);
router.delete('/:id', usuarioCtrl.borrarUsuario);

module.exports = router;