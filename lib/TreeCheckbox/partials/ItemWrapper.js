(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'styled-components'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('styled-components'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.styledComponents);
    global.ItemWrapper = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _styledComponents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var _templateObject = _taggedTemplateLiteral(['\n    overflow: hidden;\n    transition: height 0.2s ease-out;\n    height: ', 'px;\n\n    ', '\n\n    ', '\n  '], ['\n    overflow: hidden;\n    transition: height 0.2s ease-out;\n    height: ', 'px;\n\n    ', '\n\n    ', '\n  ']),
      _templateObject2 = _taggedTemplateLiteral([''], ['']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var MIN_HEIGHT = 25;

  function createKeyFrames(height) {
    return _styledComponents2.default.div(_templateObject, MIN_HEIGHT, function (props) {
      return props.collapsed && '\n      height: ' + MIN_HEIGHT + 'px;\n    ';
    }, function (props) {
      return !props.collapsed && '\n      height: ' + height + 'px;\n    ';
    });
  }

  var ItemWrapper = function (_React$PureComponent) {
    _inherits(ItemWrapper, _React$PureComponent);

    function ItemWrapper(props) {
      _classCallCheck(this, ItemWrapper);

      var _this = _possibleConstructorReturn(this, (ItemWrapper.__proto__ || Object.getPrototypeOf(ItemWrapper)).call(this, props));

      _this.state = {
        ElementWrapper: createKeyFrames(MIN_HEIGHT),
        enableKeyFrame: false
      };

      _this.childrenClientHeight = MIN_HEIGHT;
      _this.callRef = _this._callRef.bind(_this);
      return _this;
    }

    _createClass(ItemWrapper, [{
      key: '_callRef',
      value: function _callRef(child) {
        if (child) {
          var domNode = _reactDom2.default.findDOMNode(child);
          if (domNode) {
            var rect = domNode.getBoundingClientRect();
            this.childrenClientHeight = this.childrenClientHeight + rect.height;
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var ElementWrapper = this.state.ElementWrapper;

        var Element = ElementWrapper ? ElementWrapper : _styledComponents2.default.div(_templateObject2);
        return _react2.default.createElement(
          Element,
          this.props,
          _react2.default.Children.map(this.props.children, function (element, idx) {
            return _react2.default.cloneElement(element, { ref: _this2.callRef });
          })
        );
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount(props, state) {
        var _this3 = this;

        setTimeout(function () {
          _this3.setState({
            ElementWrapper: createKeyFrames(_this3.childrenClientHeight)
          });
        }, 100);
      }
    }]);

    return ItemWrapper;
  }(_react2.default.PureComponent);

  exports.default = ItemWrapper;
});
//# sourceMappingURL=ItemWrapper.js.map