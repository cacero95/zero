(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar mode=\"ios\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Principal\r\n        </ion-title>\r\n        <ion-buttons *ngIf=\"status == 1\" slot=\"end\">\r\n            <ion-button>\r\n                <ion-icon name=\"add\"></ion-icon>\r\n                <ion-input type=\"file\" (change)=\"changeListener($event)\" style=\" position: absolute; top: 0; height: 70%; opacity: 0;\" multiple></ion-input>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-tab-bar>\r\n            <ion-tab-button (click)=\"change_content(x)\" [ngClass]=\"{'border':item.value == status}\" *ngFor=\"let item of toolbar; let x = index\">\r\n                <img width=\"25px\" [src]=\"item.icon\" alt=\"\">\r\n                <ion-label> {{item.title}} </ion-label>\r\n            </ion-tab-button>\r\n        </ion-tab-bar>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-card style=\"margin-bottom: 50px;\">\r\n        <ion-card-header>\r\n            <ion-card-title text-center> {{toolbar[status].title}} </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content style=\"padding-bottom:100px\" text-center *ngIf=\"toolbar[status].content\">\r\n            <div style=\"text-align: center;\">\r\n                <p class=\"parrafos\">\r\n                    {{toolbar[status].content.overall}}\r\n                </p>\r\n            </div>\r\n            <div *ngIf=\"status == 1\">\r\n                <div style=\"padding-right:80px;\" *ngFor=\"let music of toolbar[1].content.list\">\r\n\r\n                </div>\r\n                <ion-item (click)=\"change_song(music.url)\" detail *ngFor=\"let music of toolbar[1].content.list\">\r\n                    <ion-label>{{music.name}}</ion-label>\r\n                </ion-item>\r\n            </div>\r\n            <div *ngIf=\"status == 2\" style=\"padding-top: 20px;\">\r\n                <div *ngFor=\"let img of toolbar[2].content.list\">\r\n                    <img class=\"imagenes\" [src]=\"img.url\" alt=\"\"> <br>\r\n                    <p class=\"parrafos\" style=\"border: 1px solid #454444; border-radius: 20px; padding:10px;\">{{img.description}}</p>\r\n                    <hr>\r\n                </div>\r\n            </div>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <ion-fab *ngIf=\"status == 2\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n        <ion-fab-button (click)=\"add_image()\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-toolbar *ngIf=\"status == 1\" padding>\r\n        <audio id=\"reproductor\" [src]=\"current_song\" *ngIf=\"toolbar[1].content.list.length > 0\" id=\"reproductor\" width=\"100%\" controls>\r\n        </audio>\r\n    </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 200px) {\n  .imagenes {\n    width: 200px;\n    height: 200px;\n    margin: auto;\n  }\n\n  .parrafos {\n    margin: 0 0;\n  }\n}\n@media (min-width: 600px) {\n  .imagenes {\n    width: 400px;\n    height: 400px;\n    margin: auto;\n  }\n\n  .parrafos {\n    margin: 0 100px;\n  }\n}\n@media (min-width: 1000px) {\n  .parrafos {\n    margin: 0 200px 0 200px;\n  }\n}\n.border {\n  border-bottom: 4px solid #20A9B2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHZnYjA3MTZcXERvY3VtZW50c1xcaW9uaWNcXHplcm8vc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUNDTjs7RURDRTtJQUNJLFdBQUE7RUNFTjtBQUNGO0FEQ0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQ0NOOztFRENFO0lBQ0ksZUFBQTtFQ0VOO0FBQ0Y7QURDQTtFQUNJO0lBQ0ksdUJBQUE7RUNDTjtBQUNGO0FERUE7RUFDSSxnQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtaW4td2lkdGg6MjAwcHgpIHtcclxuICAgIC5pbWFnZW5lcyB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnBhcnJhZm9zIHtcclxuICAgICAgICBtYXJnaW46IDAgMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDo2MDBweCkge1xyXG4gICAgLmltYWdlbmVzIHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAucGFycmFmb3Mge1xyXG4gICAgICAgIG1hcmdpbjogMCAxMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDoxMDAwcHgpIHtcclxuICAgIC5wYXJyYWZvcyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwMHB4IDAgMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMEE5QjI7XHJcbn0iLCJAbWVkaWEgKG1pbi13aWR0aDogMjAwcHgpIHtcbiAgLmltYWdlbmVzIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAucGFycmFmb3Mge1xuICAgIG1hcmdpbjogMCAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmltYWdlbmVzIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAucGFycmFmb3Mge1xuICAgIG1hcmdpbjogMCAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAucGFycmFmb3Mge1xuICAgIG1hcmdpbjogMCAyMDBweCAwIDIwMHB4O1xuICB9XG59XG4uYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMEE5QjI7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_dba_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dba.service */ "./src/app/services/dba.service.ts");
/* harmony import */ var _components_data_colector_data_colector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/data-colector/data-colector.component */ "./src/app/components/data-colector/data-colector.component.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







var HomePage = /** @class */ (function () {
    function HomePage(camera, dba, platform, modal) {
        this.camera = camera;
        this.dba = dba;
        this.platform = platform;
        this.modal = modal;
        this.toolbar = [
            {
                title: 'Tesis',
                icon: 'assets/img/pawprint.svg',
                value: 0,
                content: {
                    overall: "\n        La tesis consistio en un servicio centralizado donde no solo da la experiencia de una red social de mascotas,\n         tambien brinda la posibilidad que las diferentes entidades animalista puedan\n        puedan publicitar sus servicios y fidelizar sus clientes a traves de notificaciones en tiempo real\n        "
                }
            },
            {
                title: 'Music',
                icon: 'assets/img/play_button.svg',
                value: 1,
                content: {
                    overall: "Rock | Metal | Relax",
                    list: []
                }
            },
            {
                title: 'Games',
                icon: 'assets/img/ps.svg',
                value: 2,
                content: {
                    overall: "ps4, ps vita, ps1, Xbox, Xbox 360 games",
                    list: []
                }
            }
        ];
        this.status = 1;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dba.get_music().subscribe(function (songs) {
            var canciones = songs;
            _this.toolbar[1].content.list = canciones;
        });
        this.dba.get_images().subscribe(function (imgs) {
            _this.toolbar[2].content.list = imgs;
        });
    };
    HomePage.prototype.change_content = function (value) {
        this.status = value;
    };
    HomePage.prototype.change_song = function (song) {
        if (!this.play) {
            this.play = document.getElementById('reproductor');
        }
        this.current_song = song;
        try {
            this.play.play();
        }
        catch (err) {
            console.log(err);
        }
    };
    HomePage.prototype.changeListener = function (event) {
        if (event.target.files.length > 0) {
            this.dba.upload_content(event.target.files);
        }
    };
    // este metodono solo añade una imagen sino tambien una descripción
    HomePage.prototype.add_image = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(firebase__WEBPACK_IMPORTED_MODULE_6__["analytics"]());
                        firebase__WEBPACK_IMPORTED_MODULE_6__["analytics"]().logEvent("my_event", { param1: "Android" });
                        firebase__WEBPACK_IMPORTED_MODULE_6__["analytics"]().logEvent('select_content', {
                            content_type: 'image',
                            content_id: 'P12453',
                            items: [{ name: 'Kittens' }]
                        });
                        if (this.platform.is('cordova')) {
                            firebase__WEBPACK_IMPORTED_MODULE_6__["analytics"]().logEvent('my_event', { param1: "value1" });
                        }
                        return [4 /*yield*/, this.modal.create({
                                component: _components_data_colector_data_colector_component__WEBPACK_IMPORTED_MODULE_5__["DataColectorComponent"],
                                animated: true,
                                mode: "ios"
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _services_dba_service__WEBPACK_IMPORTED_MODULE_4__["DbaService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _services_dba_service__WEBPACK_IMPORTED_MODULE_4__["DbaService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map