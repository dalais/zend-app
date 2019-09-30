/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resources_src_componets_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resources/src/componets/app.service */ \"./resources/src/componets/app.service.js\");\n/* harmony import */ var _resources_src_componets_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources/src/componets/config */ \"./resources/src/componets/config.js\");\n/* harmony import */ var _resources_src_componets_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/src/componets/header.component */ \"./resources/src/componets/header.component.js\");\n/* harmony import */ var _resources_src_componets_header_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_src_componets_header_component__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconsole.log(\"Config key: \", _resources_src_componets_config__WEBPACK_IMPORTED_MODULE_1__[\"config\"].key)\n\nconst service = new _resources_src_componets_app_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Hello World!')\nservice.log()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvaW5kZXguanM/NGRmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwU2VydmljZSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvc3JjL2NvbXBvbmV0cy9hcHAuc2VydmljZSdcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvc3JjL2NvbXBvbmV0cy9jb25maWcnXG5pbXBvcnQgJy4uLy4uL3Jlc291cmNlcy9zcmMvY29tcG9uZXRzL2hlYWRlci5jb21wb25lbnQnXG5cbmNvbnNvbGUubG9nKFwiQ29uZmlnIGtleTogXCIsIGNvbmZpZy5rZXkpXG5cbmNvbnN0IHNlcnZpY2UgPSBuZXcgQXBwU2VydmljZSgnSGVsbG8gV29ybGQhJylcbnNlcnZpY2UubG9nKCkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/js/index.js\n");

/***/ }),

/***/ "./resources/src/componets/app.service.js":
/*!************************************************!*\
  !*** ./resources/src/componets/app.service.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppService; });\nclass AppService {\n    constructor(text) {\n        this.text = text\n    }\n\n    log() {\n        console.log('[App service]:', this.text)\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2NvbXBvbmV0cy9hcHAuc2VydmljZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvY29tcG9uZXRzL2FwcC5zZXJ2aWNlLmpzP2MzMGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0XG4gICAgfVxuXG4gICAgbG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnW0FwcCBzZXJ2aWNlXTonLCB0aGlzLnRleHQpXG4gICAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/componets/app.service.js\n");

/***/ }),

/***/ "./resources/src/componets/config.js":
/*!*******************************************!*\
  !*** ./resources/src/componets/config.js ***!
  \*******************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\nconst config = {\n    key: '123456'\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2NvbXBvbmV0cy9jb25maWcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2NvbXBvbmV0cy9jb25maWcuanM/YTQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGtleTogJzEyMzQ1Nidcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/componets/config.js\n");

/***/ }),

/***/ "./resources/src/componets/header.component.js":
/*!*****************************************************!*\
  !*** ./resources/src/componets/header.component.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('Header component')//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2NvbXBvbmV0cy9oZWFkZXIuY29tcG9uZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9jb21wb25ldHMvaGVhZGVyLmNvbXBvbmVudC5qcz9kNmI0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdIZWFkZXIgY29tcG9uZW50JykiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/componets/header.component.js\n");

/***/ })

/******/ });