const Paymentx = require('../models/pagos-realizados');
const {
  Router
} = require('express');
const pay = new Router();

pay.post("/api/insert-payment", function (req, res) {
  let body = req.body;
  let P = new Paymentx({
    id_usuario: body.id_usuario,
    dia: body.dia,
    Total: body.Total,
    cursos:body.cursos
  });
  P.save((err, P) => {
    if (err) {
      return res.json({
        ok: false,
        message: err
      });
    }
    res.json({
      ok: true,
      message: false,
      save: P
    });
  });
});

pay.post("/get-user", function (req, res) {
  //muestra los modulos segun el role
  let body = req.body;
  users_session.find({
    email: body.email,
    password: body.password
  }).exec((err, role) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
      save: role
    });
  });
});
module.exports = pay;