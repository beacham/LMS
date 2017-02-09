'use strict';

/*
 * Service Controller
 */

angular.module('RDash')
    .controller('ServiceCtrl', ['$scope', '$http', function($scope, $http) {

    console.log('ServiceCtrl - enter...');

   //$scope.rates = {}

       /*
        * localhost =        url: 'http://192.168.0.3:8080/service.json',
        * network   =        url: 'http://10.10.55.145:8085/lms/service',
        */

    $http({
        method: 'GET',
        url: 'http://10.10.55.145:8085/lms/service',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
        console.log('ServiceCtrl - $http success!');
        $scope.services = response.data;
        console.log('ServiceCtrl - data: ', response.data);
        console.log('ServiceCtrl - status: ', response.status);
        console.log('ServiceCtrl - headers: ', response.headers);
        console.log('ServiceCtrl - config: ', response.config);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
            console.log('ServiceCtrl - $http failure!');
    });

    console.log('ServiceCtrl - ...exit');

  }]);
