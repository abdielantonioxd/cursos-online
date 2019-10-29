app.controller('ctrl-inicio-session', ['$scope', '$http', function ($scope, $http) {

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
        swal("Bien !", "Te has registrado correctamente ", "success");
      }else{
        swal("Error!", "Intentalo nuevamente", "error");
      }
    })
  }

}]);