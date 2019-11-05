app.controller('ctrl-inicio-session', ['$scope', '$http', 'Dataservice', function ($scope, $http, Dataservice) {
  var {
    cookie
  } = plugdo;
  $scope.user = [];
  $scope.sessionStart = true;
  $scope.userActive = true;
  var cookie_sessionExist = cookie.get("session-exist");
  $scope.session_start = function () {
    form = $("#formSesion").serializeArray();
    obj = new Object();
    for (const i in form) {
      obj[form[i].name] = form[i].value;
    }
    if (obj.email != "" && obj.password != "") {
      existUser(obj)
    } else {
      swal("Error!", "Datos Incompletos", "error");
    }
  }

  function existUser(obj) {
    $http.post(GetUsers, obj).then(function (response) {
      var res = response.data.ok;
      if (res == true &&  response.data.save.length != 0) {
        var userExist = response.data.save[0];
        $scope.user = [];
        $scope.user.push({
          name: userExist.nombre,
          id: userExist._id,
          email: userExist.email
        })
        var users_x = JSON.stringify($scope.user[0]);
        cookie.set("session-exist", users_x, 1);
        swal("Bien !", `Hola Bienvenido ${userExist.nombre}`, "success");
        $('#inicio').modal('hide');
        location.href = "/";
      } else {
        swal("Este Usuario no existe ", "Intenta Registrarte", "error");
      }

    })
  }

  function Func_access() {
    if (cookie_sessionExist != "") {
      var dataUser = JSON.parse(cookie_sessionExist);
      $scope.name = dataUser.name;
      // console.log($scope.name)
      $scope.sessionStart = true;
      $scope.userActive = false;
      viewMyCourses(dataUser)
      countShoppingCart(dataUser);
    } else {
      if ($scope.user != "") {
        // console.log($scope.user);
        $scope.sessionStart = true;
        $scope.userActive = false;
        $scope.name = $scope.user[0].name;
        var dataUser = $scope.user[0];
        countShoppingCart(dataUser);
        viewMyCourses(dataUser)
      } else {
        $scope.sessionStart = false;
        $scope.userActive = true;
      }
    }
  }


  $scope.register_users = function () {
    form = $("#formRegister").serializeArray();
    obj = new Object();
    for (const i in form) {
      obj[form[i].name] = form[i].value;
    }
    if (obj.nombre != "" && obj.email != "" && obj.password != "") {
      sendDataUsers(obj)
    } else {
      swal("Error!", "Datos Incompletos", "error");
    }
  }

  function sendDataUsers(obj) {
    $http.post(SendUsers, obj).then(function (response) {
      var res = response.data.ok;
      if (res == true) {
        var userExist = response.data.save;
        $scope.user = [];
        $scope.user.push({
          name: userExist.nombre,
          id: userExist._id,
          email: userExist.email
        })
        var users_x = JSON.stringify($scope.user[0]);
        cookie.set("session-exist", users_x, 1);
        swal("Bien !", "Te has registrado correctamente ", "success");
        // location.href = "/";
      } else {
        swal("Error!", "Intentalo nuevamente", "error");
      }
      // console.log(response)
    })
  }

  $scope.close_session = function () {
    cookie.delete("session-exist");
    location.href = "/";
  }

  function countShoppingCart(dataUser) {
    var dataUser = {
      id_usuario: dataUser.id
    }
    Dataservice.GetShoppingCart(dataUser).then(function (response) {
      countShoping = response.data.save.length
      $scope.countShopping = countShoping;
    })
  }

  $scope.loadShoppingCart = function (){
    location.href = "/shopping-cart";
  }


  function viewMyCourses(dataUser) {
    var dataAccess = {
      id_usuario: dataUser.id
    }
    // console.log(dataAccess)
    $http.post(FindMycourses, dataAccess).then(function (response) {
      var res = response.data.ok;
      if (res == true) {
        $scope.countMycourses =response.data.save.length;
        // SelectMyCourses(courses);
      }
    })
  }
  Func_access()
}]);