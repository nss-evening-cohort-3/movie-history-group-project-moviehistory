app.controller("MovieSearchCtrl", ($scope, $routeParams, GetAPI) => {
	console.log($routeParams.movie);
	GetAPI.getMovies($routeParams.movie).then(function(something){
		console.log(something);
	})

})