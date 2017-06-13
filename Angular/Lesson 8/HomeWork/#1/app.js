var app = angular.module('app', []);
app.directive('dir', function () {
    return {
        link: function(scope, element, attributes){
            scope.data = scope[attributes['dir']];
        },
        restrict:'E',
        templateUrl:'./template.html'
    }
})
app.controller('mainCtrl', function ($scope) {
    $scope.items = [
        { name: "Table", price: 44.10 },
        { name: "Chair", price: 21.20 },
        { name: "Pillow", price: 12.20 },
        { name: "Picture", price: 112.70 },
        { name: "Lamp", price: 28.31 }
    ];
})