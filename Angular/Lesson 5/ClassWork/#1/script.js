var app = angular.module('app', [])
    .controller('mainCtrl',function($scope,$parse){
        $scope.result = '';
        $scope.res = '100+1';
        $scope.calculate = function(){
            var res = $parse($scope.expr);
            $parse.result=res($scope.expr)
        };
    });