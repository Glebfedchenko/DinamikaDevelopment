var app = angular.module('app', []);

app.factory('mainFact', function(){
    var mainFact={};
    var counter = 1;
    mainFact.generate = function(){
        console.log('Button clicked' + ' '+ counter);
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
