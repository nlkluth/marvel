'use strict';

angular.module('marvel', ['ui.router', 'restangular', 'marvel.characters'])

.config(function ($locationProvider, RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');
  $locationProvider.html5Mode(true).hashPrefix('!');
})

.constant('MARVEL', 'https://gateway.marvel.com/');
