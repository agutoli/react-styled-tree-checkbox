(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.cssVariables = mod.exports;
  }
})(this, function (module) {
  'use strict';

  var fontFamily = 'Tahoma, Helvetica, Arial, sans-serif';

  module.exports = {
    'child-node-label__user-select': 'none',
    'child-node-label__font-size': '14px',
    'child-node-label__line-height': '12px',
    'child-node-label__font-family': '"Open Sans", Helvetica, Arial, sans-serif'
  };
});
//# sourceMappingURL=cssVariables.js.map