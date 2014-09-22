'use strict';

viking.controller( 'LandingController', function LandingController ( $scope ) {
    var profiles = [
        {
            name: 'Hans Yang',
            description: "Hans gets ready for his work day by scoring a few waves every morning at the El Porto break in Manhattan Beach. He uses the Viking app to stay organized so he doesn't miss a single swell.",
            leftImg: '../img/hans_left_470x641.png',
            topRightImg : '../img/hans_topright_550x320.png',
            bottomRightImg : '../img/hans_bottomright_gear_550x320.png',
            activity: 'Surf',
            temperature: 'Warm',
            tripType: 'Raid'
        },
        {
            name: 'Lisa Wright',
            description: 'Bio coming soon',
            leftImg: '../img/lisa_left_470x641.png',
            topRightImg : '../img/lisa_topright_550x320.png',
            bottomRightImg : '../img/lisa_bottomright_gear_550x320.png',
            activity: 'Surf',
            temperature: 'Warm',
            tripType : 'Raid'
        },
        {
            name: 'Greg Wilsey',
            description: 'Driven by the passion to always experience new places and cultures Greg has summited Everest Base Camp and Kilimanjaro.',
            leftImg: '../img/greg_left_470x641.png',
            topRightImg : '../img/greg_topright_550x320.png',
            bottomRightImg : '../img/greg_bottomright_gear_550x320.png',
            activity: 'Surf',
            temperature: 'Warm',
            tripType : 'Raid'
        },
        {
            name: 'Steve King',
            description: 'Steve never says "NO" to a river trip. Planning and packing all the gear needed to survive for a month or more floating through the wilderness is no small task. The Viking app makes sure Steve remembers his chapstick as well as all of the pulleys and prusiks for his rescue kit.',
            leftImg: '../img/steve_left_470x641.png',
            topRightImg : '../img/steve_topright_550x320.png',
            bottomRightImg : '../img/steve_bottomright_gear_550x320.png',
            activity: 'Surf',
            temperature: 'Warm',
            tripType : 'Raid'
        }
    ];
    var initialize = function () {
        $scope.storyProgress = {
            opacitySteps: [
                {
                    attribute: 'data-200p',
                    value: 'opacity:0'
                },
                {
                    attribute: 'data-230p',
                    value: 'opacity:1'
                },
                {
                    attribute: 'data-1400p',
                    value: 'opacity:1'
                },
                {
                    attribute: 'data-1500p',
                    value: 'opacity:0'
                }
            ],
            colorClass: 'progress-step-white',
            innerColorClass: 'progress-step-inner-white',
            steps: [
                {
                    opacitySteps: [
                        {
                            attribute: 'data-210p',
                            value: 'opacity:0'
                        },
                        {
                            attribute: 'data-230p',
                            value: 'opacity:1'
                        },
                        {
                            attribute: 'data-460p',
                            value: 'opacity:0'
                        }
                    ]
                },
                {
                    opacitySteps: [
                        {
                            attribute: 'data-460p',
                            value: 'opacity:0'
                        },
                        {
                            attribute: 'data-480p',
                            value: 'opacity:1'
                        },
                        {
                            attribute: 'data-710p',
                            value: 'opacity:0'
                        }
                    ]
                }
            ]
        };

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
    };

    $scope.currentProfile = {};
    $scope.loadProfile = function ( index ) {
        $scope.currentProfile = profiles[index];
    };

    initialize();
} );
