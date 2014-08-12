'use strict';

viking.directive( 'activityProgress', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/activity-progress.html',
        scope: {
            activityProgressViewModel: '='
        },
        link: function ( scope, element ) {
            scope.activityProgressViewModel.opacitySteps.forEach( function ( os ) {
                $( element[0] ).attr( os.attribute, os.value );
            } );
            skrollr.get().refresh( element );
        }
    };
} );
