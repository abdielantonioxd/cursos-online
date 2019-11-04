app.controller("shopping-cart", ['$scope', '$http', 'Dataservice', function ($scope, $http, Dataservice) {
  var {
    cookie
  } = plugdo;
  $scope.user = [];
  $scope.Total = 0;
  $scope.Shopping = "";
  var cookie_sessionExist = cookie.get("session-exist");
  $scope.lengthEmpty = true;
  var total = "";

  function Func_access() {
    if (cookie_sessionExist != "") {
      var dataUser = JSON.parse(cookie_sessionExist);
      $scope.name = dataUser.name;
      countShoppingCart(dataUser);

    } else {
      if ($scope.user != "") {
        $scope.name = $scope.user[0].name;
        var dataUser = $scope.user[0];
        countShoppingCart(dataUser);
      } else {
        location.href = "/";
        cookie.delete("session-exist");
      }
    }
  }

  function countShoppingCart(dataUser) {
    var dataUser = {
      id_usuario: dataUser.id
    }
    Dataservice.GetShoppingCart(dataUser).then(function (response) {
      $scope.countShopping = response.data.save.length;
      if ($scope.countShopping == 0) {
        $scope.lengthEmpty = false;
      } else {
        $scope.lengthEmpty = true;
      }
      $scope.Shopping = response.data.save;
      total = $scope.Shopping;
      CalTotal(total);
    })
  }


  function CalTotal(total) {
    // console.log(total)
    if (total.length != 0) {
      for (var x = 0; x < total.length; x++) {
        $scope.Total += total[x].Precio;
      }
    }
    cookie.set("data-total",$scope.Total , 1);
  }

  $scope.deleteCourses = function (x) {
    var dataDelete = {
      id: x._id
    }
    $http.post(deleteShopping, dataDelete).then(function (response) {
      if (response.data.ok == true) {
        swal("Listo!", "Producto eliminado", "success");
        setTimeout(() => {
          location.href = "/shopping-cart";
        }, 1000);
      } else {
        swal("Error!", "No se completo la operación", "error");
      }
    })
  }
  $scope.ListPayment = function (){
    var dataUserr = JSON.parse(cookie_sessionExist);
    var dataUser = {
      id_usuario: dataUserr.id
    }
    Dataservice.GetShoppingCart(dataUser).then(function (response) {
      $scope.countShopping = response.data.save;
      if ($scope.countShopping == 0) {
        $scope.lengthEmpty = false;
      } else {
        $scope.lengthEmpty = true;
        var dataPay = JSON.stringify($scope.countShopping)
        cookie.set("data-payment",dataPay, 1);
        location.href="/payment"
      }
    })
  }
  Func_access();
}])