var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.text = "";

    $scope.addText = function(){
        $scope.withText = $scope.text;
    }

});