const mongoose = require('mongoose');
const { Schema } = mongoose;

const TareaSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    dueño: {type: Schema.ObjectId, ref:'Client', required: true},
    vencimiento: {type: Date, required: true},
    status: {type: Boolean, required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Tarea', TareaSchema);