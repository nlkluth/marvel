'use strict';

angular.module('marvel.characters')

.controller('CharactersController', function($scope, Restangular) {
  var Characters = Restangular.all('characters');

  Characters.getList().then(function(characterList) {
    $scope.characters = characterList;
  });

  $scope.showDetail = function(character) {
    $scope.character = character;
  };
});
