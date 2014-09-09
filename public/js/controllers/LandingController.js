'use strict';

viking.controller( 'LandingController', function LandingController ( $scope ) {

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
    };

    initialize();
} );
