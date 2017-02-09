/*
 * Rate Controller
 */

angular.module('RDash')
    .controller('TestRateCtrl', function() {
    this.bag = [
      {label: '6_Mbit', rate: '6', width: '1920', height: '1080', selected: false},
      {label: '5_Mbit', rate: '5', width: '1920', height: '1080', selected: false},
      {label: '4_Mbit', rate: '4', width: '1920', height: '1080', selected: false},
      {label: '3_Mbit', rate: '3', width: '1920', height: '1080', selected: false},
      {label: '2_Mbit', rate: '2', width: '1920', height: '1080', selected: false},
      {label: '1_Mbit', rate: '1', width: '1920', height: '1080', selected: false}
    ];
  });
