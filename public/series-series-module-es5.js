(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["series-series-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/series/series.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/series/series.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar mode=\"ios\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Mis series</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"add_post()\">\n                <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div>\n        <ion-card *ngFor=\"let serie of series\">\n            <ion-card-content>\n                <img class=\"imagenes\" *ngIf=\"serie.data().url\" src=\"serie.data().url\">\n                <ion-card-header>\n                    <ion-card-subtitle></ion-card-subtitle>\n                    <ion-card-title>{{serie.data().owner_name}}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    <p>\n                        {{serie.data().description}}\n                    </p>\n\n\n                </ion-card-content>\n            </ion-card-content>\n        </ion-card>\n\n    </div>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n        <ion-fab-button (click)=\"add_post()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/series/series.module.ts":
/*!*****************************************!*\
  !*** ./src/app/series/series.module.ts ***!
  \*****************************************/
/*! exports provided: SeriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageModule", function() { return SeriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _series_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./series.page */ "./src/app/series/series.page.ts");







var routes = [
    {
        path: '',
        component: _series_page__WEBPACK_IMPORTED_MODULE_6__["SeriesPage"]
    }
];
var SeriesPageModule = /** @class */ (function () {
    function SeriesPageModule() {
    }
    SeriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_series_page__WEBPACK_IMPORTED_MODULE_6__["SeriesPage"]]
        })
    ], SeriesPageModule);
    return SeriesPageModule;
}());



/***/ }),

/***/ "./src/app/series/series.page.scss":
/*!*****************************************!*\
  !*** ./src/app/series/series.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 200px) {\n  .imagenes {\n    width: 200px;\n    height: 200px;\n    margin: auto;\n  }\n\n  .parrafos {\n    margin: 0 0;\n  }\n}\n@media (min-width: 600px) {\n  .imagenes {\n    width: 400px;\n    height: 400px;\n    margin: auto;\n  }\n\n  .parrafos {\n    margin: 0 100px;\n  }\n}\n@media (min-width: 1000px) {\n  .parrafos {\n    margin: 0 200px 0 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VyaWVzL0M6XFxVc2Vyc1xcdmdiMDcxNlxcRG9jdW1lbnRzXFxpb25pY1xcemVyby9zcmNcXGFwcFxcc2VyaWVzXFxzZXJpZXMucGFnZS5zY3NzIiwic3JjL2FwcC9zZXJpZXMvc2VyaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VDQ047O0VEQ0U7SUFDSSxXQUFBO0VDRU47QUFDRjtBRENBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUNDTjs7RURDRTtJQUNJLGVBQUE7RUNFTjtBQUNGO0FEQ0E7RUFDSTtJQUNJLHVCQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Nlcmllcy9zZXJpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi13aWR0aDoyMDBweCkge1xyXG4gICAgLmltYWdlbmVzIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAucGFycmFmb3Mge1xyXG4gICAgICAgIG1hcmdpbjogMCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjYwMHB4KSB7XHJcbiAgICAuaW1hZ2VuZXMge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIC5wYXJyYWZvcyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjEwMDBweCkge1xyXG4gICAgLnBhcnJhZm9zIHtcclxuICAgICAgICBtYXJnaW46IDAgMjAwcHggMCAyMDBweDtcclxuICAgIH1cclxufSIsIkBtZWRpYSAobWluLXdpZHRoOiAyMDBweCkge1xuICAuaW1hZ2VuZXMge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5wYXJyYWZvcyB7XG4gICAgbWFyZ2luOiAwIDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuaW1hZ2VuZXMge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5wYXJyYWZvcyB7XG4gICAgbWFyZ2luOiAwIDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5wYXJyYWZvcyB7XG4gICAgbWFyZ2luOiAwIDIwMHB4IDAgMjAwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/series/series.page.ts":
/*!***************************************!*\
  !*** ./src/app/series/series.page.ts ***!
  \***************************************/
/*! exports provided: SeriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPage", function() { return SeriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_visual_series_visual_series_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/visual-series/visual-series.component */ "./src/app/components/visual-series/visual-series.component.ts");
/* harmony import */ var _services_colections_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/colections.service */ "./src/app/services/colections.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var SeriesPage = /** @class */ (function () {
    function SeriesPage(modal, collection, http) {
        this.modal = modal;
        this.collection = collection;
        this.http = http;
        this.series = [];
    }
    SeriesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.collection.getCollection().then(function (data) {
            _this.series = data;
            console.log(_this.series);
            for (var _i = 0, _a = _this.series; _i < _a.length; _i++) {
                var test = _a[_i];
                console.log(test.data());
            }
        });
    };
    SeriesPage.prototype.add_post = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _components_visual_series_visual_series_component__WEBPACK_IMPORTED_MODULE_3__["VisualSeriesComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SeriesPage.prototype.push_funtions = function () {
        var test = {
            name: "2019 diciembre 10",
            description: "this is a test for firebase functions",
            url: "https://www.pushwoosh.com/blog/content/images/2019/03/regular_push_notification_flow-1.png"
        };
        this.http.post("https://us-central1-atomic-snow-220819.cloudfunctions.net/helloWorld", test, {
            responseType: "text"
        }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    SeriesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_colections_service__WEBPACK_IMPORTED_MODULE_4__["ColectionsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    SeriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-series',
            template: __webpack_require__(/*! raw-loader!./series.page.html */ "./node_modules/raw-loader/index.js!./src/app/series/series.page.html"),
            styles: [__webpack_require__(/*! ./series.page.scss */ "./src/app/series/series.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_colections_service__WEBPACK_IMPORTED_MODULE_4__["ColectionsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], SeriesPage);
    return SeriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=series-series-module-es5.js.map