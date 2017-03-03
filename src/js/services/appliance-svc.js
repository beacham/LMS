'use strict';

/*
 * Appliance Service
 */

 angular.module('RDash')
     .service('profileService', ['$rootScope', '$http', function ($rootScope, $http) {
        console.log('profileService - enter...');
        var url = 'http://' + hostname + $rootScope.retsPort + '/lms/appliance';
        this.getProfiles = function () {
            return $http.get(url);
        };
        console.log('profileService - ...exit');
}]);
