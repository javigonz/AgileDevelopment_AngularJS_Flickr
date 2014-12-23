/*#######################################################################

  Provider

  #######################################################################*/


(function () {
  'use strict';

  angular
    .module('flickrApp.provider', [])
    .provider('Flickr', Flickr);

  function Flickr() {
    var base = 'http://api.flickr.com/services',
        api_key = '';

    // Set our API key from the .config section
    // of our app
    this.setApiKey = function(key) {
      api_key = key || api_key;
    }

    // Service interface
    this.$get = function($http) {
      var service = {
        getPublicFeed: function() {
          return $http({
            method: 'JSONP',
            url: base + '/feeds/photos_public.gne?format=json',
            params: {
              'api_key': api_key,
              'jsoncallback': 'JSON_CALLBACK'
            }
          });
        }
      };


      return service;
    }
}

})();


