var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {

    $scope.q1 = 'Q1.html';
    $scope.q2 = 'Q2.html';
    $scope.q3 = 'Q3.html';
    $scope.q4 = 'Q4.html';
    $scope.q5 = 'Q5.html';

    $scope.url1 = $scope.q1;
});