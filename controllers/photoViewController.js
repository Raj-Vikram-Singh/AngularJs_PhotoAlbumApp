photoApp.controller("PhotoViewController", function ($scope,  $routeParams, $location) {
	$scope.album_name = $routeParams.album_name;

	$scope.photo= $routeParams.photo_name;

	$scope.home =function()
	{
	$location.path("/albums");
							};

	$scope.album =function()
	{
	$location.path("/album/" + $scope.album_name);
							};
});