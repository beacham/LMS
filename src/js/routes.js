'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        //
        // Note: Each state MUST be unique

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
                templateUrl: 'templates/rates.html', controller: 'RateCtrl'
            })
            .state('rates_add', {
                url: '/ratesadd',
                templateUrl: 'templates/rates_add.html', controller: 'RateCtrlAdd'
            })
            .state('profiles', {
                url: '/profiles',
                templateUrl: 'templates/profiles.html', controller: 'ProfileCtrl'
            })
            .state('sources', {
                url: '/sources',
                templateUrl: 'templates/sources.html', controller: 'SourceCtrl'
            })
            .state('services', {
                url: '/services',
                templateUrl: 'templates/services.html', controller: 'ServiceCtrl'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'templates/test.html', controller: 'TestRateCtrl'
            });
    }
]);
