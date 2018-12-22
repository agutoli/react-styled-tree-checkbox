(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../partials/ChildNodeLabel'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../partials/ChildNodeLabel'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.ChildNodeLabel);
    global.childLabelRenderer = mod.exports;
  }
})(this, function (exports, _react, _ChildNodeLabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _ChildNodeLabel2 = _interopRequireDefault(_ChildNodeLabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (node) {
    return _react2.default.createElement(
      _ChildNodeLabel2.default,
      { htmlFor: 'root-node-' + node.value },
      node.label
    );
  };
});
//# sourceMappingURL=childLabelRenderer.js.map