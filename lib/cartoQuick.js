(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cartoQuick"] = factory();
	else
		root["cartoQuick"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	export default {
	  getStyle(colorArray, baseStyle) {
	    var retStyle = Object.assign({}, baseStyle);
	    if (retStyle && retStyle.hasOwnProperty('layers')) {

	      if (colorArray.length > 0) {
	        // do background
	        const backgroundLayers = retStyle.layers.filter(layer => {
	          if (layer.id.indexOf('background') > -1 || layer.id.indexOf('Water area') > -1 || layer.id.indexOf('Marine area') > -1) {
	            return true;
	          }
	          return false;
	        });

	        backgroundLayers.forEach(backgroundLayer => {
	          if (backgroundLayer.paint.hasOwnProperty('background-color')) {
	            backgroundLayer.paint['background-color'] = `#${ colorArray[0] }`;
	          }
	          if (backgroundLayer.paint.hasOwnProperty('fill-color')) {
	            backgroundLayer.paint['fill-color'] = `#${ colorArray[0] }`;
	          }
	        });
	      }

	      if (colorArray.length > 1) {
	        // do land
	        const landLayers = retStyle.layers.filter(layer => {
	          if (layer.id === 'Land') {
	            return true;
	          }
	          return false;
	        });

	        landLayers.forEach(landLayer => {
	          if (landLayer.paint.hasOwnProperty('fill-color')) {
	            landLayer.paint['fill-color'] = `#${ colorArray[1] }`;
	          }
	        });
	      }

	      if (colorArray.length > 2) {
	        // do other
	        const otherLayers = retStyle.layers.filter(layer => {
	          if (layer.id.indexOf('Building/General') > -1 || layer.id.indexOf('Railroad/2') > -1 || layer.id.indexOf('Railroad/1') > -1 || layer.id.indexOf('Urban area') > -1) {
	            return true;
	          }
	          return false;
	        });

	        otherLayers.forEach(otherLayer => {
	          if (otherLayer.paint.hasOwnProperty('background-color')) {
	            otherLayer.paint['background-color'] = `#${ colorArray[2] }`;
	          }
	          if (otherLayer.paint.hasOwnProperty('fill-color')) {
	            otherLayer.paint['fill-color'] = `#${ colorArray[2] }`;
	          }
	        });
	      }
	    }
	    return retStyle;
	  }
	};

/***/ }
/******/ ])
});
;