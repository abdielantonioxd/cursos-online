const mongoose = require('mongoose');
const { Schema } = mongoose;

const carrito = mongoose.Schema({
  id_usuario: { type: String, require: true },
  id_categoria: { type: String, require: true },
  id_Curso: { type: String, require: true },
  Titulo: { type: String, require: true },
  Precio: { type: Number, require: true },
  Informacion: { type: String, require: true },
  nombre_profesor: { type: String, require: true },
  Imagen: { type: String, require: true }
}, { collection: 'carrito' })

module.exports = mongoose.model('carrito', carrito);