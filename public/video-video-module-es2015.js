(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/video/video.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video/video.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title color=\"light\">Player</ion-title>\n        <!---\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"add()\">\n                <ion-icon mode=\"md\" name=\"add\"></ion-icon>\n\n            </ion-button>\n        </ion-buttons>\n        -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <section>\n        <video *ngIf=\"!url\" src=\"assets/Yugioh - Seto Kaiba You're Not Me.mp4\" autoplay=\"\" loop=\"\"></video>\n        <iframe *ngIf=\"url\" [src]=\"url\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"></iframe>\n        <div class=\"box\">\n            <div *ngIf=\"!url\">\n                <span> <video src=\"assets/Yugioh - Seto Kaiba You're Not Me.mp4\" autoplay=\"\" loop=\"\" muted></video></span>\n                <span> <video src=\"assets/Yugioh - Seto Kaiba You're Not Me.mp4\" autoplay=\"\" loop=\"\" muted></video></span>\n                <span> <video src=\"assets/Yugioh - Seto Kaiba You're Not Me.mp4\" autoplay=\"\" loop=\"\" muted></video></span>\n            </div>\n            <div *ngIf=\"url\">\n                <span>\n                <iframe [src]=\"url\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </span>\n                <span>\n                  <iframe [src]=\"url\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </span>\n                <span>\n                  <iframe [src]=\"url\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </span>\n            </div>\n        </div>\n    </section>\n</ion-content>"

/***/ }),

/***/ "./src/app/video/video.module.ts":
/*!***************************************!*\
  !*** ./src/app/video/video.module.ts ***!
  \***************************************/
/*! exports provided: VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/video/video.page.ts");







const routes = [
    {
        path: '',
        component: _video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]
    }
];
let VideoPageModule = class VideoPageModule {
};
VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
    })
], VideoPageModule);



/***/ }),

