angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    alert('this is getLinks');
    //get links from mongodb
    //callback will set data array equal to links from db
    $http.get('/api/links')
      .then(function(response){
        console.log(response.data);
        $scope.data.links = response.data;
      })
      .catch(function(error){
        throw error;
      });

  };
  $scope.getLinks();
  // SHOULD HAVE: .data, .getLinks()
  // contains some logic
  //
});
