(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'styled-components'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('styled-components'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents);
    global.ArrowCollapse = mod.exports;
  }
})(this, function (exports, _react, _styledComponents) {
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _templateObject = _taggedTemplateLiteral(['\n  to {\n    transform: rotate(-90deg);\n  }\n  from {\n    transform: rotate(0);\n  }\n'], ['\n  to {\n    transform: rotate(-90deg);\n  }\n  from {\n    transform: rotate(0);\n  }\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  to {\n    transform: rotate(0);\n  }\n  from {\n    transform: rotate(-90deg);\n  }\n'], ['\n  to {\n    transform: rotate(0);\n  }\n  from {\n    transform: rotate(-90deg);\n  }\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  > .react-pretty-icons {\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n\n    ', '\n    ', '\n\n    ', '\n    ', '\n  }\n'], ['\n  > .react-pretty-icons {\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n\n    ', '\n    ', '\n\n    ', '\n    ', '\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var arrowCollapsed = (0, _styledComponents.keyframes)(_templateObject);

  var arrowExpanded = (0, _styledComponents.keyframes)(_templateObject2);

  var ArrowWrapper = _styledComponents2.default.i(_templateObject3, function (props) {
    return !props.collapsed && '\n      transform: rotate(0);\n    ';
  }, function (props) {
    return !props.collapsed && props.enableKeyFrame && '\n      animation: ' + arrowExpanded + ' 0.1s ease-in-out;\n    ';
  }, function (props) {
    return props.collapsed && '\n      transform: rotate(-90deg);\n    ';
  }, function (props) {
    return props.collapsed && props.enableKeyFrame && '\n      animation: ' + arrowCollapsed + ' 0.3s ease-in-out;\n    ';
  });

  var AnimatedArrow = function (_React$PureComponent) {
    _inherits(AnimatedArrow, _React$PureComponent);

    function AnimatedArrow(props) {
      _classCallCheck(this, AnimatedArrow);

      var _this = _possibleConstructorReturn(this, (AnimatedArrow.__proto__ || Object.getPrototypeOf(AnimatedArrow)).call(this, props));

      _this.state = {
        enableKeyFrame: false
      };
      _this._clickHandler = _this.clickHandler.bind(_this);
      return _this;
    }

    _createClass(AnimatedArrow, [{
      key: 'clickHandler',
      value: function clickHandler(event) {
        this.setState({ enableKeyFrame: true });
        this.props.onClick(event);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          ArrowWrapper,
          _extends({}, this.props, { enableKeyFrame: this.state.enableKeyFrame, onClick: this._clickHandler }),
          _react2.default.createElement('div', { name: 'arrow-down-drop' })
        );
      }
    }]);

    return AnimatedArrow;
  }(_react2.default.PureComponent);

  exports.default = AnimatedArrow;
});
//# sourceMappingURL=ArrowCollapse.js.map