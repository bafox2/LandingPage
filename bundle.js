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
    document.querySelector('#content').appendChild(aboutwrapper)
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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//maybe make cards based off an object 
//maybe add those objects to an array and create the items automatically

const itemFactory = (name, desc, season, image) => {

    return { name, desc, season, image };
};

item1 = itemFactory("Beet Sunrise", "Hand dug beets sliced to precision and prepared with a vinigrette", "Spring", "./pageImages/beetgarden.jpg")
item2 = itemFactory("Spring's Bounty", "Carefully molded into a freshly bloomed sapling, this dish reflects the freshness of the season", "Spring", "./pageImages/beandish.jpg")
item3 = itemFactory("Caviar", "Sourced locally, caviar from a local farm near Higginsville", "All", "./pageImages/caviar.jpg")
item4 = itemFactory("Oragami Surprise", "Inspired by the Japanese craft, this ginger dish delights in design and taste", "Fall", "./pageImages/oragami.jpg")
item5 = itemFactory("Orange Delight", "Little known citrus farm 'Durotar Harvest' delivers our fruit daily, and is showcased here", "Summer", "./pageImages/orangedelight.jpg")
item6 = itemFactory("Little Italy", "Proscuetto, melon, and an apple glazed yoghurt star in this Italian inspired special", "Spring", "./pageImages/proscuetto.jpg")
item7 = itemFactory("Quail Egg", "Stolen right from the nest, you can't have a more fresh taste", "Spring", "./pageImages/quailegg.jpg")

//create dom elements for each object, add each dom element to a div, add each div to the menu

// function getMenu {
//     let menu = []
//     for (i = 0; i < 7; i++) {
//         menu.push(`item[${i}]`)

//     }
//     console.log(menu)
//     return menu
// }

let menu = []
menu.push(item1, item2, item3, item4, item5, item6, item7)
console.log(menu)

