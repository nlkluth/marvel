'use strict';

angular.module('marvel.characters')

.controller('CharactersController', function($scope, $stateParams, Restangular) {
  if (!$scope.character) {
    var Characters = Restangular.all('characters');
    Characters.getOne($stateParams.id).then(function(character) {
      $scope.character = character;
    });
  }
});
