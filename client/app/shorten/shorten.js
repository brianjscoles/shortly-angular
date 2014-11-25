angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    console.log('this is addlinks in shortencontroller');
    //add links to somewhere
    $http.post('/api/links',$scope.link)
      .then(function(response){
        console.log('RESPONSE FROM POST! ' + response.status);
      })
      .catch(function(error){
        throw error;
      });

  };


  // Your code here
});
