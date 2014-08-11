'use strict';

angular.module('marvel.events', [])

.config(function($stateProvider) {
  $stateProvider
    .state('events', {
      url: '/events',
      templateUrl: 'events/views/list.html'
    });
});
