app.controller("view-courses", ['$scope', '$http', function ($scope, $http) {
  let {
    url
  } = plugdo;

  if (url.qs.length > 0) {
    //  console.log(url.qs)
    var data = {
      id: url.qs.courses
    }
    getDataCourse(data);
  }

  function getDataCourse(data) {
    $http.post(getCourse, data).then(function (response) {
      console.log(response.data.save)
      $scope.dataCourse = response.data.save[0];
    })
  }
}])