/***/ "./src/app/video/video.page.scss":
/*!***************************************!*\
  !*** ./src/app/video/video.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #000;\n}\n\nsection {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: auto;\n  padding-top: 70px;\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n}\n\nsection .box {\n  position: absolute;\n  top: calc(50% -200px);\n  left: calc(50% -200px);\n  width: 400px;\n  height: 400px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\nsection .box div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform: rotateX(-20deg) rotateY(25deg) translate3d(-75px, -50px, 150px);\n          transform: rotateX(-20deg) rotateY(25deg) translate3d(-75px, -50px, 150px);\n}\n\nsection .box div span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background: #ccc;\n}\n\nsection .box div span video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n}\n\nsection video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-filter: blur(20px);\n          filter: blur(20px);\n}\n\nsection .box div span iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n}\n\nsection iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-filter: blur(20px);\n          filter: blur(20px);\n}\n\nsection .box div span:nth-child(1) {\n  -webkit-transform: rotateX(0) translate3d(0, 0, 200px);\n          transform: rotateX(0) translate3d(0, 0, 200px);\n}\n\nsection .box div span:nth-child(2) {\n  -webkit-transform: rotateY(90deg) translate3d(0, 0, -200px);\n          transform: rotateY(90deg) translate3d(0, 0, -200px);\n}\n\nsection .box div span:nth-child(2) video {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\nsection .box div span:nth-child(3) {\n  -webkit-transform: rotateX(90deg) translate3d(0, 0, 200px);\n          transform: rotateX(90deg) translate3d(0, 0, 200px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vQzpcXFVzZXJzXFx2Z2IwNzE2XFxEb2N1bWVudHNcXGlvbmljXFx6ZXJvL3NyY1xcYXBwXFx2aWRlb1xcdmlkZW8ucGFnZS5zY3NzIiwic3JjL2FwcC92aWRlby92aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxrRkFBQTtVQUFBLDBFQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7QUNDSjs7QURFQTtFQUNJLHNEQUFBO1VBQUEsOENBQUE7QUNDSjs7QURFQTtFQUNJLDJEQUFBO1VBQUEsbURBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO1VBQUEsMEJBQUE7QUNDSjs7QURFQTtFQUNJLDBEQUFBO1VBQUEsa0RBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvL3ZpZGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5zZWN0aW9uIC5ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtMjAwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLTIwMHB4KTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG5zZWN0aW9uIC5ib3ggZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTIwZGVnKSByb3RhdGVZKDI1ZGVnKSB0cmFuc2xhdGUzZCgtNzVweCwgLTUwcHgsIDE1MHB4KTtcclxufVxyXG5cclxuc2VjdGlvbiAuYm94IGRpdiBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG5zZWN0aW9uIC5ib3ggZGl2IHNwYW4gdmlkZW8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcclxufVxyXG5cclxuc2VjdGlvbiB2aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGZpbHRlcjogYmx1cigyMHB4KTtcclxufVxyXG5cclxuc2VjdGlvbiAuYm94IGRpdiBzcGFuIGlmcmFtZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGZpbHRlcjogYmx1cigwcHgpO1xyXG59XHJcblxyXG5zZWN0aW9uIGlmcmFtZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGZpbHRlcjogYmx1cigyMHB4KTtcclxufVxyXG5cclxuc2VjdGlvbiAuYm94IGRpdiBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCkgdHJhbnNsYXRlM2QoMCwgMCwgMjAwcHgpO1xyXG59XHJcblxyXG5zZWN0aW9uIC5ib3ggZGl2IHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgLTIwMHB4KTtcclxufVxyXG5cclxuc2VjdGlvbiAuYm94IGRpdiBzcGFuOm50aC1jaGlsZCgyKSB2aWRlbyB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuc2VjdGlvbiAuYm94IGRpdiBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIDIwMHB4KTtcclxufSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5zZWN0aW9uIC5ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLTIwMHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLTIwMHB4KTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG5zZWN0aW9uIC5ib3ggZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtMjBkZWcpIHJvdGF0ZVkoMjVkZWcpIHRyYW5zbGF0ZTNkKC03NXB4LCAtNTBweCwgMTUwcHgpO1xufVxuXG5zZWN0aW9uIC5ib3ggZGl2IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuc2VjdGlvbiAuYm94IGRpdiBzcGFuIHZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbn1cblxuc2VjdGlvbiB2aWRlbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZmlsdGVyOiBibHVyKDIwcHgpO1xufVxuXG5zZWN0aW9uIC5ib3ggZGl2IHNwYW4gaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbn1cblxuc2VjdGlvbiBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGZpbHRlcjogYmx1cigyMHB4KTtcbn1cblxuc2VjdGlvbiAuYm94IGRpdiBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgwKSB0cmFuc2xhdGUzZCgwLCAwLCAyMDBweCk7XG59XG5cbnNlY3Rpb24gLmJveCBkaXYgc3BhbjpudGgtY2hpbGQoMikge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIC0yMDBweCk7XG59XG5cbnNlY3Rpb24gLmJveCBkaXYgc3BhbjpudGgtY2hpbGQoMikgdmlkZW8ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuc2VjdGlvbiAuYm94IGRpdiBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgMjAwcHgpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/video/video.page.ts":
/*!*************************************!*\
  !*** ./src/app/video/video.page.ts ***!
  \*************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let VideoPage = class VideoPage {
    constructor(alert) {
        this.alert = alert;
    }
    ngOnInit() {
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alert.create({
                header: 'Pega tu Url',
                inputs: [
                    {
                        type: 'text',
                        name: 'url',
                        placeholder: 'URL'
                    }
                ],
                buttons: [
                    {
                        text: 'Confirmar',
                        handler: (url) => {
                            console.log(url);
                            this.url = url.url;
                        }
                    },
                    {
                        text: 'Cancelar'
                    }
                ]
            });
            alert.present();
        });
    }
};
VideoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video',
        template: __webpack_require__(/*! raw-loader!./video.page.html */ "./node_modules/raw-loader/index.js!./src/app/video/video.page.html"),
        styles: [__webpack_require__(/*! ./video.page.scss */ "./src/app/video/video.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], VideoPage);



/***/ })

}]);
//# sourceMappingURL=video-video-module-es2015.js.map