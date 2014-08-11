'use strict';

angular.module('marvel.comics', [])

.config(function($stateProvider) {
  $stateProvider
    .state('comics', {
      url: '/comics',
      templateUrl: 'comics/views/list.html'
    });
});
