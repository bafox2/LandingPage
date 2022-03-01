/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import { Loader } from '@googlemaps/js-api-loader';



let contact = (() => {
    let contactdiv = document.createElement('div')
    contactdiv.classList.add("contact");
    let phone = document.createElement('p')
    phone.innerText = "703-555-5555"
    let address = document.createElement('p')
    address.innerText = "408 W St Clair Ave, Cleveland, OH 44113"
    let mapwrapper = document.createElement('div')
    mapwrapper.id = ('map')

    // const loader = new Loader({
    //     apiKey: "AIzaSyCO_zgzQPLw8QumirmZWjHwgRDFrdIMooM",
    //     version: "weekly",
    //     libraries: ["places"]
    // });
    // const mapOptions = {
    //     center: {
    //         lat: 0,
    //         lng: 0
    //     },
    //     zoom: 4
    // };
    // loader.load()
    //     .then((google) => {
    //         new google.maps.Map(document.getElementById("map"), mapOptions);
    //     })
    //     .catch(e => {
    //         // do something
    //     });

    contactdiv.appendChild(phone)
    contactdiv.appendChild(address)
    contactdiv.appendChild(mapwrapper)
    document.querySelector('body').appendChild(contactdiv)
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ contact });

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let footer = (() => {
    let footer = document.createElement('div')
    footer.classList.add("footer");
    footer.innerText = "Copyright © 2021 bafox2"
    document.querySelector('body').appendChild(footer)
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let header = (() => {
    let header = document.createElement('div')
    header.classList.add("header");
    let navbar = document.createElement('nav')
    let title = document.createElement('h1')
    title.innerText = "Fox's Den"
    navbar.classList.add('navbar')
    let about = document.createElement('button')
    about.innerText = "About"
    let menu = document.createElement('button')
    menu.innerText = "Menu"
    let contact = document.createElement('button')
    contact.innerText = "Contact"

    header.appendChild(title)
    header.appendChild(navbar)
    navbar.appendChild(about)
    navbar.appendChild(menu)
    navbar.appendChild(contact)
    document.querySelector('body').appendChild(header)
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
// // import './styles.css';



// import './welcome.js';
// import './footer.js';
//import Icon from './icon.png';
//Add the image to our existing div.
// const myIcon = new Image();
// myIcon.src = Icon;
// element.appendChild(myIcon);


//add header
//add footer
(0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWSxTQUFTOzs7O0FBSXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLEVBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUN2QzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUNOckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxNQUFNOzs7Ozs7VUN0QnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ2lDO0FBQ0U7QUFDRjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHNEQUFNO0FBQ04sdURBQU07QUFDTix3REFBTyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZGluZ3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9sYW5kaW5ncGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbGFuZGluZ3BhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL2xhbmRpbmdwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xhbmRpbmdwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYW5kaW5ncGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xhbmRpbmdwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGFuZGluZ3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGdvb2dsZW1hcHMvanMtYXBpLWxvYWRlcic7XG5cblxuXG5sZXQgY29udGFjdCA9ICgoKSA9PiB7XG4gICAgbGV0IGNvbnRhY3RkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3RkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGhvbmUuaW5uZXJUZXh0ID0gXCI3MDMtNTU1LTU1NTVcIlxuICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWRkcmVzcy5pbm5lclRleHQgPSBcIjQwOCBXIFN0IENsYWlyIEF2ZSwgQ2xldmVsYW5kLCBPSCA0NDExM1wiXG4gICAgbGV0IG1hcHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1hcHdyYXBwZXIuaWQgPSAoJ21hcCcpXG5cbiAgICAvLyBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKHtcbiAgICAvLyAgICAgYXBpS2V5OiBcIkFJemFTeUNPX3pnelFQTHc4UXVtaXJtWldqSHdnUkRGcmRJTW9vTVwiLFxuICAgIC8vICAgICB2ZXJzaW9uOiBcIndlZWtseVwiLFxuICAgIC8vICAgICBsaWJyYXJpZXM6IFtcInBsYWNlc1wiXVxuICAgIC8vIH0pO1xuICAgIC8vIGNvbnN0IG1hcE9wdGlvbnMgPSB7XG4gICAgLy8gICAgIGNlbnRlcjoge1xuICAgIC8vICAgICAgICAgbGF0OiAwLFxuICAgIC8vICAgICAgICAgbG5nOiAwXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHpvb206IDRcbiAgICAvLyB9O1xuICAgIC8vIGxvYWRlci5sb2FkKClcbiAgICAvLyAgICAgLnRoZW4oKGdvb2dsZSkgPT4ge1xuICAgIC8vICAgICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwgbWFwT3B0aW9ucyk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC5jYXRjaChlID0+IHtcbiAgICAvLyAgICAgICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgIC8vICAgICB9KTtcblxuICAgIGNvbnRhY3RkaXYuYXBwZW5kQ2hpbGQocGhvbmUpXG4gICAgY29udGFjdGRpdi5hcHBlbmRDaGlsZChhZGRyZXNzKVxuICAgIGNvbnRhY3RkaXYuYXBwZW5kQ2hpbGQobWFwd3JhcHBlcilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY29udGFjdGRpdilcbn0pKCk7XG5leHBvcnQgZGVmYXVsdCB7IGNvbnRhY3QgfTsiLCJsZXQgZm9vdGVyID0gKCgpID0+IHtcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgICBmb290ZXIuaW5uZXJUZXh0ID0gXCJDb3B5cmlnaHQgwqkgMjAyMSBiYWZveDJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChmb290ZXIpXG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgZm9vdGVyOyIsImxldCBoZWFkZXIgPSAoKCkgPT4ge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIkZveCdzIERlblwiXG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpXG4gICAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhYm91dC5pbm5lclRleHQgPSBcIkFib3V0XCJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbWVudS5pbm5lclRleHQgPSBcIk1lbnVcIlxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb250YWN0LmlubmVyVGV4dCA9IFwiQ29udGFjdFwiXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcilcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYWJvdXQpXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnUpXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGhlYWRlcilcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIC8vIGltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9mb290ZXIuanMnO1xuLy8gaW1wb3J0ICcuL3dlbGNvbWUuanMnO1xuLy8gaW1wb3J0ICcuL2Zvb3Rlci5qcyc7XG4vL2ltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xuLy9BZGQgdGhlIGltYWdlIHRvIG91ciBleGlzdGluZyBkaXYuXG4vLyBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbi8vIG15SWNvbi5zcmMgPSBJY29uO1xuLy8gZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuXG5cbi8vYWRkIGhlYWRlclxuLy9hZGQgZm9vdGVyXG5oZWFkZXIoKVxuZm9vdGVyKClcbmNvbnRhY3QoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==