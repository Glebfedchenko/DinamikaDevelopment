var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {
  $scope.getItems = function() {
    var promise = $http.get("prices.json"); 
    promise.then(fulfilled, rejected).then(fulfilled, rejected);
  };

  function fulfilled(response) {
    console.log("Status: " + response.status);
    console.log("Type: " + response.headers("content-type"));
    console.log("Length: " + response.headers("content-length"));
    $scope.items = response.data;
  }

  function rejected(error) {
    console.error(error.status);
    console.error(error.statusText);
  }
});