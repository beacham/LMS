'use strict';

/*
 * File Controller
 */

angular.module('RDash')
    .controller('FileCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {

    console.log('FileCtrl - enter...');

    $scope.goNext = function (hash) {
        $location.path(hash);
    }

       /*
        * localhost = url: 'http://192.168.0.3:8080/rates.json',
        * remote    = url: 'http://10.10.55.145:8085/lms/outputstream',
        */

    $http({
        method: 'POST',
        url: 'http://192.168.0.3:8080/rates.json',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
        console.log('FileCtrl - $http success!');
        $scope.file = response.data;
        console.log('FileCtrl - data: ', response.data);
        console.log('FileCtrl - status: ', response.status);
        console.log('FileCtrl - headers: ', response.headers);
        console.log('FileCtrl - config: ', response.config);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
            console.log('FileCtrl - $http failure!');
    });

    console.log('FileCtrl - ...exit');

  }]);
