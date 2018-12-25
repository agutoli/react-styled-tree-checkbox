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

  var _templateObject = _taggedTemplateLiteral(['\n  width: 0;\n  height: 0;\n  opacity: 0;\n  cursor: pointer;\n  position: absolute;\n'], ['\n  width: 0;\n  height: 0;\n  opacity: 0;\n  cursor: pointer;\n  position: absolute;\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  cursor: pointer;\n  position: relative;\n\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: block;\n  cursor: pointer;\n  position: relative;\n\n  ', '\n  ', '\n  ', '\n  ', '\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &::after {\n    content: "";\n    display: none;\n    position: absolute;\n    transform: rotate(45deg);\n\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  }\n\n  ', ':hover ', ' ~ & {\n    ', '\n  }\n\n  ', ':checked ~ && {\n    ', '\n    ', '\n  }\n\n  ', ':checked ~ &:after {\n    display: block;\n  }\n'], ['\n  position: absolute;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &::after {\n    content: "";\n    display: none;\n    position: absolute;\n    transform: rotate(45deg);\n\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  }\n\n  ', ':hover ', ' ~ & {\n    ', '\n  }\n\n  ', ':checked ~ && {\n    ', '\n    ', '\n  }\n\n  ', ':checked ~ &:after {\n    display: block;\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var _inputWrapper = (0, _cssHelpers.autoCssGenerator)('input-checkbox-wrapper');
  var _inputCheckmark = (0, _cssHelpers.autoCssGenerator)('input-checkbox-checkmark');

  var Input = _styledComponents2.default.input(_templateObject);

  var InputWrapper = _styledComponents2.default.label(_templateObject2, _inputWrapper('font-size'), _inputWrapper('user-select'), _inputWrapper('padding-left'), _inputWrapper('margin-bottom'));

  var InputCheckmark = _styledComponents2.default.span(_templateObject3, _inputCheckmark('top'), _inputCheckmark('left'), _inputCheckmark('height'), _inputCheckmark('width'), _inputCheckmark('background-color'), _inputCheckmark('border-width'), _inputCheckmark('border-style'), _inputCheckmark('border-color'), _inputCheckmark('border-radius'), _inputCheckmark('left', 'after'), _inputCheckmark('top', 'after'), _inputCheckmark('width', 'after'), _inputCheckmark('height', 'after'), _inputCheckmark('border', 'after'), _inputCheckmark('border-width', 'after'), InputWrapper, Input, _inputCheckmark('background-color', 'hover'), Input, _inputCheckmark('border-color', 'checked'), _inputCheckmark('background-color', 'checked'), Input);

  exports.default = function (props) {
    return _react2.default.createElement(
      InputWrapper,
      null,
      _react2.default.createElement(Input, _extends({}, props, { type: 'checkbox' })),
      _react2.default.createElement(InputCheckmark, { className: 'checkmark' })
    );
  };
});
//# sourceMappingURL=InputCheckbox.js.map