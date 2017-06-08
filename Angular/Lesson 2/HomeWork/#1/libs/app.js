var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.operation = function (button) {
        $scope.selectOperation = button;
    };

    $scope.result = 0;

    $scope.calculateResult = function () {

        const numb1 = parseInt(this.val1);
        const numb2 = parseInt(this.val2);

        if ($scope.selectOperation === '*') {
            $scope.result = numb1 * numb2;
        } else if ($scope.selectOperation === '-') {
            $scope.result = numb1 - numb2;
        } else if ($scope.selectOperation === '+') {
            $scope.result = numb1 + numb2;
        } else if ($scope.selectOperation === '/') {
            $scope.result = numb1 / numb2;
        }
    };
});