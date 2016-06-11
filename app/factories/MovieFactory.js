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
		let itemList = [];
		return $q(function(resolve, reject){
			$http.get(`${firebaseURL}.json?orderBy="uid"&equalTo="${user.uid}"`)
			.success(function(items) {
          Object.keys(items).forEach(function(key) {
            items[key].id = key;
            itemList.push(items[key]);
          });
          resolve(itemList);
        }).error(function(error){
        reject(error);
        });
    });
  };
	var addToFire = function(movie) {
		let user = AuthFactory.getUser();
		movie.uid = user.uid
		return $q(function(resolve, reject){
			$http.post(`${firebaseURL}.json`, JSON.stringify({
				Title: movie.Title,
				Year: movie.Year,
				Poster: movie.Poster,
				Stars: 0,
        isWatched: false,
				uid: movie.uid}))
			.success(
				function(movies){
				resolve(movies)
			},	function(error){
				reject(error)
		});
	});
	}
	var deleteFromFirebase = function(id) {
		return $q(function(resolve, reject) {
      $http.delete(`${firebaseURL}${id}.json`)
        .success(function(thingy) {
          resolve(thingy);
        });
    });
	}
  var isWatched = function(movie) {
    return $q(function(resolve, reject){
      $http.put(`${firebaseURL}${movie.id}.json`, JSON.stringify(movie))
      .success(
        function(movies){
        resolve(movies)
      },  function(error){
        reject(error)
    });
  });
  }

	return{ getMovies:getMovies, getFirebaseMovies:getFirebaseMovies, addToFire:addToFire, deleteFromFirebase:deleteFromFirebase, isWatched:isWatched}
});


