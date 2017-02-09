'use strict';

/*
 * Rate Controller
 */

/*
 * how do i pass in the url?
 */

angular.module('RDash')
    .controller('RateCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {

    console.log('RateCtrl - enter...');

    $scope.text = {
        message: 'List of Rates'
    };

    $scope.goNext = function (hash) {
        $location.path(hash);
    }

   //$scope.rates = {}

       /*
        * localhost = url: 'http://192.168.0.3:8080/rates.json',
        * remote    = url: 'http://10.10.55.145:8085/lms/outputstream',
        */

    $http({
        method: 'GET',
        url: 'http://192.168.0.3:8080/rates.json',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
        console.log('RateCtrl - $http success!');
        $scope.rates = response.data;
        console.log('RateCtrl - data: ', response.data);
        console.log('RateCtrl - status: ', response.status);
        console.log('RateCtrl - headers: ', response.headers);
        console.log('RateCtrl - config: ', response.config);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
            console.log('RateCtrl - $http failure!');
    });

    console.log('RateCtrl - ...exit');

  }]);
