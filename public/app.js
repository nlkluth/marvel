'use strict';

angular.module('marvel', ['ui.router', 'restangular', 'marvel.characters'])

.config(function ($locationProvider, $urlRouterProvider, RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');

  RestangularProvider.addResponseInterceptor(function(data, operation) {
    var extractedData;

    if (operation === 'getList') {
      extractedData = data.data.results;
      extractedData.code = data.code;
      extractedData.etag = data.etag;
    }

    return extractedData;
  });

  // $locationProvider.html5Mode(true);
  // $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/');
})

.constant('MARVEL', 'https://gateway.marvel.com/');
