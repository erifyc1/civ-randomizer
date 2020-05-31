module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CivCard.js":
/*!*******************************!*\
  !*** ./components/CivCard.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_iconify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/iconify */ "./utils/iconify.js");
var _jsxFileName = "D:\\Jason\\programming\\VS Code Workspace\\react-tutorial\\components\\CivCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CivCard = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "outer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, props.civ.name), __jsx("img", {
    src: props.civ.icon,
    alt: props.civ.name + ' icon',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, props.civ.leader.name), __jsx("img", {
    src: props.civ.leader.portrait,
    alt: props.civ.leader.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }))), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, props.civ.abilityName), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }, Object(_utils_iconify__WEBPACK_IMPORTED_MODULE_1__["default"])(props.civ.ability)), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, props.civ.leader.abilityName), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, Object(_utils_iconify__WEBPACK_IMPORTED_MODULE_1__["default"])(props.civ.leader.ability)), props.civ.infrastructure.map((inf, i) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, inf.name, " ", inf.replaces === null ? inf.district === null ? '(Unique Improvement)' : '(Unique Building)' : `(Replaces ${inf.replaces})`), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, inf.effects.map((effect, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 8
    }
  }, Object(_utils_iconify__WEBPACK_IMPORTED_MODULE_1__["default"])(effect)))))), props.civ.unit.map((unit, i) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, unit.name, " ", unit.replaces === null ? '(Unique Unit)' : `(Replaces ${unit.replaces})`), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, unit.special.map((special, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, Object(_utils_iconify__WEBPACK_IMPORTED_MODULE_1__["default"])(special)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CivCard);

/***/ }),

/***/ "./components/CivList.js":
/*!*******************************!*\
  !*** ./components/CivList.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CivPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CivPreview */ "./components/CivPreview.js");
var _jsxFileName = "D:\\Jason\\programming\\VS Code Workspace\\react-tutorial\\components\\CivList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CivList = props => {
  return __jsx("ul", {
    id: "civ-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, props.civs.map((civ, i) => __jsx(_CivPreview__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: i,
    civ: civ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CivList);

/***/ }),

