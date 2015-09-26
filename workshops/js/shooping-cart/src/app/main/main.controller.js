(function() {
  'use strict';
  angular.module('shoopingCart').controller('MainController', MainController);
  /** @ngInject */
  function MainController(ProductService) {
    var vm = this;
    vm.ProductService = ProductService;
  }
})();
