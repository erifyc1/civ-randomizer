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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CivCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CivCard */ "./components/CivCard.js");
/* harmony import */ var _components_CivList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CivList */ "./components/CivList.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");
var _jsxFileName = "D:\\Jason\\programming\\VS Code Workspace\\react-tutorial\\pages\\index.js";
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaXZDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2l2TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NpdlByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9pY29uaWZ5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDaXZDYXJkIiwicHJvcHMiLCJjaXYiLCJuYW1lIiwiaWNvbiIsImxlYWRlciIsInBvcnRyYWl0IiwiYWJpbGl0eU5hbWUiLCJpY29uaWZ5IiwiYWJpbGl0eSIsImluZnJhc3RydWN0dXJlIiwibWFwIiwiaW5mIiwiaSIsInJlcGxhY2VzIiwiZGlzdHJpY3QiLCJlZmZlY3RzIiwiZWZmZWN0IiwidW5pdCIsInNwZWNpYWwiLCJDaXZMaXN0IiwiY2l2cyIsIkNpdlByZXZpZXciLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJkaXNhYmxlZENpdnMiLCJpbmNsdWRlcyIsImRpc3BhdGNoQ2l2IiwidHlwZSIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVkdWNlciIsInByZXZTdGF0ZSIsImFjdGlvbiIsImZpbHRlciIsImJnQ2l2cyIsInJuZkNpdnMiLCJnc0NpdnMiLCJJbmRleCIsInVzZVJlZHVjZXIiLCJzZXRDaXZzIiwidXNlU3RhdGUiLCJzZWxlY3RlZENpdiIsInNldFNlbGVjdGVkQ2l2IiwiYmciLCJzZXRCZyIsInJuZiIsInNldFJuZiIsImdzIiwic2V0R3MiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYXZhaWxhYmxlQ2l2cyIsImxlbmd0aCIsImlkeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZvckVhY2giLCJ1cmxzIiwic2NpZW5jZSIsImN1bHR1cmUiLCJnb2xkIiwiZmFpdGgiLCJwcm9kdWN0aW9uIiwiZm9vZCIsImhvdXNpbmciLCJhbWVuaXR5IiwibW92ZW1lbnQiLCJ0b3VyaXNtIiwicmFuZ2UiLCJ0cmFkZXIiLCJ2aXNpYmlsaXR5IiwicG9wdWxhdGlvbiIsInJlbGljIiwiYXJ0aWZhY3QiLCJzY3VscHR1cmUiLCJldXJla2EiLCJpbnNwaXJhdGlvbiIsImVudm95IiwicG93ZXIiLCJob3JzZXMiLCJpcm9uIiwibml0ZXIiLCJjb2FsIiwib2lsIiwiYWx1bWludW0iLCJ1cmFuaXVtIiwiY2FtcHVzIiwiY2FuYWwiLCJkYW0iLCJlbmNhbXBtZW50IiwiaGFyYm9yIiwiYXF1ZWR1Y3QiLCJuZWlnaGJvcmhvb2QiLCJhZXJvZHJvbWUiLCJzcGFjZXBvcnQiLCJ0ZXh0IiwidG9rZW5zIiwic3RyIiwibWF0Y2giLCJpbmRleCIsInB1c2giLCJzbGljZSIsInJlcGwiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBSUMsS0FBRCxJQUFXO0FBQzFCLFNBQ0MsbUVBQ0M7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsS0FBSyxDQUFDQyxHQUFOLENBQVVDLElBQWYsQ0FERCxFQUVDO0FBQUssT0FBRyxFQUFFRixLQUFLLENBQUNDLEdBQU4sQ0FBVUUsSUFBcEI7QUFBMEIsT0FBRyxFQUFFSCxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBVixHQUFpQixPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FERCxFQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtGLEtBQUssQ0FBQ0MsR0FBTixDQUFVRyxNQUFWLENBQWlCRixJQUF0QixDQURELEVBRUM7QUFBSyxPQUFHLEVBQUVGLEtBQUssQ0FBQ0MsR0FBTixDQUFVRyxNQUFWLENBQWlCQyxRQUEzQjtBQUFxQyxPQUFHLEVBQUVMLEtBQUssQ0FBQ0MsR0FBTixDQUFVRyxNQUFWLENBQWlCRixJQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FMRCxDQURELEVBV0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRixLQUFLLENBQUNDLEdBQU4sQ0FBVUssV0FBZixDQVhELEVBWUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyw4REFBTyxDQUFDUCxLQUFLLENBQUNDLEdBQU4sQ0FBVU8sT0FBWCxDQUFYLENBWkQsRUFhQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtSLEtBQUssQ0FBQ0MsR0FBTixDQUFVRyxNQUFWLENBQWlCRSxXQUF0QixDQWJELEVBY0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyw4REFBTyxDQUFDUCxLQUFLLENBQUNDLEdBQU4sQ0FBVUcsTUFBVixDQUFpQkksT0FBbEIsQ0FBWCxDQWRELEVBZUVSLEtBQUssQ0FBQ0MsR0FBTixDQUFVUSxjQUFWLENBQXlCQyxHQUF6QixDQUE2QixDQUFDQyxHQUFELEVBQU1DLENBQU4sS0FDN0IsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBZ0IsT0FBRyxFQUFFQSxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFRCxHQUFHLENBQUNULElBRE4sT0FDYVMsR0FBRyxDQUFDRSxRQUFKLEtBQWlCLElBQWpCLEdBQXlCRixHQUFHLENBQUNHLFFBQUosS0FBaUIsSUFBakIsR0FBd0Isc0JBQXhCLEdBQWlELG1CQUExRSxHQUFrRyxhQUFZSCxHQUFHLENBQUNFLFFBQVMsR0FEeEksQ0FERCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUYsR0FBRyxDQUFDSSxPQUFKLENBQVlMLEdBQVosQ0FBZ0IsQ0FBQ00sTUFBRCxFQUFTSixDQUFULEtBQ2hCO0FBQUksT0FBRyxFQUFFQSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYUwsOERBQU8sQ0FBQ1MsTUFBRCxDQUFwQixDQURBLENBREYsQ0FKRCxDQURBLENBZkYsRUEyQkVoQixLQUFLLENBQUNDLEdBQU4sQ0FBVWdCLElBQVYsQ0FBZVAsR0FBZixDQUFtQixDQUFDTyxJQUFELEVBQU9MLENBQVAsS0FDbkIsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBZ0IsT0FBRyxFQUFFQSxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFSyxJQUFJLENBQUNmLElBRFAsT0FDY2UsSUFBSSxDQUFDSixRQUFMLEtBQWtCLElBQWxCLEdBQXlCLGVBQXpCLEdBQTRDLGFBQVlJLElBQUksQ0FBQ0osUUFBUyxHQURwRixDQURELEVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFSSxJQUFJLENBQUNDLE9BQUwsQ0FBYVIsR0FBYixDQUFpQixDQUFDUSxPQUFELEVBQVVOLENBQVYsS0FDakI7QUFBSSxPQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhTCw4REFBTyxDQUFDVyxPQUFELENBQXBCLENBREEsQ0FERixDQUpELENBREEsQ0EzQkYsQ0FERDtBQTBDQSxDQTNDRDs7QUE2Q2VuQixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTs7QUFFQSxNQUFNb0IsT0FBTyxHQUFJbkIsS0FBRCxJQUFXO0FBQzFCLFNBQ0M7QUFBSSxNQUFFLEVBQUMsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VBLEtBQUssQ0FBQ29CLElBQU4sQ0FBV1YsR0FBWCxDQUFlLENBQUNULEdBQUQsRUFBTVcsQ0FBTixLQUNmLE1BQUMsbURBQUQ7QUFBWSxPQUFHLEVBQUVBLENBQWpCO0FBQW9CLE9BQUcsRUFBRVgsR0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREYsQ0FERDtBQU9BLENBUkQ7O0FBVWVrQixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBLE1BQU1FLFVBQVUsR0FBSXJCLEtBQUQsSUFBVztBQUM3QixRQUFNc0IsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyx3REFBRCxDQUExQjtBQUVBLFNBQ0M7QUFDQyxhQUFTLEVBQUUsU0FBU0YsT0FBTyxDQUFDRyxZQUFSLENBQXFCQyxRQUFyQixDQUE4QjFCLEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxJQUF4QyxJQUFnRCxXQUFoRCxHQUE4RCxFQUF2RSxDQURaO0FBRUMsV0FBTyxFQUFFLE1BQU07QUFDZG9CLGFBQU8sQ0FBQ0ssV0FBUixDQUFvQjtBQUNuQjFCLFdBQUcsRUFBRUQsS0FBSyxDQUFDQyxHQUFOLENBQVVDLElBREk7QUFFbkIwQixZQUFJLEVBQUVOLE9BQU8sQ0FBQ0csWUFBUixDQUFxQkMsUUFBckIsQ0FBOEIxQixLQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBeEMsSUFBZ0QsWUFBaEQsR0FBK0Q7QUFGbEQsT0FBcEI7QUFJQSxLQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRQztBQUFLLE9BQUcsRUFBRUYsS0FBSyxDQUFDQyxHQUFOLENBQVVFLElBQXBCO0FBQTBCLE9BQUcsRUFBRUgsS0FBSyxDQUFDQyxHQUFOLENBQVVDLElBQVYsR0FBaUIsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJELEVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0YsS0FBSyxDQUFDQyxHQUFOLENBQVVDLElBQWYsQ0FERCxFQUVFb0IsT0FBTyxDQUFDRyxZQUFSLENBQXFCQyxRQUFyQixDQUE4QjFCLEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxJQUF4QyxLQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZuRCxDQVRELENBREQ7QUFnQkEsQ0FuQkQ7O0FBcUJlbUIseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCTyxNQUFNRyxhQUFhLEdBQUdLLDRDQUFLLENBQUNDLGFBQU4sRUFBdEI7O0FBRVAsTUFBTUMsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDM0MsU0FBTyxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDQSxDQUZEOztBQUllRixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxPQUFPLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFaLEtBQXVCO0FBQ3RDLFVBQVFBLE1BQU0sQ0FBQ1IsSUFBZjtBQUNDLFNBQUssU0FBTDtBQUNDLGFBQU8sQ0FBQyxHQUFHTyxTQUFKLEVBQWVDLE1BQU0sQ0FBQ25DLEdBQXRCLENBQVA7O0FBQ0QsU0FBSyxZQUFMO0FBQ0MsYUFBT2tDLFNBQVMsQ0FBQ0UsTUFBVixDQUFrQnBDLEdBQUQsSUFBU0EsR0FBRyxLQUFLbUMsTUFBTSxDQUFDbkMsR0FBekMsQ0FBUDs7QUFDRDtBQUNDLGFBQU9rQyxTQUFQO0FBTkY7QUFRQSxDQVREOztBQVdBLE1BQU1HLE1BQU0sR0FBRyxDQUNkLFNBRGMsRUFFZCxRQUZjLEVBR2QsV0FIYyxFQUlkLE9BSmMsRUFLZCxRQUxjLEVBTWQsT0FOYyxFQU9kLE9BUGMsRUFRZCxTQVJjLEVBU2QsUUFUYyxFQVVkLFNBVmMsRUFXZCxRQVhjLEVBWWQsT0FaYyxFQWFkLFdBYmMsRUFjZCxPQWRjLEVBZWQsT0FmYyxFQWdCZCxPQWhCYyxFQWlCZCxTQWpCYyxFQWtCZCxRQWxCYyxFQW1CZCxPQW5CYyxFQW9CZCxRQXBCYyxFQXFCZCxRQXJCYyxFQXNCZCxNQXRCYyxFQXVCZCxRQXZCYyxFQXdCZCxTQXhCYyxFQXlCZCxPQXpCYyxFQTBCZCxTQTFCYyxDQUFmO0FBNEJBLE1BQU1DLE9BQU8sR0FBRyxDQUFDLE1BQUQsRUFBUyxhQUFULEVBQXdCLFNBQXhCLEVBQW1DLE9BQW5DLEVBQTRDLFNBQTVDLEVBQXVELFVBQXZELEVBQW1FLFVBQW5FLEVBQStFLE1BQS9FLENBQWhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0MsVUFBL0MsRUFBMkQsVUFBM0QsRUFBdUUsUUFBdkUsQ0FBZjs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUNuQixRQUFNO0FBQUEsT0FBQ2hCLFlBQUQ7QUFBQSxPQUFlRTtBQUFmLE1BQThCZSx3REFBVSxDQUFDUixPQUFELEVBQVUsRUFBVixDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDZCxJQUFEO0FBQUEsT0FBT3VCO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Ysc0RBQVEsQ0FBQyxJQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLEVBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWNKLHNEQUFRLENBQUMsSUFBRCxDQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDSyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQk4sc0RBQVEsQ0FBQyxJQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLEVBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWNSLHNEQUFRLENBQUMsSUFBRCxDQUE1QjtBQUVBUyx5REFBUyxDQUFDLE1BQU07QUFDZkMsZ0RBQUssQ0FBQyxNQUFELENBQUwsQ0FBY0MsSUFBZCxDQUFvQkMsR0FBRCxJQUFTO0FBQzNCYixhQUFPLENBQUNhLEdBQUcsQ0FBQ0MsSUFBTCxDQUFQO0FBQ0EsS0FGRDtBQUdBLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxTQUNDLE1BQUMsa0RBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFOUIsaUJBQUY7QUFBZUY7QUFBZixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxFQUVDO0FBQ0MsTUFBRSxFQUFDLGtCQURKO0FBRUMsV0FBTyxFQUFFLE1BQU07QUFDZCxZQUFNaUMsYUFBYSxHQUFHdEMsSUFBSSxDQUFDaUIsTUFBTCxDQUFhcEMsR0FBRCxJQUFTLENBQUN3QixZQUFZLENBQUNDLFFBQWIsQ0FBc0J6QixHQUFHLENBQUNDLElBQTFCLENBQXRCLENBQXRCOztBQUNBLFVBQUl3RCxhQUFhLENBQUNDLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDL0IsY0FBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osYUFBYSxDQUFDQyxNQUFkLEdBQXVCRSxJQUFJLENBQUNFLE1BQUwsRUFBbEMsQ0FBWjtBQUNBVCxvREFBSyxDQUFFLFlBQVdJLGFBQWEsQ0FBQ0UsR0FBRCxDQUFiLENBQW1CMUQsSUFBSyxFQUFyQyxDQUFMLENBQTZDcUQsSUFBN0MsQ0FBbURDLEdBQUQsSUFBUztBQUMxRCxnQkFBTXZELEdBQUcsR0FBR3VELEdBQUcsQ0FBQ0MsSUFBaEI7QUFDQXhELGFBQUcsQ0FBQ0csTUFBSixHQUFhSCxHQUFHLENBQUNHLE1BQUosQ0FBV3lELElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0I5RCxHQUFHLENBQUNHLE1BQUosQ0FBV3VELE1BQXRDLENBQVgsQ0FBYjtBQUNBYix3QkFBYyxDQUFDN0MsR0FBRCxDQUFkO0FBQ0EwQixxQkFBVyxDQUFDO0FBQ1hDLGdCQUFJLEVBQUUsU0FESztBQUVYM0IsZUFBRyxFQUFFQSxHQUFHLENBQUNDO0FBRkUsV0FBRCxDQUFYO0FBSUEsU0FSRDtBQVNBO0FBQ0QsS0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxFQXFCQztBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxPQUFHLEVBQUMsNEhBREw7QUFFQyxPQUFHLEVBQUMsZ0JBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBS0M7QUFBTyxhQUFTLEVBQUU2QyxFQUFFLEdBQUcsU0FBSCxHQUFlLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLFFBQUksRUFBQyxVQUROO0FBRUMsWUFBUSxFQUFFLE1BQU07QUFDZkMsV0FBSyxDQUFDLENBQUNELEVBQUYsQ0FBTDtBQUNBVCxZQUFNLENBQUMwQixPQUFQLENBQWdCL0QsR0FBRCxJQUFTMEIsV0FBVyxDQUFDO0FBQUVDLFlBQUksRUFBRW1CLEVBQUUsR0FBRyxTQUFILEdBQWUsWUFBekI7QUFBdUM5QztBQUF2QyxPQUFELENBQW5DO0FBQ0EsS0FMRjtBQU1DLFdBQU8sRUFBRThDLEVBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRELENBTEQsQ0FERCxFQWtCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxPQUFHLEVBQUMsOEVBQVQ7QUFBd0YsT0FBRyxFQUFDLGtCQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQztBQUFPLGFBQVMsRUFBRUUsR0FBRyxHQUFHLFNBQUgsR0FBZSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxRQUFJLEVBQUMsVUFETjtBQUVDLFlBQVEsRUFBRSxNQUFNO0FBQ2ZDLFlBQU0sQ0FBQyxDQUFDRCxHQUFGLENBQU47QUFDQVYsYUFBTyxDQUFDeUIsT0FBUixDQUFpQi9ELEdBQUQsSUFBUzBCLFdBQVcsQ0FBQztBQUFFQyxZQUFJLEVBQUVxQixHQUFHLEdBQUcsU0FBSCxHQUFlLFlBQTFCO0FBQXdDaEQ7QUFBeEMsT0FBRCxDQUFwQztBQUNBLEtBTEY7QUFNQyxXQUFPLEVBQUVnRCxHQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQVNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURCxDQUZELENBbEJELEVBZ0NDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLE9BQUcsRUFBQywyRUFBVDtBQUFxRixPQUFHLEVBQUMsc0JBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDO0FBQU8sYUFBUyxFQUFFRSxFQUFFLEdBQUcsU0FBSCxHQUFlLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLFFBQUksRUFBQyxVQUROO0FBRUMsWUFBUSxFQUFFLE1BQU07QUFDZkMsV0FBSyxDQUFDLENBQUNELEVBQUYsQ0FBTDtBQUNBWCxZQUFNLENBQUN3QixPQUFQLENBQWdCL0QsR0FBRCxJQUFTMEIsV0FBVyxDQUFDO0FBQUVDLFlBQUksRUFBRXVCLEVBQUUsR0FBRyxTQUFILEdBQWUsWUFBekI7QUFBdUNsRDtBQUF2QyxPQUFELENBQW5DO0FBQ0EsS0FMRjtBQU1DLFdBQU8sRUFBRWtELEVBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRELENBRkQsQ0FoQ0QsQ0FyQkQsRUFvRUM7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxNQUFFLEVBQUMsZ0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsQ0FERCxFQUlDLE1BQUMsMkRBQUQ7QUFBUyxRQUFJLEVBQUUvQixJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxDQURELEVBT0M7QUFBSyxNQUFFLEVBQUMsWUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCeUIsV0FBVyxJQUFJLE1BQUMsMkRBQUQ7QUFBUyxPQUFHLEVBQUVBLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFyQyxDQVBELENBcEVELENBREQ7QUFnRkEsQ0E5RkQ7O0FBZ0dlSixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSkE7QUFFQSxNQUFNd0IsSUFBSSxHQUFHO0FBQ1pDLFNBQU8sRUFBRSwrRUFERztBQUVaQyxTQUFPLEVBQUUsK0VBRkc7QUFHWkMsTUFBSSxFQUFFLDRFQUhNO0FBSVpDLE9BQUssRUFBRSw2RUFKSztBQUtaQyxZQUFVLEVBQUUsa0ZBTEE7QUFNWkMsTUFBSSxFQUFFLDRFQU5NO0FBT1pDLFNBQU8sRUFBRSw0RUFQRztBQVFaQyxTQUFPLEVBQUUsOEVBUkc7QUFTWkMsVUFBUSxFQUFFLGdGQVRFO0FBVVpDLFNBQU8sRUFBRSw0RUFWRztBQVdaLHFCQUFtQixvRkFYUDtBQVlaLHFCQUFtQixzRkFaUDtBQWFaLHNCQUFvQiwrRkFiUjtBQWNaLHVCQUFxQixnR0FkVDtBQWVaLHdCQUFzQixzRkFmVjtBQWdCWkMsT0FBSyxFQUFFLDZFQWhCSztBQWlCWkMsUUFBTSxFQUFFLCtFQWpCSTtBQWtCWixpQkFBZSwrRUFsQkg7QUFtQlpDLFlBQVUsRUFBRSx5RkFuQkE7QUFvQlosa0JBQWdCLDJGQXBCSjtBQXFCWkMsWUFBVSxFQUFFLDRFQXJCQTtBQXNCWkMsT0FBSyxFQUFFLDBFQXRCSztBQXVCWkMsVUFBUSxFQUFFLDZFQXZCRTtBQXdCWkMsV0FBUyxFQUFFLDhFQXhCQztBQXlCWjdFLFVBQVEsRUFBRSw2RUF6QkU7QUEwQlosc0JBQW9CLCtGQTFCUjtBQTJCWjhFLFFBQU0sRUFBRSwyRUEzQkk7QUE0QlpDLGFBQVcsRUFBRSxnRkE1QkQ7QUE2QlpDLE9BQUssRUFBRSwwRUE3Qks7QUE4QlpDLE9BQUssRUFBRSxvRkE5Qks7QUErQlpDLFFBQU0sRUFBRSxxRkEvQkk7QUFnQ1pDLE1BQUksRUFBRSxtRkFoQ007QUFpQ1pDLE9BQUssRUFBRSxvRkFqQ0s7QUFrQ1pDLE1BQUksRUFBRSxtRkFsQ007QUFtQ1pDLEtBQUcsRUFBRSxrRkFuQ087QUFvQ1pDLFVBQVEsRUFBRSx1RkFwQ0U7QUFxQ1pDLFNBQU8sRUFBRSxzRkFyQ0c7QUFzQ1osbUJBQWlCLDRFQXRDTDtBQXVDWixtQkFBaUIsNEVBdkNMO0FBd0NaLG9CQUFrQiw2RUF4Q047QUF5Q1osa0JBQWdCLDJFQXpDSjtBQTBDWixvQkFBa0IsNkVBMUNOO0FBMkNaLHFCQUFtQiw4RUEzQ1A7QUE0Q1osbUJBQWlCLDRFQTVDTDtBQTZDWixrQkFBZ0IsMkVBN0NKO0FBOENaLG9CQUFrQiw2RUE5Q047QUErQ1pDLFFBQU0sRUFBRSxxRkEvQ0k7QUFnRFpDLE9BQUssRUFBRSxvRkFoREs7QUFpRFpDLEtBQUcsRUFBRSxrRkFqRE87QUFrRFosZUFBYSx3RkFsREQ7QUFtRFosb0JBQWtCLDZGQW5ETjtBQW9EWkMsWUFBVSxFQUFFLHlGQXBEQTtBQXFEWkMsUUFBTSxFQUFFLHFGQXJESTtBQXNEWixvQkFBa0IsNkZBdEROO0FBdURaLHFCQUFtQiw4RkF2RFA7QUF3RFosMkJBQXlCLG9HQXhEYjtBQXlEWixnQkFBYyx5RkF6REY7QUEwRFpDLFVBQVEsRUFBRSx1RkExREU7QUEyRFpDLGNBQVksRUFBRSwyRkEzREY7QUE0RFpDLFdBQVMsRUFBRSx3RkE1REM7QUE2RFpDLFdBQVMsRUFBRSx3RkE3REM7QUE4RFosc0JBQW9CO0FBOURSLENBQWI7QUFpRUE7Ozs7QUFHZSxTQUFTL0YsT0FBVCxDQUFpQmdHLElBQWpCLEVBQXVCO0FBQ3JDLFFBQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsTUFBSUMsR0FBRyxHQUFHRixJQUFWOztBQUVBLFNBQU9FLEdBQUcsQ0FBQ0MsS0FBSixDQUFVLFdBQVYsQ0FBUCxFQUErQjtBQUM5QixVQUFNQSxLQUFLLEdBQUdELEdBQUcsQ0FBQ0MsS0FBSixDQUFVLFdBQVYsQ0FBZDtBQUNBLFVBQU05QyxHQUFHLEdBQUc4QyxLQUFLLENBQUNDLEtBQWxCO0FBQ0FILFVBQU0sQ0FBQ0ksSUFBUCxDQUFZSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxDQUFWLEVBQWFqRCxHQUFiLENBQVo7QUFDQSxVQUFNa0QsSUFBSSxHQUFHTCxHQUFHLENBQUNJLEtBQUosQ0FBVWpELEdBQVYsRUFBZUEsR0FBRyxHQUFHOEMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTL0MsTUFBOUIsRUFBc0NrRCxLQUF0QyxDQUE0QyxDQUE1QyxFQUErQyxDQUFDLENBQWhELENBQWI7QUFDQUwsVUFBTSxDQUFDSSxJQUFQLENBQVk7QUFBSyxTQUFHLEVBQUUzQyxJQUFJLENBQUM2QyxJQUFJLENBQUNDLFdBQUwsRUFBRCxDQUFkO0FBQW9DLFNBQUcsRUFBRUQsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFaO0FBQ0FMLE9BQUcsR0FBR0EsR0FBRyxDQUFDSSxLQUFKLENBQVVqRCxHQUFHLEdBQUc4QyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMvQyxNQUF6QixDQUFOO0FBQ0E7O0FBQ0Q2QyxRQUFNLENBQUNJLElBQVAsQ0FBWUgsR0FBWjtBQUVBLFNBQU9ELE1BQVA7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaWNvbmlmeSBmcm9tICcuLi91dGlscy9pY29uaWZ5JztcclxuXHJcbmNvbnN0IENpdkNhcmQgPSAocHJvcHMpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdXRlclwiPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aDI+e3Byb3BzLmNpdi5uYW1lfTwvaDI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvcHMuY2l2Lmljb259IGFsdD17cHJvcHMuY2l2Lm5hbWUgKyAnIGljb24nfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aDI+e3Byb3BzLmNpdi5sZWFkZXIubmFtZX08L2gyPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e3Byb3BzLmNpdi5sZWFkZXIucG9ydHJhaXR9IGFsdD17cHJvcHMuY2l2LmxlYWRlci5uYW1lfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGgzPntwcm9wcy5jaXYuYWJpbGl0eU5hbWV9PC9oMz5cclxuXHRcdFx0PHA+e2ljb25pZnkocHJvcHMuY2l2LmFiaWxpdHkpfTwvcD5cclxuXHRcdFx0PGgzPntwcm9wcy5jaXYubGVhZGVyLmFiaWxpdHlOYW1lfTwvaDM+XHJcblx0XHRcdDxwPntpY29uaWZ5KHByb3BzLmNpdi5sZWFkZXIuYWJpbGl0eSl9PC9wPlxyXG5cdFx0XHR7cHJvcHMuY2l2LmluZnJhc3RydWN0dXJlLm1hcCgoaW5mLCBpKSA9PiAoXHJcblx0XHRcdFx0PFJlYWN0LkZyYWdtZW50IGtleT17aX0+XHJcblx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdHtpbmYubmFtZX0ge2luZi5yZXBsYWNlcyA9PT0gbnVsbCA/IChpbmYuZGlzdHJpY3QgPT09IG51bGwgPyAnKFVuaXF1ZSBJbXByb3ZlbWVudCknIDogJyhVbmlxdWUgQnVpbGRpbmcpJykgOiBgKFJlcGxhY2VzICR7aW5mLnJlcGxhY2VzfSlgfVxyXG5cdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e2luZi5lZmZlY3RzLm1hcCgoZWZmZWN0LCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGxpIGtleT17aX0+e2ljb25pZnkoZWZmZWN0KX08L2xpPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0KSl9XHJcblx0XHRcdHtwcm9wcy5jaXYudW5pdC5tYXAoKHVuaXQsIGkpID0+IChcclxuXHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cclxuXHRcdFx0XHRcdDxoMz5cclxuXHRcdFx0XHRcdFx0e3VuaXQubmFtZX0ge3VuaXQucmVwbGFjZXMgPT09IG51bGwgPyAnKFVuaXF1ZSBVbml0KScgOiBgKFJlcGxhY2VzICR7dW5pdC5yZXBsYWNlc30pYH1cclxuXHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdHt1bml0LnNwZWNpYWwubWFwKChzcGVjaWFsLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGxpIGtleT17aX0+e2ljb25pZnkoc3BlY2lhbCl9PC9saT5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpdkNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaXZQcmV2aWV3IGZyb20gJy4vQ2l2UHJldmlldyc7XHJcblxyXG5jb25zdCBDaXZMaXN0ID0gKHByb3BzKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDx1bCBpZD1cImNpdi1saXN0XCI+XHJcblx0XHRcdHtwcm9wcy5jaXZzLm1hcCgoY2l2LCBpKSA9PiAoXHJcblx0XHRcdFx0PENpdlByZXZpZXcga2V5PXtpfSBjaXY9e2Npdn0gLz5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L3VsPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXZMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL3BhZ2VzL19hcHAnO1xyXG5cclxuY29uc3QgQ2l2UHJldmlldyA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGxpXHJcblx0XHRcdGNsYXNzTmFtZT17J2NpdicgKyAoY29udGV4dC5kaXNhYmxlZENpdnMuaW5jbHVkZXMocHJvcHMuY2l2Lm5hbWUpID8gJyBkaXNhYmxlZCcgOiAnJyl9XHJcblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRjb250ZXh0LmRpc3BhdGNoQ2l2KHtcclxuXHRcdFx0XHRcdGNpdjogcHJvcHMuY2l2Lm5hbWUsXHJcblx0XHRcdFx0XHR0eXBlOiBjb250ZXh0LmRpc2FibGVkQ2l2cy5pbmNsdWRlcyhwcm9wcy5jaXYubmFtZSkgPyAnUkVNT1ZFX0NJVicgOiAnQUREX0NJVidcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fX0+XHJcblx0XHRcdDxpbWcgc3JjPXtwcm9wcy5jaXYuaWNvbn0gYWx0PXtwcm9wcy5jaXYubmFtZSArICcgaWNvbid9IC8+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGgzPntwcm9wcy5jaXYubmFtZX08L2gzPlxyXG5cdFx0XHRcdHtjb250ZXh0LmRpc2FibGVkQ2l2cy5pbmNsdWRlcyhwcm9wcy5jaXYubmFtZSkgJiYgPHA+RGlzYWJsZWQ8L3A+fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbGk+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpdlByZXZpZXc7XHJcbiIsImV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaXZDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2l2Q2FyZCc7XHJcbmltcG9ydCBDaXZMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2l2TGlzdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuL19hcHAnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChwcmV2U3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9DSVYnOlxyXG5cdFx0XHRyZXR1cm4gWy4uLnByZXZTdGF0ZSwgYWN0aW9uLmNpdl07XHJcblx0XHRjYXNlICdSRU1PVkVfQ0lWJzpcclxuXHRcdFx0cmV0dXJuIHByZXZTdGF0ZS5maWx0ZXIoKGNpdikgPT4gY2l2ICE9PSBhY3Rpb24uY2l2KTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBwcmV2U3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgYmdDaXZzID0gW1xyXG5cdCdBbWVyaWNhJyxcclxuXHQnQXJhYmlhJyxcclxuXHQnQXVzdHJhbGlhJyxcclxuXHQnQXp0ZWMnLFxyXG5cdCdCcmF6aWwnLFxyXG5cdCdDaGluYScsXHJcblx0J0VneXB0JyxcclxuXHQnRW5nbGFuZCcsXHJcblx0J0ZyYW5jZScsXHJcblx0J0dlcm1hbnknLFxyXG5cdCdHcmVlY2UnLFxyXG5cdCdJbmRpYScsXHJcblx0J0luZG9uZXNpYScsXHJcblx0J0phcGFuJyxcclxuXHQnS2htZXInLFxyXG5cdCdLb25nbycsXHJcblx0J01hY2Vkb24nLFxyXG5cdCdOb3J3YXknLFxyXG5cdCdOdWJpYScsXHJcblx0J1BlcnNpYScsXHJcblx0J1BvbGFuZCcsXHJcblx0J1JvbWUnLFxyXG5cdCdSdXNzaWEnLFxyXG5cdCdTY3l0aGlhJyxcclxuXHQnU3BhaW4nLFxyXG5cdCdTdW1lcmlhJ1xyXG5dO1xyXG5jb25zdCBybmZDaXZzID0gWydDcmVlJywgJ05ldGhlcmxhbmRzJywgJ0dlb3JnaWEnLCAnS29yZWEnLCAnTWFwdWNoZScsICdNb25nb2xpYScsICdTY290bGFuZCcsICdadWx1J107XHJcbmNvbnN0IGdzQ2l2cyA9IFsnQ2FuYWRhJywgJ0h1bmdhcnknLCAnSW5jYScsICdNYWxpJywgJ03EgW9yaScsICdPdHRvbWFucycsICdQaG9uZWNpYScsICdTd2VkZW4nXTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtkaXNhYmxlZENpdnMsIGRpc3BhdGNoQ2l2XSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10pO1xyXG5cdGNvbnN0IFtjaXZzLCBzZXRDaXZzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbc2VsZWN0ZWRDaXYsIHNldFNlbGVjdGVkQ2l2XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtiZywgc2V0QmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3QgW3JuZiwgc2V0Um5mXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdGNvbnN0IFtncywgc2V0R3NdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRheGlvcygnL2FwaScpLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRzZXRDaXZzKHJlcy5kYXRhKTtcclxuXHRcdH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGRpc3BhdGNoQ2l2LCBkaXNhYmxlZENpdnMgfX0+XHJcblx0XHRcdDxoMT5DaXYgUmFuZG9taXplcjwvaDE+XHJcblx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRpZD1cInJhbmRvbWl6ZS1idXR0b25cIlxyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGF2YWlsYWJsZUNpdnMgPSBjaXZzLmZpbHRlcigoY2l2KSA9PiAhZGlzYWJsZWRDaXZzLmluY2x1ZGVzKGNpdi5uYW1lKSk7XHJcblx0XHRcdFx0XHRpZiAoYXZhaWxhYmxlQ2l2cy5sZW5ndGggIT09IDApIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgaWR4ID0gTWF0aC5mbG9vcihhdmFpbGFibGVDaXZzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpO1xyXG5cdFx0XHRcdFx0XHRheGlvcyhgL2FwaT9jaXY9JHthdmFpbGFibGVDaXZzW2lkeF0ubmFtZX1gKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBjaXYgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRjaXYubGVhZGVyID0gY2l2LmxlYWRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaXYubGVhZGVyLmxlbmd0aCldO1xyXG5cdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkQ2l2KGNpdik7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2hDaXYoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ0FERF9DSVYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2l2OiBjaXYubmFtZVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9fT5cclxuXHRcdFx0XHRSYW5kb21pemUhXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8ZGl2IGlkPVwidG9vbGJhclwiPlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2lzNS1zc2wubXpzdGF0aWMuY29tL2ltYWdlL3RodW1iL1B1cnBsZTExMy92NC80Ni85Yi9kZi80NjliZGZiYy04YzkxLTljNmYtNTc4Mi0yMWNmMzg4NTBhOTQvQXBwLnBuZy8xMjAweDYzMGJiLnBuZ1wiXHJcblx0XHRcdFx0XHRcdGFsdD1cIkJhc2UgR2FtZSBDaXZzXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtiZyA/ICdjaGVja2VkJyA6ICcnfT5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0QmcoIWJnKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJnQ2l2cy5mb3JFYWNoKChjaXYpID0+IGRpc3BhdGNoQ2l2KHsgdHlwZTogYmcgPyAnQUREX0NJVicgOiAnUkVNT1ZFX0NJVicsIGNpdiB9KSk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtiZ31cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvZC9kMC9SJTI2Ri1Pbmx5LnBuZy9cIiBhbHQ9XCJSaXNlICZhbXA7IEZhbGwgQ2l2c1wiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtybmYgPyAnY2hlY2tlZCcgOiAnJ30+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFJuZighcm5mKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJuZkNpdnMuZm9yRWFjaCgoY2l2KSA9PiBkaXNwYXRjaENpdih7IHR5cGU6IHJuZiA/ICdBRERfQ0lWJyA6ICdSRU1PVkVfQ0lWJywgY2l2IH0pKTtcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3JuZn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvOS85Ni9HUy1Pbmx5LnBuZy9cIiBhbHQ9XCJHYXRoZXJpbmcgU3Rvcm0gQ2l2c1wiIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtncyA/ICdjaGVja2VkJyA6ICcnfT5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0R3MoIWdzKTtcclxuXHRcdFx0XHRcdFx0XHRcdGdzQ2l2cy5mb3JFYWNoKChjaXYpID0+IGRpc3BhdGNoQ2l2KHsgdHlwZTogZ3MgPyAnQUREX0NJVicgOiAnUkVNT1ZFX0NJVicsIGNpdiB9KSk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtnc31cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJsaXN0XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGlkPVwiY2l2LWxpc3QtdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PGgyPkNpdiBMaXN0PC9oMj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PENpdkxpc3QgY2l2cz17Y2l2c30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiY2hvc2VuLWNpdlwiPntzZWxlY3RlZENpdiAmJiA8Q2l2Q2FyZCBjaXY9e3NlbGVjdGVkQ2l2fSAvPn08L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXJscyA9IHtcclxuXHRzY2llbmNlOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy83Lzc5L0NpdjZTY2llbmNlLnBuZy8nLFxyXG5cdGN1bHR1cmU6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzIvMmEvQ2l2NkN1bHR1cmUucG5nLycsXHJcblx0Z29sZDogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvYi9iYy9DaXY2R29sZC5wbmcvJyxcclxuXHRmYWl0aDogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvOC84Mi9DaXY2RmFpdGgucG5nLycsXHJcblx0cHJvZHVjdGlvbjogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNy83NC9DaXY2UHJvZHVjdGlvbi5wbmcvJyxcclxuXHRmb29kOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy82LzY1L0NpdjZGb29kLnBuZy8nLFxyXG5cdGhvdXNpbmc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2EvYWUvSG91c2luZzYucG5nLycsXHJcblx0YW1lbml0eTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNi82NS9BbWVuaXRpZXM2LnBuZy8nLFxyXG5cdG1vdmVtZW50OiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy84Lzg5L0NpdjZNb3ZlbWVudC5wbmcvJyxcclxuXHR0b3VyaXNtOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy81LzViL1RvdXJpc202LnBuZy8nLFxyXG5cdCdjb21iYXQgc3RyZW5ndGgnOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy9iL2I2L0NpdjZTdHJlbmd0aEljb24ucG5nLycsXHJcblx0J3JhbmdlZCBzdHJlbmd0aCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2QvZGEvQ2l2NlJhbmdlZFN0cmVuZ3RoLnBuZy8nLFxyXG5cdCdib21iYXJkIHN0cmVuZ3RoJzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNS81OS9Cb21iYXJkX1N0cmVuZ3RoXyUyOENpdjYlMjkucG5nLycsXHJcblx0J2FudGktYWlyIHN0cmVuZ3RoJzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvMi8yOC9BbnRpLUFpcl9TdHJlbmd0aF8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdCdyZWxpZ2lvdXMgc3RyZW5ndGgnOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8yLzIyL1JlbGlnaW91c1N0cmVuZ3RoNi5wbmcvJyxcclxuXHRyYW5nZTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvOS85ZS9DaXY2UmFuZ2UucG5nLycsXHJcblx0dHJhZGVyOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8wLzBmL1RyYWRlUm91dGU2LnBuZy8nLFxyXG5cdCd0cmFkZSByb3V0ZSc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzAvMGYvVHJhZGVSb3V0ZTYucG5nLycsXHJcblx0dmlzaWJpbGl0eTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvYy9jZS9EaXBsb21hdGljVmlzaWJpbGl0eTYucG5nLycsXHJcblx0J3RyYWRpbmcgcG9zdCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzcvNzIvVHJhZGluZ19Qb3N0XyUyOENpdjYlMjkucG5nLycsXHJcblx0cG9wdWxhdGlvbjogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvZi9mOC9DaXRpemVuNi5wbmcvJyxcclxuXHRyZWxpYzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvYy9jNS9SZWxpYzYucG5nLycsXHJcblx0YXJ0aWZhY3Q6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzgvODcvQXJ0aWZhY3Q2LnBuZy8nLFxyXG5cdHNjdWxwdHVyZTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNS81Ni9TY3VscHR1cmU2LnBuZy8nLFxyXG5cdHBvcnRyYWl0OiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy85Lzk5L1BvcnRyYWl0Ni5wbmcvJyxcclxuXHQnZGlwbG9tYXRpYyBmYXZvcic6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2MvYzQvRGlwbG9tYXRpY19GYXZvcl8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdGV1cmVrYTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNS81Mi9FdXJla2E2LnBuZy8nLFxyXG5cdGluc3BpcmF0aW9uOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8xLzEzL0luc3BpcmF0aW9uNi5wbmcvJyxcclxuXHRlbnZveTogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvMi8yNC9FbnZveTYucG5nLycsXHJcblx0cG93ZXI6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzUvNTkvUG93ZXJfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRob3JzZXM6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzkvOWIvSG9yc2VzXyUyOENpdjYlMjkucG5nLycsXHJcblx0aXJvbjogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNy83OC9Jcm9uXyUyOENpdjYlMjkucG5nLycsXHJcblx0bml0ZXI6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzMvM2YvTml0ZXJfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRjb2FsOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy9kL2Q4L0NvYWxfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRvaWw6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2QvZGUvT2lsXyUyOENpdjYlMjkucG5nLycsXHJcblx0YWx1bWludW06ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzAvMDYvQWx1bWludW1fJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHR1cmFuaXVtOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy9hL2E1L1VyYW5pdW1fJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHQnZ3JlYXQgZ2VuZXJhbCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2YvZmQvR2VuZXJhbDYucG5nLycsXHJcblx0J2dyZWF0IGFkbWlyYWwnOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8xLzFhL0FkbWlyYWw2LnBuZy8nLFxyXG5cdCdncmVhdCBlbmdpbmVlcic6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzgvOGIvRW5naW5lZXI2LnBuZy8nLFxyXG5cdCdncmVhdCB3cml0ZXInOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8zLzNmL1dyaXRlcjYucG5nLycsXHJcblx0J2dyZWF0IG11c2ljaWFuJzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvMC8wMC9NdXNpY2lhbjYucG5nLycsXHJcblx0J2dyZWF0IHNjaWVudGlzdCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzgvODQvU2NpZW50aXN0Ni5wbmcvJyxcclxuXHQnZ3JlYXQgcHJvcGhldCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2QvZDMvUHJvcGhldDYucG5nLycsXHJcblx0J2dyZWF0IGFydGlzdCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzcvNzUvQXJ0aXN0Ni5wbmcvJyxcclxuXHQnZ3JlYXQgbWVyY2hhbnQnOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy80LzQ1L01lcmNoYW50Ni5wbmcvJyxcclxuXHRjYW1wdXM6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzEvMTgvQ2FtcHVzXyUyOENpdjYlMjkucG5nLycsXHJcblx0Y2FuYWw6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2YvZmQvQ2FuYWxfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRkYW06ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzUvNTAvRGFtXyUyOENpdjYlMjkucG5nLycsXHJcblx0J2hvbHkgc2l0ZSc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2EvYTgvSG9seV9TaXRlXyUyOENpdjYlMjkucG5nLycsXHJcblx0J3RoZWF0ZXIgc3F1YXJlJzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvNC80NC9UaGVhdGVyX1NxdWFyZV8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdGVuY2FtcG1lbnQ6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzIvMjQvRW5jYW1wbWVudF8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdGhhcmJvcjogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvZC9kZi9IYXJib3JfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHQnY29tbWVyY2lhbCBodWInOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy9mL2ZlL0NvbW1lcmNpYWxfSHViXyUyOENpdjYlMjkucG5nLycsXHJcblx0J2luZHVzdHJpYWwgem9uZSc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzLzAvMGIvSW5kdXN0cmlhbF9ab25lXyUyOENpdjYlMjkucG5nLycsXHJcblx0J2VudGVydGFpbm1lbnQgY29tcGxleCc6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2MvY2IvRW50ZXJ0YWlubWVudF9Db21wbGV4XyUyOENpdjYlMjkucG5nLycsXHJcblx0J3dhdGVyIHBhcmsnOiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy8yLzJjL1dhdGVyX1BhcmtfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRhcXVlZHVjdDogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvZi9mOS9BcXVlZHVjdF8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdG5laWdoYm9yaG9vZDogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvMy8zMS9OZWlnaGJvcmhvb2RfJTI4Q2l2NiUyOS5wbmcvJyxcclxuXHRhZXJvZHJvbWU6ICdodHRwczovL3ZpZ25ldHRlLndpa2lhLm5vY29va2llLm5ldC9jaXZpbGl6YXRpb24vaW1hZ2VzL2MvYzcvQWVyb2Ryb21lXyUyOENpdjYlMjkucG5nLycsXHJcblx0c3BhY2Vwb3J0OiAnaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvY2l2aWxpemF0aW9uL2ltYWdlcy83LzdkL1NwYWNlcG9ydF8lMjhDaXY2JTI5LnBuZy8nLFxyXG5cdCdnb3Zlcm5tZW50IHBsYXphJzogJ2h0dHBzOi8vdmlnbmV0dGUud2lraWEubm9jb29raWUubmV0L2NpdmlsaXphdGlvbi9pbWFnZXMvYi9iMy9Hb3Zlcm5tZW50X1BsYXphXyUyOENpdjYlMjkucG5nLydcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWNvbmlmeSh0ZXh0KSB7XHJcblx0Y29uc3QgdG9rZW5zID0gW107XHJcblx0bGV0IHN0ciA9IHRleHQ7XHJcblxyXG5cdHdoaWxlIChzdHIubWF0Y2goLzxbXFx3XFxzXSs+LykpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKC88W1xcd1xcc10rPi8pO1xyXG5cdFx0Y29uc3QgaWR4ID0gbWF0Y2guaW5kZXg7XHJcblx0XHR0b2tlbnMucHVzaChzdHIuc2xpY2UoMCwgaWR4KSk7XHJcblx0XHRjb25zdCByZXBsID0gc3RyLnNsaWNlKGlkeCwgaWR4ICsgbWF0Y2hbMF0ubGVuZ3RoKS5zbGljZSgxLCAtMSk7XHJcblx0XHR0b2tlbnMucHVzaCg8aW1nIHNyYz17dXJsc1tyZXBsLnRvTG93ZXJDYXNlKCldfSBhbHQ9e3JlcGx9IC8+KTtcclxuXHRcdHN0ciA9IHN0ci5zbGljZShpZHggKyBtYXRjaFswXS5sZW5ndGgpO1xyXG5cdH1cclxuXHR0b2tlbnMucHVzaChzdHIpO1xyXG5cclxuXHRyZXR1cm4gdG9rZW5zO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=