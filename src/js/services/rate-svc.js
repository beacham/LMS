'use strict';

/*
 * Rate Service
 */

angular.module('RDash')
     .service('rateService', ['$http', function ($http) {
        console.log('rateService - enter...');
        var url = 'http://10.10.55.145:8085/lms/outputstream';
        this.getRates = function () {
            return $http.get(url).then(function(response) {
                return response.data;
            });
        };
        console.log('rateService - exit...');
}]);
