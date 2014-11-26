angular.module('shortly.services', [])

.factory('Links', function ($http) {
  var getLinks = function(){
    return $http.get('/api/links')
      .then(function(response){
        for(var i in response.data){
          var link = response.data[i];
          link.longURL = 'http://127.0.0.1:3000/api/links/' + link.code;
        }
        return response.data;
      })
      .catch(function(error){
        throw error;
    });
  }

  var addLink = function(link){
    //add links to somewhere
    $http.post('/api/links',JSON.stringify({url:link}))
      .then(function(response){
      })
      .catch(function(error){
        throw error;
      });
  }


  return {
    addLink: addLink,
    getLinks: getLinks
  }
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
