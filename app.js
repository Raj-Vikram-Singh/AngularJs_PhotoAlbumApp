var photoApp = angular.module('myApp', ["ngRoute"]);
	
photoApp.config(function($routeProvider){

	$routeProvider
		.when("/albums", {controller: "AlbumListController", templateUrl: "/Views/album_list_partial.html"})
		.when("/album/:album_name", {controller: "AlbumViewController", templateUrl: "/Views/album_view_partial.html"})
		.when("/album/:album_name/Photos/:photo_name" , {controller:"PhotoViewController", templateUrl: "/Views/photo_view_partial.html"})
		.when("/", {redirectTo : "/albums"})
		.otherwise({ redirectTo: "/404_page" });

});


