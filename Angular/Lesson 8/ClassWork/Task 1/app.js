var app = angular.module('app', []);
app.directive('myDir',function(){
    return {
        restrict:'E',
        templateUrl:'template.html',
        controller:'mainCtrl'
    }
});

app.controller('mainCtrl',function($scope, $interval){
    $scope.counter = 0;
var interval;
    $scope.start = function(){
        interval = $interval(function(){
            $scope.counter++;
        },1000) 
    }
})

