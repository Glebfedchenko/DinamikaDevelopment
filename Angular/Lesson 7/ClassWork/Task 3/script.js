var app = angular.module('app', []);
app.directive('example', function () {
  return {
    restrict: "A",
    templateUrl: 'template.html'
  };
});

app.controller('mainCtrl', function ($scope) {
  $scope.nameRegEx = /(.*[a-z]){3,}/i;
  $scope.userLoginRegEx = /(.*[a-z]){3,}/i;
  $scope.userPassRegEx = /[a-zA-Z0-9]{6,}/;
  $scope.userEmailRegEx = /[a-zA-Z0-9]{6,}/;

  $scope.submitBtnClass = "btn-default";


  $scope.newUser = {
    userName: "",
    userEmail: "",
    userlogin: "",
    userPassword: ""
  };

  $scope.submitUserForm = function (valid) {
    if (valid) {
      $scope.message = "We sent link to your e-mail. Please follow the link to activate your account";
    }
  };

});
