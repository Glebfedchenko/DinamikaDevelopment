var app = angular.module('app', [])
.controller('mainCtrl',function($scope,$parse){
    $scope.calc = '';
    const calculator = {x1:'',x2:''};
    
    $scope.parseCalc = function(){
        var fn = $parse($scope.calc);
        $scope.result = fn(calculator);
    }


});