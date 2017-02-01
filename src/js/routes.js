'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
            .state('rates', {
                url: '/rates',
                templateUrl: 'templates/rates.html'
            })
            .state('profiles', {
                url: '/profiles',
                templateUrl: 'templates/profiles.html'
            })
            .state('sources', {
                url: '/sources',
                templateUrl: 'templates/sources.html'
            })
            .state('services', {
                url: '/services',
                templateUrl: 'templates/services.html'
            });
    }
]);
