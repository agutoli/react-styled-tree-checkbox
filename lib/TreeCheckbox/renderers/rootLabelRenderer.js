(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../partials/RootNodeLabel'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../partials/RootNodeLabel'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.RootNodeLabel);
    global.rootLabelRenderer = mod.exports;
  }
})(this, function (exports, _react, _RootNodeLabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _RootNodeLabel2 = _interopRequireDefault(_RootNodeLabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (node, props, options) {
    return _react2.default.createElement(
      _RootNodeLabel2.default,
      { htmlFor: 'root-node-' + node.value, 'data-root-node-label': true },
      node.label,
      ' ',
      props.showChildrenLength ? _react2.default.createElement(
        'span',
        { className: 'children-length' },
        '(',
        node.children.length,
        ')'
      ) : null
    );
  };
});
//# sourceMappingURL=rootLabelRenderer.js.map