app.factory("GetAPI", ($q, $http, APIURL) => {
	var getMovies = (movieName) => {
		return $q(function(resolve, reject){
			$http.get(`${APIURL}s="${movieName}"`)
			.success(function(item){
				console.log(item);
				resolve(item)
			})
		})
	}
	
	return {getMovies:getMovies}
})