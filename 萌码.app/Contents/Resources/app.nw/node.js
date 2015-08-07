// **License:** MIT
/* global module, define */

;(function () {
  'use strict';

  process.on('uncaughtException', function(e) {
    console.log(e);
  });
}());
