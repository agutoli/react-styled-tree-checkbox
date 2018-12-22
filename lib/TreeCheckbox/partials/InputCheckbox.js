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

  var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n'], ['\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  position: relative;\n  padding-left: 24px;\n  margin-bottom: 16px;\n  cursor: pointer;\n  font-size: 22px;\n  user-select: none;\n'], ['\n  display: block;\n  position: relative;\n  padding-left: 24px;\n  margin-bottom: 16px;\n  cursor: pointer;\n  font-size: 22px;\n  user-select: none;\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 14px;\n  width: 14px;\n  background-color: #F7F7F7;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #DFE3EE;\n  border-radius: 3px;\n\n  &::after {\n    content: "";\n    position: absolute;\n    display: none;\n    left: 5px;\n    top: 2px;\n    width: 3px;\n    height: 6px;\n    border: solid white;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  ', ':hover ', ' ~ & {\n    background-color: #DFE3EE;\n  }\n\n  ', ':checked ~ && {\n    background-color: #8C9EC2;\n    border-color: #3C5A96;\n  }\n\n  ', ':checked ~ &:after {\n    display: block;\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 14px;\n  width: 14px;\n  background-color: #F7F7F7;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #DFE3EE;\n  border-radius: 3px;\n\n  &::after {\n    content: "";\n    position: absolute;\n    display: none;\n    left: 5px;\n    top: 2px;\n    width: 3px;\n    height: 6px;\n    border: solid white;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  ', ':hover ', ' ~ & {\n    background-color: #DFE3EE;\n  }\n\n  ', ':checked ~ && {\n    background-color: #8C9EC2;\n    border-color: #3C5A96;\n  }\n\n  ', ':checked ~ &:after {\n    display: block;\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var _default = (0, _cssHelpers.autoCssGenerator)('input-checkbox');

  var Input = _styledComponents2.default.input(_templateObject);

  var InputWrapper = _styledComponents2.default.label(_templateObject2);

  var InputCheckmark = _styledComponents2.default.span(_templateObject3, InputWrapper, Input, Input, Input);

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