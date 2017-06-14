var myModule = angular.module('myModule',[]);
myModule.controller ('MainCtrl', MainCtrl);
myModule.directive ('myTag', myTag);

function myTag() {
    ddo = {
        restict: 'A',
        templateUrl:'./Templates/table.html',
        scope:{items:'='},
        replace: true
    };
    return ddo;

}

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope ) {


    $scope.items = [
        {
            id: '1',
            header: 'SEMGA',
            text: 'FISH'
        },
        {
            id: '2',
            header: 'BEAR',
            text: 'MAMMAL'
        },
        {
            id: '3',
            header: 'EAGLE',
            text: 'BIRD'
        }
    ];


}