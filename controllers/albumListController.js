
	photoApp.controller('AlbumListController',function($scope, albumProvider){


		albumProvider.getAlbums(function(response){
		$scope.myAlbums = response.data;	
		});

		$scope.error_message = '';
		$scope.adding_Album= {};



		$scope.addAlbums = function(new_Albums){
			var form = document.getElementById("newAlbumForm");
			if(!new_Albums.title){
				$scope.error_message = "Please Enter a Valid title.";
				document.getElementById("newAlbumForm").title.focus();
			}
			else if(!new_Albums.date || !validDate(new_Albums.date)){
				$scope.error_message = "You must specify a valid date (yyyy/mm/dd)";
				document.getElementById("newAlbumForm").date.focus();
			}
			else if(!new_Albums.description){
				$scope.error_message = "Please Enter a Valid description.";
				document.getElementById("description").focus();
			}
			else if(!new_Albums.name){
				$scope.error_message = "Please Enter a Valid short name.";
				document.getElementById("name").focus();
			}

			else{
			$scope.myAlbums.push(JSON.parse(JSON.stringify(new_Albums)));
			$scope.adding_Album= {};
			$scope.error_message = '';
			}

			
			}
		


			});

	function validDate(input){
				if(input.match(/[0-9]{4,4}[/\-. ,]+[0-9]{2,2}[/\-. ,]+[0-9]{2,2}/)){
					var d = new Date(input);
					return !isNaN(d.getTime());
					
				}
				
				else{
					return false;
				}
			}


