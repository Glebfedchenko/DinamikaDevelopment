var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'view1.html'
    });
    $routeProvider.when('view2', {
        templateUrl: 'view2.html'
    });
    $routeProvider.otherwise({
        redirectTo:'/'
    });
});