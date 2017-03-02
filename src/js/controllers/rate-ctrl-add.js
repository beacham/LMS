'use strict';

/*
 * Rate Controller - Add
 */

/*
 * localhost = url: 'http://192.168.0.3:8080/rates.json',
 * remote    = url: 'http://10.10.55.145:8085/lms/outputstream',
 */

angular.module('RDash')
    .controller('RateCtrlAdd', ['$scope', '$http', function($scope, $http) {

    console.log('RateCtrlAdd - enter...');

    $scope.processForm = function(myForm) {

        console.log('RateCtrlAdd - processForm() - enter ...');
        console.log('RateCtrlAdd - processForm() - add: ', this.addButtonVal);
        console.log('RateCtrlAdd - processForm() - cancel: ', this.cancelButtonVal);

        var data = $scope.rates;

        /*$scope.resetForm = function(myForm) {
            //Even when you use form = {} it does not work
            angular.copy({},myForm);
        };*/

        this.resetButtonValues = function() {
                this.addButtonVal = false;
                //this.cancelButtonVal = false;
         }; // end resetButtonValues() function

         $scope.resetFormValues = function() {
                data.name = null;
                data.width = null;
                data.height = null;
                data.bitRate = null;
         }; // end resetFormValues() function

         if (this.addButtonVal) {

             console.log('RateCtrlAdd - processForm() - rates from input form: ', data);

             var tmp = 'http://10.10.55.145:8085/lms/outputstream/';
             var url = tmp + data.name;

             console.log('RateCtrlAdd - url: ', url);

            $http({
                method: 'POST',
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8;'
                }
            }).then(function successCallback(response) {
                console.log('RateCtrlAdd - processForm() - $http success!');
                $scope.rates = response.data;
                console.log('RateCtrlAdd - processForm() - data: ', response.data);
                console.log('RateCtrlAdd - processForm() - status: ', response.status);
                console.log('RateCtrlAdd - processForm() - headers: ', response.headers);
                console.log('RateCtrlAdd - processForm() - config: ', response.config);
                $scope.resetFormValues();
                }, function errorCallback(response) {
                    console.log('RateCtrlAdd - processForm() - $http failure!');
            }); // end $http

            } /*else if (this.cancelButtonVal) {
                //do cancel op
                this.resetButtonValues();
        } // end else if*/

        this.resetButtonValues();

        console.log('RateCtrlAdd - processForm() - ...exit');

    }; // end processForm() function

    console.log('RateCtrlAdd - ...exit');

}]); // end controller()
