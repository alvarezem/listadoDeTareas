const tareaCtrl = {}
const Tarea = require('../models/Tarea')

tareaCtrl.getTareas = async (req, res) => {
    const tareas = await Tarea.find()
    res.json(tareas)
}

tareaCtrl.crearTarea = async (req, res) => {
    const nuevaTarea = new Tarea(req.body)
    await nuevaTarea.save()
    res.send({message: 'Tarea creada'})
}

tareaCtrl.getTarea = async (req, res) => {
    const Tarea = await Tarea.findById(req.params.id)
    res.send(Tarea)
}

tareaCtrl.editarTarea = async (req, res) => {
    await Tarea.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: 'Tarea actualizada'})
}

tareaCtrl.borrarTarea = async (req, res) => {
    await Tarea.findByIdAndDelete(req.params.id)
    res.json({message: 'Tarea borrada'})
}

module.exports = tareaCtrl;