(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './cssVariables'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./cssVariables'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.cssVariables);
    global.cssHelpers = mod.exports;
  }
})(this, function (exports, _cssVariables) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.varSize = exports.varColor = exports.autoCssGenerator = undefined;

  var _cssVariables2 = _interopRequireDefault(_cssVariables);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var autoCssGenerator = exports.autoCssGenerator = function AutoCssGenerator(prefix) {
    return function (property, pseudoClass) {
      var suffix = pseudoClass ? '--' + pseudoClass : '';
      var varname = prefix + '__' + property + suffix;
      return '\n      ' + property + ': ' + _cssVariables2.default[varname] + ';\n      ' + property + ': var(--styled-' + varname + ', ' + _cssVariables2.default[varname] + ');\n    ';
    };
  };

  var varColor = exports.varColor = function ColorPrefix(suffix) {
    return '\n    var(--styled-color-' + suffix + ')\n  ';
  };

  var varSize = exports.varSize = function SizePrefix(suffix) {
    return '\n    var(--styled-size-' + suffix + ');\n  ';
  };

  // export const cssVar = function CSSVar(prefix) {
  //   return function (property, pseudoClass) {
  //     const suffix = pseudoClass ? `--${pseudoClass}` : '';
  //     const varname = `${prefix}__${property}${suffix}`;
  //     return variables[varname];
  //   };
  // }
  //
  // export const globalCssVar = function GlobalCSSVar(property, pseudoClass) {
  //   const suffix = pseudoClass ? `--${pseudoClass}` : '';
  //   return variables[`tree-checkbox__${property}${suffix}`];
  // }
});
//# sourceMappingURL=cssHelpers.js.map