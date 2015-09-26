(function() {
  'use strict';
  angular.module('shoopingCart').service('ProductService', ProductService);
  /** @ngInject */
  function ProductService() {
    var self = this;
    self.products = products;
    self.init = function() {
      _.each(self.products, function(product) {
        product.id = _.uniqueId();
      });
    };
  }
  var products = [
    {
      'title': 'The Cathedral and the Bazaar',
      'url': 'http://www.catb.org/~esr/writings/cathedral-bazaar/',
      'description': 'The Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary (abbreviated CatB) is an essay, and later a book.',
      'logo': 'https://upload.wikimedia.org/wikipedia/en/c/c4/Cathedral-and-the-Bazaar-book-cover.jpg'
    },
    {
      'title': 'CouchDB The Definitive Guide',
      'url': 'http://guide.couchdb.org/',
      'description': 'Three of CouchDB’s creators show you how to use this document-oriented database as a standalone application framework or with high-volume, distributed applications.',
      'logo': 'http://akamaicovers.oreilly.com/images/9780596155902/cat.gif'
    },
    {
      'title': 'Creating Applications with Mozilla',
      'url': 'http://books.mozdev.org/chapters/index.html',
      'description': 'Mozilla is not just a browser. Mozilla is also a framework that allows developers to create cross-platform applications.',
      'logo': 'http://akamaicovers.oreilly.com/images/9780596000523/cat.gif'
    },
    {
      'title': 'RESTful Web Services',
      'url': 'http://restfulwebapis.org/rws.html',
      'description': 'RESTful Web Services is a 2007 book by Leonard Richardson and Sam Ruby. It was the first book-length treatment of RESTful design, and the predecessor to RESTful Web APIs.',
      'logo': 'http://restfulwebapis.org/images/rwa-cover.jpg'
    },
    {
      'title': 'OpenSources: Voices from the Open Source Revolution',
      'url': 'http://www.oreilly.com/openbook/opensources/book/index.html',
      'description': 'Open Sources: Voices from the Open Source Revolution is a book published by O\'Reilly Media. It is an anthology of essays written by luminaries of the open source and free software movements.',
      'logo': 'http://covers.oreilly.com/images/9781565925823/cat.gif'
    },
    {
      'title': 'Learning JavaScript Design Patterns',
      'url': 'http://addyosmani.com/resources/essentialjsdesignpatterns/book/',
      'description': 'This book is targeted at professional developers wishing to improve their knowledge of design patterns and how they can be applied to the JavaScript programming language.',
      'logo': 'http://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg'
    },
    {
      'title': 'An Introduction to Programming in Go',
      'url': 'http://www.golang-book.com/',
      'description': 'A short, concise introduction to computer programming using the language Go.',
      'logo': 'http://www.golang-book.com/public/img/intro/cover.0.png'
    },
    {
      'title': 'The Rust Programming Language',
      'url': 'http://doc.rust-lang.org/book/',
      'description': 'This book will teach you about the Rust Programming Language.',
      'logo': 'http://huonw.github.io/blog/2015/02/rust-sydney-1/logo.png'
    }
  ];
})();
