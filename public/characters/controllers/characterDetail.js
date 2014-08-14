'use strict';

angular.module('marvel.characters')

.controller('CharacterDetailController', function($scope, $stateParams, Restangular) {
  var Characters = Restangular.all('characters');
  Characters.one($stateParams.id).then(function(result) {
    $scope.character = result;
  });

  $scope.showComicsList = function() {
    $scope.character.getList('comics').then(function(result) {
      $scope.character = result;
    });
  };
});
