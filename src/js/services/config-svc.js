'use strict';

/*
 * Config Service
 */

 angular.module('RDash')
     .service('configService', ['$http', function ($http) {
        console.log('configService - enter...');
        var url = 'config.json';
        this.getConfig = function () {
            return $http.get(url).then(function(response) {
                return response.data;
            });
        };
        console.log('configService - ...exit');
}]);
