/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*#text-box-div {*/\\n/*    position: fixed;*/\\n/*    width: 100vw;*/\\n/*    height: 100vh;*/\\n/*    top: 0;*/\\n/*    left: 0;*/\\n/*    z-index: 200;*/\\n/*    display: flex;*/\\n/*    align-items: center;*/\\n/*    justify-content: center;*/\\n/*}*/\\n\\n/*#text-box-shelter {*/\\n/*    background-color: var(--clear-black);*/\\n/*    position: absolute;*/\\n/*    width: 100vw;*/\\n/*    height: 100vh;*/\\n/*}*/\\n\\n/*#text-box {*/\\n/*    position: relative;*/\\n/*    display: flex;*/\\n/*    flex-direction: column;*/\\n/*    background-color: var(--background);*/\\n/*    border-radius: 10px;*/\\n/*    overflow: hidden;*/\\n/*    width: 400px;*/\\n/*    max-width: 80%;*/\\n/*}*/\\n\\n/*#text-box-navigation {*/\\n/*    position: relative;*/\\n/*    width: 100%;*/\\n/*    height: 60px;*/\\n/*    background-color: var(--clear-gray);*/\\n/*    display: flex;*/\\n/*    align-items: center;*/\\n/*    justify-content: space-between;*/\\n/*}*/\\n\\n/*#text-box-title {*/\\n/*    height: 60px;*/\\n/*    margin-left: 20px;*/\\n/*    font-size: 16px;*/\\n/*    font-weight: 600;*/\\n/*    display: flex;*/\\n/*    justify-content: center;*/\\n/*    align-items: center;*/\\n/*}*/\\n\\n/*#text-box-cancel {*/\\n/*    display: flex;*/\\n/*    align-content: center;*/\\n/*    align-items: center;*/\\n/*    justify-content: center;*/\\n/*    width: auto;*/\\n/*    padding: 20px;*/\\n/*    outline: none;*/\\n/*    margin: 0 5px 0 0;*/\\n/*    border: 0;*/\\n/*    background-color: transparent;*/\\n/*    cursor: pointer;*/\\n/*}*/\\n\\n/*#text-box-cancel img {*/\\n/*    width: auto;*/\\n/*    height: 12px;*/\\n/*    filter: var(--gray-filter);*/\\n/*}*/\\n\\n/*#text-box-content {*/\\n/*    position: relative;*/\\n/*    display: flex;*/\\n/*    flex-direction: column;*/\\n/*    margin: 10px 20px 14px;*/\\n/*}*/\\n\\n/*#text-box-message {*/\\n/*    text-align: left;*/\\n/*    word-break: break-all;*/\\n/*    max-height: 60vh;*/\\n/*    overflow-y: auto;*/\\n/*}*/\\n\\n/*#text-box-btn-div {*/\\n/*    display: flex;*/\\n/*    flex-direction: row;*/\\n/*    align-items: center;*/\\n/*    justify-content: center;*/\\n/*}*/\\n\\n/*#text-box-select {*/\\n/*    cursor: pointer;*/\\n/*}*/\\n\\n.text-box-div {\\n    position: fixed;\\n    width: 100vw;\\n    height: 100vh;\\n    top: 0;\\n    left: 0;\\n    z-index: 200;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    transition: opacity 0.3s, visibility 0.3s;\\n    animation: text-box-appear-opacity 0.3s;\\n}\\n\\n.text-box-div.invisible {\\n    opacity: 0;\\n    visibility: hidden;\\n}\\n\\n.text-box-shelter {\\n    background-color: var(--clear-black);\\n    position: absolute;\\n    width: 100vw;\\n    height: 100vh;\\n}\\n\\n.text-box {\\n    position: relative;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--background);\\n    border-radius: 10px;\\n    overflow: hidden;\\n    width: 400px;\\n    max-width: 80%;\\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1.4);\\n    animation: text-box-appear-scale 0.3s cubic-bezier(0.4, 0, 0.2, 1.4);\\n}\\n\\n.text-box-div.invisible .text-box {\\n    transform: scale(0.1);\\n}\\n\\n@keyframes text-box-appear-opacity {\\n    0% { opacity: 0; }\\n    100% { opacity: 1; }\\n}\\n\\n@keyframes text-box-appear-scale {\\n    0% { transform: scale(0.1); }\\n    100% { transform: scale(1); }\\n}\\n\\n.text-box-navigation {\\n    position: relative;\\n    width: 100%;\\n    height: 60px;\\n    background-color: var(--clear-gray);\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n.text-box-title {\\n    height: 60px;\\n    margin-left: 20px;\\n    font-size: 16px;\\n    font-weight: 600;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.text-box-cancel {\\n    display: flex;\\n    align-content: center;\\n    align-items: center;\\n    justify-content: center;\\n    width: auto;\\n    padding: 20px;\\n    outline: none;\\n    margin: 0 5px 0 0;\\n    border: 0;\\n    background-color: transparent;\\n    cursor: pointer;\\n}\\n\\n.text-box-cancel img {\\n    width: auto;\\n    height: 12px;\\n    filter: var(--gray-filter);\\n}\\n\\n.text-box-content {\\n    position: relative;\\n    display: flex;\\n    flex-direction: column;\\n    margin: 10px 20px 14px;\\n}\\n\\n.text-box-message {\\n    text-align: left;\\n    word-break: break-all;\\n    max-height: 60vh;\\n    overflow-y: auto;\\n}\\n\\n.text-box-btn-div {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.text-box-select {\\n    cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Component/ButtonComponent.ts":
/*!******************************************!*\
  !*** ./src/Component/ButtonComponent.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonComponentConfig\": () => (/* binding */ ButtonComponentConfig),\n/* harmony export */   \"ButtonComponent\": () => (/* binding */ ButtonComponent)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/Component/Component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar ButtonComponentConfig = /** @class */ (function (_super) {\n    __extends(ButtonComponentConfig, _super);\n    function ButtonComponentConfig() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.btn_text = [\"OK\"];\n        return _this;\n    }\n    return ButtonComponentConfig;\n}(_Component__WEBPACK_IMPORTED_MODULE_0__.ComponentConfig));\nvar ButtonComponent = /** @class */ (function (_super) {\n    __extends(ButtonComponent, _super);\n    function ButtonComponent(config) {\n        var _this = _super.call(this, config) || this;\n        /** Elements */\n        _this._buttons = [];\n        return _this;\n    }\n    Object.defineProperty(ButtonComponent.prototype, \"default\", {\n        get: function () {\n            return new ButtonComponentConfig();\n        },\n        enumerable: false,\n        configurable: true\n    });\n    ButtonComponent.prototype.buildElement = function () {\n        /*\n        <div id=\"text-box-${this.id}-btn-div\" class=\"text-box-btn-div\">\n            <button id=\"text-box-${this.id}-confirm-btn\" class=\"submit-btn\" onclick=\"all_textbox['${this.id}'].submit_btn_clicked()\">${data.button_text !== undefined ? htmlencode(data.button_text) : i18n['room.confirm']}</button>\n        </div>\n        */\n        var div = document.createElement('div');\n        div.classList.add('text-box-btn-div');\n        for (var index = 0; index < this.buttons.length; index++) {\n            var button = this.buttons[index];\n            div.appendChild(button);\n        }\n        return div;\n    };\n    Object.defineProperty(ButtonComponent.prototype, \"buttons\", {\n        get: function () {\n            if (this._buttons.length == 0) {\n                for (var index = 0; index < this.config.btn_text.length; index++) {\n                    var button = document.createElement('button');\n                    button.classList.add(\"text-box-submit-btn\");\n                    button.innerText = this.config.btn_text[index];\n                    this._buttons.push(button);\n                }\n            }\n            return this._buttons;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return ButtonComponent;\n}(_Component__WEBPACK_IMPORTED_MODULE_0__.Component));\n\n\n\n//# sourceURL=webpack:///./src/Component/ButtonComponent.ts?");

