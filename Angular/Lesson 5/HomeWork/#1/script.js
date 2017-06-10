angular.module('app', [])
    .controller('mainCtrl', ['$scope', '$interval',
      function($scope, $interval) {
        $scope.timer = 0;
        var stop;
        $scope.start = function(){
            if(angular.isDefined(stop)) return;

            stop = $interval(function(){
                if($scope.timer >=0){
                    $scope.timer +=1;
                } else {
                    $scope.stopTimer();
                }
            },100);
        }

        $scope.stopTimer = function(){
            if(angular.isDefined(stop)){
                $interval.cancel(stop);
                stop = undefined;
            }
        };

        $scope.reset = function(){
            $scope.timer = 0;
        };

      }]);