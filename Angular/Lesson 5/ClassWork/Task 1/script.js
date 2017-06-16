var app = angular.module('app', [])
    .controller('mainCtrl', function ($scope, $parse) {
        $scope.calc = '';
        const calculator = { x1: '', x2: '' };

        $scope.parseCalc = function () {
            var fn = $parse($scope.calc);
            $scope.result = fn(calculator);
            if ($scope.result === Infinity) {
                alert('Divizion By Zero is impossible');
            }
            if ($scope.result === NaN) {
                alert('Enter a correct number');
            }
        }
    });