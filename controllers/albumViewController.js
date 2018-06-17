photoApp.controller("AlbumViewController", function($scope, $routeParams, albumProvider, $location) {

	$scope.album_name = $routeParams.album_name;	
	albumProvider.getAlbumByName(function(response){

		var data = response.data;

    for(i= 0 ; i < data.length ; i++){
       if (data[i].name == $routeParams.album_name)
       $scope.photos = JSON.parse(JSON.stringify(data[i].photos))
    
  }
		
	});

	$scope.home =function()
	{
	$location.path("/albums");
							};
	
	
});