webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CivCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CivCard */ "./components/CivCard.js");
/* harmony import */ var _components_CivList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CivList */ "./components/CivList.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");
var _jsxFileName = "D:\\Jason\\programming\\VS Code Workspace\\react-tutorial\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const reducer = (prevState, action) => {
  switch (action.type) {
    case 'ADD_CIV':
      return [...prevState, action.civ];

    case 'REMOVE_CIV':
      return prevState.filter(civ => civ !== action.civ);

    default:
      return prevState;
  }
};

const bgCivs = ['America', 'Arabia', 'Australia', 'Aztec', 'Brazil', 'China', 'Egypt', 'England', 'France', 'Germany', 'Greece', 'India', 'Indonesia', 'Japan', 'Khmer', 'Kongo', 'Macedon', 'Norway', 'Nubia', 'Persia', 'Poland', 'Rome', 'Russia', 'Scythia', 'Spain', 'Sumeria'];
const rnfCivs = ['Cree', 'Netherlands', 'Georgia', 'Korea', 'Mapuche', 'Mongolia', 'Scotland', 'Zulu'];
const gsCivs = ['Canada', 'Hungary', 'Inca', 'Mali', 'Māori', 'Ottomans', 'Phoenicia', 'Sweden'];

const Index = () => {
  _s();

  const {
    0: disabledCivs,
    1: dispatchCiv
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, []);
  const {
    0: civs,
    1: setCivs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: selectedCiv,
    1: setSelectedCiv
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: bg,
    1: setBg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: rnf,
    1: setRnf
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: gs,
    1: setGs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default()('/api').then(res => {
      setCivs(res.data);
    });
  }, []);
  return __jsx(_app__WEBPACK_IMPORTED_MODULE_4__["GlobalContext"].Provider, {
    value: {
      dispatchCiv,
      disabledCivs
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }
  }, "Civ Randomizer"), __jsx("button", {
    id: "randomize-button",
    onClick: () => {
      const availableCivs = civs.filter(civ => !disabledCivs.includes(civ.name));

      if (availableCivs.length !== 0) {
        const idx = Math.floor(availableCivs.length * Math.random());
        axios__WEBPACK_IMPORTED_MODULE_0___default()(`/api?civ=${availableCivs[idx].name}`).then(res => {
          const civ = res.data;
          civ.leader = civ.leader[Math.floor(Math.random() * civ.leader.length)];
          setSelectedCiv(civ);
          dispatchCiv({
            type: 'ADD_CIV',
            civ: civ.name
          });
        });
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }
  }, "Randomize!"), __jsx("div", {
    id: "toolbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/46/9b/df/469bdfbc-8c91-9c6f-5782-21cf38850a94/App.png/1200x630bb.png",
    alt: "Base Game Civs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }), __jsx("label", {
    className: bg ? 'checked' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 6
    }
  }, __jsx("input", {
    type: "checkbox",
    onChange: () => {
      setBg(!bg);
      bgCivs.forEach(civ => dispatchCiv({
        type: 'REMOVE_CIV',
        civ
      }));
    },
    checked: bg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }))), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "https://vignette.wikia.nocookie.net/civilization/images/d/d0/R%26F-Only.png/",
    alt: "Rise & Fall Civs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 6
    }
  }), __jsx("label", {
    className: rnf ? 'checked' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }, __jsx("input", {
    type: "checkbox",
    onChange: () => {
      setRnf(!rnf);
      rnfCivs.forEach(civ => dispatchCiv({
        type: 'REMOVE_CIV',
        civ
      }));
    },
    checked: rnf,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }))), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "https://vignette.wikia.nocookie.net/civilization/images/9/96/GS-Only.png/",
    alt: "Gathering Storm Civs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 6
    }
  }), __jsx("label", {
    className: gs ? 'checked' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 6
    }
  }, __jsx("input", {
    type: "checkbox",
    onChange: () => {
      setGs(!gs);
      gsCivs.forEach(civ => dispatchCiv({
        type: 'REMOVE_CIV',
        civ
      }));
    },
    checked: gs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  })))), __jsx("div", {
    id: "main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 4
    }
  }, __jsx("div", {
    id: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "civ-list-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 6
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, "Civ List")), __jsx(_components_CivList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    civs: civs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 6
    }
  })), __jsx("div", {
    id: "chosen-civ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, selectedCiv && __jsx(_components_CivCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    civ: selectedCiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 42
    }
  }))));
};

