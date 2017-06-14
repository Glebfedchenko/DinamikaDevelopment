var app = angular.module('app', []);
app.directive('example', function() {
  return {
    link: function(scope, element, attributes) {
     
    },
    restrict: "A",
    templateUrl: 'template.html'
  };
});

app.controller('mainCtrl', function ($scope) {
    
});
