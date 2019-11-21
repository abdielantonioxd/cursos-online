app.controller("payment-courses", ['$scope', '$http', 'Dataservice', function ($scope, $http, Dataservice) {
  let {
    cookie
  } = plugdo;
  $scope.user = [];
  var DataEmailInfo = [];
  $scope.dataPayment = "";
  var cookie_sessionExist = cookie.get("session-exist");
  var cookie_dataPayment = cookie.get("data-payment");
  var cookie_dataTotal = cookie.get("data-total");
  if (cookie_sessionExist != null) {
    var credenciales = JSON.parse(cookie_sessionExist)
    $scope.name = credenciales.name;
    $scope.email = credenciales.email;
  }

  if (cookie_dataPayment === "" && cookie_dataPayment === null) {
    location.href = "/";
  }

  function Func_access() {
    if (cookie_sessionExist != "") {
      var dataUser = JSON.parse(cookie_sessionExist);
      $scope.name = dataUser.name;
      showDataPayment();
    } else {
      if ($scope.user != "") {
        $scope.name = $scope.user[0].name;
        var dataUser = $scope.user[0];
        showDataPayment();
      } else {
        location.href = "/";
        cookie.delete("session-exist");
      }
    }
  }

  function showDataPayment() {
    if (cookie_dataPayment != "") {
      var dataPayment = JSON.parse(cookie_dataPayment);
      $scope.countArticle = dataPayment.length;
      $scope.article = dataPayment
      $scope.Total = cookie_dataTotal;
      $scope.dataPayment = dataPayment;
    }
  }


  $scope.paymentCourses = function () {
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1;
    var yyyy = hoy.getFullYear();
    var miembro = mm + '/' + dd + '/' + yyyy;
    form = $("#formDataTarjeta").serializeArray();
    form.push({
      name: 'dia',
      value: miembro
    });
    obj = new Object();
    for (const i in form) {
      obj[form[i].name] = form[i].value;
    }

    // console.log(obj)
    validateForm(obj);
  }

  function validateForm(obj) {
    if (obj.Ma != "" && obj.CodePostal != "" && obj.cvc != "" && obj.dia != "" && name_tarjeta != "" && num_tarjeta != "") {
      swal({
        title: "LabCode",
        text: `Estas seguro que quieres Realizar este pago.`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((res) => {
          if (res == true) {
            sendDBPagoRealizados(obj);
          }
        });

    } else {
      swal({
        title: "LabCode",
        text: `Todos los campos son obligatorios`,
        icon: "error",
        buttons: true,
        dangerMode: true,
      })
        .then((res) => {
          if (res == true) {

          }
        });
    }
  }

  function sendDBPagoRealizados(obj) {
    var dataUser = JSON.parse(cookie_sessionExist);
    var dataPay = {
      id_usuario: dataUser.id,
      dia: obj.dia,
      Total: $scope.Total,
      cursos: $scope.countArticle
    }
    // console.log(dataPay)
    $http.post(inserPayment, dataPay).then(function (response) {
      // console.log(response);
      var res = response.data.ok;
      if (res == true) {
        swal("Good job!", "Has realizado correctamente la compra", "success", {
          button: "listo",
        });
        sendEmail();
      }

    })
  }

  function deleteShopingCart() {
    var art = $scope.article;
    for (const key in art) {
      $scope.deleteCourses(art[key]);
    }
  }

  $scope.deleteCourses = function (x) {
    var dataDelete = {
      id: x._id
    }
    $http.post(deleteShopping, dataDelete).then(function (response) {
      if (response.data.ok == true) {
        // console.log(response.data.ok)
        countCarrito()
      } else {
        swal("Error!", "No se completo la operación", "error");
      }
    })
  }

  function countCarrito() {
    var dataUser = JSON.parse(cookie_sessionExist);
    Dataservice.GetShoppingCart(dataUser).then(function (response) {
      $scope.countShopping = response.data.save.length;
      if ($scope.countShopping == 0) {
        deleteData()
        location.href = "/mis-cursos";
      }
    })
  }

  function deleteData() {
    cookie.delete("data-payment");
  }

  function sendEmail() {
    DataEmailInfo = {
      name: $scope.name,
      email: $scope.email,
      cantidad: $scope.dataPayment.length,
      total: $scope.Total
    }
    $http.post(UrlEmail, DataEmailInfo).then(function (response) {
      if (response.status == 200) {
        swal("Good!", "Se ha realizado el pago correctamente ", "success");
        insertMycourses();
      }
    })
  }

  function insertMycourses() {
    var art = $scope.article;
    for (const key in art) {
      $scope.saveMycourses(art[key]);
    }
  }
  $scope.saveMycourses = function (x) {
    var myCourses = {
      id_usuario: x.id_usuario,
      id_Curso: x.id_Curso
    }
    $http.post(inserMycourses, myCourses).then(function (response) {
      var res = response.data.ok;
      if (res == true) {
        deleteShopingCart();
      }
    })
  }
  Func_access()

}])