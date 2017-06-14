var app = angular.module('plunker', []);
app.controller('MainCtrl',function($scope){
  
});

app.directive('dir', function() {
  return {
    restict: 'A',
    priority: 1,
    replace: true,
    link: function(scope, elem, attr) {

      var ulEl = angular.element('<ul id="unorderedList">');

      for (var i = 0; i < 7; i++) {
        var liEl = angular.element('<li>').text("This is element " + (i + 1));
        ulEl.append(liEl);
      }
    }
  }
});

app.directive('sec', function() {
  restict: 'A',
  priority: 2,
  replace: true,
  link: function(scope, elem, attr) {

    var ulChildrenArr = angular.element(document.querySelector('#unorderedList'))[0].children;

    for (var i = 0; i < ulChildrenArr.length; i++) {
      if (i % 2) {
        angular.element(document.querySelector('#unorderedList'))[0].children[i].className = 'red';
      }

    }

  }
})
