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
    global.RootNodeWrapper = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ', '\n\n\n  .collapse-expand-menu {\n    visibility: hidden;\n  }\n\n  :hover .collapse-expand-menu {\n    visibility: visible;\n  }\n\n  > i {\n    margin-right: 3px;\n  }\n\n  > i,\n  > i svg {\n    ', '\n    ', '\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ', '\n\n\n  .collapse-expand-menu {\n    visibility: hidden;\n  }\n\n  :hover .collapse-expand-menu {\n    visibility: visible;\n  }\n\n  > i {\n    margin-right: 3px;\n  }\n\n  > i,\n  > i svg {\n    ', '\n    ', '\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var _default = (0, _cssHelpers.autoCssGenerator)('root-node-wrapper');
  var _defaultSVG = (0, _cssHelpers.autoCssGenerator)('root-node-label-children-len');

  exports.default = _styledComponents2.default.div(_templateObject, _default('margin-bottom'), _defaultSVG('width'), _defaultSVG('height'));
});
//# sourceMappingURL=RootNodeWrapper.js.map