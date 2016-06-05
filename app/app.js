var app = angular.module("MovieHistory", ["ngRoute"])

	.constant("FirebaseURL", "https://moviehistory07.firebaseio.com/")
	.constant("APIURL", "http://www.omdbapi.com/?")

app.config(function($routeProvider){
	$routeProvider.
		when('/',{
      		templateUrl: 'partials/movie-nav.html',
     		controller: 'MovieNavCtrl'
      }).
    	otherwise('/')
})
