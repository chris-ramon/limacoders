(function() {
  'use strict';
  angular.module('shoopingCart').service('CartService', CartService);
  /** @ngInject */
  function CartService() {
    var self = this;
    self.cart = {products: []};
    self.add = function(product) {
      var p = _.find(self.cart.products, {id: product.id});
      if (!p) {
        product.quantity = 1;
        self.cart.products.push(product);
      } else {
        p.quantity += 1;
      }
    };
    self.remove = function(product) {
      var p = _.find(self.cart.products, {id: product.id});
      self.cart.products = _.without(self.cart.products, p);
    }
  }
})();
