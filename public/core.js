'use strict';

var viking = angular
    .module( 'viking', ['ngRoute', 'ngAnimate'] )
    .config( function ( $routeProvider ) {
        $routeProvider
            .when( '/list', {
                templateUrl: 'templates/list.html',
                controller: 'ListController'
            } )
            .when( '/beta', {
                templateUrl: 'templates/beta.html',
                controller: 'BetaController'
            } )
            .when( '/home', {
                templateUrl: 'templates/landing.html'
            } )
            .otherwise( {
                redirectTo: '/home'
            } );
    } );