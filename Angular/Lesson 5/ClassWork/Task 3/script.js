var app = angular.module('app', []);
app.controller('mainCtrl', function ($scope) {
    $scope.name = "Ivan";
    $scope.str = "Hello my name is <strong>{{name}}</strong>";
});

app.directive('compile', ['$compile', function ($compile) {
    return function (scope, element, attrs) {
        scope.$watch(
            function (scope) {
                return scope.$eval(attrs.compile);
            },
            function (value) {
                element.html(value);
                $compile(element.contents())(scope);
            }
        );
    };
}])
