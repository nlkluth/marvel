'use strict';

angular.module('marvel.characters')

.controller('CharactersController', function ($scope, Restangular) {
  var Characters = Restangular.all('characters');

  Characters.getList().then(function(characters) {
    $scope.characters = characters;
  });
});
