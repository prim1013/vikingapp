'use strict';

viking.controller( 'LandingController', function LandingController ( $scope, contactService ) {
    var profiles = [
        {
            name: 'Hans Yang',
            description: "Hans gets ready for his work day by scoring a few waves every morning at the El Porto break in Manhattan Beach. He uses the Viking app to stay organized so he doesn't miss a single swell.",
            leftImg: '../img/hans_left_470x641.png',
            topRightImg: '../img/hans_topright_550x320.png',
            bottomRightImg: '../img/hans_bottomright_gear_550x320.png',
            activity: 'Surf',
            temperature: 'Warm',
            tripType: 'Raid'
        },
        {
            name: 'Lisa Wright',
            description: 'Bio coming soon',
            leftImg: '../img/lisa_left_470x641.png',
            topRightImg: '../img/lisa_topright_550x320.png',
            bottomRightImg: '../img/lisa_bottomright_gear_550x320.png',
            activity: 'Surf',
            temperature: 'Warm',
            tripType: 'Raid'
        },
        {
            name: 'Greg Wilsey',
            description: 'Driven by the passion to always experience new places and cultures Greg has summited Everest Base Camp and Kilimanjaro.',
            leftImg: '../img/greg_left_470x641.png',
            topRightImg: '../img/greg_topright_550x320.png',
            bottomRightImg: '../img/greg_bottomright_gear_550x320.png',
            activity: 'Surf',
            temperature: 'Warm',
            tripType: 'Raid'
        },
        {
            name: 'Steve King',
            description: 'Steve never says "NO" to a river trip. Planning and packing all the gear needed to survive for a month or more floating through the wilderness is no small task. The Viking app makes sure Steve remembers his chapstick as well as all of the pulleys and prusiks for his rescue kit.',
            leftImg: '../img/steve_left_470x641.png',
            topRightImg: '../img/steve_topright_550x320.png',
            bottomRightImg: '../img/stevek_bottomright_gear_550x320.png',
            activity: 'Surf',
            temperature: 'Warm',
            tripType: 'Raid'
        }
    ];
    var teamMembers = [
        {
            name: 'RICK PETRUCELLI',
            headshot: 'rick',
            title: 'BUSINESS PARTNER',
            description: 'Rick has 10+ years in product management with focus on mobile and web based technology. Has an immense passion for gadgets and great design.'
        },
        {
            name: 'KEITH MILLER',
            headshot: 'keith',
            title: 'DESIGN PARTNER',
            description: 'Keith has over 13 years design experience, including Yahoo! Sports and ESPN.com. He was a designer at the startup Fastpoint Games with apprentice winner Kelly Perdew.'
        },
        {
            name: 'KYLE AARON',
            headshot: 'kyle',
            title: 'DESIGN PARTNER',
            description: 'A background in Product Design. Co-founded a creative agency. Over 10 years experience in Information Architecture & User Interface design. Keep it simple.'
        },
        {
            name: 'CHRIS PRIMAVERA',
            headshot: 'chris',
            title: 'ENGINEERING PARTNER',
            description: 'Web development professional with over 10 years of experience in the field. Technology, sports, and adventure enthusiast.'
        }
    ];
    var initialize = function () {
//        if ( !(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test( navigator.userAgent || navigator.vendor || window.opera ) ) {
        if ( !(/Android|iPhone|iPod|BlackBerry|Windows Phone/i).test( navigator.userAgent || navigator.vendor || window.opera ) ) {
            var s = skrollr.init();
            skrollr.menu.init( s );
            skrollr.decks.init( {
                segment: 'segment',
                nav: 'segment-navigation'
            } );
        }

        $scope.currentProfile = profiles[0];
        $scope.teamMembers = teamMembers;
    };

    $scope.emailAddress = '';

    $scope.loadProfile = function ( index ) {
        $scope.currentProfile = profiles[index];
    };

    $scope.addContact = function () {
        if ( $scope.emailAddress ) { // will be undefined if not a valid email
            contactService.addContact( $scope.emailAddress );
        }
    };

    initialize();
} );
