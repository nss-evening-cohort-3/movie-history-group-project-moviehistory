app.controller("MovieNavCtrl", function($scope, $routeParams, MovieFactory){

  $scope.listItems = {};
  $scope.hideFire = true;
  $scope.hideFirebase = true;

  $scope.toWatch = function() {
    $scope.listItems = {};
    MovieFactory.getFirebaseMovies().then(function(stuff) {
    $scope.hideFire = false;
    $scope.listItems = stuff;
  })
  }
  $scope.watched = function() {
    $scope.listItems = {};
    MovieFactory.getFirebaseMovies().then(function(stuff) {
    $scope.hideFire = false;
    $scope.listItems = stuff;
  })
  }
	// this fuction uses the factory to get the movies from the API url and then attaches them to a variable called "stuff" which holds all of the object data. You then attached "stuff" to the listItems empty object to make available to the partial html files in order to go through them and put on the DOM. 
	$scope.search = function(title) {
    $scope.listItems = {};
    $scope.hideFire = true;
    MovieFactory.getMovies(title).then(function(stuff) {
      $scope.listItems = stuff.Search;
      console.log("stuff", stuff);
    })
  }
  $scope.addToFirebase = function(movie) {
    console.log(movie)
    MovieFactory.addToFire(movie).then(function() {
      $scope.hideFirebase = false
    })
  }
  $scope.deleteFromFire = function(id) {
    MovieFactory.deleteFromFirebase(id).then(function() {
      $scope.toWatch()
    })
  }
})