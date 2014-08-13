'use strict';

viking.directive( 'activityProgressStep', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/activity-progress-step.html',
        scope: {
            step: '=',
            innerColorClass: '='
        },
        link: function ( scope, element ) {
            scope.step.opacitySteps.forEach( function ( os ) {
                $( element[0] ).attr( os.attribute, os.value );
            } );

            skrollr.get().refresh( element );
        }
    };
} );
