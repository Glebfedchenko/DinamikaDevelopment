var app = angular.module('app', []);

app.factory('mainFact', function(){
    var mainFact={};
    var counter = 0;
    mainFact.generate = function(){
        return counter++;
    };
    return mainFact;
})


app.controller('mainCtrl', function ($scope, mainFact) {
    $scope.totalClicks = 0;
    $scope.clicker = function(){
        $scope.totalClicks = mainFact.generate();
    }
});
