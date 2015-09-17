'use strict';

angular.module('mean.customer').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('customer example page', {
      url: '/customer/example',
      templateUrl: 'customer/views/index.html'
    });
  }
]);
