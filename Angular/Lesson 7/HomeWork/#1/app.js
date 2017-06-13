var app = angular.module('app',[]);
app.controller ('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


    $scope.people = [
        {name: 'Vasya', age: 20, email: 'vasya@mail.ru', employed: false},
        {name: 'Masha', age: 25, email: 'm@m', employed: true},
        {name: 'Petya', age: 27, email: 'petya@stuff', employed: true},
        {name: 'John', age: 36, email: 'johnDoe@mail', employed: true},
        {name: 'Jane', age: 28, email: 'janeDoe@mail', employed: false}
    ]

}
app.directive ('dir', dir);


function dir() {
    a = {
        restict: "E",
        link: function (scope, elem, attr) {


            var items = scope.people;

            var tableElem = angular.element ('<table class="table">');
            var tableHeadElem = angular.element ('<thead>');
            var tableHeadersElem = tableHeadElem.append ('<tr class="bg-primary"> <th>#</th> <th>Name</th> <th>Age</th> <th>Email</th> </tr>');
            var tableBodyElem = angular.element ('<tbody>');


            for (var i = 0; i < items.length; i++) {

                var row = angular.element('<tr>');

                row.append(angular.element('<td>').text(i+1));
                row.append(angular.element('<td>').text(items[i].name));
                row.append(angular.element('<td>').text(items[i].age));
                row.append(angular.element('<td>').text(items[i].email));
                tableBodyElem.append(row);
            }

            tableElem.append (tableHeadersElem).append(tableBodyElem);
            elem.append (tableElem);


        },
        replace: true,

    };
    return a;

}


