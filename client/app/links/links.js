angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // $injector(['shortly.services']);
  $scope.data = {};
  $scope.getLinks = function(){
    //get links from mongodb
    //callback will set data array equal to links from db
    Links.getLinks().then(function(data){
      $scope.data.links = data;
    });

  };
  $scope.getLinks();

});
