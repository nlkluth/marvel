'use strict';

angular.module('marvel', ['ui.router', 'marvel.characters'])

.config(function ($locationProvider, $urlRouterProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
})

.constant('MARVEL', 'https://gateway.marvel.com/');
