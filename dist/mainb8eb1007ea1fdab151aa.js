/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=PT+Sans:400|Mingzat:400);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 100%;\r\n} /* 16px */\r\n:root {\r\n  --clr-body: #dee2e6b0;\r\n  --clr--primary: #fdffb6;\r\n  --clr--secondary: #3a86ff;\r\n  --max-width: 600px;\r\n\r\n  /* box shadows */\r\n  --shadow-1: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\r\n  --shadow-2: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\r\n  --shadow-3: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\r\n  --shadow-4:\r\n    0 20px 25px -5px rgb(0 0 0 / 0.1),\r\n    0 8px 10px -6px rgb(0 0 0 / 0.1);\r\n  --shadow-5: 0 25px 50px -12px rgb(0 0 0 / 0.25);\r\n  --transition: all 0.3s ease-in-out;\r\n}\r\n\r\nbody {\r\n  background: var(--clr-body);\r\n  font-family: 'PT Sans', sans-serif;\r\n  font-weight: 400;\r\n  line-height: 1.75;\r\n  color: #000;\r\n}\r\n\r\np {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 3rem 0 1.38rem;\r\n  font-family: 'Mingzat', sans-serif;\r\n  font-weight: 400;\r\n  line-height: 1.3;\r\n}\r\n\r\nh1 {\r\n  margin-top: 0;\r\n  font-size: 3.052rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 2.441rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.953rem;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.563rem;\r\n}\r\n\r\nh5 {\r\n  font-size: 1.25rem;\r\n}\r\n\r\nsmall,\r\n.text_small {\r\n  font-size: 0.8rem;\r\n}\r\n\r\nmain {\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.todo-container {\r\n  width: 100%;\r\n  max-width: var(--max-width);\r\n  margin: auto 1rem;\r\n  box-shadow: var(--shadow-3);\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n}\r\n\r\n.title-container {\r\n  text-transform: capitalize;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 1rem;\r\n  padding-top: 0.75rem;\r\n}\r\n\r\n.title-container > p {\r\n  padding-left: 1rem;\r\n}\r\n\r\n.title-container > span {\r\n  padding-right: 1rem;\r\n}\r\n\r\nform {\r\n  border-bottom: 1pt solid rgb(187, 187, 187);\r\n  padding: 1rem 0;\r\n}\r\n\r\n.single-form {\r\n  border: none;\r\n  padding: 0;\r\n}\r\n\r\n.form-control {\r\n  display: grid;\r\n  grid-template-columns: 9fr 1fr;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.btn,\r\n.form-input,\r\n.single-input {\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 1rem;\r\n  outline: none;\r\n}\r\n\r\n.btn {\r\n  color: grey;\r\n}\r\n\r\n.single-input {\r\n  font-size: 1rem;\r\n}\r\n\r\n.btn:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.submit-btn {\r\n  font-size: 1rem;\r\n  color: gray;\r\n}\r\n\r\n::placeholder {\r\n  font-size: 1rem;\r\n  font-style: italic;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.list-container {\r\n  list-style-type: none;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.wrapper {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n}\r\n\r\n.todo-txt {\r\n  margin-bottom: 0;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1pt solid rgb(187, 187, 187);\r\n  padding: 1rem;\r\n}\r\n\r\n.yellow {\r\n  background: var(--clr--primary);\r\n}\r\n\r\n.btn-block {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.complete-btn {\r\n  color: rgb(0, 162, 255);\r\n  font-weight: bolder;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAIA;EACE,eAAe;AACjB,EAAE,SAAS;AACX;EACE,qBAAqB;EACrB,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;;EAElB,gBAAgB;EAChB,yEAAyE;EACzE,4EAA4E;EAC5E,8EAA8E;EAC9E;;oCAEkC;EAClC,+CAA+C;EAC/C,kCAAkC;AACpC;;AAEA;EACE,2BAA2B;EAC3B,kCAAkC;EAClC,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;;;EAKE,sBAAsB;EACtB,kCAAkC;EAClC,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,2BAA2B;EAC3B,iBAAiB;EACjB,2BAA2B;EAC3B,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2CAA2C;EAC3C,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;;AAEA;;;EAGE,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,2CAA2C;EAC3C,aAAa;AACf;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,SAAS;EACT,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":["*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@import url('https://fonts.googleapis.com/css?family=PT+Sans:400|Mingzat:400');\r\n\r\nhtml {\r\n  font-size: 100%;\r\n} /* 16px */\r\n:root {\r\n  --clr-body: #dee2e6b0;\r\n  --clr--primary: #fdffb6;\r\n  --clr--secondary: #3a86ff;\r\n  --max-width: 600px;\r\n\r\n  /* box shadows */\r\n  --shadow-1: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\r\n  --shadow-2: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\r\n  --shadow-3: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\r\n  --shadow-4:\r\n    0 20px 25px -5px rgb(0 0 0 / 0.1),\r\n    0 8px 10px -6px rgb(0 0 0 / 0.1);\r\n  --shadow-5: 0 25px 50px -12px rgb(0 0 0 / 0.25);\r\n  --transition: all 0.3s ease-in-out;\r\n}\r\n\r\nbody {\r\n  background: var(--clr-body);\r\n  font-family: 'PT Sans', sans-serif;\r\n  font-weight: 400;\r\n  line-height: 1.75;\r\n  color: #000;\r\n}\r\n\r\np {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 3rem 0 1.38rem;\r\n  font-family: 'Mingzat', sans-serif;\r\n  font-weight: 400;\r\n  line-height: 1.3;\r\n}\r\n\r\nh1 {\r\n  margin-top: 0;\r\n  font-size: 3.052rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 2.441rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.953rem;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.563rem;\r\n}\r\n\r\nh5 {\r\n  font-size: 1.25rem;\r\n}\r\n\r\nsmall,\r\n.text_small {\r\n  font-size: 0.8rem;\r\n}\r\n\r\nmain {\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.todo-container {\r\n  width: 100%;\r\n  max-width: var(--max-width);\r\n  margin: auto 1rem;\r\n  box-shadow: var(--shadow-3);\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n}\r\n\r\n.title-container {\r\n  text-transform: capitalize;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 1rem;\r\n  padding-top: 0.75rem;\r\n}\r\n\r\n.title-container > p {\r\n  padding-left: 1rem;\r\n}\r\n\r\n.title-container > span {\r\n  padding-right: 1rem;\r\n}\r\n\r\nform {\r\n  border-bottom: 1pt solid rgb(187, 187, 187);\r\n  padding: 1rem 0;\r\n}\r\n\r\n.single-form {\r\n  border: none;\r\n  padding: 0;\r\n}\r\n\r\n.form-control {\r\n  display: grid;\r\n  grid-template-columns: 9fr 1fr;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.btn,\r\n.form-input,\r\n.single-input {\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 1rem;\r\n  outline: none;\r\n}\r\n\r\n.btn {\r\n  color: grey;\r\n}\r\n\r\n.single-input {\r\n  font-size: 1rem;\r\n}\r\n\r\n.btn:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.submit-btn {\r\n  font-size: 1rem;\r\n  color: gray;\r\n}\r\n\r\n::placeholder {\r\n  font-size: 1rem;\r\n  font-style: italic;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.list-container {\r\n  list-style-type: none;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.wrapper {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n}\r\n\r\n.todo-txt {\r\n  margin-bottom: 0;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1pt solid rgb(187, 187, 187);\r\n  padding: 1rem;\r\n}\r\n\r\n.yellow {\r\n  background: var(--clr--primary);\r\n}\r\n\r\n.btn-block {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.complete-btn {\r\n  color: rgb(0, 162, 255);\r\n  font-weight: bolder;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/LocalStorage.js":
/*!*****************************!*\
  !*** ./src/LocalStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage),
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage)
/* harmony export */ });
const getLocalStorage = () => (localStorage.getItem('todo')
  ? JSON.parse(localStorage.getItem('todo'))
  : []);
