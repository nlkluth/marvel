'use strict';

angular.module('marvel.characters').config(function ($stateProvider) {
  $stateProvider
    .state('all characters', {
      url: '/characters',
      templateUrl: 'public/characters/views/list.html'
    });
});
