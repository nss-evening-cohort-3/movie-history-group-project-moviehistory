var app = angular.module('MovieHistory', ["ngRoute"])

	.constant("APIURL", "http://www.omdbapi.com/?")
	.constant("FirebaseURL", "https://moviehistory07.firebaseio.com/")

app.config(function($routeProvider){
	$routeProvider.
		when('/movie/search/:movie', {
			templateUrl: 'partials/movie-search.html',
			controller: "MovieSearchCtrl"
		}).
		otherwise('/')
});
