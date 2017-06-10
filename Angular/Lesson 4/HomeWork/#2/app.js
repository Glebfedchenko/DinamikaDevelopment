var toDoModule = angular.module('toDoModule', []);
toDoModule.controller('ToDoCtrl', ToDoCtrl);
toDoModule.service('ServerService', ServerService);


ToDoCtrl.$inject = ['$scope', 'ServerService'];
function ToDoCtrl($scope, ServerService) {

    $scope.itemName = "";
    $scope.itemDescription = "";
    $scope.itemDueDate = "";
    $scope.itemIsCompleted = "";
    $scope.newItemSent = false;

    $scope.items = ServerService.getToDoList();

    $scope.showIsCompleted = function (isCompleted) {

        return isCompleted ? "YES" : "";
    };

    $scope.addNewItem = function () {

        if ($scope.itemName != "" && $scope.itemDescription != "" && $scope.itemDueDate != "") {

            $scope.newItemObj = ServerService.addNewItem($scope.itemName, $scope.itemDescription, $scope.itemDueDate, $scope.itemIsCompleted);

            $scope.newItemSent = true;

        }
    }


}

ServerService.$inject = ['$http'];
function ServerService($http) {
    var service = this;

    var defaultList = [
        {
            name: 'DO SOMETHING',
            description: 'DO SOMETHING USEFULL',
            dueDate: '2/18/2015',
            completed: false
        },
        {
            name: 'DO SOME AngularJS',
            description: 'BE ANGULAR GURU',
            dueDate: '2/18/2015',
            completed: false
        }
    ];

    service.toDoList = defaultList;

    service.getToDoList = function () {
        return service.toDoList;
    };

    service.addNewItem = function (itemName, itemDescription, itemDueDate, itemIsCompleted) {

        var obj = {};

        obj.name = itemName;
        obj.description = itemDescription;
        obj.dueDate = itemDueDate;
        obj.completed = itemIsCompleted;

        service.toDoList.push(obj);

        service.postNewListItem(obj);

        return obj;


    };

    service.postNewListItem = function (newItem) {

        var url = 'some-server.com';
        var data = newItem;
        var config = {
            headers: {
                "content-type": "application/json"
            }
        };

        $http.post(url, data, config).then((success) => {
            "use strict";
            console.log('Post Data Submitted Successfully!');
            return 'Post Data Submitted Successfully!';
        }, (err) => {
            "use strict";

            console.log("Service not Exists. Status: ", err.status + ' ' + err.statusText);

        })


    }


}