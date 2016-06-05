app.factory("MovieFactory", function($q, $http, APIURL){
	var getMovies = function (movie) {
		return $q(function(resolve, reject){
			$http.get(`${APIURL}s="${movie}"`)
			.success(
				function(movies){
				resolve(movies)
			},	function(error){
				reject(error)
		});
	});
	}
	return{ getMovies:getMovies}
});