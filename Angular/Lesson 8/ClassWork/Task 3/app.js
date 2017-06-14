var app = angular.module('app', []);
app.directive('customDirective', function () {
    return {
        restrict: 'A',
        transclude: true,
        template: '<div><button class="btn btn-danger"><ng-transclude></ng-transclude></button></div>',
    }
});
