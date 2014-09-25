'use strict';

viking.directive( 'teamMembers', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/team-members.html',
        scope: {
            teamMembers: '='
        }
    }
} );
