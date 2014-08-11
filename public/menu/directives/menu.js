'use strict';

angular.module('marvel.menu')
.directive('marvelMenu', function($window) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var windowHeight = $window.innerHeight;
      if ($window.innerWidth <= 750) {
        element.css('height', (windowHeight / 3) + 'px');
        return;
      }

      element.css('height', (windowHeight - 80) + 'px');
      element.css('max-height', '710px');

      var initializeWindowSize = function() {
        if ($window.innerWidth <= 750) {
          element.css('height', (windowHeight / 3) + 'px');
          return;
        }

        element.css('height', ($window.innerHeight - 80) + 'px');
      };

      angular.element($window).bind('resize', function() {
        initializeWindowSize();
      });

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
