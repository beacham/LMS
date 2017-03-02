'use strict';

/*
 * Source Service
 */

 angular.module('RDash')
     .service('SourceService', ['$http', function ($http) {
        console.log('SourceService - enter...');
        var url = 'http://10.10.55.145:8085/lms/source';
        this.getSources = function () {
            return $http.get(url).then(function(response) {
                return response.data;
            });
        };
        console.log('SourceService - exit...');
}]);
