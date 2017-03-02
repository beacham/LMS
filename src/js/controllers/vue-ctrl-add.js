'use strict';

/*
 * Vue Controller - Add
 */

angular.module('RDash')
    .controller('VueCtrlAdd', ['$scope', '$location', '$http', function($scope, $location, $http) {

   $scope.goNext = function (hash) {
        $location.path(hash);
    }

    console.log('VueCtrlAdd - enter...');
    console.log('VueCtrlAdd - ...exit');

  }]);
