var app = angular.module('plunker', []);
app.controller('MainCtrl', function($scope) {

});

app.directive('dialogBox', function() {
      return {
        restrict: 'A',
        replace: false,
        priority: 1,
        link: function(scope, elem, attr) {
          var p = elem;
          alert(parent[0].innerHTML);
        }
      }
    }
