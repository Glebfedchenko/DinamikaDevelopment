var app = angular.module('plunker', []);

app.directive('dialogBox', function () {
  return {
    restrict: 'A',
    replace: false,
    priority: 1,
    link: function (scope, elem, attr) {
      var p = elem;
      alert(p[0].innerHTML);
    }
  }
});

