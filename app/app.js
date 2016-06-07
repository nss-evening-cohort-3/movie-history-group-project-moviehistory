var app = angular.module('MovieHistory', ["ngRoute"])

  	.constant("firebaseURL", "https://moviehistory07.firebaseio.com/")
	.constant("APIURL", "http://www.omdbapi.com/?")

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    console.log("User is authenticated now, resolve route Promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route Promise");
    reject();
  }
})

app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/login.html',
    controller: "LoginCtrl"
  }).
  when('/movie/search', {
  	templateUrl: 'partials/movie-search.html',
  	controller: "MovieNavCtrl",
  	resolve: {isAuth}
  }).
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: "LoginCtrl"
  }).
  when('/logout', {
    templateUrl: 'partials/login.html',
    controller: "LoginCtrl"
  }).
otherwise('/')
})
