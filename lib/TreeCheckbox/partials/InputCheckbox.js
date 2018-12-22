(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'styled-components', '../cssHelpers.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('styled-components'), require('../cssHelpers.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents, global.cssHelpers);
    global.InputCheckbox = mod.exports;
  }
})(this, function (exports, _react, _styledComponents, _cssHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _templateObject = _taggedTemplateLiteral(['\n  margin-right: 8px;\n  font-family: "Open Sans", Helvetica, Arial, sans-serif;\n'], ['\n  margin-right: 8px;\n  font-family: "Open Sans", Helvetica, Arial, sans-serif;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var Input = _styledComponents2.default.input(_templateObject);

  exports.default = function (props) {
    return _react2.default.createElement(Input, _extends({}, props, { type: 'checkbox' }));
  };
});
//# sourceMappingURL=InputCheckbox.js.map