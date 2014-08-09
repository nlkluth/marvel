'use strict';

angular.module('marvel.menu')
.directive('marvelMenu', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.bind('mouseenter', function() {
        element.parent().find('.menu-item').addClass('contract');
        element.removeClass('contract');
        element.addClass('expand');
      });
      element.bind('mouseleave', function() {
        element.parent().find('.menu-item').removeClass('contract');
        element.removeClass('expand');
      });
    }
  };
});
