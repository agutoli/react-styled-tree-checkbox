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
    'child-node-label__font-family': '"Open Sans", Helvetica, Arial, sans-serif',
    'tree-checkbox-wrapper__color': '#999FAC',

    'collapse-expand-label__color': '#3C5A96',
    'collapse-expand-label__font-size': '12px',

    'root-node-label__font-family': fontFamily,
    'root-node-label__font-weight': 'normal',
    'root-node-label__font-size': '14px',
    'root-node-label__line-height': '16px',

    'root-node-label-children-len__color': '#ccc',
    'root-node-label-children-len__font-size': '12px',
    'root-node-label-children-len__font-weight': 'normal'
  };
});
//# sourceMappingURL=cssVariables.js.map