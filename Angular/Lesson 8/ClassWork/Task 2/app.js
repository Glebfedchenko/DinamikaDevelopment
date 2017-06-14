var app = angular.module('app', []);
app.directive('myDir', function () {
    return {
        restrict: 'E',
        templateUrl: 'template.html',
        controller: 'mainCtrl'
    }
});

app.directive('myAdDir', function () {
    return {
        restrict: 'A',
        require: 'myDir',
        link: function (scope, el, attr, mainCtrl) {
            console.log('counter = ', scope.counter);
        }
    }
});

app.controller('mainCtrl', function ($scope, $interval) {
    $scope.counter = 0;
    var interval;
    $scope.start = function () {
        interval = $interval(function () {
            $scope.counter++;
            console.log('counter', $scope.counter);
        }, 1000)
    }
})

