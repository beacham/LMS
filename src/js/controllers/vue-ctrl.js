'use strict';

/*
 * Vue Controller
 */

angular.module('RDash')
    .controller('VueCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {

    console.log('VueCtrl - enter...');

    $scope.goNext = function (hash) {
        $location.path(hash);
    }

    /*$http({
        method: 'GET',
        url: 'http://10.10.55.145:8085/lms/vues',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
        console.log('VueCtrl - $http success!');
        $scope.vues = response.data;
        console.log('VueCtrl - data: ', response.data);
        console.log('VueCtrl - headers: ', response.headers);
        console.log('VueCtrl - config: ', response.config);
        console.log('VueCtrl - status: ', response.status);
        console.log('VueCtrl - status: ', response.statusText);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
            console.log('VueCtrl - $http failure!');
    });*/

    console.log('VueCtrl - ...exit');

  }]);
