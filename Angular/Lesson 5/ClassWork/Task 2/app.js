var app = angular.module('app', ["ngSanitize"]);

app.controller('mainCtrl', function ($scope, $interpolate) {

    var example = 'Hello my name is {{name}}';
    var data = { name: '<strong>Ivan</strong>', };


    $scope.sentence = $interpolate(example)(data);
});