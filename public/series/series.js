'use strict';

angular.module('marvel.series', [])

.config(function($stateProvider) {
  $stateProvider
    .state('series', {
      url: '/series',
      templateUrl: 'series/views/list.html'
    });
});
