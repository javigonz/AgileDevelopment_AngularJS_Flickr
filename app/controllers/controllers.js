/*#######################################################################

  Controllers

  #######################################################################*/


(function () {
  'use strict';


  angular
    .module('flickrApp.controllers', ['flickrApp.provider'])
    .controller('PhotosController', PhotosController);


  function PhotosController ($scope, Flickr) {
  
    Flickr.getPublicFeed()
        .then(function(data) 
        {
            $scope.photos = data.data.items;
        });

  }

})();