function getMenu() {
    for (i = 0; i < 7; i++) {
        let card = document.createElement(card)
        card.setClass("menuitem")
        let foodname = document.createElement("h1")
        let fooddesc = document.createElement("p")
        let season = document.createElement('span')
        let foodpic = document.createElement('img')
        foodname.innerText = menu[i].name
        fooddesc.innerText = menu[i].desc
        season.innerText = menu[i].season
        foodpic.setAttribute("src", menu[i].image)
        card.appendChild(foodname, fooddesc, season, foodpic)
        document.querySelector('#content').appendChild(card)
        console.log('worked')

    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getMenu });

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let clear = () => {
    const myNode = document.querySelector('#content')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

let init = () => {
    content = document.createElement('div')
    content.setAttribute('id', 'content')
    document.querySelector('body').appendChild(content)
}

//document.querySelector('#content').appendChild(document.createElement)
//document.body.append(Object.assign(document.createElement('div'),{textContent:"fd"}));


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ init, clear });

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
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation */ "./src/navigation.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
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
;(0,_navigation__WEBPACK_IMPORTED_MODULE_4__["default"])()
;(0,_menu__WEBPACK_IMPORTED_MODULE_5__["default"])()
;(0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLEVBQUUsT0FBTztBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1pBLFlBQVksU0FBUzs7OztBQUlyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpRUFBZSxFQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDdkMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDTnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUN0QnJCO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQiw2QkFBNkIsRUFBRTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlFQUFlLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0FDbERqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxpQkFBaUI7OztBQUdyRixpRUFBZSxFQUFFOzs7Ozs7VUNqQmpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ2lDO0FBQ0U7QUFDRjtBQUNGO0FBQ0M7QUFDSjtBQUNGO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esc0RBQU07QUFDTix3REFBSTtBQUNKLGtEQUFJO0FBQ0osdURBQU07QUFDTix3REFBTztBQUNQLHNEQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5kaW5ncGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9sYW5kaW5ncGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL2xhbmRpbmdwYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9sYW5kaW5ncGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbGFuZGluZ3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9sYW5kaW5ncGFnZS8uL3NyYy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2xhbmRpbmdwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xhbmRpbmdwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYW5kaW5ncGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xhbmRpbmdwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGFuZGluZ3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYWJvdXQgPSAoKCkgPT4ge1xuICAgIGxldCBhYm91dHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgbGV0IGFib3V0cGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiQWJvdXQgdGhlIENoZWZcIlxuICAgIGFib3V0cGFyYWdyYXBoLmlubmVyVGV4dCA9IFwiTmF0aGFuIEZveCBpcyBhIHlvdW5nIGNoZWYgZnJvbSBOb3J0aGVybiBWaXJnaW5pYSwgd2l0aCB5ZWFycyBvZiBleHBlcmllbmNlIGFjcm9zcyBkaWZmZXJlbnQgY3Vpc2luZXMsIGNvb2tpbmcgc3R5bGVzLCBhbmQgc291cmNlcy4gV2l0aCBNaWNoZWxsaW4gc3RhcnMgaW4gaGlzIHBhc3QsIE5hdGUgaGFzIGRlY2lkZWQgdG8gZm9jdXMgb24gYnJpbmdpbmcgcGVvcGxlIHRoZSBmb29kIHRoYXQgaXMgcGFydCBvZiB0aGVpciBlbnZpcm9ubWVudC4gV2l0aCBzb21lIG9mIGhpcyBlYXJsaWVzdCBtZW1vcmllcyBiZWluZyBmb3JtZWQgcGlja2luZyBsaW1hIGJlYW5zIGluIHRoZSBmYW1pbHkgZ2FyZGVuLCB0aGlzIGZlZWxzIGxpa2UgY29taW5nIGhvbWUuIEV4Y2l0ZWQgdG8gc2hpbmUgdGhlIHNwb3RsaWdodCBvbiB0aGUgd29uZGVyZnVsIGV4cGVyaWVuY2VzIHRoYXQgY29tZSBmcm9tIGhpcyBjb21tdW5pdHksIE5hdGUgaXMgcmVhZHkgdG8gZW1icmFjZSBTaGFydG9uXCJcbiAgICBhYm91dHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGFib3V0d3JhcHBlci5hcHBlbmRDaGlsZChhYm91dHBhcmFncmFwaClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGFib3V0d3JhcHBlcilcbn0pKCk7XG5leHBvcnQgZGVmYXVsdCB7IGFib3V0IH1cbi8vSDEgQWJvdXQgdGhlIENoZWZcbi8vXCJOYXRoYW4gRm94IGlzIGEgeW91bmcgY2hlZiBmcm9tIE5vcnRoZXJuIFZpcmdpbmlhLCB3aXRoIHllYXJzIG9mIGV4cGVyaWVuY2UgYWNyb3NzIGRpZmZlcmVudCBjdWlzaW5lcywgY29va2luZyBzdHlsZXMsIGFuZCBzb3VyY2VzLiBXaXRoIE1pY2hlbGxpbiBzdGFycyBpbiBoaXMgcGFzdCwgTmF0ZSBoYXMgZGVjaWRlZCB0byBmb2N1cyBvbiBicmluZ2luZyBwZW9wbGUgdGhlIGZvb2QgdGhhdCBpcyBwYXJ0IG9mIHRoZWlyIGVudmlyb25tZW50LiBXaXRoIHNvbWUgb2YgaGlzIGVhcmxpZXN0IG1lbW9yaWVzIGJlaW5nIGZvcm1lZCBwaWNraW5nIGxpbWEgYmVhbnMgaW4gdGhlIGZhbWlseSBnYXJkZW4sIHRoaXMgZmVlbHMgbGlrZSBjb21pbmcgaG9tZS4gRXhjaXRlZCB0byBzaGluZSB0aGUgc3BvdGxpZ2h0IG9uIHRoZSB3b25kZXJmdWwgZXhwZXJpZW5jZXMgdGhhdCBjb21lIGZyb20gaGlzIGNvbW11bml0eSwgTmF0ZSBpcyByZWFkeSB0byBlbWJyYWNlIFNoYXJ0b25cIiIsIi8vIGltcG9ydCB7IExvYWRlciB9IGZyb20gJ0Bnb29nbGVtYXBzL2pzLWFwaS1sb2FkZXInO1xuXG5cblxubGV0IGNvbnRhY3QgPSAoKCkgPT4ge1xuICAgIGxldCBjb250YWN0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0ZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgIGxldCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBob25lLmlubmVyVGV4dCA9IFwiNzAzLTU1NS01NTU1XCJcbiAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFkZHJlc3MuaW5uZXJUZXh0ID0gXCI0MDggVyBTdCBDbGFpciBBdmUsIENsZXZlbGFuZCwgT0ggNDQxMTNcIlxuICAgIGxldCBtYXB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYXB3cmFwcGVyLmlkID0gKCdtYXAnKVxuXG4gICAgLy8gY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcih7XG4gICAgLy8gICAgIGFwaUtleTogXCJBSXphU3lDT196Z3pRUEx3OFF1bWlybVpXakh3Z1JERnJkSWdpdG9NXCIsXG4gICAgLy8gICAgIHZlcnNpb246IFwid2Vla2x5XCIsXG4gICAgLy8gICAgIGxpYnJhcmllczogW1wicGxhY2VzXCJdXG4gICAgLy8gfSk7XG4gICAgLy8gY29uc3QgbWFwT3B0aW9ucyA9IHtcbiAgICAvLyAgICAgY2VudGVyOiB7XG4gICAgLy8gICAgICAgICBsYXQ6IDAsXG4gICAgLy8gICAgICAgICBsbmc6IDBcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgem9vbTogNFxuICAgIC8vIH07XG4gICAgLy8gbG9hZGVyLmxvYWQoKVxuICAgIC8vICAgICAudGhlbigoZ29vZ2xlKSA9PiB7XG4gICAgLy8gICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCBtYXBPcHRpb25zKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKGUgPT4ge1xuICAgIC8vICAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgLy8gICAgIH0pO1xuXG4gICAgY29udGFjdGRpdi5hcHBlbmRDaGlsZChwaG9uZSlcbiAgICBjb250YWN0ZGl2LmFwcGVuZENoaWxkKGFkZHJlc3MpXG4gICAgY29udGFjdGRpdi5hcHBlbmRDaGlsZChtYXB3cmFwcGVyKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChjb250YWN0ZGl2KVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHsgY29udGFjdCB9OyIsImxldCBmb290ZXIgPSAoKCkgPT4ge1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5pbm5lclRleHQgPSBcIkNvcHlyaWdodCDCqSAyMDIxIGJhZm94MlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGZvb3Rlcilcbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBmb290ZXI7IiwibGV0IGhlYWRlciA9ICgoKSA9PiB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiRm94J3MgRGVuXCJcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJylcbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFib3V0LmlubmVyVGV4dCA9IFwiQWJvdXRcIlxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBtZW51LmlubmVyVGV4dCA9IFwiTWVudVwiXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YWN0XCJcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2YmFyKVxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChhYm91dClcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudSlcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoaGVhZGVyKVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyOyIsIi8vbWF5YmUgbWFrZSBjYXJkcyBiYXNlZCBvZmYgYW4gb2JqZWN0IFxuLy9tYXliZSBhZGQgdGhvc2Ugb2JqZWN0cyB0byBhbiBhcnJheSBhbmQgY3JlYXRlIHRoZSBpdGVtcyBhdXRvbWF0aWNhbGx5XG5cbmNvbnN0IGl0ZW1GYWN0b3J5ID0gKG5hbWUsIGRlc2MsIHNlYXNvbiwgaW1hZ2UpID0+IHtcblxuICAgIHJldHVybiB7IG5hbWUsIGRlc2MsIHNlYXNvbiwgaW1hZ2UgfTtcbn07XG5cbml0ZW0xID0gaXRlbUZhY3RvcnkoXCJCZWV0IFN1bnJpc2VcIiwgXCJIYW5kIGR1ZyBiZWV0cyBzbGljZWQgdG8gcHJlY2lzaW9uIGFuZCBwcmVwYXJlZCB3aXRoIGEgdmluaWdyZXR0ZVwiLCBcIlNwcmluZ1wiLCBcIi4vcGFnZUltYWdlcy9iZWV0Z2FyZGVuLmpwZ1wiKVxuaXRlbTIgPSBpdGVtRmFjdG9yeShcIlNwcmluZydzIEJvdW50eVwiLCBcIkNhcmVmdWxseSBtb2xkZWQgaW50byBhIGZyZXNobHkgYmxvb21lZCBzYXBsaW5nLCB0aGlzIGRpc2ggcmVmbGVjdHMgdGhlIGZyZXNobmVzcyBvZiB0aGUgc2Vhc29uXCIsIFwiU3ByaW5nXCIsIFwiLi9wYWdlSW1hZ2VzL2JlYW5kaXNoLmpwZ1wiKVxuaXRlbTMgPSBpdGVtRmFjdG9yeShcIkNhdmlhclwiLCBcIlNvdXJjZWQgbG9jYWxseSwgY2F2aWFyIGZyb20gYSBsb2NhbCBmYXJtIG5lYXIgSGlnZ2luc3ZpbGxlXCIsIFwiQWxsXCIsIFwiLi9wYWdlSW1hZ2VzL2Nhdmlhci5qcGdcIilcbml0ZW00ID0gaXRlbUZhY3RvcnkoXCJPcmFnYW1pIFN1cnByaXNlXCIsIFwiSW5zcGlyZWQgYnkgdGhlIEphcGFuZXNlIGNyYWZ0LCB0aGlzIGdpbmdlciBkaXNoIGRlbGlnaHRzIGluIGRlc2lnbiBhbmQgdGFzdGVcIiwgXCJGYWxsXCIsIFwiLi9wYWdlSW1hZ2VzL29yYWdhbWkuanBnXCIpXG5pdGVtNSA9IGl0ZW1GYWN0b3J5KFwiT3JhbmdlIERlbGlnaHRcIiwgXCJMaXR0bGUga25vd24gY2l0cnVzIGZhcm0gJ0R1cm90YXIgSGFydmVzdCcgZGVsaXZlcnMgb3VyIGZydWl0IGRhaWx5LCBhbmQgaXMgc2hvd2Nhc2VkIGhlcmVcIiwgXCJTdW1tZXJcIiwgXCIuL3BhZ2VJbWFnZXMvb3JhbmdlZGVsaWdodC5qcGdcIilcbml0ZW02ID0gaXRlbUZhY3RvcnkoXCJMaXR0bGUgSXRhbHlcIiwgXCJQcm9zY3VldHRvLCBtZWxvbiwgYW5kIGFuIGFwcGxlIGdsYXplZCB5b2dodXJ0IHN0YXIgaW4gdGhpcyBJdGFsaWFuIGluc3BpcmVkIHNwZWNpYWxcIiwgXCJTcHJpbmdcIiwgXCIuL3BhZ2VJbWFnZXMvcHJvc2N1ZXR0by5qcGdcIilcbml0ZW03ID0gaXRlbUZhY3RvcnkoXCJRdWFpbCBFZ2dcIiwgXCJTdG9sZW4gcmlnaHQgZnJvbSB0aGUgbmVzdCwgeW91IGNhbid0IGhhdmUgYSBtb3JlIGZyZXNoIHRhc3RlXCIsIFwiU3ByaW5nXCIsIFwiLi9wYWdlSW1hZ2VzL3F1YWlsZWdnLmpwZ1wiKVxuXG4vL2NyZWF0ZSBkb20gZWxlbWVudHMgZm9yIGVhY2ggb2JqZWN0LCBhZGQgZWFjaCBkb20gZWxlbWVudCB0byBhIGRpdiwgYWRkIGVhY2ggZGl2IHRvIHRoZSBtZW51XG5cbi8vIGZ1bmN0aW9uIGdldE1lbnUge1xuLy8gICAgIGxldCBtZW51ID0gW11cbi8vICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4vLyAgICAgICAgIG1lbnUucHVzaChgaXRlbVske2l9XWApXG5cbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2cobWVudSlcbi8vICAgICByZXR1cm4gbWVudVxuLy8gfVxuXG5sZXQgbWVudSA9IFtdXG5tZW51LnB1c2goaXRlbTEsIGl0ZW0yLCBpdGVtMywgaXRlbTQsIGl0ZW01LCBpdGVtNiwgaXRlbTcpXG5jb25zb2xlLmxvZyhtZW51KVxuXG5mdW5jdGlvbiBnZXRNZW51KCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNhcmQpXG4gICAgICAgIGNhcmQuc2V0Q2xhc3MoXCJtZW51aXRlbVwiKVxuICAgICAgICBsZXQgZm9vZG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICAgICAgbGV0IGZvb2RkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgbGV0IHNlYXNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBsZXQgZm9vZHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGZvb2RuYW1lLmlubmVyVGV4dCA9IG1lbnVbaV0ubmFtZVxuICAgICAgICBmb29kZGVzYy5pbm5lclRleHQgPSBtZW51W2ldLmRlc2NcbiAgICAgICAgc2Vhc29uLmlubmVyVGV4dCA9IG1lbnVbaV0uc2Vhc29uXG4gICAgICAgIGZvb2RwaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1lbnVbaV0uaW1hZ2UpXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZm9vZG5hbWUsIGZvb2RkZXNjLCBzZWFzb24sIGZvb2RwaWMpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgY29uc29sZS5sb2coJ3dvcmtlZCcpXG5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB7IGdldE1lbnUgfSIsImxldCBjbGVhciA9ICgpID0+IHtcbiAgICBjb25zdCBteU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgd2hpbGUgKG15Tm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgIG15Tm9kZS5yZW1vdmVDaGlsZChteU5vZGUubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbmxldCBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50JylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY29udGVudClcbn1cblxuLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpXG4vL2RvY3VtZW50LmJvZHkuYXBwZW5kKE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykse3RleHRDb250ZW50OlwiZmRcIn0pKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQsIGNsZWFyIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIC8vIGltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9mb290ZXIuanMnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IGluaXQgZnJvbSAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCBnZXRNZW51IGZyb20gJy4vbWVudSdcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG4vLyBpbXBvcnQgJy4vd2VsY29tZS5qcyc7XG4vLyBpbXBvcnQgJy4vZm9vdGVyLmpzJztcbi8vaW1wb3J0IEljb24gZnJvbSAnLi9pY29uLnBuZyc7XG4vL0FkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cbi8vIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuLy8gbXlJY29uLnNyYyA9IEljb247XG4vLyBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XG5cblxuLy9hZGQgaGVhZGVyXG4vL2FkZCBmb290ZXJcbmhlYWRlcigpXG5pbml0KClcbm1lbnUoKVxuZm9vdGVyKClcbmNvbnRhY3QoKVxuYWJvdXQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==