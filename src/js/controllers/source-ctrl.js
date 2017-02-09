'use strict';

/*
 * Source Controller
 */

angular.module('RDash')
    .controller('SourceCtrl', ['$scope', '$http', function($scope, $http) {

    console.log('SourceCtrl - enter...');

   //$scope.rates = {}

       /*
        * localhost =        url: 'http://192.168.0.3:8080/sources.json',
        * network   =        url: 'http://10.10.55.145:8085/lms/source',
        */

    $http({
        method: 'GET',
        url: 'http://10.10.55.145:8085/lms/source',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
        console.log('SourceCtrl - $http success!');
        $scope.sources = response.data;
        console.log('SourceCtrl - data: ', response.data);
        console.log('SourceCtrl - status: ', response.status);
        console.log('SourceCtrl - headers: ', response.headers);
        console.log('SourceCtrl - config: ', response.config);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
            console.log('SourceCtrl - $http failure!');
    });

    console.log('SourceCtrl - ...exit');

  }]);
