'use strict';

/*
 * Appliance Controller
 */

angular.module('RDash')
    .controller('ApplianceCtrl', ['$scope', '$location', '$http', 'serviceAppliance', function($scope, $location, $http, serviceAppliance) {

    console.log('ApplianceCtrl - enter...');

    $scope.goNext = function (hash) {
        $location.path(hash);
    }

    $http({
        method: 'GET',
        url: 'http://10.10.55.145:8085/lms/outputstream',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
        console.log('ApplianceCtrl - $http success!');
        $scope.rates = response.data;
        console.log('ApplianceCtrl - data: ', response.data);
        console.log('ApplianceCtrl - headers: ', response.headers);
        console.log('ApplianceCtrl - config: ', response.config);
        console.log('ApplianceCtrl - status: ', response.status);
        console.log('ApplianceCtrl - status: ', response.statusText);
    }, function errorCallback(response) {
            console.log('ApplianceCtrl - $http failure!');
    });

    console.log('ApplianceCtrl - ...exit');

  }]);
