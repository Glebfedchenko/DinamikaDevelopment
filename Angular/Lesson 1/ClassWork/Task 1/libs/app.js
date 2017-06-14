var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.m = 'Hello World';

    $scope.show = function () {
        var output = document.getElementById('output');
        output.innerHTML = 'Hello, ' + a.name;
    }


});