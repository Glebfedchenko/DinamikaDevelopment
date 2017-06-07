var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
   
    $scope.handleClick = function(){
        $scope.changeClass = 'lightblue border';
    }
});