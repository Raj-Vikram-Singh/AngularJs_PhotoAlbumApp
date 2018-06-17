    photoApp.service("albumProvider", function($http) {

       

   this.getAlbums = function(response){
     $http.get("./data/data.json").then(response);
    
   };
   
 
    this.addAlbum = function(new_Albums){
        albums.push(JSON.parse(JSON.stringify(new_Albums)));
         };

   this.getAlbumByName = function(response){
      $http.get("./data/data.json").then(response);
   };

   });


