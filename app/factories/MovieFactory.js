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
		let movie = [];
		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}.json`)
			.success(
				function(movies){
					Object.keys(movie).forEach(function(key) {
	          movie[key].id = key;
	          movies.push(movie[key]);
	        });
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
			$http.post(`${firebaseURL}.json`, JSON.stringify({
				Title: movie.Title,
				Year: movie.Year,
				Poster: movie.Poster,
				Stars: null,
				uid: movie.uid}))
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


