'use strict';

angular.module('marvel.characters')

.factory('Characters', ['$http', function($http) {
  function load(path) {
    var request = $http({
      method: 'GET',
      url: path
    });

    return request;
  }

  return {
    getList: function() {
      return load('/api/characters');
    }
  };
}]);
