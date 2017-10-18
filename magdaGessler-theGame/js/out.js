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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nconsole.log('hello');\n\nvar Madga = function Madga() {\n    _classCallCheck(this, Madga);\n\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n};\n\nvar Food = function Food() {\n    _classCallCheck(this, Food);\n\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nvar Game = function () {\n    function Game() {\n        _classCallCheck(this, Game);\n\n        this.board = document.querySelectorAll(\"#board div\");\n        this.magda = new Magda();\n        this.food = new Food();\n        this.score = 0;\n    }\n\n    _createClass(Game, [{\n        key: \"index\",\n        value: function index(x, y) {\n            return x + y * 10;\n        }\n    }, {\n        key: \"showMadga\",\n        value: function showMadga() {\n            this.board[this.index(this.magda.x, this.magda.y)].classList.add('magda');\n        }\n    }, {\n        key: \"showFood\",\n        value: function showFood() {\n            this.board[this.index(this.food.x, this.food.y)].classList.add('food');\n        }\n    }]);\n\n    return Game;\n}();\n\nvar theGame = new Game();\ntheGame.showMadga();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FwcC5qcz9iZjFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5jb25zb2xlLmxvZygnaGVsbG8nKTtcblxudmFyIE1hZGdhID0gZnVuY3Rpb24gTWFkZ2EoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hZGdhKTtcblxuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbn07XG5cbnZhciBGb29kID0gZnVuY3Rpb24gRm9vZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9vZCk7XG5cbiAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgdGhpcy55ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xufTtcblxudmFyIEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdhbWUpO1xuXG4gICAgICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2JvYXJkIGRpdlwiKTtcbiAgICAgICAgdGhpcy5tYWdkYSA9IG5ldyBNYWdkYSgpO1xuICAgICAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZCgpO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoR2FtZSwgW3tcbiAgICAgICAga2V5OiBcImluZGV4XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmRleCh4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4geCArIHkgKiAxMDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInNob3dNYWRnYVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd01hZGdhKCkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt0aGlzLmluZGV4KHRoaXMubWFnZGEueCwgdGhpcy5tYWdkYS55KV0uY2xhc3NMaXN0LmFkZCgnbWFnZGEnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInNob3dGb29kXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93Rm9vZCgpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbdGhpcy5pbmRleCh0aGlzLmZvb2QueCwgdGhpcy5mb29kLnkpXS5jbGFzc0xpc3QuYWRkKCdmb29kJyk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gR2FtZTtcbn0oKTtcblxudmFyIHRoZUdhbWUgPSBuZXcgR2FtZSgpO1xudGhlR2FtZS5zaG93TWFkZ2EoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);