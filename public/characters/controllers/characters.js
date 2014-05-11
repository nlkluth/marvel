'use strict';

angular.module('marvel.characters')

.controller('CharactersController', function ($scope, Characters) {

  Characters.getList().then(function(characterList) {
    $scope.characters = characterList;
  });
});
