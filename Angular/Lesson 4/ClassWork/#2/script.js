var app = angular.module('app', []);

app.provider('mainProvider', function () {
    var counter = 1;

    return {
        $get: function () {
            return {
                generate: function () {
                    console.log('Button clicked' + ' ' + counter);
                    return counter++;
                }
            }
        }
    }
})

app.controller('mainCtrl', function ($scope, mainProvider) {
    $scope.totalClicks = 0;
    $scope.clicker = function () {
        $scope.totalClicks = mainProvider.generate();
    }
});
