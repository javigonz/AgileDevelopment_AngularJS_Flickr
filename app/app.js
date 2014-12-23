
/*#######################################################################

  Init App

  #######################################################################*/


(function () {
  'use strict';


  angular
    .module('flickrApp', ['ngRoute', ,'ngResource', 'flickrApp.controllers', 'flickrApp.provider'])
    .config(config);


  function config ($locationProvider, $routeProvider, FlickrProvider) {

    //Config init params of Provider, this is a public ApiKey
    FlickrProvider.setApiKey('6c67ac42519cfe25a38ff0cce1704139');

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        controller: 'PhotosController',
        templateUrl: '/app/partials/photos.html'
      })
      .otherwise ({ redirectTo: '/'});
  }

})();




