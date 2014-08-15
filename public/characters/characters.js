'use strict';

angular.module('marvel.characters', [])

.config(function($stateProvider) {
  $stateProvider
    .state('characters', {
      url: '/characters',
      templateUrl: 'characters/views/list.html'
    })
    .state('characters.detail', {
      url: '/:id',
      templateUrl: 'characters/views/detail.html'
    });
});
