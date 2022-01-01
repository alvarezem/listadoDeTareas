const { Router } = require('express');
const router = Router();

//CRUD
const tareaCtrl = require('../controllers/tareas.controller');

router.get('/', tareaCtrl.getTareas);
router.post('/', tareaCtrl.crearTarea);
router.put('/:id', tareaCtrl.editarTarea);
router.delete('/:id', tareaCtrl.borrarTarea);

module.exports = router;