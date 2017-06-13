var app = angular.module('app', []);
app.controller('MainCtrl', MainCtrl);
app.directive('dir', dir);

function dir() {
    a = {
        restict: 'A',
        templateUrl: './Templates/table.html',
        scope: { items: '=' },
        replace: true
    };
    return a;

}

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


    $scope.animals = [
        {
            name: 'Elephant',
            strength: 'Low',
            descr: 'Lives in the zoo'
        },
        {
            name: 'Rino',
            strength: 'Big',
            descr: 'Lives in the zoo'
        }
    ];


}