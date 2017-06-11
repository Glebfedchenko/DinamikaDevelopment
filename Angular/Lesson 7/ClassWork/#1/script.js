var app = angular.module('app', []);
app.directive('list', function () {
    return function (scope, element, attributes) {
        var atttributeValue = attributes['list'];
        var data = scope[atttributeValue];

        if (angular.isArray(data)) {
            var e = angular.element('<ol>');
            element.append(e);
            for (var i = 0; i < data.length; i++) {
                e.append(angular.element('<li>').text(data[i].element));
            }
        }
    }
})

app.controller('mainCtrl', function ($scope) {
    $scope.items = [
        { element: 'H2' },
        { element: 'CO2' },
        { element: 'H2SO4' },
        { element: 'C2H5OH' }
    ]
});
