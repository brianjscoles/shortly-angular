angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = "";
  $scope.addLink = function(){
    console.log('this is addlinks in shortencontroller');
    console.log("input value is "+ $scope.link);
    //add links to somewhere
    $http.post('/api/links',JSON.stringify({url:$scope.link}))
      .then(function(response){
        console.log('RESPONSE FROM POST! ' + response.status);
      })
      .catch(function(error){
        throw error;
      });

  };


  // Your code here
});
