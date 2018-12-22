(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './TreeCheckboxItem', './partials/TreeCheckboxWrapper'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./TreeCheckboxItem'), require('./partials/TreeCheckboxWrapper'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.TreeCheckboxItem, global.TreeCheckboxWrapper);
    global.TreeCheckbox = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _TreeCheckboxItem, _TreeCheckboxWrapper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _TreeCheckboxItem2 = _interopRequireDefault(_TreeCheckboxItem);

  var _TreeCheckboxWrapper2 = _interopRequireDefault(_TreeCheckboxWrapper);

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

  var TreeCheckbox = function (_React$PureComponent) {
    _inherits(TreeCheckbox, _React$PureComponent);

    function TreeCheckbox(props) {
      _classCallCheck(this, TreeCheckbox);

      var _this = _possibleConstructorReturn(this, (TreeCheckbox.__proto__ || Object.getPrototypeOf(TreeCheckbox)).call(this, props));

      _this.state = {
        currentSelected: null
      };

      _this.onToggleSelectAll = _this._onToggleSelectAll.bind(_this);
      return _this;
    }

    _createClass(TreeCheckbox, [{
      key: '_onToggleSelectAll',
      value: function _onToggleSelectAll(event) {
        this.setState({
          currentSelected: event.target.value
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            nodes = _props.nodes,
            showToggleText = _props.showToggleText,
            showToggleArrow = _props.showToggleArrow,
            showChildrenLength = _props.showChildrenLength;
        var currentSelected = this.state.currentSelected;


        return _react2.default.createElement(
          _TreeCheckboxWrapper2.default,
          null,
          nodes.map(function (node) {
            return _react2.default.createElement(_TreeCheckboxItem2.default, {
              key: 'root-node-item-' + node.value,
              node: node,
              showToggleText: showToggleText,
              showToggleArrow: showToggleArrow,
              showChildrenLength: showChildrenLength,
              collapsed: currentSelected != node.value,
              onToggleSelectAll: _this2.onToggleSelectAll });
          })
        );
      }
    }]);

    return TreeCheckbox;
  }(_react2.default.PureComponent);

  TreeCheckbox.propTypes = {
    nodes: _propTypes2.default.array,
    showChildrenLength: _propTypes2.default.bool,
    showToggleText: _propTypes2.default.bool,
    showToggleArrow: _propTypes2.default.bool
  };

  TreeCheckbox.defaultProps = {
    nodes: [],
    showChildrenLength: false
  };

  exports.default = TreeCheckbox;
});
//# sourceMappingURL=TreeCheckbox.js.map