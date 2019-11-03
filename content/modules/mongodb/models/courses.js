const mongoose = require('mongoose');
const { Schema } = mongoose;

const courses = mongoose.Schema({
  id_Curso: { type: String, require: true },
  id_categoria: { type: String, require: true },
  Categorias: { type: String, require: true },
  Titulo: { type: String, require: true },
  Informacion: { type: String, require: true },
  Imagen: { type: String, require: true },
  nombre_profesor: { type: String, require: true },
  Precio: { type: String, require: true },
  Requisitos: { type: String, require: true },
  Descripcion: { type: String, require: true }
}, { collection: 'courses' })

module.exports = mongoose.model('courses', courses);