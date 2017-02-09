'use strict';

/*
 * Rate Controller - Add
 */

/*
 * how do i pass in the url?
 */

angular.module('RDash')
    .controller('RateCtrlAdd', ['$scope', '$http', function($scope, $http) {

    console.log('RateCtrlAdd - enter...');

    $scope.text = {
        message: 'List of Rates'
    };

   //$scope.rates = {}

       /*
        * localhost = url: 'http://192.168.0.3:8080/rates.json',
        * remote    = url: 'http://10.10.55.145:8085/lms/outputstream',
        */

    $http({
        method: 'POST',
        url: 'http://10.10.55.145:8085/lms/outputstream',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
        console.log('RateCtrlAdd - $http success!');
        $scope.rates = response.data;
        console.log('RateCtrlAdd - data: ', response.data);
        console.log('RateCtrlAdd - status: ', response.status);
        console.log('RateCtrlAdd - headers: ', response.headers);
        console.log('RateCtrlAdd - config: ', response.config);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
            console.log('RateCtrlAdd - $http failure!');
    });

    console.log('RateCtrlAdd - ...exit');

  }]);
