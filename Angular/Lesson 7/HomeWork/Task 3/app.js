var myModule = angular.module('myModule',['ngRoute']);

myModule.controller ('MainCtrl', MainCtrl);
myModule.controller ('SecondCtrl', SecondCtrl);
myModule.directive('myTag',myTag);
myModule.config (Routes);

function myTag() {
    ddo = {
        restict: 'E',
        templateUrl:'./Templates/li.html',
        scope:false,
        replace: true
    };
    return ddo;

}

Routes.$inject = ['$routeProvider'];
function Routes($routeProvider) {
    $routeProvider.when('/views/:index', { template: '<h4>{{itemPrice}}</h4>', controller: SecondCtrl });

}
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


    $scope.items = [
        {
            id: '1',
            name: 'SEMGA',
            description: 'FISH'
        },
        {
            id: '2',
            name: 'BEAR',
            description: 'MAMMAL'
        },
        {
            id: '3',
            name: 'EAGLE',
            description: 'BIRD'
        },
    ]


}
SecondCtrl.$inject = ['$scope', '$route', '$routeParams'];
function SecondCtrl($scope, $route, $routeParams) {

    $scope.itemPrice = $scope.items[$routeParams.index].description;
}