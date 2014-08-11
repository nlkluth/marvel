'use strict';

angular.module('marvel.stories', [])

.config(function($stateProvider) {
  $stateProvider
    .state('stories', {
      url: '/stories',
      templateUrl: 'stories/views/list.html'
    });
});
