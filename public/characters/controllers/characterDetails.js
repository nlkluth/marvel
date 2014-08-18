'use strict';

angular.module('marvel.characters')

.controller('CharacterDetailsController', function($scope, $stateParams, Restangular) {
  if (!$scope.character) {
    var Character = Restangular.one('characters', $stateParams.id);
    Character.get().then(function(character) {
      console.log(character);
      $scope.character = character;
    });
  }
});
