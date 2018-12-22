(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './TreeCheckbox'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./TreeCheckbox'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.TreeCheckbox);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _TreeCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _TreeCheckbox2 = _interopRequireDefault(_TreeCheckbox);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _TreeCheckbox2.default;
});
//# sourceMappingURL=index.js.map