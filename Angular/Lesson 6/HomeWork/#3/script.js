var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: '/index.html',
        controller: 'mainCtrl'
    });

    $routeProvider.when('/contact/:name/:age/:email/:employed', {
        templateUrl: '/contact.html',
        controller:'contactCtrl'
    })
    $routeProvider.otherwise({
        templateUrl: '/home.html'
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

    $scope.go = function (i) {
        var routeParams = $scope.data[i].name + '/' + + $scope.data[i].age + '/' + $scope.data[i].email + '/' + $scope.data[i].employed;
        $location.path('/contact/' + routeParams);
    }
});

app.controller('contactCtrl', function ($scope, $routeParams) {
    if ($routeParams.employed == "true") {
        $scope.bool = true
    } else {
        $scope.bool = false
    }
    $scope.params = {
        name: $routeParams.name,
        age: $routeParams.age,
        email: $routeParams.email,
        employed: $scope.bool
    }
});