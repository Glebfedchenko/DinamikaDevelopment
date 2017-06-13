var app = angular.module('app',['ngRoute']);
app.controller ('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

$scope.animals = [
        {
            name: 'Elephant',
            strength: 'Low',
            descr: 'Lives in the zoo'
        },
        {
            name: 'Rino',
            strength: 'Big',
            descr: 'Lives in the zoo'
        }
    ];

}

app.controller ('NotMainCtrl', NotMainCtrl);

NotMainCtrl.$inject = ['$scope', '$route', '$routeParams'];
function NotMainCtrl($scope, $route, $routeParams) {

    $scope.a = $scope.animals[$routeParams.name].descr;
}

app.directive('dir',dir);

function dir() {
    a = {
        restict: 'E',
        templateUrl:'./Templates/li.html',
        scope:false,
        replace: true
    };
    return a;

}

app.config (Routes);

Routes.$inject = ['$routeProvider'];
function Routes($routeProvider) {
    $routeProvider.when('/views/:index', { template: '<h4>{{strength}}</h4>', controller: NotMainCtrl });

}


