'use strict';

var viking = angular
    .module( 'viking', ['ngRoute'] )
    .config( function ( $routeProvider ) {
        $routeProvider
            .when( '/list', {
                templateUrl: 'templates/list.html',
                controller: 'ListController'
            } )
            .when( '/landing', {
                templateUrl: 'templates/landing.html'
            } )
            .otherwise( {
                redirectTo: 'landing'
            } );
    } );