/***/ "./components/CivPreview.js":
/*!**********************************!*\
  !*** ./components/CivPreview.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
var _jsxFileName = "D:\\Jason\\programming\\VS Code Workspace\\react-tutorial\\components\\CivPreview.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CivPreview = props => {
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

/* harmony default export */ __webpack_exports__["default"] = (CivPreview);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: GlobalContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Jason\\programming\\VS Code Workspace\\react-tutorial\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GlobalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CivCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CivCard */ "./components/CivCard.js");
/* harmony import */ var _components_CivList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CivList */ "./components/CivList.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");
var _jsxFileName = "D:\\Jason\\programming\\VS Code Workspace\\react-tutorial\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







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
  const {
    0: disabledCivs,
    1: dispatchCiv
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, []);
  const {
    0: civs,
    1: setCivs
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: selectedCiv,
    1: setSelectedCiv
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: bg,
    1: setBg
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  const {
    0: rnf,
    1: setRnf
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  const {
    0: gs,
    1: setGs
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default()('/api').then(res => {
      setCivs(res.data);
    });
  }, []);
  return __jsx(_app__WEBPACK_IMPORTED_MODULE_5__["GlobalContext"].Provider, {
    value: {
      dispatchCiv,
      disabledCivs
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }
  }, "Civ Randomizer"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "Civ Randomizer")), __jsx("button", {
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
      lineNumber: 70,
      columnNumber: 4
    }
  }, "Randomize!"), __jsx("div", {
    id: "toolbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/46/9b/df/469bdfbc-8c91-9c6f-5782-21cf38850a94/App.png/1200x630bb.png",
    alt: "Base Game Civs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 6
    }
  }), __jsx("label", {
    className: bg ? 'checked' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }))), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "https://vignette.wikia.nocookie.net/civilization/images/d/d0/R%26F-Only.png/",
    alt: "Rise & Fall Civs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 6
    }
  }), __jsx("label", {
    className: rnf ? 'checked' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 110,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }))), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "https://vignette.wikia.nocookie.net/civilization/images/9/96/GS-Only.png/",
    alt: "Gathering Storm Civs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 6
    }
  }), __jsx("label", {
    className: gs ? 'checked' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  })))), __jsx("div", {
    id: "main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 4
    }
  }, __jsx("div", {
    id: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "civ-list-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 6
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, "Civ List")), __jsx(_components_CivList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    civs: civs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 6
    }
  })), __jsx("div", {
    id: "chosen-civ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, selectedCiv && __jsx(_components_CivCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    civ: selectedCiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 42
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/iconify.js":
/*!**************************!*\
  !*** ./utils/iconify.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return iconify; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Jason\\programming\\VS Code Workspace\\react-tutorial\\utils\\iconify.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const urls = {
  science: 'https://vignette.wikia.nocookie.net/civilization/images/7/79/Civ6Science.png/',
  culture: 'https://vignette.wikia.nocookie.net/civilization/images/2/2a/Civ6Culture.png/',
  gold: 'https://vignette.wikia.nocookie.net/civilization/images/b/bc/Civ6Gold.png/',
  faith: 'https://vignette.wikia.nocookie.net/civilization/images/8/82/Civ6Faith.png/',
  production: 'https://vignette.wikia.nocookie.net/civilization/images/7/74/Civ6Production.png/',
  food: 'https://vignette.wikia.nocookie.net/civilization/images/6/65/Civ6Food.png/',
  housing: 'https://vignette.wikia.nocookie.net/civilization/images/a/ae/Housing6.png/',
  amenity: 'https://vignette.wikia.nocookie.net/civilization/images/6/65/Amenities6.png/',
  movement: 'https://vignette.wikia.nocookie.net/civilization/images/8/89/Civ6Movement.png/',
  tourism: 'https://vignette.wikia.nocookie.net/civilization/images/5/5b/Tourism6.png/',
  'combat strength': 'https://vignette.wikia.nocookie.net/civilization/images/b/b6/Civ6StrengthIcon.png/',
  'ranged strength': 'https://vignette.wikia.nocookie.net/civilization/images/d/da/Civ6RangedStrength.png/',
  'bombard strength': 'https://vignette.wikia.nocookie.net/civilization/images/5/59/Bombard_Strength_%28Civ6%29.png/',
  'anti-air strength': 'https://vignette.wikia.nocookie.net/civilization/images/2/28/Anti-Air_Strength_%28Civ6%29.png/',
  'religious strength': 'https://vignette.wikia.nocookie.net/civilization/images/2/22/ReligiousStrength6.png/',
  range: 'https://vignette.wikia.nocookie.net/civilization/images/9/9e/Civ6Range.png/',
  trader: 'https://vignette.wikia.nocookie.net/civilization/images/0/0f/TradeRoute6.png/',
  'trade route': 'https://vignette.wikia.nocookie.net/civilization/images/0/0f/TradeRoute6.png/',
  visibility: 'https://vignette.wikia.nocookie.net/civilization/images/c/ce/DiplomaticVisibility6.png/',
  'trading post': 'https://vignette.wikia.nocookie.net/civilization/images/7/72/Trading_Post_%28Civ6%29.png/',
  population: 'https://vignette.wikia.nocookie.net/civilization/images/f/f8/Citizen6.png/',
  relic: 'https://vignette.wikia.nocookie.net/civilization/images/c/c5/Relic6.png/',
  artifact: 'https://vignette.wikia.nocookie.net/civilization/images/8/87/Artifact6.png/',
  sculpture: 'https://vignette.wikia.nocookie.net/civilization/images/5/56/Sculpture6.png/',
  portrait: 'https://vignette.wikia.nocookie.net/civilization/images/9/99/Portrait6.png/',
  'diplomatic favor': 'https://vignette.wikia.nocookie.net/civilization/images/c/c4/Diplomatic_Favor_%28Civ6%29.png/',
  eureka: 'https://vignette.wikia.nocookie.net/civilization/images/5/52/Eureka6.png/',
  inspiration: 'https://vignette.wikia.nocookie.net/civilization/images/1/13/Inspiration6.png/',
  envoy: 'https://vignette.wikia.nocookie.net/civilization/images/2/24/Envoy6.png/',
  power: 'https://vignette.wikia.nocookie.net/civilization/images/5/59/Power_%28Civ6%29.png/',
  horses: 'https://vignette.wikia.nocookie.net/civilization/images/9/9b/Horses_%28Civ6%29.png/',
  iron: 'https://vignette.wikia.nocookie.net/civilization/images/7/78/Iron_%28Civ6%29.png/',
  niter: 'https://vignette.wikia.nocookie.net/civilization/images/3/3f/Niter_%28Civ6%29.png/',
  coal: 'https://vignette.wikia.nocookie.net/civilization/images/d/d8/Coal_%28Civ6%29.png/',
  oil: 'https://vignette.wikia.nocookie.net/civilization/images/d/de/Oil_%28Civ6%29.png/',
  aluminum: 'https://vignette.wikia.nocookie.net/civilization/images/0/06/Aluminum_%28Civ6%29.png/',
  uranium: 'https://vignette.wikia.nocookie.net/civilization/images/a/a5/Uranium_%28Civ6%29.png/',
  'great general': 'https://vignette.wikia.nocookie.net/civilization/images/f/fd/General6.png/',
  'great admiral': 'https://vignette.wikia.nocookie.net/civilization/images/1/1a/Admiral6.png/',
  'great engineer': 'https://vignette.wikia.nocookie.net/civilization/images/8/8b/Engineer6.png/',
  'great writer': 'https://vignette.wikia.nocookie.net/civilization/images/3/3f/Writer6.png/',
  'great musician': 'https://vignette.wikia.nocookie.net/civilization/images/0/00/Musician6.png/',
  'great scientist': 'https://vignette.wikia.nocookie.net/civilization/images/8/84/Scientist6.png/',
  'great prophet': 'https://vignette.wikia.nocookie.net/civilization/images/d/d3/Prophet6.png/',
  'great artist': 'https://vignette.wikia.nocookie.net/civilization/images/7/75/Artist6.png/',
  'great merchant': 'https://vignette.wikia.nocookie.net/civilization/images/4/45/Merchant6.png/',
  campus: 'https://vignette.wikia.nocookie.net/civilization/images/1/18/Campus_%28Civ6%29.png/',
  canal: 'https://vignette.wikia.nocookie.net/civilization/images/f/fd/Canal_%28Civ6%29.png/',
  dam: 'https://vignette.wikia.nocookie.net/civilization/images/5/50/Dam_%28Civ6%29.png/',
  'holy site': 'https://vignette.wikia.nocookie.net/civilization/images/a/a8/Holy_Site_%28Civ6%29.png/',
  'theater square': 'https://vignette.wikia.nocookie.net/civilization/images/4/44/Theater_Square_%28Civ6%29.png/',
  encampment: 'https://vignette.wikia.nocookie.net/civilization/images/2/24/Encampment_%28Civ6%29.png/',
  harbor: 'https://vignette.wikia.nocookie.net/civilization/images/d/df/Harbor_%28Civ6%29.png/',
  'commercial hub': 'https://vignette.wikia.nocookie.net/civilization/images/f/fe/Commercial_Hub_%28Civ6%29.png/',
  'industrial zone': 'https://vignette.wikia.nocookie.net/civilization/images/0/0b/Industrial_Zone_%28Civ6%29.png/',
  'entertainment complex': 'https://vignette.wikia.nocookie.net/civilization/images/c/cb/Entertainment_Complex_%28Civ6%29.png/',
  'water park': 'https://vignette.wikia.nocookie.net/civilization/images/2/2c/Water_Park_%28Civ6%29.png/',
  aqueduct: 'https://vignette.wikia.nocookie.net/civilization/images/f/f9/Aqueduct_%28Civ6%29.png/',
  neighborhood: 'https://vignette.wikia.nocookie.net/civilization/images/3/31/Neighborhood_%28Civ6%29.png/',
  aerodrome: 'https://vignette.wikia.nocookie.net/civilization/images/c/c7/Aerodrome_%28Civ6%29.png/',
  spaceport: 'https://vignette.wikia.nocookie.net/civilization/images/7/7d/Spaceport_%28Civ6%29.png/',
  'government plaza': 'https://vignette.wikia.nocookie.net/civilization/images/b/b3/Government_Plaza_%28Civ6%29.png/'
};
/**
 * @param {string} text
 */

function iconify(text) {
  const tokens = [];
  let str = text;

  while (str.match(/<[\w\s]+>/)) {
    const match = str.match(/<[\w\s]+>/);
    const idx = match.index;
    tokens.push(str.slice(0, idx));
    const repl = str.slice(idx, idx + match[0].length).slice(1, -1);
    tokens.push(__jsx("img", {
      src: urls[repl.toLowerCase()],
      alt: repl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }));
    str = str.slice(idx + match[0].length);
  }

  tokens.push(str);
  return tokens;
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Jason\programming\VS Code Workspace\react-tutorial\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaXZDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2l2TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NpdlByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9pY29uaWZ5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDaXZDYXJkIiwicHJvcHMiLCJjaXYiLCJuYW1lIiwiaWNvbiIsImxlYWRlciIsInBvcnRyYWl0IiwiYWJpbGl0eU5hbWUiLCJpY29uaWZ5IiwiYWJpbGl0eSIsImluZnJhc3RydWN0dXJlIiwibWFwIiwiaW5mIiwiaSIsInJlcGxhY2VzIiwiZGlzdHJpY3QiLCJlZmZlY3RzIiwiZWZmZWN0IiwidW5pdCIsInNwZWNpYWwiLCJDaXZMaXN0IiwiY2l2cyIsIkNpdlByZXZpZXciLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJkaXNhYmxlZENpdnMiLCJpbmNsdWRlcyIsImRpc3BhdGNoQ2l2IiwidHlwZSIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVkdWNlciIsInByZXZTdGF0ZSIsImFjdGlvbiIsImZpbHRlciIsImJnQ2l2cyIsInJuZkNpdnMiLCJnc0NpdnMiLCJJbmRleCIsInVzZVJlZHVjZXIiLCJzZXRDaXZzIiwidXNlU3RhdGUiLCJzZWxlY3RlZENpdiIsInNldFNlbGVjdGVkQ2l2IiwiYmciLCJzZXRCZyIsInJuZiIsInNldFJuZiIsImdzIiwic2V0R3MiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYXZhaWxhYmxlQ2l2cyIsImxlbmd0aCIsImlkeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZvckVhY2giLCJ1cmxzIiwic2NpZW5jZSIsImN1bHR1cmUiLCJnb2xkIiwiZmFpdGgiLCJwcm9kdWN0aW9uIiwiZm9vZCIsImhvdXNpbmciLCJhbWVuaXR5IiwibW92ZW1lbnQiLCJ0b3VyaXNtIiwicmFuZ2UiLCJ0cmFkZXIiLCJ2aXNpYmlsaXR5IiwicG9wdWxhdGlvbiIsInJlbGljIiwiYXJ0aWZhY3QiLCJzY3VscHR1cmUiLCJldXJla2EiLCJpbnNwaXJhdGlvbiIsImVudm95IiwicG93ZXIiLCJob3JzZXMiLCJpcm9uIiwibml0ZXIiLCJjb2FsIiwib2lsIiwiYWx1bWludW0iLCJ1cmFuaXVtIiwiY2FtcHVzIiwiY2FuYWwiLCJkYW0iLCJlbmNhbXBtZW50IiwiaGFyYm9yIiwiYXF1ZWR1Y3QiLCJuZWlnaGJvcmhvb2QiLCJhZXJvZHJvbWUiLCJzcGFjZXBvcnQiLCJ0ZXh0IiwidG9rZW5zIiwic3RyIiwibWF0Y2giLCJpbmRleCIsInB1c2giLCJzbGljZSIsInJlcGwiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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a0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGljb25pZnkgZnJvbSAnLi4vdXRpbHMvaWNvbmlmeSc7XHJcblxyXG5jb25zdCBDaXZDYXJkID0gKHByb3BzKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGgyPntwcm9wcy5jaXYubmFtZX08L2gyPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e3Byb3BzLmNpdi5pY29ufSBhbHQ9e3Byb3BzLmNpdi5uYW1lICsgJyBpY29uJ30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGgyPntwcm9wcy5jaXYubGVhZGVyLm5hbWV9PC9oMj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPXtwcm9wcy5jaXYubGVhZGVyLnBvcnRyYWl0fSBhbHQ9e3Byb3BzLmNpdi5sZWFkZXIubmFtZX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxoMz57cHJvcHMuY2l2LmFiaWxpdHlOYW1lfTwvaDM+XHJcblx0XHRcdDxwPntpY29uaWZ5KHByb3BzLmNpdi5hYmlsaXR5KX08L3A+XHJcblx0XHRcdDxoMz57cHJvcHMuY2l2LmxlYWRlci5hYmlsaXR5TmFtZX08L2gzPlxyXG5cdFx0XHQ8cD57aWNvbmlmeShwcm9wcy5jaXYubGVhZGVyLmFiaWxpdHkpfTwvcD5cclxuXHRcdFx0e3Byb3BzLmNpdi5pbmZyYXN0cnVjdHVyZS5tYXAoKGluZiwgaSkgPT4gKFxyXG5cdFx0XHRcdDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0PGgzPlxyXG5cdFx0XHRcdFx0XHR7aW5mLm5hbWV9IHtpbmYucmVwbGFjZXMgPT09IG51bGwgPyAoaW5mLmRpc3RyaWN0ID09PSBudWxsID8gJyhVbmlxdWUgSW1wcm92ZW1lbnQpJyA6ICcoVW5pcXVlIEJ1aWxkaW5nKScpIDogYChSZXBsYWNlcyAke2luZi5yZXBsYWNlc30pYH1cclxuXHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdHtpbmYuZWZmZWN0cy5tYXAoKGVmZmVjdCwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2l9PntpY29uaWZ5KGVmZmVjdCl9PC9saT5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdCkpfVxyXG5cdFx0XHR7cHJvcHMuY2l2LnVuaXQubWFwKCh1bml0LCBpKSA9PiAoXHJcblx0XHRcdFx0PFJlYWN0LkZyYWdtZW50IGtleT17aX0+XHJcblx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdHt1bml0Lm5hbWV9IHt1bml0LnJlcGxhY2VzID09PSBudWxsID8gJyhVbmlxdWUgVW5pdCknIDogYChSZXBsYWNlcyAke3VuaXQucmVwbGFjZXN9KWB9XHJcblx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHR7dW5pdC5zcGVjaWFsLm1hcCgoc3BlY2lhbCwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2l9PntpY29uaWZ5KHNwZWNpYWwpfTwvbGk+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXZDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2l2UHJldmlldyBmcm9tICcuL0NpdlByZXZpZXcnO1xyXG5cclxuY29uc3QgQ2l2TGlzdCA9IChwcm9wcykgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8dWwgaWQ9XCJjaXYtbGlzdFwiPlxyXG5cdFx0XHR7cHJvcHMuY2l2cy5tYXAoKGNpdiwgaSkgPT4gKFxyXG5cdFx0XHRcdDxDaXZQcmV2aWV3IGtleT17aX0gY2l2PXtjaXZ9IC8+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC91bD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2l2TGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9wYWdlcy9fYXBwJztcclxuXHJcbmNvbnN0IENpdlByZXZpZXcgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxsaVxyXG5cdFx0XHRjbGFzc05hbWU9eydjaXYnICsgKGNvbnRleHQuZGlzYWJsZWRDaXZzLmluY2x1ZGVzKHByb3BzLmNpdi5uYW1lKSA/ICcgZGlzYWJsZWQnIDogJycpfVxyXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0Y29udGV4dC5kaXNwYXRjaENpdih7XHJcblx0XHRcdFx0XHRjaXY6IHByb3BzLmNpdi5uYW1lLFxyXG5cdFx0XHRcdFx0dHlwZTogY29udGV4dC5kaXNhYmxlZENpdnMuaW5jbHVkZXMocHJvcHMuY2l2Lm5hbWUpID8gJ1JFTU9WRV9DSVYnIDogJ0FERF9DSVYnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH19PlxyXG5cdFx0XHQ8aW1nIHNyYz17cHJvcHMuY2l2Lmljb259IGFsdD17cHJvcHMuY2l2Lm5hbWUgKyAnIGljb24nfSAvPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxoMz57cHJvcHMuY2l2Lm5hbWV9PC9oMz5cclxuXHRcdFx0XHR7Y29udGV4dC5kaXNhYmxlZENpdnMuaW5jbHVkZXMocHJvcHMuY2l2Lm5hbWUpICYmIDxwPkRpc2FibGVkPC9wPn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2xpPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXZQcmV2aWV3O1xyXG4iLCJleHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG5cdHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2l2Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NpdkNhcmQnO1xyXG5pbXBvcnQgQ2l2TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0Npdkxpc3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi9fYXBwJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAocHJldlN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdBRERfQ0lWJzpcclxuXHRcdFx0cmV0dXJuIFsuLi5wcmV2U3RhdGUsIGFjdGlvbi5jaXZdO1xyXG5cdFx0Y2FzZSAnUkVNT1ZFX0NJVic6XHJcblx0XHRcdHJldHVybiBwcmV2U3RhdGUuZmlsdGVyKChjaXYpID0+IGNpdiAhPT0gYWN0aW9uLmNpdik7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gcHJldlN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGJnQ2l2cyA9IFtcclxuXHQnQW1lcmljYScsXHJcblx0J0FyYWJpYScsXHJcblx0J0F1c3RyYWxpYScsXHJcblx0J0F6dGVjJyxcclxuXHQnQnJhemlsJyxcclxuXHQnQ2hpbmEnLFxyXG5cdCdFZ3lwdCcsXHJcblx0J0VuZ2xhbmQnLFxyXG5cdCdGcmFuY2UnLFxyXG5cdCdHZXJtYW55JyxcclxuXHQnR3JlZWNlJyxcclxuXHQnSW5kaWEnLFxyXG5cdCdJbmRvbmVzaWEnLFxyXG5cdCdKYXBhbicsXHJcblx0J0tobWVyJyxcclxuXHQnS29uZ28nLFxyXG5cdCdNYWNlZG9uJyxcclxuXHQnTm9yd2F5JyxcclxuXHQnTnViaWEnLFxyXG5cdCdQZXJzaWEnLFxyXG5cdCdQb2xhbmQnLFxyXG5cdCdSb21lJyxcclxuXHQnUnVzc2lhJyxcclxuXHQnU2N5dGhpYScsXHJcblx0J1NwYWluJyxcclxuXHQnU3VtZXJpYSdcclxuXTtcclxuY29uc3Qgcm5mQ2l2cyA9IFsnQ3JlZScsICdOZXRoZXJsYW5kcycsICdHZW9yZ2lhJywgJ0tvcmVhJywgJ01hcHVjaGUnLCAnTW9uZ29saWEnLCAnU2NvdGxhbmQnLCAnWnVsdSddO1xyXG5jb25zdCBnc0NpdnMgPSBbJ0NhbmFkYScsICdIdW5nYXJ5JywgJ0luY2EnLCAnTWFsaScsICdNxIFvcmknLCAnT3R0b21hbnMnLCAnUGhvbmVjaWEnLCAnU3dlZGVuJ107XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHRjb25zdCBbZGlzYWJsZWRDaXZzLCBkaXNwYXRjaENpdl0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdKTtcclxuXHRjb25zdCBbY2l2cywgc2V0Q2l2c10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3NlbGVjdGVkQ2l2LCBzZXRTZWxlY3RlZENpdl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbYmcsIHNldEJnXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdGNvbnN0IFtybmYsIHNldFJuZl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHRjb25zdCBbZ3MsIHNldEdzXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YXhpb3MoJy9hcGknKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0c2V0Q2l2cyhyZXMuZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBkaXNwYXRjaENpdiwgZGlzYWJsZWRDaXZzIH19PlxyXG5cdFx0XHQ8aDE+Q2l2IFJhbmRvbWl6ZXI8L2gxPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+Q2l2IFJhbmRvbWl6ZXI8L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRpZD1cInJhbmRvbWl6ZS1idXR0b25cIlxyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGF2YWlsYWJsZUNpdnMgPSBjaXZzLmZpbHRlcigoY2l2KSA9PiAhZGlzYWJsZWRDaXZzLmluY2x1ZGVzKGNpdi5uYW1lKSk7XHJcblx0XHRcdFx0XHRpZiAoYXZhaWxhYmxlQ2l2cy5sZW5ndGggIT09IDApIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgaWR4ID0gTWF0aC5mbG9vcihhdmFpbGFibGVDaXZzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpO1xyXG5cdFx0XHRcdFx0XHRheGlvcyhgL2FwaT9jaXY9JHthdmFpbGFibGVDaXZzW2lkeF0ubmFtZX1gKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBjaXYgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRjaXYubGVhZGVyID0gY2l2LmxlYWRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaXYubGVhZGVyLmxlbmd0aCldO1xyXG5cdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkQ2l2KGNpdik7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2hDaXYoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ0FERF9DSVYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2l2OiBjaXYubmFtZVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9fT5cclxuXHRcdFx0XHRSYW5kb21pemUhXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8ZGl2IGlkPVwidG9vbGJhclwiPlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2lzNS1zc2wubXpzdGF0aWMuY29tL2ltYWdlL3RodW1iL1B1cnBsZTExMy92NC80Ni85Yi9kZi80NjliZGZiYy04YzkxLTljNmYtNTc4Mi0yMWNmMzg4NTBhOTQvQXBwLnBuZy8xMjAweDYzMGJiLnBuZ1wiXHJcblx0XHRcdFx0XHRcdGFsdD1cIkJhc2UgR2FtZSBDaXZzXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtiZyA/ICdjaGVja2VkJyA6ICcnfT5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0QmcoIWJnKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJnQ2l2cy5mb3JFYWNoKChjaXYpID0+IGRpc3BhdGNoQ2l2KHsgdHlwZTogYmcgPyAnQUREX0NJVicgOiAnUkVNT1ZFX0NJVicsIGNpdiB9KSk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtiZ31cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvZC9kMC9SJTI2Ri1Pbmx5LnBuZy9cIiBhbHQ9XCJSaXNlICZhbXA7IEZhbGwgQ2l2c1wiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtybmYgPyAnY2hlY2tlZCcgOiAnJ30+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFJuZighcm5mKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJuZkNpdnMuZm9yRWFjaCgoY2l2KSA9PiBkaXNwYXRjaENpdih7IHR5cGU6IHJuZiA/ICdBRERfQ0lWJyA6ICdSRU1PVkVfQ0lWJywgY2l2IH0pKTtcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3JuZn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvOS85Ni9HUy1Pbmx5LnBuZy9cIiBhbHQ9XCJHYXRoZXJpbmcgU3Rvcm0gQ2l2c1wiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtncyA/ICdjaGVja2VkJyA6ICcnfT5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0R3MoIWdzKTtcclxuXHRcdFx0XHRcdFx0XHRcdGdzQ2l2cy5mb3JFYWNoKChjaXYpID0+IGRpc3BhdGNoQ2l2KHsgdHlwZTogZ3MgPyAnQUREX0NJVicgOiAnUkVNT1ZFX0NJVicsIGNpdiB9KSk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtnc31cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJsaXN0XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGlkPVwiY2l2LWxpc3QtdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PGgyPkNpdiBMaXN0PC9oMj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PENpdkxpc3QgY2l2cz17Y2l2c30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiY2hvc2VuLWNpdlwiPntzZWxlY3RlZENpdiAmJiA8Q2l2Q2FyZCBjaXY9e3NlbGVjdGVkQ2l2fSAvPn08L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXJscyA9IHtcclxuXHRzY2llbmNlOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy83Lzc5L0NpdjZTY2llbmNlLnBuZy8nLFxyXG5cdGN1bHR1cmU6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzIvMmEvQ2l2NkN1bHR1cmUucG5nLycsXHJcblx0Z29sZDogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvYi9iYy9DaXY2R29sZC5wbmcvJyxcclxuXHRmYWl0aDogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvOC84Mi9DaXY2RmFpdGgucG5nLycsXHJcblx0cHJvZHVjdGlvbjogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNy83NC9DaXY2UHJvZHVjdGlvbi5wbmcvJyxcclxuXHRmb29kOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy82LzY1L0NpdjZGb29kLnBuZy8nLFxyXG5cdGhvdXNpbmc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2EvYWUvSG91c2luZzYucG5nLycsXHJcblx0YW1lbml0eTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNi82NS9BbWVuaXRpZXM2LnBuZy8nLFxyXG5cdG1vdmVtZW50OiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy84Lzg5L0NpdjZNb3ZlbWVudC5wbmcvJyxcclxuXHR0b3VyaXNtOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy81LzViL1RvdXJpc202LnBuZy8nLFxyXG5cdCdjb21iYXQgc3RyZW5ndGgnOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy9iL2I2L0NpdjZTdHJlbmd0aEljb24ucG5nLycsXHJcblx0J3JhbmdlZCBzdHJlbmd0aCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2QvZGEvQ2l2NlJhbmdlZFN0cmVuZ3RoLnBuZy8nLFxyXG5cdCdib21iYXJkIHN0cmVuZ3RoJzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNS81OS9Cb21iYXJkX1N0cmVuZ3RoXyUyOENpdjYlMjkucG5nLycsXHJcblx0J2FudGktYWlyIHN0cmVuZ3RoJzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvMi8yOC9BbnRpLUFpcl9TdHJlbmd0aF8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdCdyZWxpZ2lvdXMgc3RyZW5ndGgnOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8yLzIyL1JlbGlnaW91c1N0cmVuZ3RoNi5wbmcvJyxcclxuXHRyYW5nZTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvOS85ZS9DaXY2UmFuZ2UucG5nLycsXHJcblx0dHJhZGVyOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8wLzBmL1RyYWRlUm91dGU2LnBuZy8nLFxyXG5cdCd0cmFkZSByb3V0ZSc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzAvMGYvVHJhZGVSb3V0ZTYucG5nLycsXHJcblx0dmlzaWJpbGl0eTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvYy9jZS9EaXBsb21hdGljVmlzaWJpbGl0eTYucG5nLycsXHJcblx0J3RyYWRpbmcgcG9zdCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzcvNzIvVHJhZGluZ19Qb3N0XyUyOENpdjYlMjkucG5nLycsXHJcblx0cG9wdWxhdGlvbjogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvZi9mOC9DaXRpemVuNi5wbmcvJyxcclxuXHRyZWxpYzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvYy9jNS9SZWxpYzYucG5nLycsXHJcblx0YXJ0aWZhY3Q6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzgvODcvQXJ0aWZhY3Q2LnBuZy8nLFxyXG5cdHNjdWxwdHVyZTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNS81Ni9TY3VscHR1cmU2LnBuZy8nLFxyXG5cdHBvcnRyYWl0OiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy85Lzk5L1BvcnRyYWl0Ni5wbmcvJyxcclxuXHQnZGlwbG9tYXRpYyBmYXZvcic6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2MvYzQvRGlwbG9tYXRpY19GYXZvcl8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdGV1cmVrYTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNS81Mi9FdXJla2E2LnBuZy8nLFxyXG5cdGluc3BpcmF0aW9uOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8xLzEzL0luc3BpcmF0aW9uNi5wbmcvJyxcclxuXHRlbnZveTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvMi8yNC9FbnZveTYucG5nLycsXHJcblx0cG93ZXI6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzUvNTkvUG93ZXJfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRob3JzZXM6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzkvOWIvSG9yc2VzXyUyOENpdjYlMjkucG5nLycsXHJcblx0aXJvbjogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNy83OC9Jcm9uXyUyOENpdjYlMjkucG5nLycsXHJcblx0bml0ZXI6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzMvM2YvTml0ZXJfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRjb2FsOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy9kL2Q4L0NvYWxfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRvaWw6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2QvZGUvT2lsXyUyOENpdjYlMjkucG5nLycsXHJcblx0YWx1bWludW06ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzAvMDYvQWx1bWludW1fJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHR1cmFuaXVtOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy9hL2E1L1VyYW5pdW1fJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHQnZ3JlYXQgZ2VuZXJhbCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2YvZmQvR2VuZXJhbDYucG5nLycsXHJcblx0J2dyZWF0IGFkbWlyYWwnOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8xLzFhL0FkbWlyYWw2LnBuZy8nLFxyXG5cdCdncmVhdCBlbmdpbmVlcic6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzgvOGIvRW5naW5lZXI2LnBuZy8nLFxyXG5cdCdncmVhdCB3cml0ZXInOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8zLzNmL1dyaXRlcjYucG5nLycsXHJcblx0J2dyZWF0IG11c2ljaWFuJzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvMC8wMC9NdXNpY2lhbjYucG5nLycsXHJcblx0J2dyZWF0IHNjaWVudGlzdCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzgvODQvU2NpZW50aXN0Ni5wbmcvJyxcclxuXHQnZ3JlYXQgcHJvcGhldCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2QvZDMvUHJvcGhldDYucG5nLycsXHJcblx0J2dyZWF0IGFydGlzdCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzcvNzUvQXJ0aXN0Ni5wbmcvJyxcclxuXHQnZ3JlYXQgbWVyY2hhbnQnOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy80LzQ1L01lcmNoYW50Ni5wbmcvJyxcclxuXHRjYW1wdXM6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzEvMTgvQ2FtcHVzXyUyOENpdjYlMjkucG5nLycsXHJcblx0Y2FuYWw6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2YvZmQvQ2FuYWxfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRkYW06ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzUvNTAvRGFtXyUyOENpdjYlMjkucG5nLycsXHJcblx0J2hvbHkgc2l0ZSc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2EvYTgvSG9seV9TaXRlXyUyOENpdjYlMjkucG5nLycsXHJcblx0J3RoZWF0ZXIgc3F1YXJlJzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNC80NC9UaGVhdGVyX1NxdWFyZV8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdGVuY2FtcG1lbnQ6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzIvMjQvRW5jYW1wbWVudF8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdGhhcmJvcjogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvZC9kZi9IYXJib3JfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHQnY29tbWVyY2lhbCBodWInOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy9mL2ZlL0NvbW1lcmNpYWxfSHViXyUyOENpdjYlMjkucG5nLycsXHJcblx0J2luZHVzdHJpYWwgem9uZSc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzAvMGIvSW5kdXN0cmlhbF9ab25lXyUyOENpdjYlMjkucG5nLycsXHJcblx0J2VudGVydGFpbm1lbnQgY29tcGxleCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2MvY2IvRW50ZXJ0YWlubWVudF9Db21wbGV4XyUyOENpdjYlMjkucG5nLycsXHJcblx0J3dhdGVyIHBhcmsnOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8yLzJjL1dhdGVyX1BhcmtfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRhcXVlZHVjdDogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvZi9mOS9BcXVlZHVjdF8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdG5laWdoYm9yaG9vZDogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvMy8zMS9OZWlnaGJvcmhvb2RfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRhZXJvZHJvbWU6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2MvYzcvQWVyb2Ryb21lXyUyOENpdjYlMjkucG5nLycsXHJcblx0c3BhY2Vwb3J0OiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy83LzdkL1NwYWNlcG9ydF8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdCdnb3Zlcm5tZW50IHBsYXphJzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvYi9iMy9Hb3Zlcm5tZW50X1BsYXphXyUyOENpdjYlMjkucG5nLydcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWNvbmlmeSh0ZXh0KSB7XHJcblx0Y29uc3QgdG9rZW5zID0gW107XHJcblx0bGV0IHN0ciA9IHRleHQ7XHJcblxyXG5cdHdoaWxlIChzdHIubWF0Y2goLzxbXFx3XFxzXSs+LykpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKC88W1xcd1xcc10rPi8pO1xyXG5cdFx0Y29uc3QgaWR4ID0gbWF0Y2guaW5kZXg7XHJcblx0XHR0b2tlbnMucHVzaChzdHIuc2xpY2UoMCwgaWR4KSk7XHJcblx0XHRjb25zdCByZXBsID0gc3RyLnNsaWNlKGlkeCwgaWR4ICsgbWF0Y2hbMF0ubGVuZ3RoKS5zbGljZSgxLCAtMSk7XHJcblx0XHR0b2tlbnMucHVzaCg8aW1nIHNyYz17dXJsc1tyZXBsLnRvTG93ZXJDYXNlKCldfSBhbHQ9e3JlcGx9IC8+KTtcclxuXHRcdHN0ciA9IHN0ci5zbGljZShpZHggKyBtYXRjaFswXS5sZW5ndGgpO1xyXG5cdH1cclxuXHR0b2tlbnMucHVzaChzdHIpO1xyXG5cclxuXHRyZXR1cm4gdG9rZW5zO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9