angular.module('app', []).
    controller('mainCtrl', function ($scope, $location, $anchorScroll) {
        $scope.scrollTo = function (scrollLocation) {
            $location.hash(scrollLocation);
            $anchorScroll();
        }

        $scope.header = ['Home', 'About', 'Hire','Learn'];
    });
$('.a').locallScroll();