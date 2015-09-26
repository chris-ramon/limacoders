(function() {
  'use strict';
  angular.module('shoopingCart').controller('MainController', MainController);
  /** @ngInject */
  function MainController(ProductService, CartService) {
    var vm = this;
    vm.ProductService = ProductService;
    vm.CartService = CartService;
  }
})();
