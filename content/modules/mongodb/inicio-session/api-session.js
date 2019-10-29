const users_session = require('../models/usuario');
const {
  Router
} = require('express');
const usersSession = new Router();

usersSession.post("/api/insert-user", function (req, res) {
  let body = req.body;
  let Usr = new users_session({
    nombre: body.nombre,
    email: body.email,
    password: body.password
  });
  Usr.save((err, Usr) => {
    if (err) {
      return res.json({
        ok: false,
        message: err
      });
    }
    res.json({
      ok: true,
      message: false,
      save: Usr
    });
  });
});


usersSession.post("/get-user", function (req, res) {
  //muestra los modulos segun el role
  let body = req.body;
  users_session.find({ email: body.email, password: body.password }
  ).exec((err, role) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
      role
    });
  });
});


module.exports = usersSession;