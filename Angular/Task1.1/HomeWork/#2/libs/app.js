var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    var tasks = [
        {
            name: 'To do homework',
            descr: 'To make homework done',
            date: new Date('January 15 2017'),
            completed: true
        }];

    $scope.tasks = tasks;

    $scope.addTask = function () {
        $scope.tasks.push({
            name: $scope.newName,
            descr: $scope.newDescr,
            date: $scope.newDate,
            completed: $scope.newCompleted
        });

        $scope.newName = '';
        $scope.newDescr = '';
        $scope.newDate = '';
        $scope.newCompleted = false;

    }

    $scope.showCompleted = function (completed) {
        return completed ? "Yes" : "No";
    }

    $scope.editTask = function (index) {
        $scope.changeIndex = index;
        $scope.editMode = true;
        $scope.inputName = $scope.tasks[index].name;
        $scope.inputDesctiption = $scope.tasks[index].descr;
        $scope.inputDueDate = $scope.tasks[index].date;
        $scope.inputCompleted = $scope.tasks[index].completed;
    }
    $scope.clickSave = function () {
        $scope.tasks[$scope.changeIndex].name = $scope.newName;
        $scope.tasks[$scope.changeIndex].description = $scope.newDescr;
        $scope.tasks[$scope.changeIndex].duedate = $scope.newDate;
        $scope.tasks[$scope.changeIndex].completed = $scope.newCompleted;
        $scope.changeIndex = -1;
        $scope.editMode = false;
        $scope.newName = "";
        $scope.newDescr = "";
        $scope.newDate = "";
        $scope.newCompleted = "";
    }
});