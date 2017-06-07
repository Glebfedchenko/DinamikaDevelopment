var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {

    $scope.nameUrl = 'partials/name.html';
    $scope.priceUrl = '';
    $scope.categoryUrl = '';
    $scope.countUrl = '';
    $scope.taxUrl = '';
    $scope.expirationUrl = '';
    $scope.items = [
        { name: "B Item", price: 10.9, category: "Category 1", count: 10, tax: 1.12, expiration: 10 },
        { name: "A Item", price: 1.1, category: "Category 1", count: 8, tax: 0.55, expiration: 12 },
        { name: "D Item", price: 2.6, category: "Category 2", count: 7, tax: 0.22, expiration: 5 },
        { name: "C Item", price: 17.5, category: "Category 2", count: 33, tax: 2.77, expiration: 10 }];
    $scope.showName = function () {
        $scope.nameUrl = 'partials/name.html';
    };
    $scope.showPrice = function () {
        $scope.priceUrl = 'partials/price.html';
    };
    $scope.showCat = function () {
        $scope.categoryUrl = 'partials/category.html';
    };
    $scope.showCount = function () {
        $scope.countUrl = 'partials/count.html';
    };
    $scope.showTax = function () {
        $scope.taxUrl = 'partials/tax.html';
    };
    $scope.showExp = function () {
        $scope.expirationUrl = 'partials/expiration.html';
    };
});

