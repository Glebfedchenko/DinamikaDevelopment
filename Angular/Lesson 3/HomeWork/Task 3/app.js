var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {

    $scope.getError = function(error){
        if(angular.isDefined(error)){
            if(error.required){
                return "Field doesn't have to be empty";
            }
        }
    }

    $scope.mailGetError = function (error) {
        if (angular.isDefined(error)) {
            if (error.required) {
                return "Field doesn't have to be empty";
            } else if (error.email) {
                return "Enter correct E-mail";
            }
        }
    }

    $scope.nameRegexp = /(.*[a-z]){3,}/i;
    $scope.passwordRegexp = /[a-zA-Z0-9]{5,}/;

    $scope.valid = false;
    $scope.changepass = function(){
        var regexp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&]{8,12}$/;
        if(regexp.test($scope.password)==false){
            $scope.passvalidation = false;
        } else{
            $scope.passvalidation=true;
        }
    };
$scope.onFormSubmit = function (valid) {
        if (valid) {
            $scope.message = "Form Submitted";
        }
    };
});