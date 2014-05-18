'use strict';

var viking = angular
    .module( 'viking', ['ngRoute'] )
    .config( function ( $routeProvider ) {
        $routeProvider
            .when( '/list', {
                templateUrl: 'templates/list.html',
                controller: 'ListController'
            } )
            .when( '/home', {
                templateUrl: 'templates/landing.html'
            } )
            .otherwise( {
                redirectTo: '/home'
            } );
    } );