angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', ['$scope', '$location', '$http', 'Links', function ($scope, $location, $http, Links) {
  $scope.link = "";
  $scope.addLink = function(){
    Links.addLink($scope.link);
    $scope.link = "";
  };

  //do we need this invokation? i think not...
  //$scope.addLink();


  // Your code here
}]);
