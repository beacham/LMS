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
            .state('rates', {
                url: '/rates',
                templateUrl: 'templates/rates.html', controller: 'RateCtrl'
            })
            .state('rates_add', {
                url: '/ratesadd',
                templateUrl: 'templates/rates_add.html', controller: 'RateCtrlAdd'
            })
            .state('rates_mod', {
                url: '/ratesmod',
                templateUrl: 'templates/501_not_implemented.html', controller: '501Ctrl'
            })
            .state('profiles', {
                url: '/profiles',
                templateUrl: 'templates/profiles.html', controller: 'ProfileCtrl'
            })
            .state('profiles_add', {
                url: '/profilesadd',
                templateUrl: 'templates/profiles_add.html', controller: 'ProfileCtrlAdd'
            })
            .state('profiles_mod', {
                url: '/profilesmod',
                templateUrl: 'templates/501_not_implemented.html', controller: '501Ctrl'
            })
            .state('sources', {
                url: '/sources',
                templateUrl: 'templates/sources.html', controller: 'SourceCtrl'
            })
            .state('sources_add', {
                url: '/sourcesadd',
                templateUrl: 'templates/sources_add.html', controller: 'SourceCtrlAdd'
            })
            .state('sources_mod', {
                url: '/sourcesmod',
                templateUrl: 'templates/501_not_implemented.html', controller: '501Ctrl'
            })
            .state('services', {
                url: '/services',
                templateUrl: 'templates/services.html', controller: 'ServiceCtrl'
            })
            .state('services_add', {
                url: '/servicesadd',
                templateUrl: 'templates/services_add.html', controller: 'ServiceCtrlAdd'
            })
            .state('services_mod', {
                url: '/servicesmod',
                templateUrl: 'templates/501_not_implemented.html', controller: '501Ctrl'
            })
            .state('services_start', {
                url: '/servicesstart',
                templateUrl: 'templates/501_not_implemented.html', controller: '501Ctrl'
            })
            .state('services_stop', {
                url: '/servicesstop',
                templateUrl: 'templates/501_not_implemented.html', controller: '501Ctrl'
            })
            //.state('appliances', {
            //    url: '/appliances',
            //    templateUrl: 'templates/appliances.html', controller: 'ApplianceCtrl'
            //})
            .state('vues', {
                url: '/vues',
                templateUrl: 'templates/vues.html', controller: 'VueCtrl'
            })
            .state('vues_add', {
                url: '/vuesadd',
                templateUrl: 'templates/vues_add.html', controller: 'VueCtrlAdd'
            })
            .state('vues_501', {
                url: '/vues501',
                templateUrl: 'templates/501_not_implemented.html', controller: '501Ctrl'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'templates/test.html',
                controller: 'TestRateCtrl'
                //resolve: TestRateCtrl.resolve
            })
            .state('files', {
                url: '/files',
                templateUrl: 'templates/files.html', controller: 'FileCtrl'
            });
    }
]);
