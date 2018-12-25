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
    'tree-checkbox-wrapper__margin-left': '22px',
    'tree-checkbox-wrapper__margin-bottom': '24px',

    'collapse-expand-label__color': '#3C5A96',
    'collapse-expand-label__font-size': '12px',
    'collapse-expand-label__width': '50px',
    'collapse-expand-label__margin-left': '5px',
    'collapse-expand-label__font-family': '"Open Sans", Helvetica, Arial, sans-serif',

    'root-node-label__font-family': fontFamily,
    'root-node-label__font-weight': 'normal',
    'root-node-label__font-size': '14px',
    'root-node-label__line-height': '16px',

    'root-node-label-children-len__color': '#ccc',
    'root-node-label-children-len__font-size': '12px',
    'root-node-label-children-len__font-weight': 'normal',

    'child-node-wrapper__margin-left': '4px',
    'child-node-wrapper__margin-bottom': '5px',

    'children-node-wrapper__margin-left': '20px',
    'children-node-wrapper__margin-bottom': '10px',

    'input-checkbox-wrapper__padding-left': '24px',
    'input-checkbox-wrapper__margin-bottom': '16px',
    'input-checkbox-wrapper__font-size': '22px',
    'input-checkbox-wrapper__user-select': 'none',

    'input-checkbox-checkmark__top': '0',
    'input-checkbox-checkmark__left': '0',
    'input-checkbox-checkmark__height': '14px',
    'input-checkbox-checkmark__width': '14px',
    'input-checkbox-checkmark__background-color': '#F7F7F7',
    'input-checkbox-checkmark__border-width': '1px',
    'input-checkbox-checkmark__border-style': 'solid',
    'input-checkbox-checkmark__border-color': '#DFE3EE',
    'input-checkbox-checkmark__border-radius': '3px',

    'input-checkbox-checkmark__left--after': '5px',
    'input-checkbox-checkmark__top--after': '2px',
    'input-checkbox-checkmark__width--after': '3px',
    'input-checkbox-checkmark__height--after': '6px',
    'input-checkbox-checkmark__border--after': 'solid white',
    'input-checkbox-checkmark__border-width--after': '0 2px 2px 0',

    'input-checkbox-checkmark__background-color--hover': '#DFE3EE',

    'input-checkbox-checkmark__border-color--checked': '#3C5A96',
    'input-checkbox-checkmark__background-color--checked': '#8C9EC2',

    'root-node-wrapper__margin-bottom': '12px',
    'root-node-wrapper-svg__width': '18px',
    'root-node-wrapper-svg__height': '18px'

  };
});
//# sourceMappingURL=cssVariables.js.map