'use strict';

angular.module('marvel.menu', [])

.config(function($stateProvider) {
  $stateProvider
    .state('menu', {
      url: '/',
      templateUrl: 'menu/views/index.html'
    });
});
