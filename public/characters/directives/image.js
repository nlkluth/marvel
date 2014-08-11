'use strict';

angular.module('marvel.characters')
.directive('marvelImage', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      attrs.$observe('marvelImage', function(value) {
        element.css({
          'background-image': 'url(' + value +')',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-color': '#222',
          'background-size': 'cover'
        });
      });
    }
  };
});
