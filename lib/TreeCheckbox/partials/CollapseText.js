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
    global.CollapseText = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  width: 50px;\n  cursor: pointer;\n  margin-left: 5px;\n  color: ', ';\n  font-size: ', ';\n  font-family: "Open Sans", Helvetica, Arial, sans-serif;\n'], ['\n  width: 50px;\n  cursor: pointer;\n  margin-left: 5px;\n  color: ', ';\n  font-size: ', ';\n  font-family: "Open Sans", Helvetica, Arial, sans-serif;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  exports.default = _styledComponents2.default.span(_templateObject, (0, _cssHelpers.varColor)('primary-blue'), (0, _cssHelpers.varSize)('typograph-small'));
});
//# sourceMappingURL=CollapseText.js.map