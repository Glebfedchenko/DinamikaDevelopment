var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: './Templates/home.html',
        })
        .when('/contact', {
            templateUrl: './Templates/contact.html',
        })
        .otherwise({
            redirectTo: '/'
        })
});