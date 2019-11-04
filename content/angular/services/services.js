app.factory("Dataservice", function ($http) {
  var Dataservice = {
    InsertShoppingCartLabCode: function (data) {
      return $http.post(InsertShoppingCart, {
        id_usuario: data.id_usuario,
        id_categoria: data.id_categoria,
        id_Curso: data.id_Curso,
        Titulo: data.Titulo,
        Precio: data.Precio,
        Informacion: data.Informacion,
        nombre_profesor: data.nombre_profesor,
        Imagen:data.Imagen
      }).then(function (data) {
        return data;
      })
    },
    GetShoppingCart: function (data) {
      return $http.post(getShoppingCart, {
        id_usuario: data.id_usuario
      }).then(function (data) {
        return data;
      })
    }
  }
  return Dataservice;
})