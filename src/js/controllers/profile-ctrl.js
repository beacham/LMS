'use strict';

/*
 * Profile Controller
 */

angular.module('RDash')
    .controller('ProfileCtrl', ['$scope', '$http', function($scope, $http) {

    console.log('ProfileCtrl - enter...');

   /*
    * localhost =        url: 'http://192.168.0.3:8080/profiles.json',
    * network   =        url: 'http://10.10.55.145:8085/lms/profile',
    */

   $scope.selectProfile = function(profile) {
       $scope.selectedProfile = profile;
       console.log('ProfileCtrl - selectProfile() - profile', profile)
   }

    $http({
        method: 'GET',
        url: 'http://10.10.55.145:8085/lms/profile',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
        console.log('ProfileCtrl - $http success!');
        $scope.profiles = response.data;
        console.log('ProfileCtrl - data: ', response.data);
        console.log('ProfileCtrl - status: ', response.status);
        console.log('ProfileCtrl - headers: ', response.headers);
        console.log('ProfileCtrl - config: ', response.config);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
            console.log('ProfileCtrl - $http failure!');
    });

    console.log('ProfileCtrl - ...exit');

  }]);
