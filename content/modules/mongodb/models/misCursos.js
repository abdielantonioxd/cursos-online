const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const misCursos = mongoose.Schema({
  id_Curso: {
    type: String,
    require: true
  },
  id_usuario: {
    type: String,
    require: true
  },
}, {
  collection: 'Mycourses'
})

module.exports = mongoose.model('Mycourses', misCursos);