_s(Index, "SzsXPsdwVJv2wG4J/+4j0NxzKZk=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicHJldlN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNpdiIsImZpbHRlciIsImJnQ2l2cyIsInJuZkNpdnMiLCJnc0NpdnMiLCJJbmRleCIsImRpc2FibGVkQ2l2cyIsImRpc3BhdGNoQ2l2IiwidXNlUmVkdWNlciIsImNpdnMiLCJzZXRDaXZzIiwidXNlU3RhdGUiLCJzZWxlY3RlZENpdiIsInNldFNlbGVjdGVkQ2l2IiwiYmciLCJzZXRCZyIsInJuZiIsInNldFJuZiIsImdzIiwic2V0R3MiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYXZhaWxhYmxlQ2l2cyIsImluY2x1ZGVzIiwibmFtZSIsImxlbmd0aCIsImlkeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlYWRlciIsImZvckVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDQyxTQUFELEVBQVlDLE1BQVosS0FBdUI7QUFDdEMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0MsU0FBSyxTQUFMO0FBQ0MsYUFBTyxDQUFDLEdBQUdGLFNBQUosRUFBZUMsTUFBTSxDQUFDRSxHQUF0QixDQUFQOztBQUNELFNBQUssWUFBTDtBQUNDLGFBQU9ILFNBQVMsQ0FBQ0ksTUFBVixDQUFrQkQsR0FBRCxJQUFTQSxHQUFHLEtBQUtGLE1BQU0sQ0FBQ0UsR0FBekMsQ0FBUDs7QUFDRDtBQUNDLGFBQU9ILFNBQVA7QUFORjtBQVFBLENBVEQ7O0FBV0EsTUFBTUssTUFBTSxHQUFHLENBQ2QsU0FEYyxFQUVkLFFBRmMsRUFHZCxXQUhjLEVBSWQsT0FKYyxFQUtkLFFBTGMsRUFNZCxPQU5jLEVBT2QsT0FQYyxFQVFkLFNBUmMsRUFTZCxRQVRjLEVBVWQsU0FWYyxFQVdkLFFBWGMsRUFZ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O0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxNQUFFLEVBQUMsZ0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsQ0FERCxFQUlDLE1BQUMsMkRBQUQ7QUFBUyxRQUFJLEVBQUVULElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpELENBREQsRUFPQztBQUFLLE1BQUUsRUFBQyxZQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JHLFdBQVcsSUFBSSxNQUFDLDJEQUFEO0FBQVMsT0FBRyxFQUFFQSxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBckMsQ0FQRCxDQXBFRCxDQUREO0FBZ0ZBLENBOUZEOztHQUFNUCxLOztLQUFBQSxLO0FBZ0dTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMWE5YzIzNzZmZjIyMjJjNTA0MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2l2Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NpdkNhcmQnO1xyXG5pbXBvcnQgQ2l2TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0Npdkxpc3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi9fYXBwJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAocHJldlN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdBRERfQ0lWJzpcclxuXHRcdFx0cmV0dXJuIFsuLi5wcmV2U3RhdGUsIGFjdGlvbi5jaXZdO1xyXG5cdFx0Y2FzZSAnUkVNT1ZFX0NJVic6XHJcblx0XHRcdHJldHVybiBwcmV2U3RhdGUuZmlsdGVyKChjaXYpID0+IGNpdiAhPT0gYWN0aW9uLmNpdik7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gcHJldlN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGJnQ2l2cyA9IFtcclxuXHQnQW1lcmljYScsXHJcblx0J0FyYWJpYScsXHJcblx0J0F1c3RyYWxpYScsXHJcblx0J0F6dGVjJyxcclxuXHQnQnJhemlsJyxcclxuXHQnQ2hpbmEnLFxyXG5cdCdFZ3lwdCcsXHJcblx0J0VuZ2xhbmQnLFxyXG5cdCdGcmFuY2UnLFxyXG5cdCdHZXJtYW55JyxcclxuXHQnR3JlZWNlJyxcclxuXHQnSW5kaWEnLFxyXG5cdCdJbmRvbmVzaWEnLFxyXG5cdCdKYXBhbicsXHJcblx0J0tobWVyJyxcclxuXHQnS29uZ28nLFxyXG5cdCdNYWNlZG9uJyxcclxuXHQnTm9yd2F5JyxcclxuXHQnTnViaWEnLFxyXG5cdCdQZXJzaWEnLFxyXG5cdCdQb2xhbmQnLFxyXG5cdCdSb21lJyxcclxuXHQnUnVzc2lhJyxcclxuXHQnU2N5dGhpYScsXHJcblx0J1NwYWluJyxcclxuXHQnU3VtZXJpYSdcclxuXTtcclxuY29uc3Qgcm5mQ2l2cyA9IFsnQ3JlZScsICdOZXRoZXJsYW5kcycsICdHZW9yZ2lhJywgJ0tvcmVhJywgJ01hcHVjaGUnLCAnTW9uZ29saWEnLCAnU2NvdGxhbmQnLCAnWnVsdSddO1xyXG5jb25zdCBnc0NpdnMgPSBbJ0NhbmFkYScsICdIdW5nYXJ5JywgJ0luY2EnLCAnTWFsaScsICdNxIFvcmknLCAnT3R0b21hbnMnLCAnUGhvZW5pY2lhJywgJ1N3ZWRlbiddO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblx0Y29uc3QgW2Rpc2FibGVkQ2l2cywgZGlzcGF0Y2hDaXZdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSk7XHJcblx0Y29uc3QgW2NpdnMsIHNldENpdnNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtzZWxlY3RlZENpdiwgc2V0U2VsZWN0ZWRDaXZdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2JnLCBzZXRCZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHRjb25zdCBbcm5mLCBzZXRSbmZdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3QgW2dzLCBzZXRHc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGF4aW9zKCcvYXBpJykudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHNldENpdnMocmVzLmRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZGlzcGF0Y2hDaXYsIGRpc2FibGVkQ2l2cyB9fT5cclxuXHRcdFx0PGgxPkNpdiBSYW5kb21pemVyPC9oMT5cclxuXHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdGlkPVwicmFuZG9taXplLWJ1dHRvblwiXHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgYXZhaWxhYmxlQ2l2cyA9IGNpdnMuZmlsdGVyKChjaXYpID0+ICFkaXNhYmxlZENpdnMuaW5jbHVkZXMoY2l2Lm5hbWUpKTtcclxuXHRcdFx0XHRcdGlmIChhdmFpbGFibGVDaXZzLmxlbmd0aCAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBpZHggPSBNYXRoLmZsb29yKGF2YWlsYWJsZUNpdnMubGVuZ3RoICogTWF0aC5yYW5kb20oKSk7XHJcblx0XHRcdFx0XHRcdGF4aW9zKGAvYXBpP2Npdj0ke2F2YWlsYWJsZUNpdnNbaWR4XS5uYW1lfWApLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNpdiA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdGNpdi5sZWFkZXIgPSBjaXYubGVhZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNpdi5sZWFkZXIubGVuZ3RoKV07XHJcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRDaXYoY2l2KTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwYXRjaENpdih7XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnQUREX0NJVicsXHJcblx0XHRcdFx0XHRcdFx0XHRjaXY6IGNpdi5uYW1lXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH19PlxyXG5cdFx0XHRcdFJhbmRvbWl6ZSFcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxkaXYgaWQ9XCJ0b29sYmFyXCI+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaXM1LXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUHVycGxlMTEzL3Y0LzQ2LzliL2RmLzQ2OWJkZmJjLThjOTEtOWM2Zi01NzgyLTIxY2YzODg1MGE5NC9BcHAucG5nLzEyMDB4NjMwYmIucG5nXCJcclxuXHRcdFx0XHRcdFx0YWx0PVwiQmFzZSBHYW1lIENpdnNcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2JnID8gJ2NoZWNrZWQnIDogJyd9PlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRCZyghYmcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YmdDaXZzLmZvckVhY2goKGNpdikgPT4gZGlzcGF0Y2hDaXYoeyB0eXBlOiAnUkVNT1ZFX0NJVicsIGNpdiB9KSk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtiZ31cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvZC9kMC9SJTI2Ri1Pbmx5LnBuZy9cIiBhbHQ9XCJSaXNlICZhbXA7IEZhbGwgQ2l2c1wiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtybmYgPyAnY2hlY2tlZCcgOiAnJ30+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFJuZighcm5mKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJuZkNpdnMuZm9yRWFjaCgoY2l2KSA9PiBkaXNwYXRjaENpdih7IHR5cGU6ICdSRU1PVkVfQ0lWJywgY2l2IH0pKTtcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3JuZn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvOS85Ni9HUy1Pbmx5LnBuZy9cIiBhbHQ9XCJHYXRoZXJpbmcgU3Rvcm0gQ2l2c1wiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtncyA/ICdjaGVja2VkJyA6ICcnfT5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0R3MoIWdzKTtcclxuXHRcdFx0XHRcdFx0XHRcdGdzQ2l2cy5mb3JFYWNoKChjaXYpID0+IGRpc3BhdGNoQ2l2KHsgdHlwZTogJ1JFTU9WRV9DSVYnLCBjaXYgfSkpO1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17Z3N9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwibGlzdFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBpZD1cImNpdi1saXN0LXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdDxoMj5DaXYgTGlzdDwvaDI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxDaXZMaXN0IGNpdnM9e2NpdnN9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBpZD1cImNob3Nlbi1jaXZcIj57c2VsZWN0ZWRDaXYgJiYgPENpdkNhcmQgY2l2PXtzZWxlY3RlZENpdn0gLz59PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==