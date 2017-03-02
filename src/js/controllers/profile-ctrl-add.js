'use strict';

/*
 * Profile Controller - Add
 */

angular.module('RDash')
    .controller('ProfileCtrlAdd', ['$rootScope', '$scope', 'rateService', '$http', function($rootScope, $scope, rateService, $http) {

    console.log('ProfileCtrlAdd - enter...');

    rateService.getRates().then(function (response) {
            $scope.rates = response;
            console.log('ProfileCtrlAdd - rateService.getRates() - rates: ', $scope.rates);
        }, function (error) {
            $scope.status = 'ProfileCtrlAdd - getRateList - Unable to load rate data: ' + error.message;
        });

    console.log('ProfileCtrlAdd - rates: ', $scope.rates);

    this.selectedItems = []; // used to store the selected rates from the rate table

    $scope.processForm = function(myForm) {

        console.log('ProfileCtrlAdd - processForm() - enter ...');
        console.log('ProfileCtrlAdd - processForm() - add: ', this.addButtonVal);
        console.log('ProfileCtrlAdd - processForm() - cancel: ', this.cancelButtonVal);

        var data = $scope.profiles; // used to store data input on the form

        this.resetButtonValues = function() {
                this.addButtonVal = false;
                //this.cancelButtonVal = false;
         }; // end resetButtonValues() function

         $scope.resetFormValues = function() {
                data.profileName = null;
                data.profileDescription = null;
                data.segmentsToKeep = null;
                data.segmentLength = null;
         }; // end resetFormValues() function

         if (this.addButtonVal) {

            console.log('ProfileCtrlAdd - processForm() - profile from input form: ', data);
            console.log('ProfileCtrlAdd - processForm() - selectedRates: ', $scope.selectedItems);

            var url = 'http://' + $rootScope.restIpAddr + ':' + $rootScope.restPort + '/lms/profile/' + data.profileName;

            console.log('ProfileCtrlAdd - processForm() - url: ', url);
            console.log('ProfileCtrlAdd - processForm() - rateList: ', $scope.selectedItems);

            $http({
                method: 'POST',
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8;'
                }
            }).then(function successCallback(response) {
                console.log('ProfileCtrlAdd - processForm() - $http success!');
                $scope.profiles = response.data;
                console.log('ProfileCtrlAdd - processForm() - data: ', response.data);
                console.log('ProfileCtrlAdd - processForm() - status: ', response.status);
                console.log('ProfileCtrlAdd - processForm() - headers: ', response.headers);
                console.log('ProfileCtrlAdd - processForm() - config: ', response.config);
                $scope.resetFormValues();
                }, function errorCallback(response) {
                    console.log('ProfileCtrlAdd - processForm() - $http failure!');
            }); // end $http

        } // end if

        this.resetButtonValues();

        console.log('ProfileCtrlAdd - processForm() - ...exit');

    }; // end processForm() function

    console.log('ProfileCtrlAdd - ...exit');

}]); // end controller()
