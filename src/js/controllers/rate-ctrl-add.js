'use strict';

/*
 * Rate Controller - Add
 */

angular.module('RDash')
    .controller('RateCtrlAdd', ['$scope', '$http', function($scope, $http) {

    console.log('RateCtrlAdd - enter...');

    //$scope.SendData = function () {
    /*    var ratedata = {
                            rName:    $scope.rateName,
                            rBitrate: $scope.rateBitrate,
                            rWidth:   $scope.rateWidth,
                            rHeight:  $scope.rateHeight
        };*/

        console.log('RateCtrlAdd - ratedata: ', $scope.ratedata);

       /*
        * localhost = url: 'http://192.168.0.3:8080/rates.json',
        * remote    = url: 'http://10.10.55.145:8085/lms/outputstream',
        */


    var url = 'http://10.10.55.145:8085/lms/outputstream' + '/' + $scope.rateName

    $http({
        method: 'POST',
        url: 'http://10.10.55.145:8085/lms/outputstream',
        data: $scope.ratedata,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
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
