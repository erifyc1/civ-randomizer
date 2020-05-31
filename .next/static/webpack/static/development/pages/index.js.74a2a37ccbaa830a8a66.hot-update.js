webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CivPreview.js":
/*!**********************************!*\
  !*** ./components/CivPreview.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
var _jsxFileName = "D:\\Jason\\programming\\VS Code Workspace\\react-tutorial\\components\\CivPreview.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CivPreview = props => {
  _s();

  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]);
  return __jsx("li", {
    className: 'civ' + (context.disabledCivs.includes(props.civ.name) ? ' disabled' : ''),
    onClick: () => {
      context.dispatchCiv({
        civ: props.civ.name,
        type: context.disabledCivs.includes(props.civ.name) ? 'REMOVE_CIV' : 'ADD_CIV'
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx("img", {
    src: props.civ.icon,
    alt: props.civ.name + ' icon',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, props.civ.name), context.disabledCivs.includes(props.civ.name) && __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 55
    }
  }, "Disabled")));
};

_s(CivPreview, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

_c = CivPreview;
/* harmony default export */ __webpack_exports__["default"] = (CivPreview);

var _c;

$RefreshReg$(_c, "CivPreview");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NpdlByZXZpZXcuanMiXSwibmFtZXMiOlsiQ2l2UHJldmlldyIsInByb3BzIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiZGlzYWJsZWRDaXZzIiwiaW5jbHVkZXMiLCJjaXYiLCJuYW1lIiwiZGlzcGF0Y2hDaXYiLCJ0eXBlIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUlDLEtBQUQsSUFBVztBQUFBOztBQUM3QixRQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNDLHdEQUFELENBQTFCO0FBRUEsU0FDQztBQUNDLGFBQVMsRUFBRSxTQUFTRixPQUFPLENBQUNHLFlBQVIsQ0FBcUJDLFFBQXJCLENBQThCTCxLQUFLLENBQUNNLEdBQU4sQ0FBVUMsSUFBeEMsSUFBZ0QsV0FBaEQsR0FBOEQsRUFBdkUsQ0FEWjtBQUVDLFdBQU8sRUFBRSxNQUFNO0FBQ2ROLGFBQU8sQ0FBQ08sV0FBUixDQUFvQjtBQUNuQkYsV0FBRyxFQUFFTixLQUFLLENBQUNNLEdBQU4sQ0FBVUMsSUFESTtBQUVuQkUsWUFBSSxFQUFFUixPQUFPLENBQUNHLFlBQVIsQ0FBcUJDLFFBQXJCLENBQThCTCxLQUFLLENBQUNNLEdBQU4sQ0FBVUMsSUFBeEMsSUFBZ0QsWUFBaEQsR0FBK0Q7QUFGbEQsT0FBcEI7QUFJQSxLQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRQztBQUFLLE9BQUcsRUFBRVAsS0FBSyxDQUFDTSxHQUFOLENBQVVJLElBQXBCO0FBQTBCLE9BQUcsRUFBRVYsS0FBSyxDQUFDTSxHQUFOLENBQVVDLElBQVYsR0FBaUIsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJELEVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1AsS0FBSyxDQUFDTSxHQUFOLENBQVVDLElBQWYsQ0FERCxFQUVFTixPQUFPLENBQUNHLFlBQVIsQ0FBcUJDLFFBQXJCLENBQThCTCxLQUFLLENBQUNNLEdBQU4sQ0FBVUMsSUFBeEMsS0FBaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGbkQsQ0FURCxDQUREO0FBZ0JBLENBbkJEOztHQUFNUixVOztLQUFBQSxVO0FBcUJTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzRhMmEzN2NjYmFhODMwYThhNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vcGFnZXMvX2FwcCc7XHJcblxyXG5jb25zdCBDaXZQcmV2aWV3ID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8bGlcclxuXHRcdFx0Y2xhc3NOYW1lPXsnY2l2JyArIChjb250ZXh0LmRpc2FibGVkQ2l2cy5pbmNsdWRlcyhwcm9wcy5jaXYubmFtZSkgPyAnIGRpc2FibGVkJyA6ICcnKX1cclxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdGNvbnRleHQuZGlzcGF0Y2hDaXYoe1xyXG5cdFx0XHRcdFx0Y2l2OiBwcm9wcy5jaXYubmFtZSxcclxuXHRcdFx0XHRcdHR5cGU6IGNvbnRleHQuZGlzYWJsZWRDaXZzLmluY2x1ZGVzKHByb3BzLmNpdi5uYW1lKSA/ICdSRU1PVkVfQ0lWJyA6ICdBRERfQ0lWJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9fT5cclxuXHRcdFx0PGltZyBzcmM9e3Byb3BzLmNpdi5pY29ufSBhbHQ9e3Byb3BzLmNpdi5uYW1lICsgJyBpY29uJ30gLz5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8aDM+e3Byb3BzLmNpdi5uYW1lfTwvaDM+XHJcblx0XHRcdFx0e2NvbnRleHQuZGlzYWJsZWRDaXZzLmluY2x1ZGVzKHByb3BzLmNpdi5uYW1lKSAmJiA8cD5EaXNhYmxlZDwvcD59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9saT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2l2UHJldmlldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==