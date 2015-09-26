(function() {
  'use strict';

  angular
    .module('shoopingCart')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, ProductService) {
    ProductService.init();
  }

})();
