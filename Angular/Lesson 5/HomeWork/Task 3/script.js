angular.module('app', ['duScroll']).
    controller('mainCtrl', function ($scope, $location, $anchorScroll, $timeout, $document) {

        $scope.data = [
            {
                id: '1',
                header: 'Fish',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '2',
                header: 'Cheese',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '3',
                header: 'Meat',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '4',
                header: 'Vegetables',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '5',
                header: 'Species',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '6',
                header: 'Water',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '7',
                header: 'Wind',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '8',
                header: 'Oil',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '9',
                header: 'Ground',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '10',
                header: 'Fire',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '11',
                header: 'Tzunami',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
            {
                id: '12',
                header: 'Acid',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda quas quia illo ut, inventore non saepe vitae perferendis tempore et alias officia quis dignissimos commodi, amet quisquam nisi. Aut.'
            },
        ];

        var top = 400;
        var duration = 2000;
        $timeout(function () {
            $location.hash('');
            $anchorScroll();
        });

        $scope.go = function (id) {
            var offset = 30;
            var someElement = angular.element(document.getElementById(id));
            $document.scrollToElement(someElement, offset, duration);

        }
    });