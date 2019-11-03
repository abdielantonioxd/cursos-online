const categories = require('../models/categorias');
const {
  Router
} = require('express');
const Categorias = new Router();


Categorias.get("/get-categorias", function (req, res) {
  //muestra los modulos segun el role
  let body = req.body;
  
  categories.find().exec((err, role) => {
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



module.exports = Categorias;