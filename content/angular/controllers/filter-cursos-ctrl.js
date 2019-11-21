app.controller("filter-cursos", ['$scope', '$http', 'Dataservice', function ($scope, $http, Dataservice) {
  $scope.categorias = "";
  var {
    cookie
  } = plugdo;
  $scope.user = [];

  var cookie_sessionExist = cookie.get("session-exist");
  // Load data caterories
  function loadDataCategories() {
    $http.get(getCategories).then(function (data) {
      $scope.categorias = data.data.save;
    })
  }

  function dataCourses() {
    $http.get(getCourses).then(function (response) {
      $scope.dataCourses = response.data.save;
      $scope.countCourses = response.data.save.length;
      pagination()
    })
  }

  function pagination() {
    $scope.totalItems = 30;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 6;
    $scope.maxSize = 5;
    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
      Pselect = $scope.currentPage
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    }
  }

  $scope.FunctCategorias = function (e) {
    var data = {
      id: e.id_categoria
    }
    filterForCategories(data);
  }

  function filterForCategories(data) {
    $http.post(findCours, data).then(function (response) {
      $scope.dataCourses = response.data.save;
      $scope.countCourses = response.data.save.length;
      if ($scope.dataCourses != "") {
        alertify.set('notifier', 'position', 'top-right');
        alertify.success(`${$scope.countCourses} Resultados `);
      }
    })
  }

  $scope.AddShoppingCard = function (dataX) {
    if (cookie_sessionExist != null && cookie_sessionExist != "") {
      var dataUser = JSON.parse(cookie_sessionExist);
      // console.log(dataUser)
      var data = {
        id_usuario: dataUser.id,
        id_categoria: dataX.id_categoria,
        id_Curso: dataX.id_Curso,
        Titulo: dataX.Titulo,
        Precio: dataX.Precio,
        nombre_profesor: dataX.nombre_profesor,
        Informacion: dataX.Informacion,
        Imagen: dataX.Imagen
      }
      sendDataShoppinCart(data)
    } else {
      swal({
          title: "HUPS!",
          text: "No tienes una cuenta con Nosotros ?",
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
        swal({
          title: "Listo ",
          text: "Se agrego correctamente, desea ver el estado de tu carritode compra o quieres seguir comprando",
          icon: "success",
          buttons: ['Seguir comprando','Ver carrito'],
          dangerMode: true,
        })
        .then((willadd) => {
          if (willadd === true) {
              location.href = "/shopping-cart";
          } 
        });
      } else {
        swal("Error!", "Verifica que tu conexion este bien ", "warning");
      }
    })
  }
  loadDataCategories();
  dataCourses();
}])