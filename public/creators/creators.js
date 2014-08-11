'use strict';

angular.module('marvel.creators', [])

.config(function($stateProvider) {
  $stateProvider
    .state('creators', {
      url: '/creators',
      templateUrl: 'creators/views/list.html'
    });
});
