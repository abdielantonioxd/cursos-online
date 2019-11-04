const Cart = require('../models/carrito');
const {
  Router
} = require('express');
const shoppingCart = new Router();

shoppingCart.post("/api/insert-shopping/cart", function (req, res) {
  let body = req.body;
  let shopping = new Cart({
    id_usuario: body.id_usuario,
    id_categoria: body.id_categoria,
    id_Curso: body.id_Curso,
    Titulo: body.Titulo,
    Precio: body.Precio,
    nombre_profesor: body.nombre_profesor,
    Informacion: body.Informacion,
    Imagen: body.Imagen
  });
  shopping.save((err, shopping) => {
    if (err) {
      return res.json({
        ok: false,
        message: err
      });
    }
    res.json({
      ok: true,
      message: false,
      save: shopping
    });
  });
});

shoppingCart.post("/get-shoppingCart", function (req, res) {
  //muestra los modulos segun el role
  let body = req.body;
  Cart.find({
    id_usuario: body.id_usuario
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

shoppingCart.post("/delete-shopping", function(req, res) {
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

module.exports = shoppingCart;