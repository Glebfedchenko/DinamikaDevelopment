var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
$locationProvider.html5Mode({
  enabled: true,
  requireBase: true
});


    $routeProvider.when('/', {
        templateUrl: './Templates/home.html',
        controller: 'mainCtrl'
    });
    $routeProvider.when('/contact', {
        templateUrl: './Templates/contact.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});


app.controller('mainCtrl', function ($scope) {
    $scope.data = [
        { name: 'Vasya', age: 20, email: 'vasya@mail.ru', employed: false },
        { name: 'Masha', age: 25, email: 'm@m', employed: true },
        { name: 'Petya', age: 27, email: 'petya@stuff', employed: true },
        { name: 'John', age: 36, email: 'johnDoe@mail', employed: true },
        { name: 'Jane', age: 28, email: 'janeDoe@mail', employed: false }
    ];
});