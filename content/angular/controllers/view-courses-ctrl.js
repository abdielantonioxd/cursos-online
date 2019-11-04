app.controller("view-courses", ['$scope', '$http','Dataservice', function ($scope, $http,Dataservice) {
  let {
    url,
    cookie
  } = plugdo;
 
  $scope.user = [];

  var cookie_sessionExist = cookie.get("session-exist");
  if (url.qs.length > 0) {
    //  console.log(url.qs)
    var data = {
      id: url.qs.courses
    }
    getDataCourse(data);
  }

  function getDataCourse(data) {
    $http.post(getCourse, data).then(function (response) {
      // console.log(response.data.save)
      $scope.dataCourse = response.data.save[0];
    })
  }

  $scope.AddShoppingCard = function (dataX) {
    if (cookie_sessionExist != null && cookie_sessionExist != "") {
      var dataUser = JSON.parse(cookie_sessionExist);
      var data = {
        id_usuario: dataUser.id,
        id_categoria: dataX.id_categoria,
        id_Curso: dataX.id_Curso,
        Titulo: dataX.Titulo,
        Precio: dataX.Precio,
        nombre_profesor: dataX.nombre_profesor,
        Informacion: dataX.Informacion,
        Imagen:dataX.Imagen
      }
      sendDataShoppinCart(data)
    } else {
      swal({
          title: "HUPS!",
          text: "No tienes una cuenta con Nosotros?",
          icon: "warning",
          buttons: ["Iniciar sesión", "Crear cuenta"],
          dangerMode: true,
        })
        .then((response) => {
          if (response == true) {
            $('#registro').modal('show');
          } else {
            $('#inicio').modal('show')
          }
        });
    }
  }


  function sendDataShoppinCart(data) {
    Dataservice.InsertShoppingCartLabCode(data).then(function (response) {
      var res = response.data.ok;
      if (res == true) {
        swal("Listo!", "Se agrego correctamente", "success");
        setTimeout(() => {
          location.href = "/shopping-cart";
        }, 3000);
      } else {
        swal("Error!", "Verifica que tu conexion este bien ", "warning");
      }
    })
  }
}])