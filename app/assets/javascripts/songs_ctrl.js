(function(){
  "use strict";

    angular.module("app").controller("songsCtrl", function($scope, $http){

      $http.get('/api/songs').then(function(response) {
        $scope.songs = response.data;
      });

      $scope.forward = false;

      $scope.reverseOrder = function(string){
        $scope.column = string;
        $scope.forward = !$scope.forward;
      }

    });
})();
