function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mypage-mypage-module-ngfactory"], {
  /***/
  "./src/app/models/board.ts":
  /*!*********************************!*\
    !*** ./src/app/models/board.ts ***!
    \*********************************/

  /*! exports provided: Board */

  /***/
  function srcAppModelsBoardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Board", function () {
      return Board;
    });

    var Board = function Board(name, column) {
      _classCallCheck(this, Board);

      this.name = name;
      this.column = column;
    };
    /***/

  },

  /***/
  "./src/app/models/column.ts":
  /*!**********************************!*\
    !*** ./src/app/models/column.ts ***!
    \**********************************/

  /*! exports provided: Column */

  /***/
  function srcAppModelsColumnTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Column", function () {
      return Column;
    });

    var Column = function Column(name, movies) {
      _classCallCheck(this, Column);

      this.name = name;
      this.movies = movies;
    };
    /***/

  },

  /***/
  "./src/app/mypage/mypage-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/mypage/mypage-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: MypageRoutingModule */

  /***/
  function srcAppMypageMypageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MypageRoutingModule", function () {
      return MypageRoutingModule;
    });
    /* harmony import */


    var _mypage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mypage.component */
    "./src/app/mypage/mypage.component.ts");

    var routes = [{
      path: '',
      component: _mypage_component__WEBPACK_IMPORTED_MODULE_0__["MypageComponent"]
    }];

    var MypageRoutingModule = function MypageRoutingModule() {
      _classCallCheck(this, MypageRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/mypage/mypage.component.css.shim.ngstyle.js":
  /*!*************************************************************!*\
    !*** ./src/app/mypage/mypage.component.css.shim.ngstyle.js ***!
    \*************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppMypageMypageComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".board-bar[_ngcontent-%COMP%] {\r\n    background-color: #504141;\r\n    opacity: 50%;\r\n    font-family: \"Javanese Text\", sans-serif;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.board-name[_ngcontent-%COMP%] {\r\n    font-family: \"Rouge Script\", \"sans-serif\";\r\n    font-size: 30px;\r\n    color: white;\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.board[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n    min-width: 0;\r\n    min-height: 0;\r\n    font-family: \"Javanese Text\", sans-serif;\r\n}\r\n\r\n.board-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    overflow-x: auto;\r\n}\r\n\r\n.board-columns[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    justify-content: space-between;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    flex-basis: 0;\r\n    flex-direction: column;\r\n    background-color: #504141;\r\n    opacity: 50%;\r\n    margin: 50px;\r\n    padding: 25px;\r\n    border-radius: 10px;\r\n    min-width: 300px;\r\n}\r\n\r\n.column[_ngcontent-%COMP%]:not(:first-child) {\r\n    margin-left: 0;\r\n}\r\n\r\n.column-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    background-color: #504141;\r\n    border-radius: 15px;\r\n    font-family: \"Javanese Text\", \"sans-serif\";\r\n    color: white;\r\n    font-size: 25px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.movie-container[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n}\r\n\r\n.movie[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 15px 12px;\r\n    background-color: white;\r\n    border: 1px solid grey;\r\n    border-radius: 15px;\r\n    margin-bottom: 15px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 15px;\r\n}\r\n\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(78, 120, 67, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.movie-container.cdk-drop-list-dragging[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.save-btn[_ngcontent-%COMP%] {\r\n    background: #d6c7bf;\r\n    border: 5px solid #322323;\r\n    border-radius: 15px;\r\n    font-family: \"Javanese Text\", \"sans-serif\";\r\n    font-weight: 900;\r\n    width: 100px;\r\n    font-size: 25px;\r\n    height: 10%;\r\n    color: #322323;\r\n    outline: none;\r\n    padding-top: 5px;\r\n    cursor: pointer;\r\n    opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwYWdlL215cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUhBQXlIO0FBQzdIOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbXlwYWdlL215cGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA0MTQxO1xyXG4gICAgb3BhY2l0eTogNTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSmF2YW5lc2UgVGV4dFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm9hcmQtbmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb3VnZSBTY3JpcHRcIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJKYXZhbmVzZSBUZXh0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5ib2FyZC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4uYm9hcmQtY29sdW1ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDQxNDE7XHJcbiAgICBvcGFjaXR5OiA1MCU7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5jb2x1bW46bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jb2x1bW4tdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDQxNDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSmF2YW5lc2UgVGV4dFwiLCBcInNhbnMtc2VyaWZcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLm1vdmllLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5tb3ZpZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDc4LCAxMjAsIDY3LCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4ubW92aWUtY29udGFpbmVyLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLm1vdmllOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLnNhdmUtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNkNmM3YmY7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzIyMzIzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkphdmFuZXNlIFRleHRcIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBjb2xvcjogIzMyMjMyMztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMTtcclxufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/mypage/mypage.component.ngfactory.js":
  /*!******************************************************!*\
    !*** ./src/app/mypage/mypage.component.ngfactory.js ***!
    \******************************************************/

  /*! exports provided: RenderType_MypageComponent, View_MypageComponent_0, View_MypageComponent_Host_0, MypageComponentNgFactory */

  /***/
  function srcAppMypageMypageComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MypageComponent", function () {
      return RenderType_MypageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MypageComponent_0", function () {
      return View_MypageComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MypageComponent_Host_0", function () {
      return View_MypageComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MypageComponentNgFactory", function () {
      return MypageComponentNgFactory;
    });
    /* harmony import */


    var _mypage_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mypage.component.css.shim.ngstyle */
    "./src/app/mypage/mypage.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _mypage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mypage.component */
    "./src/app/mypage/mypage.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_auth_and_register_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/auth_and_register/auth.service */
    "./src/app/shared/auth_and_register/auth.service.ts");
    /* harmony import */


    var _shared_auth_and_register_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/auth_and_register/user.service */
    "./src/app/shared/auth_and_register/user.service.ts");
    /* harmony import */


    var _shared_movie_movies_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/movie/movies.service */
    "./src/app/shared/movie/movies.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_MypageComponent = [_mypage_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_MypageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_MypageComponent,
      data: {}
    });

    function View_MypageComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 9, "div", [["cdkDrag", ""], ["class", "movie cdk-drag"]], [[2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4866048, null, 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST"]], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _handles: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _previewTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        _placeholderTemplate: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.navigateToDetails(_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "button", [["class", "close-btn"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co["delete"](_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "i", [["class", "fa fa-close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dragRef.isDragging();

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_2 = _v.context.$implicit;

        _ck(_v, 7, 0, currVal_2);
      });
    }

    function View_MypageComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "column-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["cdkDropList", ""], ["class", "movie-container cdk-drop-list"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("cdkDropListDropped" === en) {
          var pd_0 = _co.drop($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DROP_LIST"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 147456, [["todoList", 4]], 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropListGroup"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CDK_DRAG_CONFIG"]]], {
        data: [0, "data"]
      }, {
        dropped: "cdkDropListDropped"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropListGroup"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MypageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_5 = _v.context.$implicit.movies;

        _ck(_v, 5, 0, currVal_5);

        var currVal_6 = _v.context.$implicit.movies;

        _ck(_v, 8, 0, currVal_6);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).id;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._dropListRef.isDragging();

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._dropListRef.isReceiving();

        _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4);
      });
    }

    function View_MypageComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "board"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "board-bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "p", [["class", "board-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My movies"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "button", [["class", "save-btn"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.save() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "board-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [["cdkDropListGroup", ""], ["class", "board-columns"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, null, 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropListGroup"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MypageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.board.column;

        _ck(_v, 10, 0, currVal_0);
      }, null);
    }

    function View_MypageComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-mypage", [], null, null, null, View_MypageComponent_0, RenderType_MypageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _mypage_component__WEBPACK_IMPORTED_MODULE_6__["MypageComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _shared_auth_and_register_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _shared_auth_and_register_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _shared_movie_movies_service__WEBPACK_IMPORTED_MODULE_10__["MoviesService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var MypageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-mypage", _mypage_component__WEBPACK_IMPORTED_MODULE_6__["MypageComponent"], View_MypageComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/mypage/mypage.component.ts":
  /*!********************************************!*\
    !*** ./src/app/mypage/mypage.component.ts ***!
    \********************************************/

  /*! exports provided: MypageComponent */

  /***/
  function srcAppMypageMypageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MypageComponent", function () {
      return MypageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/fesm2015/drag-drop.js");
    /* harmony import */


    var _models_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/board */
    "./src/app/models/board.ts");
    /* harmony import */


    var _models_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/column */
    "./src/app/models/column.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MypageComponent =
    /*#__PURE__*/
    function () {
      // toWatch =  this.authService.currentUserValue.toWatchList;
      function MypageComponent(router, authService, userService, route, movieService) {
        _classCallCheck(this, MypageComponent);

        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.movieService = movieService;
        this.toWatch = [];
        this.toWatchDataObject = [];
        this.toWatchTmp = [];
        this["continue"] = [];
        this.continueTmp = [];
        this.continueDataObject = [];
        this.alreadyWatched = [];
        this.alreadyWatchedTmp = [];
        this.alreadyDataObject = [];
        this.allIn = [];
        this.allIntoNavigate = [];
      }

      _createClass(MypageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('this id', this.authService.currentUserValue.id); // tslint:disable-next-line: max-line-length

          this.refresh();
        }
      }, {
        key: "refresh",
        value: function refresh() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.userService.getById(this.authService.currentUserValue.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
                      _this.user = data;
                      _this.toWatchTmp = _this.user.toWatchList;
                      _this.continueTmp = _this.user["continue"];
                      _this.alreadyWatchedTmp = _this.user.alreadyWatched;

                      _this.findMovieTitleToWatch();

                      _this.findMovieTitleContinue();

                      _this.findMovieTitleAlreadyWatched();

                      _this.board = new _models_board__WEBPACK_IMPORTED_MODULE_2__["Board"]('Movies', [new _models_column__WEBPACK_IMPORTED_MODULE_3__["Column"]('To watch', _this.toWatchDataObject), new _models_column__WEBPACK_IMPORTED_MODULE_3__["Column"]('Continue', _this.continueDataObject), new _models_column__WEBPACK_IMPORTED_MODULE_3__["Column"]('Already watched', _this.alreadyDataObject)]);
                    }, function (error) {
                      console.log(error);
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "findMovieTitleToWatch",
        value: function findMovieTitleToWatch() {
          var _this2 = this;

          var _loop = function _loop(i) {
            _this2.movieService.getById(_this2.toWatchTmp[i]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
              _this2.movieObjectToWatch = {
                id: _this2.toWatchTmp[i],
                movie: data
              };

              _this2.toWatch.push(_this2.movieObjectToWatch);

              console.log(_this2.movieObjectToWatch);

              _this2.fillToWatch();
            }, function (error) {
              console.log(error);
            });
          };

          for (var i = 0; i < this.toWatchTmp.length; i++) {
            _loop(i);
          }
        }
      }, {
        key: "findMovieTitleContinue",
        value: function findMovieTitleContinue() {
          var _this3 = this;

          var _loop2 = function _loop2(i) {
            _this3.movieService.getById(_this3.continueTmp[i]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
              _this3.movieObjectContinue = {
                id: _this3.continueTmp[i],
                movie: data
              };

              _this3["continue"].push(_this3.movieObjectContinue);

              _this3.fillContinue();
            }, function (error) {
              console.log(error);
            });
          };

          for (var i = 0; i < this.continueTmp.length; i++) {
            _loop2(i);
          }
        }
      }, {
        key: "findMovieTitleAlreadyWatched",
        value: function findMovieTitleAlreadyWatched() {
          var _this4 = this;

          var _loop3 = function _loop3(i) {
            _this4.movieService.getById(_this4.alreadyWatchedTmp[i]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
              _this4.movieObjectAlreadyWatched = {
                id: _this4.alreadyWatchedTmp[i],
                movie: data
              };
              console.log('movieObjectAlreadyWatched', _this4.movieObjectAlreadyWatched);

              _this4.alreadyWatched.push(_this4.movieObjectAlreadyWatched);

              _this4.fillAlreadyWatched();
            }, function (error) {
              console.log(error);
            });
          };

          for (var i = 0; i < this.alreadyWatchedTmp.length; i++) {
            _loop3(i);
          }
        }
      }, {
        key: "fillToWatch",
        value: function fillToWatch() {
          for (var i = 0; i < this.toWatch.length; i++) {
            if (this.toWatchDataObject.includes(this.toWatch[i].movie.Title)) {
              console.log(this.toWatch[i].movie.Title);
            } else {
              this.toWatchDataObject.push(this.toWatch[i].movie.Title);
            }
          }
        }
      }, {
        key: "fillContinue",
        value: function fillContinue() {
          for (var i = 0; i < this["continue"].length; i++) {
            if (this.continueDataObject.includes(this["continue"][i].movie.Title)) {
              console.log(true);
            } else {
              this.continueDataObject.push(this["continue"][i].movie.Title);
            }
          }
        }
      }, {
        key: "fillAlreadyWatched",
        value: function fillAlreadyWatched() {
          for (var i = 0; i < this.alreadyWatched.length; i++) {
            if (this.alreadyDataObject.includes(this.alreadyWatched[i].movie.Title)) {
              console.log(true);
            } else {
              this.alreadyDataObject.push(this.alreadyWatched[i].movie.Title);
            }
          }
        }
      }, {
        key: "drop",
        value: function drop(event) {
          console.log(event);

          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            console.log(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            console.log('Previous', event.previousContainer);
            console.log('Event container', event.container);
            console.log('Details', event.container.data, event.previousIndex, event.currentIndex);

            if (event.container.id === 'cdk-drop-list-0') {
              console.log('towatchba raktam', event.previousContainer.id);

              if (event.previousContainer.id === 'cdk-drop-list-1') {
                for (var i = 0; i < this.alreadyDataObject.length; i++) {}
              } // console.log("this towatch", event.container.data[event.previousIndex]);
              // this.toWatch.push(event.container.data[event.previousIndex]);
              // localStorage.setItem('toWatch', JSON.stringify(this.toWatch));

            }

            if (event.container.id === 'cdk-drop-list-1') {
              console.log('continueba raktam', event.previousContainer.id); // this.toWatch = JSON.parse(localStorage.getItem('toWatch'));
              // console.log("this towatch", event.container.data[event.previousIndex]);
              // this.toWatch.push(event.container.data[event.previousIndex]);
              // localStorage.setItem('toWatch', JSON.stringify(this.toWatch));
            }
          }
        }
      }, {
        key: "getAllMovies",
        value: function getAllMovies() {
          var _this5 = this;

          this.movieService.getAll().subscribe(function (res) {
            _this5.allIn = res;
            console.log(_this5.allIn);
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this6 = this;

          console.log(this.board);
          var toWatchIds = [];
          var continueIds = [];
          var alreadyWatchedIds = [];
          this.movieService.getAll().subscribe(function (res) {
            _this6.allIn = res;
            console.log(_this6.allIn);

            for (var i = 0; i < _this6.board.column.length; i++) {
              for (var k = 0; k < _this6.board.column[i].movies.length; k++) {
                console.log('switch előtt');

                switch (i) {
                  case 0:
                    var _loop4 = function _loop4(j) {
                      for (var m = 0; m < _this6.board.column[0].movies.length; m++) {
                        if (_this6.allIn[j].Title === _this6.board.column[0].movies[m]) {
                          if (!toWatchIds.find(function (x) {
                            return x === _this6.allIn[j].id;
                          })) {
                            toWatchIds.push(_this6.allIn[j].id);
                            console.log('to watch ids', toWatchIds);
                          }
                        }
                      }
                    };

                    for (var j = 0; j < _this6.allIn.length; j++) {
                      _loop4(j);
                    }

                    break;

                  case 1:
                    console.log('case 1');

                    var _loop5 = function _loop5(_j) {
                      // tslint:disable-next-line: prefer-for-of
                      for (var m = 0; m < _this6.board.column[1].movies.length; m++) {
                        if (_this6.allIn[_j].Title === _this6.board.column[1].movies[m]) {
                          if (!continueIds.find(function (x) {
                            return x === _this6.allIn[_j].id;
                          })) {
                            continueIds.push(_this6.allIn[_j].id);
                            console.log('continue ids', continueIds);
                          }
                        }
                      }
                    };

                    for (var _j = 0; _j < _this6.allIn.length; _j++) {
                      _loop5(_j);
                    }

                    break;

                  case 2:
                    console.log('case 2');

                    var _loop6 = function _loop6(_j2) {
                      for (var m = 0; m < _this6.board.column[2].movies.length; m++) {
                        if (_this6.allIn[_j2].Title === _this6.board.column[2].movies[m]) {
                          if (!alreadyWatchedIds.find(function (x) {
                            return x === _this6.allIn[_j2].id;
                          })) {
                            alreadyWatchedIds.push(_this6.allIn[_j2].id);
                            console.log('already watched ids', alreadyWatchedIds);
                          }
                        }
                      }
                    };

                    for (var _j2 = 0; _j2 < _this6.allIn.length; _j2++) {
                      _loop6(_j2);
                    }

                    break;

                  default:
                    break;
                }
              }
            }

            console.log('to watch id-s a végén', toWatchIds);

            _this6.userService.updateToWatch(_this6.authService.currentUserValue.id, toWatchIds).subscribe(function (res) {
              console.log(res);
            });

            _this6.userService.updateContinue(_this6.authService.currentUserValue.id, continueIds).subscribe(function (res) {
              console.log(res);
            });

            _this6.userService.updateAlreadyWatched(_this6.authService.currentUserValue.id, alreadyWatchedIds).subscribe(function (res) {
              console.log(res);
            });
          });
        }
      }, {
        key: "navigateToDetails",
        value: function navigateToDetails(item) {
          var _this7 = this;

          this.movieService.getAll().subscribe(function (res) {
            _this7.allIntoNavigate = res;

            for (var i = 0; i < _this7.allIntoNavigate.length; i++) {
              console.log('itt van', _this7.allIntoNavigate[i], item);

              if (item === _this7.allIntoNavigate[i].Title) {
                console.log('itt navigál', _this7.allIntoNavigate[i].imdbID);

                _this7.router.navigate(['/movie', _this7.allIntoNavigate[i].imdbID]);
              }
            }
          });
        }
      }, {
        key: "navigate",
        value: function navigate() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "delete",
        value: function _delete(item) {
          var _this8 = this;

          var deletedId;

          var toWatchListDeleteTmp = _toConsumableArray(this.user.toWatchList);

          var continueDeleteTmp = _toConsumableArray(this.user["continue"]);

          var alreadyWatchedDeleteTmp = _toConsumableArray(this.user.alreadyWatched);

          console.log('tmp', toWatchListDeleteTmp);
          this.movieService.getAll().subscribe(function (res) {
            _this8.allIn = res;
            console.log(res);

            for (var i = 0; i < _this8.allIn.length; i++) {
              if (_this8.allIn[i].Title === item) {
                deletedId = _this8.allIn[i].id;
              }
            }

            for (var _i = 0; _i < _this8.user.toWatchList.length; _i++) {
              if (deletedId === _this8.user.toWatchList[_i]) {
                console.log(_this8.user.toWatchList[_i]);
                toWatchListDeleteTmp.splice(_i, 1);
                console.log('deletedTmp', toWatchListDeleteTmp);

                _this8.userService.updateToWatch(_this8.authService.currentUserValue.id, toWatchListDeleteTmp).subscribe(function (res) {
                  return window.location.reload();
                });
              }
            }

            for (var _i2 = 0; _i2 < _this8.user["continue"].length; _i2++) {
              if (deletedId === _this8.user["continue"][_i2]) {
                continueDeleteTmp.splice(_i2, 1);

                _this8.userService.updateContinue(_this8.authService.currentUserValue.id, continueDeleteTmp).subscribe(function (res) {
                  return window.location.reload();
                });
              }
            }

            for (var _i3 = 0; _i3 < _this8.user.alreadyWatched.length; _i3++) {
              if (deletedId === _this8.user.alreadyWatched[_i3]) {
                alreadyWatchedDeleteTmp.splice(_i3, 1);

                _this8.userService.updateAlreadyWatched(_this8.authService.currentUserValue.id, alreadyWatchedDeleteTmp).subscribe(function (res) {
                  return window.location.reload();
                });
              }
            }
          });
        }
      }]);

      return MypageComponent;
    }();
    /***/

  },

  /***/
  "./src/app/mypage/mypage.module.ngfactory.js":
  /*!***************************************************!*\
    !*** ./src/app/mypage/mypage.module.ngfactory.js ***!
    \***************************************************/

  /*! exports provided: MypageModuleNgFactory */

  /***/
  function srcAppMypageMypageModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MypageModuleNgFactory", function () {
      return MypageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _mypage_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mypage.module */
    "./src/app/mypage/mypage.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/dialog/index.ngfactory */
    "./node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/@angular/material/snack-bar/index.ngfactory */
    "./node_modules/@angular/material/snack-bar/index.ngfactory.js");
    /* harmony import */


    var _my_profile_qr_code_modal_qr_code_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../my-profile/qr-code-modal/qr-code-modal.component.ngfactory */
    "./src/app/my-profile/qr-code-modal/qr-code-modal.component.ngfactory.js");
    /* harmony import */


    var _homepage_add_new_todo_modal_add_new_todo_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../homepage/add-new-todo-modal/add-new-todo-modal.component.ngfactory */
    "./src/app/homepage/add-new-todo-modal/add-new-todo-modal.component.ngfactory.js");
    /* harmony import */


    var _mypage_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./mypage.component.ngfactory */
    "./src/app/mypage/mypage.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _shared_movie_movies_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../shared/movie/movies.service */
    "./src/app/shared/movie/movies.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_movie_movie_details_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../shared/movie/movie-details.service */
    "./src/app/shared/movie/movie-details.service.ts");
    /* harmony import */


    var _shared_auth_and_register_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../shared/auth_and_register/auth.service */
    "./src/app/shared/auth_and_register/auth.service.ts");
    /* harmony import */


    var _shared_auth_and_register_user_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../shared/auth_and_register/user.service */
    "./src/app/shared/auth_and_register/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/fesm2015/table.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/fesm2015/angularx-qrcode.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _mypage_routing_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./mypage-routing.module */
    "./src/app/mypage/mypage-routing.module.ts");
    /* harmony import */


    var _mypage_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./mypage.component */
    "./src/app/mypage/mypage.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var MypageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_mypage_module__WEBPACK_IMPORTED_MODULE_1__["MypageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["SimpleSnackBarNgFactory"], _my_profile_qr_code_modal_qr_code_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["QrCodeModalComponentNgFactory"], _homepage_add_new_todo_modal_add_new_todo_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AddNewTodoModalComponentNgFactory"], _mypage_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["MypageComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDrop"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDrop"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_movie_movies_service__WEBPACK_IMPORTED_MODULE_18__["MoviesService"], _shared_movie_movies_service__WEBPACK_IMPORTED_MODULE_18__["MoviesService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_movie_movie_details_service__WEBPACK_IMPORTED_MODULE_20__["MovieDetailsService"], _shared_movie_movie_details_service__WEBPACK_IMPORTED_MODULE_20__["MovieDetailsService"], [_shared_auth_and_register_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _shared_auth_and_register_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"], _shared_movie_movies_service__WEBPACK_IMPORTED_MODULE_18__["MoviesService"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_25__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_25__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_26__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_26__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_34__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_34__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_38__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_38__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angularx_qrcode__WEBPACK_IMPORTED_MODULE_41__["QRCodeModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_41__["QRCodeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_42__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_42__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _mypage_routing_module__WEBPACK_IMPORTED_MODULE_43__["MypageRoutingModule"], _mypage_routing_module__WEBPACK_IMPORTED_MODULE_43__["MypageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _mypage_module__WEBPACK_IMPORTED_MODULE_1__["MypageModule"], _mypage_module__WEBPACK_IMPORTED_MODULE_1__["MypageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTES"], function () {
        return [[{
          path: "",
          component: _mypage_component__WEBPACK_IMPORTED_MODULE_44__["MypageComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/mypage/mypage.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/mypage/mypage.module.ts ***!
    \*****************************************/

  /*! exports provided: MypageModule */

  /***/
  function srcAppMypageMypageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MypageModule", function () {
      return MypageModule;
    });

    var MypageModule = function MypageModule() {
      _classCallCheck(this, MypageModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=mypage-mypage-module-ngfactory-es5.js.map