var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
   
    $scope.animals=  [
       {name:'dog' },
       {name:'cat'  },
       {name:'frog'  },
       {name:'chinchilla'  }
     ]

    $scope.search=function(){
        $scope.searchQuery = angular.copy($scope.query);
        $scope.animalsToFilter=$scope.animals;
        $scope.searchReasult=true;

    }

});