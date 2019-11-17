app.controller('My-courses', ['$scope', '$http', 'Dataservice', function ($scope, $http, Dataservice) {
  var {
    cookie
  } = plugdo;
  $scope.user = [];
  $scope.sessionStart = true;
  $scope.userActive = true;
  var cookie_sessionExist = cookie.get("session-exist");
  $scope.dataList = [];
  function Func_access() {
    if (cookie_sessionExist != "") {
      var dataUser = JSON.parse(cookie_sessionExist);
      $scope.name = dataUser.name;
      // console.log($scope.name)
      $scope.sessionStart = true;
      $scope.userActive = false;
      viewMyCourses(dataUser);
    } else {
      if ($scope.user != "") {
        // console.log($scope.user);
        $scope.sessionStart = true;
        $scope.userActive = false;
        $scope.name = $scope.user[0].name;
        var dataUser = $scope.user[0];
        viewMyCourses(dataUser);
     } else {
        $scope.sessionStart = false;
        $scope.userActive = true;
      }
    }
  }

  function viewMyCourses(dataUser) {
    var dataAccess = {
      id_usuario: dataUser.id
    }
    // console.log(dataAccess)
    $http.post(FindMycourses, dataAccess).then(function (response) {
      var res = response.data.ok;     
      if (res == true) {
        var courses = response.data.save;
        SelectMyCourses(courses);
      }
    })
  }

  function SelectMyCourses(courses) {
    // console.log(courses)

    for (const key in courses) {
      var selectCourses = {
        id_Curso: courses[key].id_Curso
      }
      sendSelect(selectCourses)
    }
  }

  function sendSelect(selectCourses) {
    $http.post(MycoursesList, selectCourses).then(function (response) {
      var res = response.data.ok;
      if (res == true) {
        var dataList_x = response.data.save[0]
        $scope.dataList.push(dataList_x)     
        console.log($scope.dataList)
      }
    })
  }
  Func_access()
}]);