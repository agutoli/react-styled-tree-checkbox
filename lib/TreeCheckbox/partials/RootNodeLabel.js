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

  var _templateObject = _taggedTemplateLiteral(['\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: ', ';\n  line-height: 16px;\n  font-family: "Open Sans", Helvetica, Arial, sans-serif;\n\n  .children-length {\n    color: ', ';\n    margin-left: 3px;\n  }\n'], ['\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: ', ';\n  line-height: 16px;\n  font-family: "Open Sans", Helvetica, Arial, sans-serif;\n\n  .children-length {\n    color: ', ';\n    margin-left: 3px;\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  exports.default = _styledComponents2.default.label(_templateObject, (0, _cssHelpers.varSize)('typograph-medium'), (0, _cssHelpers.varColor)('gray-gray'));
});
//# sourceMappingURL=RootNodeLabel.js.map