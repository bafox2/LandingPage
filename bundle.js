/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
about = (() => {
    let aboutwrapper = document.createElement('div')
    let header = document.createElement('h1')
    let aboutparagraph = document.createElement('p')
    header.innerText = "About the Chef"
    aboutparagraph.innerText = "Nathan Fox is a young chef from Northern Virginia, with years of experience across different cuisines, cooking styles, and sources. With Michellin stars in his past, Nate has decided to focus on bringing people the food that is part of their environment. With some of his earliest memories being formed picking lima beans in the family garden, this feels like coming home. Excited to shine the spotlight on the wonderful experiences that come from his community, Nate is ready to embrace Sharton"
    aboutwrapper.appendChild(header)
    aboutwrapper.appendChild(aboutparagraph)
    document.querySelector('body').appendChild(aboutwrapper)
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ about });
//H1 About the Chef
//"Nathan Fox is a young chef from Northern Virginia, with years of experience across different cuisines, cooking styles, and sources. With Michellin stars in his past, Nate has decided to focus on bringing people the food that is part of their environment. With some of his earliest memories being formed picking lima beans in the family garden, this feels like coming home. Excited to shine the spotlight on the wonderful experiences that come from his community, Nate is ready to embrace Sharton"

/***/ }),

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
    //     apiKey: "AIzaSyCO_zgzQPLw8QumirmZWjHwgRDFrdIgitoM",
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
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
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
;(0,_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLEVBQUUsT0FBTztBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1pBLFlBQVksU0FBUzs7OztBQUlyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpRUFBZSxFQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDdkMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDTnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsTUFBTTs7Ozs7O1VDdEJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDaUM7QUFDRTtBQUNGO0FBQ0Y7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxzREFBTTtBQUNOLHVEQUFNO0FBQ04sd0RBQU87QUFDUCxzREFBSyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZGluZ3BhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vbGFuZGluZ3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9sYW5kaW5ncGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbGFuZGluZ3BhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL2xhbmRpbmdwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xhbmRpbmdwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYW5kaW5ncGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xhbmRpbmdwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGFuZGluZ3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYWJvdXQgPSAoKCkgPT4ge1xuICAgIGxldCBhYm91dHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgbGV0IGFib3V0cGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiQWJvdXQgdGhlIENoZWZcIlxuICAgIGFib3V0cGFyYWdyYXBoLmlubmVyVGV4dCA9IFwiTmF0aGFuIEZveCBpcyBhIHlvdW5nIGNoZWYgZnJvbSBOb3J0aGVybiBWaXJnaW5pYSwgd2l0aCB5ZWFycyBvZiBleHBlcmllbmNlIGFjcm9zcyBkaWZmZXJlbnQgY3Vpc2luZXMsIGNvb2tpbmcgc3R5bGVzLCBhbmQgc291cmNlcy4gV2l0aCBNaWNoZWxsaW4gc3RhcnMgaW4gaGlzIHBhc3QsIE5hdGUgaGFzIGRlY2lkZWQgdG8gZm9jdXMgb24gYnJpbmdpbmcgcGVvcGxlIHRoZSBmb29kIHRoYXQgaXMgcGFydCBvZiB0aGVpciBlbnZpcm9ubWVudC4gV2l0aCBzb21lIG9mIGhpcyBlYXJsaWVzdCBtZW1vcmllcyBiZWluZyBmb3JtZWQgcGlja2luZyBsaW1hIGJlYW5zIGluIHRoZSBmYW1pbHkgZ2FyZGVuLCB0aGlzIGZlZWxzIGxpa2UgY29taW5nIGhvbWUuIEV4Y2l0ZWQgdG8gc2hpbmUgdGhlIHNwb3RsaWdodCBvbiB0aGUgd29uZGVyZnVsIGV4cGVyaWVuY2VzIHRoYXQgY29tZSBmcm9tIGhpcyBjb21tdW5pdHksIE5hdGUgaXMgcmVhZHkgdG8gZW1icmFjZSBTaGFydG9uXCJcbiAgICBhYm91dHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGFib3V0d3JhcHBlci5hcHBlbmRDaGlsZChhYm91dHBhcmFncmFwaClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoYWJvdXR3cmFwcGVyKVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHsgYWJvdXQgfVxuLy9IMSBBYm91dCB0aGUgQ2hlZlxuLy9cIk5hdGhhbiBGb3ggaXMgYSB5b3VuZyBjaGVmIGZyb20gTm9ydGhlcm4gVmlyZ2luaWEsIHdpdGggeWVhcnMgb2YgZXhwZXJpZW5jZSBhY3Jvc3MgZGlmZmVyZW50IGN1aXNpbmVzLCBjb29raW5nIHN0eWxlcywgYW5kIHNvdXJjZXMuIFdpdGggTWljaGVsbGluIHN0YXJzIGluIGhpcyBwYXN0LCBOYXRlIGhhcyBkZWNpZGVkIHRvIGZvY3VzIG9uIGJyaW5naW5nIHBlb3BsZSB0aGUgZm9vZCB0aGF0IGlzIHBhcnQgb2YgdGhlaXIgZW52aXJvbm1lbnQuIFdpdGggc29tZSBvZiBoaXMgZWFybGllc3QgbWVtb3JpZXMgYmVpbmcgZm9ybWVkIHBpY2tpbmcgbGltYSBiZWFucyBpbiB0aGUgZmFtaWx5IGdhcmRlbiwgdGhpcyBmZWVscyBsaWtlIGNvbWluZyBob21lLiBFeGNpdGVkIHRvIHNoaW5lIHRoZSBzcG90bGlnaHQgb24gdGhlIHdvbmRlcmZ1bCBleHBlcmllbmNlcyB0aGF0IGNvbWUgZnJvbSBoaXMgY29tbXVuaXR5LCBOYXRlIGlzIHJlYWR5IHRvIGVtYnJhY2UgU2hhcnRvblwiIiwiLy8gaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGdvb2dsZW1hcHMvanMtYXBpLWxvYWRlcic7XG5cblxuXG5sZXQgY29udGFjdCA9ICgoKSA9PiB7XG4gICAgbGV0IGNvbnRhY3RkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3RkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGhvbmUuaW5uZXJUZXh0ID0gXCI3MDMtNTU1LTU1NTVcIlxuICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWRkcmVzcy5pbm5lclRleHQgPSBcIjQwOCBXIFN0IENsYWlyIEF2ZSwgQ2xldmVsYW5kLCBPSCA0NDExM1wiXG4gICAgbGV0IG1hcHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1hcHdyYXBwZXIuaWQgPSAoJ21hcCcpXG5cbiAgICAvLyBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKHtcbiAgICAvLyAgICAgYXBpS2V5OiBcIkFJemFTeUNPX3pnelFQTHc4UXVtaXJtWldqSHdnUkRGcmRJZ2l0b01cIixcbiAgICAvLyAgICAgdmVyc2lvbjogXCJ3ZWVrbHlcIixcbiAgICAvLyAgICAgbGlicmFyaWVzOiBbXCJwbGFjZXNcIl1cbiAgICAvLyB9KTtcbiAgICAvLyBjb25zdCBtYXBPcHRpb25zID0ge1xuICAgIC8vICAgICBjZW50ZXI6IHtcbiAgICAvLyAgICAgICAgIGxhdDogMCxcbiAgICAvLyAgICAgICAgIGxuZzogMFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB6b29tOiA0XG4gICAgLy8gfTtcbiAgICAvLyBsb2FkZXIubG9hZCgpXG4gICAgLy8gICAgIC50aGVuKChnb29nbGUpID0+IHtcbiAgICAvLyAgICAgICAgIG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIG1hcE9wdGlvbnMpO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuY2F0Y2goZSA9PiB7XG4gICAgLy8gICAgICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAvLyAgICAgfSk7XG5cbiAgICBjb250YWN0ZGl2LmFwcGVuZENoaWxkKHBob25lKVxuICAgIGNvbnRhY3RkaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcylcbiAgICBjb250YWN0ZGl2LmFwcGVuZENoaWxkKG1hcHdyYXBwZXIpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGNvbnRhY3RkaXYpXG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgeyBjb250YWN0IH07IiwibGV0IGZvb3RlciA9ICgoKSA9PiB7XG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLmlubmVyVGV4dCA9IFwiQ29weXJpZ2h0IMKpIDIwMjEgYmFmb3gyXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZm9vdGVyKVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjsiLCJsZXQgaGVhZGVyID0gKCgpID0+IHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJGb3gncyBEZW5cIlxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKVxuICAgIGxldCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWJvdXQuaW5uZXJUZXh0ID0gXCJBYm91dFwiXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCJcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIlxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZiYXIpXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGFib3V0KVxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChtZW51KVxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChoZWFkZXIpXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyAvLyBpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0LmpzJztcbi8vIGltcG9ydCAnLi93ZWxjb21lLmpzJztcbi8vIGltcG9ydCAnLi9mb290ZXIuanMnO1xuLy9pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24ucG5nJztcbi8vQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxuLy8gY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4vLyBteUljb24uc3JjID0gSWNvbjtcbi8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuXG4vL2FkZCBoZWFkZXJcbi8vYWRkIGZvb3RlclxuaGVhZGVyKClcbmZvb3RlcigpXG5jb250YWN0KClcbmFib3V0KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=