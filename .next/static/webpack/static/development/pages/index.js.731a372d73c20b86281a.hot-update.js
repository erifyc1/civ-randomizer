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
const gsCivs = ['Canada', 'Hungary', 'Inca', 'Mali', 'Māori', 'Ottomans', 'Phonecia', 'Sweden'];

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
        type: bg ? 'ADD_CIV' : 'REMOVE_CIV',
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
        type: rnf ? 'ADD_CIV' : 'REMOVE_CIV',
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
        type: gs ? 'ADD_CIV' : 'REMOVE_CIV',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicHJldlN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNpdiIsImZpbHRlciIsImJnQ2l2cyIsInJuZkNpdnMiLCJnc0NpdnMiLCJJbmRleCIsImRpc2FibGVkQ2l2cyIsImRpc3BhdGNoQ2l2IiwidXNlUmVkdWNlciIsImNpdnMiLCJzZXRDaXZzIiwidXNlU3RhdGUiLCJzZWxlY3RlZENpdiIsInNldFNlbGVjdGVkQ2l2IiwiYmciLCJzZXRCZyIsInJuZiIsInNldFJuZiIsImdzIiwic2V0R3MiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYXZhaWxhYmxlQ2l2cyIsImluY2x1ZGVzIiwibmFtZSIsImxlbmd0aCIsImlkeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlYWRlciIsImZvckVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDQyxTQUFELEVBQVlDLE1BQVosS0FBdUI7QUFDdEMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0MsU0FBSyxTQUFMO0FBQ0MsYUFBTyxDQUFDLEdBQUdGLFNBQUosRUFBZUMsTUFBTSxDQUFDRSxHQUF0QixDQUFQOztBQUNELFNBQUssWUFBTDtBQUNDLGFBQU9ILFNBQVMsQ0FBQ0ksTUFBVixDQUFrQkQsR0FBRCxJQUFTQSxHQUFHLEtBQUtGLE1BQU0sQ0FBQ0UsR0FBekMsQ0FBUDs7QUFDRDtBQUNDLGFBQU9ILFNBQVA7QUFORjtBQVFBLENBVEQ7O0FBV0EsTUFBTUssTUFBTSxHQUFHLENBQ2QsU0FEYyxFQUVkLFFBRmMsRUFHZCxXQUhjLEVBSWQsT0FKYyxFQUtkLFFBTGMsRUFNZCxPQU5jLEVBT2QsT0FQYyxFQVFkLFNBUmMsRUFTZCxRQVRjLEVBVWQsU0FWYyxFQVdkLFFBWGMsRUFZ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QUEsSUFURCxDQUZELENBaENELENBckJELEVBb0VDO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssTUFBRSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELENBREQsRUFJQyxNQUFDLDJEQUFEO0FBQVMsUUFBSSxFQUFFVCxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxDQURELEVBT0M7QUFBSyxNQUFFLEVBQUMsWUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCRyxXQUFXLElBQUksTUFBQywyREFBRDtBQUFTLE9BQUcsRUFBRUEsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXJDLENBUEQsQ0FwRUQsQ0FERDtBQWdGQSxDQTlGRDs7R0FBTVAsSzs7S0FBQUEsSztBQWdHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjczMWEzNzJkNzNjMjBiODYyODFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENpdkNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DaXZDYXJkJztcclxuaW1wb3J0IENpdkxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9DaXZMaXN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4vX2FwcCc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHByZXZTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX0NJVic6XHJcblx0XHRcdHJldHVybiBbLi4ucHJldlN0YXRlLCBhY3Rpb24uY2l2XTtcclxuXHRcdGNhc2UgJ1JFTU9WRV9DSVYnOlxyXG5cdFx0XHRyZXR1cm4gcHJldlN0YXRlLmZpbHRlcigoY2l2KSA9PiBjaXYgIT09IGFjdGlvbi5jaXYpO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHByZXZTdGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBiZ0NpdnMgPSBbXHJcblx0J0FtZXJpY2EnLFxyXG5cdCdBcmFiaWEnLFxyXG5cdCdBdXN0cmFsaWEnLFxyXG5cdCdBenRlYycsXHJcblx0J0JyYXppbCcsXHJcblx0J0NoaW5hJyxcclxuXHQnRWd5cHQnLFxyXG5cdCdFbmdsYW5kJyxcclxuXHQnRnJhbmNlJyxcclxuXHQnR2VybWFueScsXHJcblx0J0dyZWVjZScsXHJcblx0J0luZGlhJyxcclxuXHQnSW5kb25lc2lhJyxcclxuXHQnSmFwYW4nLFxyXG5cdCdLaG1lcicsXHJcblx0J0tvbmdvJyxcclxuXHQnTWFjZWRvbicsXHJcblx0J05vcndheScsXHJcblx0J051YmlhJyxcclxuXHQnUGVyc2lhJyxcclxuXHQnUG9sYW5kJyxcclxuXHQnUm9tZScsXHJcblx0J1J1c3NpYScsXHJcblx0J1NjeXRoaWEnLFxyXG5cdCdTcGFpbicsXHJcblx0J1N1bWVyaWEnXHJcbl07XHJcbmNvbnN0IHJuZkNpdnMgPSBbJ0NyZWUnLCAnTmV0aGVybGFuZHMnLCAnR2VvcmdpYScsICdLb3JlYScsICdNYXB1Y2hlJywgJ01vbmdvbGlhJywgJ1Njb3RsYW5kJywgJ1p1bHUnXTtcclxuY29uc3QgZ3NDaXZzID0gWydDYW5hZGEnLCAnSHVuZ2FyeScsICdJbmNhJywgJ01hbGknLCAnTcSBb3JpJywgJ090dG9tYW5zJywgJ1Bob25lY2lhJywgJ1N3ZWRlbiddO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblx0Y29uc3QgW2Rpc2FibGVkQ2l2cywgZGlzcGF0Y2hDaXZdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSk7XHJcblx0Y29uc3QgW2NpdnMsIHNldENpdnNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtzZWxlY3RlZENpdiwgc2V0U2VsZWN0ZWRDaXZdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2JnLCBzZXRCZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHRjb25zdCBbcm5mLCBzZXRSbmZdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3QgW2dzLCBzZXRHc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGF4aW9zKCcvYXBpJykudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHNldENpdnMocmVzLmRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZGlzcGF0Y2hDaXYsIGRpc2FibGVkQ2l2cyB9fT5cclxuXHRcdFx0PGgxPkNpdiBSYW5kb21pemVyPC9oMT5cclxuXHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdGlkPVwicmFuZG9taXplLWJ1dHRvblwiXHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgYXZhaWxhYmxlQ2l2cyA9IGNpdnMuZmlsdGVyKChjaXYpID0+ICFkaXNhYmxlZENpdnMuaW5jbHVkZXMoY2l2Lm5hbWUpKTtcclxuXHRcdFx0XHRcdGlmIChhdmFpbGFibGVDaXZzLmxlbmd0aCAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBpZHggPSBNYXRoLmZsb29yKGF2YWlsYWJsZUNpdnMubGVuZ3RoICogTWF0aC5yYW5kb20oKSk7XHJcblx0XHRcdFx0XHRcdGF4aW9zKGAvYXBpP2Npdj0ke2F2YWlsYWJsZUNpdnNbaWR4XS5uYW1lfWApLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNpdiA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdGNpdi5sZWFkZXIgPSBjaXYubGVhZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNpdi5sZWFkZXIubGVuZ3RoKV07XHJcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRDaXYoY2l2KTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwYXRjaENpdih7XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnQUREX0NJVicsXHJcblx0XHRcdFx0XHRcdFx0XHRjaXY6IGNpdi5uYW1lXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH19PlxyXG5cdFx0XHRcdFJhbmRvbWl6ZSFcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxkaXYgaWQ9XCJ0b29sYmFyXCI+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaXM1LXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUHVycGxlMTEzL3Y0LzQ2LzliL2RmLzQ2OWJkZmJjLThjOTEtOWM2Zi01NzgyLTIxY2YzODg1MGE5NC9BcHAucG5nLzEyMDB4NjMwYmIucG5nXCJcclxuXHRcdFx0XHRcdFx0YWx0PVwiQmFzZSBHYW1lIENpdnNcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2JnID8gJ2NoZWNrZWQnIDogJyd9PlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRCZyghYmcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YmdDaXZzLmZvckVhY2goKGNpdikgPT4gZGlzcGF0Y2hDaXYoeyB0eXBlOiBiZyA/ICdBRERfQ0lWJyA6ICdSRU1PVkVfQ0lWJywgY2l2IH0pKTtcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2JnfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy9kL2QwL1IlMjZGLU9ubHkucG5nL1wiIGFsdD1cIlJpc2UgJmFtcDsgRmFsbCBDaXZzXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e3JuZiA/ICdjaGVja2VkJyA6ICcnfT5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0Um5mKCFybmYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cm5mQ2l2cy5mb3JFYWNoKChjaXYpID0+IGRpc3BhdGNoQ2l2KHsgdHlwZTogcm5mID8gJ0FERF9DSVYnIDogJ1JFTU9WRV9DSVYnLCBjaXYgfSkpO1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17cm5mfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy85Lzk2L0dTLU9ubHkucG5nL1wiIGFsdD1cIkdhdGhlcmluZyBTdG9ybSBDaXZzXCIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2dzID8gJ2NoZWNrZWQnIDogJyd9PlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRHcyghZ3MpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Z3NDaXZzLmZvckVhY2goKGNpdikgPT4gZGlzcGF0Y2hDaXYoeyB0eXBlOiBncyA/ICdBRERfQ0lWJyA6ICdSRU1PVkVfQ0lWJywgY2l2IH0pKTtcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2dzfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XHJcblx0XHRcdFx0PGRpdiBpZD1cImxpc3RcIj5cclxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJjaXYtbGlzdC10aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+Q2l2IExpc3Q8L2gyPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8Q2l2TGlzdCBjaXZzPXtjaXZzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJjaG9zZW4tY2l2XCI+e3NlbGVjdGVkQ2l2ICYmIDxDaXZDYXJkIGNpdj17c2VsZWN0ZWRDaXZ9IC8+fTwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=