/***/ }),

/***/ "./src/Component/Component.ts":
/*!************************************!*\
  !*** ./src/Component/Component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ComponentConfig\": () => (/* binding */ ComponentConfig),\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n\nvar ComponentConfig = /** @class */ (function () {\n    function ComponentConfig() {\n    }\n    return ComponentConfig;\n}());\nvar Component = /** @class */ (function () {\n    function Component(config) {\n        this.config = Object.assign({}, this.default, config);\n    }\n    Object.defineProperty(Component.prototype, \"default\", {\n        get: function () {\n            throw new Error(\"default getter method must be implemented!\");\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Component.prototype, \"element\", {\n        get: function () {\n            if (_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].empty(this._element)) {\n                this._element = this.buildElement();\n            }\n            return this._element;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Component.prototype.buildElement = function () {\n        throw new Error(\"buildElement method must be implemented!\");\n    };\n    return Component;\n}());\n\n\n\n//# sourceURL=webpack:///./src/Component/Component.ts?");

/***/ }),

/***/ "./src/Component/MessageComponent.ts":
/*!*******************************************!*\
  !*** ./src/Component/MessageComponent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessageComponentConfig\": () => (/* binding */ MessageComponentConfig),\n/* harmony export */   \"MessageComponent\": () => (/* binding */ MessageComponent)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/Component/Component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar MessageComponentConfig = /** @class */ (function (_super) {\n    __extends(MessageComponentConfig, _super);\n    function MessageComponentConfig() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.message = \"\";\n        return _this;\n    }\n    return MessageComponentConfig;\n}(_Component__WEBPACK_IMPORTED_MODULE_0__.ComponentConfig));\nvar MessageComponent = /** @class */ (function (_super) {\n    __extends(MessageComponent, _super);\n    function MessageComponent(config) {\n        return _super.call(this, config) || this;\n    }\n    Object.defineProperty(MessageComponent.prototype, \"default\", {\n        get: function () {\n            return new MessageComponentConfig();\n        },\n        enumerable: false,\n        configurable: true\n    });\n    MessageComponent.prototype.buildElement = function () {\n        var ele = document.createElement('span');\n        ele.classList.add('text-box-message');\n        ele.innerText = this.config.message;\n        return ele;\n    };\n    return MessageComponent;\n}(_Component__WEBPACK_IMPORTED_MODULE_0__.Component));\n\n\n\n//# sourceURL=webpack:///./src/Component/MessageComponent.ts?");

