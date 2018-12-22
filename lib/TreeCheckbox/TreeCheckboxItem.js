(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './partials/ItemWrapper', './partials/CollapseText', './partials/ArrowCollapse', './partials/RootNodeLabel', './partials/InputCheckbox', './partials/RootNodeWrapper', './partials/ChildNodeWrapper', './partials/ChildrenNodeWrapper', './renders/childLabelRender'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./partials/ItemWrapper'), require('./partials/CollapseText'), require('./partials/ArrowCollapse'), require('./partials/RootNodeLabel'), require('./partials/InputCheckbox'), require('./partials/RootNodeWrapper'), require('./partials/ChildNodeWrapper'), require('./partials/ChildrenNodeWrapper'), require('./renders/childLabelRender'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.ItemWrapper, global.CollapseText, global.ArrowCollapse, global.RootNodeLabel, global.InputCheckbox, global.RootNodeWrapper, global.ChildNodeWrapper, global.ChildrenNodeWrapper, global.childLabelRender);
    global.TreeCheckboxItem = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _ItemWrapper, _CollapseText, _ArrowCollapse, _RootNodeLabel, _InputCheckbox, _RootNodeWrapper, _ChildNodeWrapper, _ChildrenNodeWrapper, _childLabelRender) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _ItemWrapper2 = _interopRequireDefault(_ItemWrapper);

  var _CollapseText2 = _interopRequireDefault(_CollapseText);

  var _ArrowCollapse2 = _interopRequireDefault(_ArrowCollapse);

  var _RootNodeLabel2 = _interopRequireDefault(_RootNodeLabel);

  var _InputCheckbox2 = _interopRequireDefault(_InputCheckbox);

  var _RootNodeWrapper2 = _interopRequireDefault(_RootNodeWrapper);

  var _ChildNodeWrapper2 = _interopRequireDefault(_ChildNodeWrapper);

  var _ChildrenNodeWrapper2 = _interopRequireDefault(_ChildrenNodeWrapper);

  var _childLabelRender2 = _interopRequireDefault(_childLabelRender);

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

  var TreeCheckboxItem = function (_React$PureComponent) {
    _inherits(TreeCheckboxItem, _React$PureComponent);

    function TreeCheckboxItem(props) {
      _classCallCheck(this, TreeCheckboxItem);

      var _this = _possibleConstructorReturn(this, (TreeCheckboxItem.__proto__ || Object.getPrototypeOf(TreeCheckboxItem)).call(this, props));

      _this.state = {
        selectedValues: new Set([]),
        collapsed: props.collapsed
      };

      _this.onToggleCollape = _this._onToggleCollape.bind(_this);
      _this.onChangeChildField = _this._onChangeChildField.bind(_this);
      _this.onToggleSelectAll = _this._onToggleSelectAll.bind(_this);
      return _this;
    }

    _createClass(TreeCheckboxItem, [{
      key: '_onToggleCollape',
      value: function _onToggleCollape() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
    }, {
      key: '_onChangeChildField',
      value: function _onChangeChildField(_ref) {
        var target = _ref.target;
        var selectedValues = this.state.selectedValues;

        selectedValues[target.checked ? 'add' : 'delete'](parseInt(target.value));
        this.setState({ selectedValues: new Set(selectedValues) });
      }
    }, {
      key: '_onToggleSelectAll',
      value: function _onToggleSelectAll(event) {
        var node = this.props.node;
        var selectedValues = this.state.selectedValues;


        if (!event.target.checked) {
          selectedValues.clear();
        }

        if (event.target.checked) {
          node.children.map(function (child) {
            return selectedValues.add(parseInt(child.value));
          });
        }

        this.setState({ selectedValues: new Set(selectedValues) });
        this.props.onToggleSelectAll(event);
      }
    }, {
      key: 'renderChildren',
      value: function renderChildren(children) {
        var _this2 = this;

        var _state = this.state,
            collapsed = _state.collapsed,
            selectedValues = _state.selectedValues;

        return _react2.default.createElement(
          _ChildrenNodeWrapper2.default,
          { 'data-children-node-wrapper': true, key: 'children-node-wrapper' },
          children.map(function (node) {
            return _react2.default.createElement(
              _ChildNodeWrapper2.default,
              { key: node.value, 'data-child-node-wrapper': true },
              console.log(selectedValues, node),
              _react2.default.createElement(_InputCheckbox2.default, {
                value: node.value,
                checked: selectedValues.has(node.value),
                id: 'root-node-' + node.value,
                onChange: _this2.onChangeChildField }),
              _this2.props.childLabelRender(node)
            );
          })
        );
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(_ref2) {
        var collapsed = _ref2.collapsed;

        this.setState({ collapsed: collapsed });
      }
    }, {
      key: 'render',
      value: function render() {
        var _state2 = this.state,
            collapsed = _state2.collapsed,
            selectedValues = _state2.selectedValues;
        var _props = this.props,
            node = _props.node,
            showToggleArrow = _props.showToggleArrow,
            showToggleText = _props.showToggleText;


        var isAllSelected = selectedValues.size === node.children.length;

        return _react2.default.createElement(
          _ItemWrapper2.default,
          { collapsed: collapsed },
          _react2.default.createElement(
            _RootNodeWrapper2.default,
            { key: node.value, 'data-root-node-wrapper': true },
            showToggleArrow ? _react2.default.createElement(_ArrowCollapse2.default, { collapsed: collapsed, onClick: this.onToggleCollape }) : null,
            _react2.default.createElement(_InputCheckbox2.default, {
              value: node.value,
              checked: isAllSelected,
              onChange: this.onToggleSelectAll }),
            node.icon,
            _react2.default.createElement(
              _RootNodeLabel2.default,
              { onClick: this.onToggleCollape, 'data-root-node-label': true },
              node.label,
              ' ',
              _react2.default.createElement(
                'span',
                { className: 'children-length' },
                '(',
                node.children.length,
                ')'
              )
            ),
            _react2.default.createElement(
              _CollapseText2.default,
              {
                className: 'collapse-expand-menu',
                onClick: this.onToggleCollape },
              showToggleText ? collapsed ? 'expand' : 'collapse' : null
            )
          ),
          this.renderChildren(node.children)
        );
      }
    }]);

    return TreeCheckboxItem;
  }(_react2.default.PureComponent);

  TreeCheckboxItem.propTypes = {
    collapsed: _propTypes2.default.bool,
    showChanges: _propTypes2.default.bool,
    showToggleArrow: _propTypes2.default.bool,
    showToggleText: _propTypes2.default.bool,
    childLabelRender: _propTypes2.default.func,
    onToggleSelectAll: _propTypes2.default.func
  };

  TreeCheckboxItem.defaultProps = {
    childLabelRender: _childLabelRender2.default,
    collapsed: false,
    showChanges: true,
    showToggleArrow: false,
    showToggleText: false,
    onToggleSelectAll: function onToggleSelectAll() {}
  };

  exports.default = TreeCheckboxItem;
});
//# sourceMappingURL=TreeCheckboxItem.js.map