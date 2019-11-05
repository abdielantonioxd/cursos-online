const MY = require('../models/misCursos');
const {
  Router
} = require('express');
const Mycoursesx = new Router();

Mycoursesx.post("/api/insert-Mycourses", function (req, res) {
  let body = req.body;
  let courses = new MY({
    id_usuario: body.id_usuario,
    id_Curso: body.id_Curso,
  });
  courses.save((err, courses) => {
    if (err) {
      return res.json({
        ok: false,
        message: err
      });
    }
    res.json({
      ok: true,
      message: false,
      save: courses
    });
  });
});

Mycoursesx.post("/get-myCourses", function (req, res) {
  //muestra los modulos segun el role
  let body = req.body;
  MY.find({
    id_usuario: body.id_usuario
  }).exec((err, cours) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
      save: cours
    });
  });
});


Mycoursesx.post("/get-ListCourses", function (req, res) {
  //muestra los modulos segun el role
  let body = req.body;
  MY.find({
    id_Curso: body.id_Curso
  }).exec((err, cours) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
      save: cours
    });
  });
});

Mycoursesx.post("/delete-shopping", function (req, res) {
  let id = req.body.id;

  Cart.findByIdAndRemove(id, (err, CartDelete) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
      usuario: CartDelete
    });
  });
});

module.exports = Mycoursesx;