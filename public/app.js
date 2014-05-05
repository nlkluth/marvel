'use strict';

angular.module('marvel', ['ui.router', 'restangular', 'marvel.characters'])

.config(function ($locationProvider, $urlRouterProvider, RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');
  // $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
})

.constant('MARVEL', 'https://gateway.marvel.com/');
