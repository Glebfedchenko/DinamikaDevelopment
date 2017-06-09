var app = angular.module('app', []);

app.controller('mainCtrl', function($scope, $interpolate){

var example = 'Hello my name is {{name}}';
var data = {name:'<strong>Ivan</strong>',};


$scope.do = function(){
    var a = $interpolate(example);
    $scope.output = a(data);
};

});