app.factory("MovieFactory", function($q, $http, APIURL, AuthFactory, firebaseURL){
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
	var getFirebaseMovies = function () {
		let user = AuthFactory.getUser();
		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}NAME.json`)
			.success(
				function(movies){
				resolve(movies)
			},	function(error){
				reject(error)
		});
	});
	}
	var addToFire = function(movie) {
		let user = AuthFactory.getUser();
		movie.uid = user.uid
		return $q(function(resolve, reject){
			$http.post(`${firebaseURL}NAME.json`, JSON.stringify(movie))
			.success(
				function(movies){
				resolve(movies)
			},	function(error){
				reject(error)
		});
	});
	}
	return{ getMovies:getMovies, getFirebaseMovies:getFirebaseMovies, addToFire:addToFire}
});


