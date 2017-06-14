var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: '/home.html'
    });
    $routeProvider.when('/contact', {
        templateUrl: '/contact.html'
    });
    $routeProvider.otherwise({
        templateUrl:'/home.html'
    });
});