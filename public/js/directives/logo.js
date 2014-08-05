'use strict';

viking.directive( 'logo', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/logo.html'
    }
} );