const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const Pago = mongoose.Schema({
  id_usuario: {
    type: String,
    require: true
  },
  dia: {
    type: String,
    require: true
  },
  Total: {
    type: Number,
    require: true
  },
  cursos: {
    type: String,
    require: true
  },
}, {
  collection: 'pago_realizados'
})

module.exports = mongoose.model('pago_realizados', Pago);