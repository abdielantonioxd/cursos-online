const cours = require('../models/courses');
const {
  Router
} = require('express');
const Courses = new Router();

Courses.get("/get-courses", function (req, res) {
  //muestra los modulos segun el role
  let body = req.body;
  
  cours.find().exec((err, role) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
     save:role
    });
  });
});

Courses.post("/find-courses", function (req, res) {
  //muestra los modulos segun el role
  let body = req.body;
  cours.find({id_categoria:body.id}).exec((err, role) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
     save:role
    });
  });
});


Courses.post("/get-course", function (req, res) {
  //muestra los modulos segun el role
  let body = req.body;
  cours.find({id_Curso:body.id}).exec((err, role) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
     save:role
    });
  });
});

module.exports = Courses;