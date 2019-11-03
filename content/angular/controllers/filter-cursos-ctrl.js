app.controller("filter-cursos", ['$scope', '$http', function ($scope, $http) {
  $scope.categorias = "";

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
    })
  }

  loadDataCategories();
  dataCourses();
}])