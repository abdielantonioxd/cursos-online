const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSesion = mongoose.Schema({
  nombre: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
}, { collection: 'users_session' })

module.exports = mongoose.model('users_session', userSesion);