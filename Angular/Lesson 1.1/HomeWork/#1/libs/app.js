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
});