(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'styled-components', '../cssHelpers.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('styled-components'), require('../cssHelpers.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents, global.cssHelpers);
    global.ChildNodeLabel = mod.exports;
  }
})(this, function (exports, _styledComponents, _cssHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var _default = (0, _cssHelpers.autoCssGenerator)('child-node-label');

  exports.default = _styledComponents2.default.div(_templateObject, _default('font-size'), _default('font-family'), _default('line-height'), _default('user-select'));
});
//# sourceMappingURL=ChildNodeLabel.js.map