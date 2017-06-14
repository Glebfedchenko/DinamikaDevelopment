var myModule = angular.module('myModule',[]);

myModule.controller ('MainCtrl', MainCtrl);
myModule.controller ('firstDirectiveCtrl', myTagCtrl);
myModule.directive ('myTag', myTag);
myModule.directive ('priceShow', priceShow);

function myTag() {
    ddo = {
        restict: 'E',
        templateUrl: 'template.html',
        scope: {items:'='},
        replace: true,
        controller: 'firstDirectiveCtrl',
        controllerAs: 'TagCtrl'
    };
    return ddo;
}

function priceShow() {
    ddo = {
        restict: 'A',

        require: '^myTag',
        replace: true,
        link: function (scope, elem, attr, myCtrl) {
            scope.localPrice = myCtrl.price;
            scope.$watch(
                function(){
                    return myCtrl.price;
                },
                function(newVal){
                    if (newVal){
                        scope.localPrice = newVal;
                        var priceElem = angular.element(document.querySelector("#priceElemenet"));
                        priceElem.text(newVal);
                    }
                });
            var wellElem = angular.element ('<div class="well-lg">');
            var divElem = angular.element ('<div id="priceElemenet" class="alert alert-success" ng-if="price">').text (scope.localPrice);
            wellElem.append(divElem);
            elem.append (wellElem);
        }
    };
    return ddo;
}

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


    $scope.items = [

        {name: "Table", price: 44.10},
        {name: "Chair", price: 21.20},
        {name: "Pillow", price: 12.20},
        {name: "Picture", price: 112.70},
        {name: "Lamp", price: 28.31}
    ]
}

myTagCtrl.$inject = ['$scope'];
function myTagCtrl($scope) {
    var TagCtrl = this;

    TagCtrl.price = 'Here the price will be shown';

    TagCtrl.showPrice = function (index) {
        TagCtrl.price = $scope.items[index].price;
        return TagCtrl.price
    }
}
