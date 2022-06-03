/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pessoa),
/* harmony export */   "idade": () => (/* binding */ idade),
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome": () => (/* binding */ sobrenome),
/* harmony export */   "soma": () => (/* binding */ soma)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const nome = 'Filipe';
// const sobrenome = 'Henrique';
// const idade = 30;
// function soma(x, y) {
//     return x + y;
// }
// export { nome as nome2, sobrenome, idade, soma };
// export const nome = 'Filipe';
// export const sobrenome = 'Henrique';
// export const idade = 30;
// const cpf = 'fhsdiuf'; // acaba sendo considerado como uma variavel privada desse modulo
// export default function soma(x, y) {
//     return x + y;
// }
// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }
// const nome = 'Filipe';
// const sobrenome = 'Henrique';
// const idade = 30;
// function soma(x, y) {
//     return x + y;
// }
// export default (x, y) => x * y;
// export { nome, sobrenome, idade, soma };
// Geralmente teremos as coisas exportando desse jeito:
var nome = 'Filipe';
var sobrenome = 'Henrique';
var idade = 30;
function soma(x, y) {
  return x + y;
}

var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
});



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
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
// --------------------------------------------------------------------------
// import { nome2, sobrenome, idade, soma, Pessoa } from "./modulo1";
// console.log(nome2, sobrenome, idade);
// console.log(soma(2, 4));
// const p1 = new Pessoa('Luiz', 'Otavio');
// console.log(p1);
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// import * as MeuModulo from "./modulo1";
// console.log(MeuModulo.nome, MeuModulo.sobrenome, MeuModulo.idade);
// console.log(MeuModulo.soma(2, 4));
// const p1 = new MeuModulo.Pessoa('Luiz', 'Otavio');
// console.log(p1);
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// import qualquerNome from "./modulo1";
// console.log(qualquerNome(2, 4));
// --------------------------------------------------------------------------
// // --------------------------------------------------------------------------
// import multiplica, { nome, sobrenome, idade, soma } from "./modulo1";
// console.log(multiplica(2, 5));
// console.log(nome, sobrenome, idade, soma(2, 3));
// // --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// Geralmente teremos assim no dia a dia:

var p1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__["default"](_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome);
console.log(p1); // --------------------------------------------------------------------------
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map