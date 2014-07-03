'use strict';

var viking = angular
    .module( 'viking', ['ui.router', 'ngAnimate'] )
    .config( function ( $stateProvider, $urlRouterProvider ) {

        $urlRouterProvider.otherwise( '/' );

        $stateProvider
            .state( 'landing', {
                url: '/',
                templateUrl: 'templates/landing.html',
                controller: 'LandingController'
            } )
            .state( 'beta', {
                url: '/beta',
                templateUrl: 'templates/beta.html',
                controller: 'BetaController'
            } )
            .state( 'beta.home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            } )
            .state( 'beta.list', {
                url: '/list',
                templateUrl: 'templates/list.html',
                controller: 'ListController'
            } );
    } );