const setLocalStorage = (arr) => {
  localStorage.setItem('todo', JSON.stringify(arr));
};




/***/ }),

/***/ "./src/displayList.js":
/*!****************************!*\
  !*** ./src/displayList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage */ "./src/LocalStorage.js");


const main = document.querySelector('.main');
const listContainer = document.querySelector('.list-container');
const clearBtn = document.querySelector('.clear-btn');
const displayItems = (list) => {
  const displayList = list
    .sort((a, b) => a.index - b.index)
    .map((item) => {
      const { description, index, completed } = item;
      return ` <li class="todo-item" data-id="${index}">
            <div class="wrapper">
              <button type="button" class="btn complete-btn">
                ${
                  completed
                    ? '<i class="fa-solid fa-check"></i>'
                    : '<i class="fa-regular fa-square"></i>'
                }
              </button>
               <form class="single-form hide">
                <input type="text"  class="single-input"/>
              </form>
              <p class="todo-txt">${
                completed ? `<s>${description}</s>` : `${description}`
              }</p>
            </div>
            <button type="button" class="btn">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </li>`;
    })
    .join('');
  listContainer.innerHTML = displayList;
  const listItems = listContainer.querySelectorAll('.todo-item');
  main.addEventListener('click', (e) => {
    if (e.target.classList.contains('main')) {
      const allItems = [...e.currentTarget.children[0].children[2].children];
      allItems.forEach((item) => {
        item.classList.remove('yellow');
        item.children[1].innerHTML =
          '<i class="fa-solid fa-ellipsis-vertical"></i>';
        item.children[1].classList.add('delete-btn');
        item.children[0].children[1].classList.add('hide');
        item.children[0].children[2].classList.remove('hide');
        displayItems((0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)());
      });
    }
  });
  listItems.forEach((listItem) => {
    listItem.addEventListener('click', (e) => {
      listItems.forEach((item) => {
        item.classList.remove('yellow');
        item.children[1].innerHTML =
          '<i class="fa-solid fa-ellipsis-vertical"></i>';
        item.children[1].classList.add('delete-btn');
      });
      e.currentTarget.children[1].innerHTML =
        '<i class="fa-regular fa-trash-can"></i>';
      e.currentTarget.classList.add('yellow');
      e.currentTarget.children[1].classList.add('delete-btn');
      e.currentTarget.children[0].children[1].classList.remove('hide');
      const conent = e.currentTarget.children[0].children[2].textContent;
      e.currentTarget.children[0].children[1].children[0].value = conent;
      e.currentTarget.children[0].children[2].classList.add('hide');
    });
  });
  const actionBtn = listContainer.querySelectorAll('.btn');
  actionBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.currentTarget.classList.contains('delete-btn')) {
        const ItemId = e.currentTarget.parentElement.dataset.id;
        const newList = (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)().filter(
          (item) => item.index !== Number(ItemId)
        );
        e.currentTarget.parentElement.remove();

        displayItems(newList);
        (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(newList);
        return;
      }
      if (e.currentTarget.classList.contains('complete-btn')) {
        const ItemId = e.currentTarget.parentElement.parentElement.dataset.id;
        const newItems = (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)().map((item) => {
          const { index } = item;
          if (index === Number(ItemId)) {
            item.completed = !item.completed;
            return item;
          }
          return item;
        });

        displayItems(newItems);
        (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(newItems);
      }
    });
  });
  const editInput = listContainer.querySelectorAll('.single-input');

  editInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      const parentID =
        e.target.parentElement.parentElement.parentElement.dataset.id;
      const input = e.target.value;
      const newItems = (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)().map((item) => {
        if (item.index.toString() === parentID) {
          item.description = input;
          return item;
        }
        return item;
      });
      (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(newItems);
    });
  });
  clearBtn.addEventListener('click', () => {
    const newItems = (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)().filter(
      (item) => item.completed !== true
    );

    displayItems(newItems);
    (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(newItems);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayItems);


/***/ }),

/***/ "./src/handleDisplay.js":
/*!******************************!*\
  !*** ./src/handleDisplay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayList */ "./src/displayList.js");
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage */ "./src/LocalStorage.js");



const handleDisplay = () => {
  (0,_displayList__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_LocalStorage__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)());

  // clear all completed fuctionality
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleDisplay);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handleDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDisplay */ "./src/handleDisplay.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalStorage */ "./src/LocalStorage.js");




const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!formInput.value) {
    return;
  }
  const tempId = new Date().getTime();
  const task = {
    index: tempId,
    description: formInput.value,
    completed: false,
  };
  const newValues = [...(0,_LocalStorage__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)(), task];
  formInput.value = '';
  (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)(newValues);
  (0,_handleDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
window.addEventListener('DOMContentLoaded', () => {
  (0,_handleDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=mainb8eb1007ea1fdab151aa.js.map