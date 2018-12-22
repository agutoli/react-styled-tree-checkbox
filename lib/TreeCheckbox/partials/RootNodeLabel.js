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
    global.RootNodeLabel = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  .children-length {\n    ', '\n    ', '\n    ', '\n    margin-left: 3px;\n  }\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  .children-length {\n    ', '\n    ', '\n    ', '\n    margin-left: 3px;\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var _default = (0, _cssHelpers.autoCssGenerator)('root-node-label');
  var _childrenLen = (0, _cssHelpers.autoCssGenerator)('root-node-label-children-len');

  exports.default = _styledComponents2.default.div(_templateObject, _default('font-size'), _default('font-weight'), _default('font-family'), _default('line-height'), _childrenLen('color'), _childrenLen('font-size'), _childrenLen('font-weight'));
});
//# sourceMappingURL=RootNodeLabel.js.map