/***/ }),

/***/ "./src/TextBox/BaseBox.ts":
/*!********************************!*\
  !*** ./src/TextBox/BaseBox.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n/* harmony import */ var _Component_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component/Component */ \"./src/Component/Component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar BoxConfig = /** @class */ (function (_super) {\n    __extends(BoxConfig, _super);\n    function BoxConfig() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.id = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].generate_id();\n        _this.title = \"\";\n        return _this;\n    }\n    return BoxConfig;\n}(_Component_Component__WEBPACK_IMPORTED_MODULE_1__.ComponentConfig));\nvar BaseBox = /** @class */ (function (_super) {\n    __extends(BaseBox, _super);\n    function BaseBox(config) {\n        return _super.call(this, config) || this;\n    }\n    Object.defineProperty(BaseBox.prototype, \"default\", {\n        get: function () {\n            return new BoxConfig();\n        },\n        enumerable: false,\n        configurable: true\n    });\n    BaseBox.prototype.render = function () {\n        console.log('TextBox render: ' + this.config.id);\n        document.body.appendChild(this.element);\n    };\n    BaseBox.prototype.destroy = function () {\n        console.log('TextBox destory: ' + this.config.title);\n    };\n    Object.defineProperty(BaseBox.prototype, \"components\", {\n        get: function () {\n            return [];\n        },\n        enumerable: false,\n        configurable: true\n    });\n    /** Element */\n    BaseBox.prototype.buildElement = function () {\n        var div = document.createElement('div');\n        this.components.forEach(function (component) {\n            div.appendChild(component.element);\n        });\n        return div;\n    };\n    return BaseBox;\n}(_Component_Component__WEBPACK_IMPORTED_MODULE_1__.Component));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseBox);\n\n\n//# sourceURL=webpack:///./src/TextBox/BaseBox.ts?");

/***/ }),

/***/ "./src/TextBox/TextBox.ts":
/*!********************************!*\
  !*** ./src/TextBox/TextBox.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n/* harmony import */ var _BaseBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseBox */ \"./src/TextBox/BaseBox.ts\");\n/* harmony import */ var _Component_MessageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Component/MessageComponent */ \"./src/Component/MessageComponent.ts\");\n/* harmony import */ var _Component_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Component/ButtonComponent */ \"./src/Component/ButtonComponent.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\nvar TextBox = /** @class */ (function (_super) {\n    __extends(TextBox, _super);\n    function TextBox(config) {\n        var _this = _super.call(this, config) || this;\n        _this.messageComponent = new _Component_MessageComponent__WEBPACK_IMPORTED_MODULE_2__.MessageComponent(config);\n        _this.buttonComponent = new _Component_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent(config);\n        return _this;\n    }\n    Object.defineProperty(TextBox.prototype, \"content\", {\n        get: function () {\n            return undefined;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(TextBox.prototype, \"components\", {\n        get: function () {\n            if (_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].empty(this.content)) {\n                return [\n                    this.messageComponent,\n                    this.buttonComponent\n                ];\n            }\n            else {\n                return [\n                    this.messageComponent,\n                    this.content,\n                    this.buttonComponent,\n                ];\n            }\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return TextBox;\n}(_BaseBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextBox);\n\n\n//# sourceURL=webpack:///./src/TextBox/TextBox.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TextBox_TextBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBox/TextBox */ \"./src/TextBox/TextBox.ts\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n\n\n//@ts-ignore\nwindow.TextBox = _TextBox_TextBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar generate_id = function () {\n    var now = new Date().getTime();\n    var result = '';\n    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n    var charactersLength = characters.length;\n    for (var i = 0; i < 6; i++) {\n        result += characters.charAt(Math.floor(Math.random() *\n            charactersLength));\n    }\n    return now + result;\n};\nvar empty = function (e) {\n    if (e == null || typeof (e) == \"undefined\") {\n        return true;\n    }\n    return false;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    generate_id: generate_id,\n    empty: empty\n});\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;