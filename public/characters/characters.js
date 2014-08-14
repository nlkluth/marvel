'use strict';

angular.module('marvel.characters', [])

.config(function($stateProvider) {
  $stateProvider
    .state('characters', {
      url: '/characters',
      templateUrl: 'characters/views/list.html'
    })
    .state('character detail', {
      url: '/characters/:name',
      templateUrl: 'characters/views/detail.html'
    });
});
