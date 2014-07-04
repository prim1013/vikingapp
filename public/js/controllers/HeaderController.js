'use strict';

viking.controller( 'HeaderController', function HeaderController ( $scope, $location, anchorSmoothScroll ) {
    $scope.gotoElement = function ( elementId ) {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash( elementId );

        // call $anchorScroll()
        anchorSmoothScroll.scrollTo( elementId );
    };
} );
