'use strict';

/*
 * Profile Service
 */

 angular.module('RDash')
     .service('profileService', ['$http', function ($http) {
        console.log('profileService - enter...');
        var url = 'http://10.10.55.145:8085/lms/profile';
        this.getProfiles = function () {
            return $http.get(url);
        };
        console.log('profileService - ...exit');
}]);
