var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'view1.html'
    });
    $routeProvider.when('/view2', {
        templateUrl: 'view2.html'
    });
    $routeProvider.otherwise({
        templateUrl:'view1.html'
    });
});