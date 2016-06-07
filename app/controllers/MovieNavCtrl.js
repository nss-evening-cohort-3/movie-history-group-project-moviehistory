app.controller("MovieNavCtrl", function($scope, $routeParams, MovieFactory){

$scope.listItems = {

}

	// this fuction uses the factory to get the movies from the API url and then attaches them to a variable called "stuff" which holds all of the object data. You then attached "stuff" to the listItems empty object to make available to the partial html files in order to go through them and put on the DOM. 
	$scope.search = function(title) {
    MovieFactory.getMovies(title).then(function(stuff) {
      $scope.listItems = stuff;
      console.log("stuff", stuff);
    })
  }

})