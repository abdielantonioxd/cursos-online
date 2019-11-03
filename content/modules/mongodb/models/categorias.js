const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorias = mongoose.Schema({
  type: { type: String, require: true },
  id_categoria: { type: String, require: true }
}, { collection: 'categorias' })

module.exports = mongoose.model('categorias', categorias);