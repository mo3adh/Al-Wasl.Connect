(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"info\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <div class=\"content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <footer-cmp></footer-cmp>\r\n    </div>\r\n</div>\r\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"limiter\">\r\n    <div class=\"container-login100\">\r\n        <div class=\"wrap-login100\">\r\n            <div class=\"fixed-top\">\r\n                <img src=\"assets/img/ibm-ar21.svg\" alt=\"IMG\">\r\n            </div>\r\n            <div class=\"login100-pic js-tilt\" data-tilt>\r\n                <img src=\"assets/img/login.png\" alt=\"IMG\">\r\n                \r\n            </div>\r\n\r\n            <form class=\"login100-form validate-form\" (ngSubmit)=\"signIn()\">\r\n                <img src=\"assets/img/logo1.png\" class=\"img-responsive pb-2\" alt=\"IMG\">\r\n                <span class=\"login100-form-title mt-2\">\r\n                    Government's Login\r\n                </span>\r\n                <div [formGroup]='authForm'>\r\n                    <div class=\"wrap-input100 validate-input\" [ngClass]=\"{ 'has-error': isSubmitted && formControls.regno.errors }\">\r\n                        <input class=\"input100\" id='cnic' type=\"text\" formControlName=\"regno\" placeholder=\"Username\">\r\n                        <span class=\"focus-input100\"></span>\r\n                        <span class=\"symbol-input100\">\r\n                            <i class=\"fa fa-address-card\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                    </div>\r\n                    <div *ngIf=\"isSubmitted && formControls.regno.errors\" class=\"help-block\">\r\n                        <div *ngIf=\"formControls.regno.errors.required\">*User Name is required</div>  \r\n                    </div>\r\n                \r\n                \r\n\r\n                <div class=\"wrap-input100 validate-input\" [ngClass]=\"{ 'has-error': isSubmitted && formControls.password.errors }\">\r\n                    <input class=\"input100\" id='pass' type=\"password\" formControlName=\"password\" name=\"pass\" placeholder=\"Password\">\r\n                    <span class=\"focus-input100\"></span>\r\n                    <span class=\"symbol-input100\">\r\n                        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n                <div *ngIf=\"isSubmitted && formControls.password.errors\" class=\"help-block\">\r\n                    <div *ngIf=\"formControls.password.errors.required\">*Password is required</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-login100-form-btn\">\r\n                    <button id='loginButton' type=\"submit\" class=\"login100-form-btn\">\r\n                        Login\r\n                    </button>\r\n                </div>\r\n\r\n                <div class=\"text-center p-t-12 login\">\r\n                    <span class=\"txt1\">\r\n                        Forgot\r\n                    </span>\r\n                    <a class=\"txt2\" href=\"/#/login\">\r\n                        Username / Password?\r\n                    </a>\r\n                </div>\r\n                <div class=\"text-center p-t-136 login\">\r\n                    <a  class=\"txt2\" href=\"/#/donor\">\r\n                        Donor Login\r\n                        <i class=\"fa fa-shopping-basket m-l-5\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                    \r\n                </div>\r\n                <div class=\"text-center login\">\r\n                    <a  class=\"txt2\" href=\"/#/welcome\">\r\n                        Home Page\r\n                        <i class=\"fa fa-home m-l-5\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </div>\r\n                \r\n            </form>\r\n           \r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/donor/donor.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/donor/donor.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"limiter\">\r\n    <div class=\"container-login100\">\r\n        <div class=\"wrap-login100\">\r\n            <div class=\"fixed-top\">\r\n                <img src=\"assets/img/ibm-ar21.svg\" alt=\"IMG\">\r\n            </div>\r\n\r\n            <div class=\"login100-pic js-tilt\" data-tilt>\r\n                <img src=\"assets/img/login.png\" alt=\"IMG\">\r\n            </div>\r\n\r\n            <form class=\"login100-form validate-form\"  (ngSubmit)=\"signIn()\">\r\n                <img src=\"assets/img/logo1.png\" class=\"img-responsive pb-2\" alt=\"IMG\">\r\n                <ngx-loading [show]=\"loading\" [config]=\"{backdropBackgroundColour:'rgba(0, 0, 0, 0.05)',animationType: ngxLoadingAnimationTypes.rectangleBounce, primaryColour: '#18A2B8', backdropBorderRadius: '3px'}\"></ngx-loading>\r\n                <span class=\"login100-form-title mt-2\">\r\n                    Donor's Login\r\n                </span>\r\n                <div [formGroup]='authDonorForm'>\r\n                    <div class=\"wrap-input100 validate-input\" [ngClass]=\"{ 'has-error': isSubmitted && formControls.regno.errors }\">\r\n                        <input class=\"input100\" id='cnic' type=\"text\" formControlName=\"regno\" placeholder=\"Registration #\">\r\n                        <span class=\"focus-input100\"></span>\r\n                        <span class=\"symbol-input100\">\r\n                            <i class=\"fa fa-address-card\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                    </div>\r\n                    <div *ngIf=\"isSubmitted && formControls.regno.errors\" class=\"help-block\">\r\n                        <div *ngIf=\"formControls.regno.errors.required\">*Registration # is required</div>\r\n                        <div *ngIf=\"formControls.regno.errors.minlength\">*Valid 13 digits Reg # is required</div>  \r\n                        <div *ngIf=\"formControls.regno.errors.maxlength\">*Valid 13 digits Reg # is required</div>  \r\n                        <div *ngIf=\"formControls.regno.errors.pattern\">*Numbers only!</div>  \r\n                    </div>\r\n                \r\n                \r\n\r\n                <div class=\"wrap-input100 validate-input\" [ngClass]=\"{ 'has-error': isSubmitted && formControls.password.errors }\">\r\n                    <input class=\"input100\" id='pass' type=\"password\" formControlName=\"password\" name=\"pass\" placeholder=\"Password\">\r\n                    <span class=\"focus-input100\"></span>\r\n                    <span class=\"symbol-input100\">\r\n                        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n                <div *ngIf=\"isSubmitted && formControls.password.errors\" class=\"help-block\">\r\n                    <div *ngIf=\"formControls.password.errors.required\">*Password is required</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-login100-form-btn\">\r\n                    <button id='loginButton' type=\"submit\" class=\"login100-form-btn\">\r\n                        Login\r\n                    </button>\r\n                </div>\r\n                \r\n\r\n                <div class=\"text-center p-t-136 login\">\r\n                    <a  class=\"txt2\" href=\"/#/register\">\r\n                        Register Citizens\r\n                        <i class=\"fa fa-long-arrow-right m-l-5\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                   \r\n                    <br>\r\n                    <a class=\"txt2\" href=\"/#/login\">\r\n                        Government Login\r\n                        <i class=\"fa fa-user m-l-5\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                    \r\n                </div>\r\n                <div class=\"text-center login\">\r\n                    <a  class=\"txt2\" href=\"/#/welcome\">\r\n                        Home Page\r\n                        <i class=\"fa fa-home m-l-5\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"limiter\">\r\n    <div class=\"container-login100\">\r\n        \r\n        <div class=\"wrap-login100\">\r\n            <div class=\"fixed-top\">\r\n                <img src=\"assets/img/ibm-ar21.svg\" alt=\"IMG\">\r\n            </div>\r\n            <div class=\"login100-pic js-tilt\" data-tilt>\r\n                <img src=\"assets/img/img-01.png\" alt=\"IMG\">\r\n            </div>\r\n            <div class=\"login100-form validate-form mb-3\">\r\n                <span class=\"login100-form-title\">\r\n                    Register Underpriviledged Family!\r\n                </span>\r\n\r\n                <form method=\"POST\" id=\"signup-form\" class=\"signup-form\" enctype=\"multipart/form-data\">\r\n                    <h3></h3>\r\n                    <fieldset>\r\n                        <span class=\"step-current\">Step 1 / 3</span>\r\n                        <div class=\"form-group  mb-2\">\r\n                            <input id='cnic' class=\"input100\" type=\"tel\"  placeholder=\"Social Security #\">\r\n                            <span class=\"focus-input100\"></span>\r\n                        </div>\r\n                    </fieldset>\r\n\r\n                    <h3></h3>\r\n                    <fieldset>\r\n                        <span class=\"step-current\">Step 2 / 3</span>\r\n                        <div class=\"form-group\">\r\n                            \r\n                            <div class=\" mb-2 label\">\r\n                                    <span style=\"font-size: 16px;\">Are the credentials correct? </span>\r\n                                    <br>\r\n                                    <span style=\"font-size: 14px\">is Person's Name - </span><span id=\"name\" class=\"shadow-small font-weight-bold\"></span>\r\n                                    <hr>\r\n                                    <span style=\"font-size: 14px\">is Person Father's Name - </span><span id=\"fathername\" class=\"shadow-small font-weight-bold\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n\r\n                    <h3></h3>\r\n                    <fieldset>\r\n                        <span class=\"step-current\">Step 3 / 3</span>\r\n                        <div class=\"form-group mb-2\">\r\n                            <input class=\"input100\" type=\"tel\"  placeholder=\"Mobile Phone #\">\r\n                            <span class=\"focus-input100\"></span>\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n\r\n                <div id='resId' class=\"p-t-40\" style=\"display: none;\">\r\n                    <span id=\"registerResponse\"></span>\r\n                </div>\r\n                <div id=\"citizenid\" class=\"text-center p-t-136 login\">\r\n                    <a class=\"txt2\" href=\"/#/donor\">\r\n                        Donor's Login\r\n                        <i class=\"fa fa-users m-l-5\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-plugin\">\r\n    <div class=\"show-dropdown\" ngbDropdown>\r\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\r\n          <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\r\n            <li class=\"header-title\">Sidebar Background</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\r\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\r\n                </a>\r\n            </li>\r\n\r\n\t          <li class=\"header-title\">Sidebar Active Color</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\r\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\r\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\r\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\r\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\r\n                </a>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"copyright pull-right\">\r\n            &copy; IBM {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.ibm.com\">Team Avengers</a>\r\n        </div>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-toggle\">\r\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\r\n          <span class=\"navbar-toggler-bar bar1\"></span>\r\n          <span class=\"navbar-toggler-bar bar2\"></span>\r\n          <span class=\"navbar-toggler-bar bar3\"></span>\r\n        </button>\r\n      </div>\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n      <form>\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <div class=\"input-group-append\">\r\n            <div class=\"input-group-text\">\r\n              <i class=\"nc-icon nc-zoom-split\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <ul class=\"navbar-nav\">\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\r\n            <i class=\"nc-icon nc-layout-11\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Stats</span>\r\n            </p>\r\n          </a>\r\n        </li> -->\r\n\r\n        <li class=\"nav-item btn-rotate\">\r\n          <a class=\"nav-link\"  id=\"navbarDropdownMenuLink\" >\r\n            <i class=\"nc-icon nc-bell-55\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\r\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\" >\r\n            <i class=\"nc-icon nc-single-02\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n            </p>\r\n          </a>\r\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\r\n            <a ngbDropdownItem (click)=\"logout()\">Logout</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"sidebar-wrapper\">\r\n  <div class=\"logo\">\r\n    <a href=\"javascript:void(0)\" class=\"logo-normal\">\r\n      <div class=\"logo-image-small\">\r\n        <img src=\"assets/img/logo1.png\">\r\n      </div>\r\n    </a>\r\n  </div>\r\n    <ul class=\"nav\">\r\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\r\n            <a [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://covid19.who.int/\">\r\n            <i class=\"nc-icon nc-globe\"></i>\r\n            <p>COVID-19 Updates</p>\r\n        </a>\r\n        </li>\r\n       \r\n    </ul>\r\n    <div class=\"col-md-12 position-absolute\" style=\"bottom:10px; width: 80%;left:10px\">\r\n      <img class=\" img-responsive\" src=\"assets/img/ibmlogo.png\">\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!-- banner part start-->\r\n<section class=\"banner_part\" >\r\n    <div class=\"blackLayer\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <img src=\"assets/img/logo1.png\" class=\"img-responsive pb-2 col-md-6\" alt=\"IMG\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"banner_text\">\r\n                    <div class=\"banner_text_iner\">\r\n                        <h1>Doing Nothing is not an <span style=\"color:orange\">Option</span> \r\n                            of our Life\r\n                        </h1>\r\n                        <p>The world has never faced a crisis like COVID-19. The pandemic is impacting communities everywhere. It’s our turn to support our people in this time of need. Help your community's needy people through this platform by registering them. Government or NGOs will do the rest!</p>\r\n                        <a href=\"/#/donor\" class=\"btn_2\">Portal</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_helper/names.ts":
/*!**********************************!*\
  !*** ./src/app/_helper/names.ts ***!
  \**********************************/
/*! exports provided: Names, dummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Names", function() { return Names; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy", function() { return dummy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Names = [
    {
        "Id": "1",
        "Name": "Aaban",
        "Father Name": "Aamir"
    },
    {
        "Id": "2",
        "Name": "Aadil",
        "Father Name": "Dizhwar"
    },
    {
        "Id": "3",
        "Name": "Aahil",
        "Father Name": "Nadim"
    },
    {
        "Id": "4",
        "Name": "Aalam",
        "Father Name": "Raahil"
    },
    {
        "Id": "5",
        "Name": "Aalee",
        "Father Name": "Yar"
    },
    {
        "Id": "6",
        "Name": "Aalim",
        "Father Name": "Jiyad"
    },
    {
        "Id": "7",
        "Name": "Aamil",
        "Father Name": "Aasim"
    },
    {
        "Id": "8",
        "Name": "Aamir",
        "Father Name": "Rahmat"
    },
    {
        "Id": "9",
        "Name": "Aamirah",
        "Father Name": "Jamil"
    },
    {
        "Id": "10",
        "Name": "Aaqib",
        "Father Name": "Rabiah"
    },
    {
        "Id": "11",
        "Name": "Aaqil",
        "Father Name": "Qais"
    },
    {
        "Id": "12",
        "Name": "Aarif",
        "Father Name": "Gulzar"
    },
    {
        "Id": "13",
        "Name": "Aariz",
        "Father Name": "Uhban"
    },
    {
        "Id": "14",
        "Name": "Aashif",
        "Father Name": "Damurah"
    },
    {
        "Id": "15",
        "Name": "Aashir",
        "Father Name": "Yaqub"
    },
    {
        "Id": "16",
        "Name": "Aasif",
        "Father Name": "Zuhoor"
    },
    {
        "Id": "17",
        "Name": "Aasim",
        "Father Name": "Issar"
    },
    {
        "Id": "18",
        "Name": "Aatif",
        "Father Name": "Faakhir"
    },
    {
        "Id": "19",
        "Name": "Aban",
        "Father Name": "Safeenah"
    },
    {
        "Id": "20",
        "Name": "Abbas",
        "Father Name": "Nabhan"
    },
    {
        "Id": "21",
        "Name": "Abbad",
        "Father Name": "Haaziq"
    },
    {
        "Id": "22",
        "Name": "Abdul Aalee",
        "Father Name": "Iskandar"
    },
    {
        "Id": "23",
        "Name": "Abdul Adl",
        "Father Name": "Kamran"
    },
    {
        "Id": "24",
        "Name": "Abdul Afuw",
        "Father Name": "Farasat"
    },
    {
        "Id": "25",
        "Name": "Abdul Ahad",
        "Father Name": "Diyari"
    },
    {
        "Id": "26",
        "Name": "Abdul Ali",
        "Father Name": "Waseem"
    },
    {
        "Id": "27",
        "Name": "Abdul Alim",
        "Father Name": "Ishaq"
    },
    {
        "Id": "28",
        "Name": "Abdul Awwal",
        "Father Name": "Layth"
    },
    {
        "Id": "29",
        "Name": "Abdul Azeez",
        "Father Name": "Bazam"
    },
    {
        "Id": "30",
        "Name": "Abdul Azim",
        "Father Name": "Hafiz"
    },
    {
        "Id": "31",
        "Name": "Abdul Aziz",
        "Father Name": "Ghazalan"
    },
    {
        "Id": "32",
        "Name": "Abdul Baari",
        "Father Name": "Zaigham"
    },
    {
        "Id": "33",
        "Name": "Abdul Baasit",
        "Father Name": "Jaraah"
    },
    {
        "Id": "34",
        "Name": "Baahir",
        "Father Name": "Dawlah"
    },
    {
        "Id": "35",
        "Name": "Baasim",
        "Father Name": "Qamar"
    },
    {
        "Id": "36",
        "Name": "Babar",
        "Father Name": "Daniel"
    },
    {
        "Id": "37",
        "Name": "Baber",
        "Father Name": "Labib"
    },
    {
        "Id": "38",
        "Name": "Baqir",
        "Father Name": "Rafan"
    },
    {
        "Id": "39",
        "Name": "Barkat",
        "Father Name": "Jahangir"
    },
    {
        "Id": "40",
        "Name": "Barr",
        "Father Name": "Lahab"
    },
    {
        "Id": "41",
        "Name": "Barraq",
        "Father Name": "Saeed"
    },
    {
        "Id": "42",
        "Name": "Basel",
        "Father Name": "Aamil"
    },
    {
        "Id": "43",
        "Name": "Basem",
        "Father Name": "Wahhaj"
    },
    {
        "Id": "44",
        "Name": "Bashaar",
        "Father Name": "Quadir"
    },
    {
        "Id": "45",
        "Name": "Bashar",
        "Father Name": "Liban"
    },
    {
        "Id": "46",
        "Name": "Basharat",
        "Father Name": "Jahdami"
    },
    {
        "Id": "47",
        "Name": "Basil",
        "Father Name": "Aalim"
    },
    {
        "Id": "48",
        "Name": "Basim",
        "Father Name": "Aashif"
    },
    {
        "Id": "49",
        "Name": "Basir",
        "Father Name": "Makki"
    }
];
var dummy = [
    { "Family_id": 1.0, "Lat": 24.9559, "Long": 67.10234000000001 },
    { "Family_id": 2.0, "Lat": 31.66149, "Long": 74.36564 },
    { "Family_id": 3.0, "Lat": 24.91625, "Long": 67.1568 },
    { "Family_id": 4.0, "Lat": 24.89341, "Long": 67.10533 },
    { "Family_id": 5.0, "Lat": 24.95232, "Long": 67.08905 },
    { "Family_id": 6.0, "Lat": 24.97131, "Long": 67.05781 },
    { "Family_id": 7.0, "Lat": 24.90347, "Long": 67.11 },
    { "Family_id": 8.0, "Lat": 24.90742, "Long": 67.15449 },
    { "Family_id": 9.0, "Lat": 31.63422, "Long": 74.4435 },
    { "Family_id": 10.0, "Lat": 24.95676, "Long": 67.11338 },
    { "Family_id": 11.0, "Lat": 31.61339, "Long": 74.45017 },
    { "Family_id": 12.0, "Lat": 24.98974, "Long": 67.05941 },
    { "Family_id": 13.0, "Lat": 24.91506, "Long": 67.08197 },
    { "Family_id": 14.0, "Lat": 24.93353, "Long": 67.15388 },
    { "Family_id": 15.0, "Lat": 24.90259, "Long": 67.18771 },
    { "Family_id": 16.0, "Lat": 24.91898, "Long": 67.09705000000001 },
    { "Family_id": 17.0, "Lat": 25.01214, "Long": 67.17344 },
    { "Family_id": 18.0, "Lat": 24.98313, "Long": 67.12783 },
    { "Family_id": 19.0, "Lat": 31.52666, "Long": 74.40291 },
    { "Family_id": 20.0, "Lat": 24.96437, "Long": 67.16424 },
    { "Family_id": 21.0, "Lat": 31.008263, "Long": 74.21901 },
    { "Family_id": 22.0, "Lat": 24.99968, "Long": 67.07133 },
    { "Family_id": 23.0, "Lat": 31.59393, "Long": 74.4319 },
    { "Family_id": 24.0, "Lat": 31.56202, "Long": 74.47959 },
    { "Family_id": 25.0, "Lat": 24.92192, "Long": 67.05803 },
    { "Family_id": 26.0, "Lat": 24.91685, "Long": 67.0717 },
    { "Family_id": 27.0, "Lat": 24.93186, "Long": 67.16098 },
    { "Family_id": 28.0, "Lat": 31.5443, "Long": 74.53846 },
    { "Family_id": 29.0, "Lat": 25.00178, "Long": 67.10007 },
    { "Family_id": 30.0, "Lat": 31.70501, "Long": 74.38057 },
    { "Family_id": 31.0, "Lat": 31.57373, "Long": 74.40236 },
    { "Family_id": 32.0, "Lat": 31.56778, "Long": 74.4411 },
    { "Family_id": 33.0, "Lat": 31.6632, "Long": 74.47268 },
    { "Family_id": 34.0, "Lat": 31.52839, "Long": 74.43725 },
    { "Family_id": 35.0, "Lat": 31.53252, "Long": 74.47415 },
    { "Family_id": 36.0, "Lat": 25.01056, "Long": 67.09763 },
    { "Family_id": 37.0, "Lat": 24.9518, "Long": 67.13873 },
    { "Family_id": 38.0, "Lat": 31.64927, "Long": 74.51728 },
    { "Family_id": 39.0, "Lat": 24.90993, "Long": 67.07854999999999 },
    { "Family_id": 40.0, "Lat": 25.02552, "Long": 67.17693 },
    { "Family_id": 41.0, "Lat": 25.03111, "Long": 67.16099 },
    { "Family_id": 42.0, "Lat": 24.94188, "Long": 67.13016 },
    { "Family_id": 43.0, "Lat": 31.58491, "Long": 74.4392 },
    { "Family_id": 44.0, "Lat": 31.56609, "Long": 74.42548000000001 },
    { "Family_id": 45.0, "Lat": 31.58286, "Long": 74.45316 },
    { "Family_id": 46.0, "Lat": 24.92536, "Long": 67.04294 },
    { "Family_id": 47.0, "Lat": 31.57632, "Long": 74.45533999999999 },
    { "Family_id": 48.0, "Lat": 31.5445, "Long": 74.41149 },
    { "Family_id": 49.0, "Lat": 31.71102, "Long": 74.46307 },
    { "Family_id": 50.0, "Lat": 31.60828, "Long": 74.44044000000001 },
    { "Family_id": 51.0, "Lat": 24.94957, "Long": 67.05528 },
    { "Family_id": 52.0, "Lat": 31.61783, "Long": 74.47740999999999 },
    { "Family_id": 53.0, "Lat": 24.99491, "Long": 67.10896 },
    { "Family_id": 54.0, "Lat": 31.59864, "Long": 74.45116999999999 },
    { "Family_id": 55.0, "Lat": 31.58495, "Long": 74.41801 },
    { "Family_id": 56.0, "Lat": 24.9878, "Long": 67.10576999999999 },
    { "Family_id": 57.0, "Lat": 31.59193, "Long": 74.4766 },
    { "Family_id": 58.0, "Lat": 25.0099, "Long": 67.07560000000001 },
    { "Family_id": 59.0, "Lat": 24.9423, "Long": 67.03224 },
    { "Family_id": 60.0, "Lat": 24.95638, "Long": 67.07065 },
    { "Family_id": 61.0, "Lat": 24.94602, "Long": 67.05484 },
    { "Family_id": 62.0, "Lat": 31.5582, "Long": 74.38905 },
    { "Family_id": 63.0, "Lat": 31.58135, "Long": 74.40344 },
    { "Family_id": 64.0, "Lat": 31.52348, "Long": 74.48487 },
    { "Family_id": 65.0, "Lat": 31.57815, "Long": 74.50506 },
    { "Family_id": 66.0, "Lat": 31.71057, "Long": 74.40599 },
    { "Family_id": 67.0, "Lat": 24.94021, "Long": 67.04701 },
    { "Family_id": 68.0, "Lat": 25.00279, "Long": 67.09785000000001 },
    { "Family_id": 69.0, "Lat": 31.63762, "Long": 74.50861 },
    { "Family_id": 70.0, "Lat": 31.65352, "Long": 74.42885 },
    { "Family_id": 71.0, "Lat": 24.99881, "Long": 67.0281 },
    { "Family_id": 72.0, "Lat": 24.95609, "Long": 67.10569 },
    { "Family_id": 73.0, "Lat": 31.53076, "Long": 74.48693 },
    { "Family_id": 74.0, "Lat": 31.65002, "Long": 74.47627 },
    { "Family_id": 75.0, "Lat": 24.93526, "Long": 67.04737 },
    { "Family_id": 76.0, "Lat": 31.61281, "Long": 74.46088 },
    { "Family_id": 77.0, "Lat": 24.91878, "Long": 67.1575 },
    { "Family_id": 78.0, "Lat": 31.53105, "Long": 74.45977 },
    { "Family_id": 79.0, "Lat": 31.57303, "Long": 74.47167 },
    { "Family_id": 80.0, "Lat": 31.61649, "Long": 74.40992 },
    { "Family_id": 81.0, "Lat": 31.67764, "Long": 74.45385 },
    { "Family_id": 82.0, "Lat": 31.53165, "Long": 74.47888 },
    { "Family_id": 83.0, "Lat": 24.89785, "Long": 67.09988 },
    { "Family_id": 84.0, "Lat": 24.91404, "Long": 67.11631 },
    { "Family_id": 85.0, "Lat": 25.04794, "Long": 67.14595 },
    { "Family_id": 86.0, "Lat": 25.03365, "Long": 67.11408 },
    { "Family_id": 87.0, "Lat": 24.95386, "Long": 67.04651 },
    { "Family_id": 88.0, "Lat": 24.89108, "Long": 67.06244000000001 },
    { "Family_id": 89.0, "Lat": 24.99811, "Long": 67.16237 },
    { "Family_id": 90.0, "Lat": 25.0257, "Long": 67.12603 },
    { "Family_id": 91.0, "Lat": 24.97074, "Long": 67.05000000000001 },
    { "Family_id": 92.0, "Lat": 25.00453, "Long": 67.04838 },
    { "Family_id": 93.0, "Lat": 31.59089, "Long": 74.39447 },
    { "Family_id": 94.0, "Lat": 31.64855, "Long": 74.39895 },
    { "Family_id": 95.0, "Lat": 24.9502, "Long": 67.16582 },
    { "Family_id": 96.0, "Lat": 24.93781, "Long": 67.11559 },
    { "Family_id": 97.0, "Lat": 24.90492, "Long": 67.10955 },
    { "Family_id": 98.0, "Lat": 24.98608, "Long": 67.16898 },
    { "Family_id": 99.0, "Lat": 24.95676, "Long": 67.14391 },
    { "Family_id": 100.0, "Lat": 31.62919, "Long": 74.46986 },
    { "Family_id": 101.0, "Lat": 31.60945, "Long": 74.43104 },
    { "Family_id": 102.0, "Lat": 25.0201, "Long": 67.05521 },
    { "Family_id": 103.0, "Lat": 31.56574, "Long": 74.51532 },
    { "Family_id": 104.0, "Lat": 31.61887, "Long": 74.53607000000001 },
    { "Family_id": 105.0, "Lat": 24.95314, "Long": 67.08912000000001 },
    { "Family_id": 106.0, "Lat": 24.95197, "Long": 67.0854 },
    { "Family_id": 107.0, "Lat": 24.90782, "Long": 67.08794 },
    { "Family_id": 108.0, "Lat": 31.58724, "Long": 74.40721 },
    { "Family_id": 109.0, "Lat": 31.65233, "Long": 74.45029 },
    { "Family_id": 110.0, "Lat": 31.61851, "Long": 74.40774 },
    { "Family_id": 111.0, "Lat": 24.91714, "Long": 67.10926 },
    { "Family_id": 112.0, "Lat": 31.5924, "Long": 74.52766 },
    { "Family_id": 113.0, "Lat": 24.89114, "Long": 67.10432 },
    { "Family_id": 114.0, "Lat": 31.60697, "Long": 74.44191000000001 },
    { "Family_id": 115.0, "Lat": 31.54368, "Long": 74.46327000000001 },
    { "Family_id": 116.0, "Lat": 24.87686, "Long": 67.09657 },
    { "Family_id": 117.0, "Lat": 24.88654, "Long": 67.18323 },
    { "Family_id": 118.0, "Lat": 24.95427, "Long": 67.0875 },
    { "Family_id": 119.0, "Lat": 31.63567, "Long": 74.42587999999999 },
    { "Family_id": 120.0, "Lat": 25.02687, "Long": 67.10219 },
    { "Family_id": 121.0, "Lat": 31.58012, "Long": 74.41526999999999 },
    { "Family_id": 122.0, "Lat": 24.96177, "Long": 67.07878000000001 },
    { "Family_id": 123.0, "Lat": 25.03048, "Long": 67.06487 },
    { "Family_id": 124.0, "Lat": 24.98474, "Long": 67.11349 },
    { "Family_id": 125.0, "Lat": 24.96921, "Long": 67.10868 },
    { "Family_id": 126.0, "Lat": 24.96525, "Long": 67.12671 },
    { "Family_id": 127.0, "Lat": 24.96273, "Long": 67.06125 },
    { "Family_id": 128.0, "Lat": 25.02955, "Long": 67.10332 },
    { "Family_id": 129.0, "Lat": 24.99756, "Long": 67.08211 },
    { "Family_id": 130.0, "Lat": 24.99756, "Long": 67.10455 },
    { "Family_id": 131.0, "Lat": 24.93801, "Long": 67.0882 },
    { "Family_id": 132.0, "Lat": 31.57416, "Long": 74.51414 },
    { "Family_id": 133.0, "Lat": 24.94845, "Long": 67.12270000000001 },
    { "Family_id": 134.0, "Lat": 24.95913, "Long": 67.10359000000001 },
    { "Family_id": 135.0, "Lat": 31.56376, "Long": 74.46844 },
    { "Family_id": 136.0, "Lat": 24.99887, "Long": 67.11668 },
    { "Family_id": 137.0, "Lat": 31.66233, "Long": 74.47917 },
    { "Family_id": 138.0, "Lat": 24.8906, "Long": 67.08425 },
    { "Family_id": 139.0, "Lat": 24.88756, "Long": 67.09392 },
    { "Family_id": 140.0, "Lat": 25.00174, "Long": 67.0704 },
    { "Family_id": 141.0, "Lat": 31.21062, "Long": 74.03926 },
    { "Family_id": 142.0, "Lat": 31.57549, "Long": 74.46613 },
    { "Family_id": 143.0, "Lat": 24.93649, "Long": 67.08559000000001 },
    { "Family_id": 144.0, "Lat": 24.90771, "Long": 67.10832 },
    { "Family_id": 145.0, "Lat": 31.67604, "Long": 74.45817 },
    { "Family_id": 146.0, "Lat": 25.03348, "Long": 67.12655000000001 },
    { "Family_id": 147.0, "Lat": 31.70329, "Long": 74.41708 },
    { "Family_id": 148.0, "Lat": 24.96065, "Long": 67.1276 },
    { "Family_id": 149.0, "Lat": 24.92762, "Long": 67.14938 },
    { "Family_id": 150.0, "Lat": 24.95019, "Long": 67.16080000000001 },
    { "Family_id": 151.0, "Lat": 24.89956, "Long": 67.06767 },
    { "Family_id": 152.0, "Lat": 31.60466, "Long": 74.41574 },
    { "Family_id": 153.0, "Lat": 25.01927, "Long": 67.03941 },
    { "Family_id": 154.0, "Lat": 24.98105, "Long": 67.15321 },
    { "Family_id": 155.0, "Lat": 24.95512, "Long": 67.11329 },
    { "Family_id": 156.0, "Lat": 31.61847, "Long": 74.42644 },
    { "Family_id": 157.0, "Lat": 25.00349, "Long": 67.03203 },
    { "Family_id": 158.0, "Lat": 24.92548, "Long": 67.07645 },
    { "Family_id": 159.0, "Lat": 31.54788, "Long": 74.44642999999999 },
    { "Family_id": 160.0, "Lat": 31.5659, "Long": 74.4435 },
    { "Family_id": 161.0, "Lat": 25.01404, "Long": 67.06281 },
    { "Family_id": 162.0, "Lat": 24.97365, "Long": 67.12282 },
    { "Family_id": 163.0, "Lat": 31.60413, "Long": 74.41022 },
    { "Family_id": 164.0, "Lat": 31.56414, "Long": 74.44978 },
    { "Family_id": 165.0, "Lat": 24.87536, "Long": 67.16194 },
    { "Family_id": 166.0, "Lat": 24.96686, "Long": 67.1156 },
    { "Family_id": 167.0, "Lat": 31.63213, "Long": 74.52065 },
    { "Family_id": 168.0, "Lat": 31.59229, "Long": 74.53815 },
    { "Family_id": 169.0, "Lat": 24.92432, "Long": 67.12983 },
    { "Family_id": 170.0, "Lat": 24.93127, "Long": 67.11984 },
    { "Family_id": 171.0, "Lat": 31.56117, "Long": 74.48115 },
    { "Family_id": 172.0, "Lat": 31.63404, "Long": 74.52787000000001 },
    { "Family_id": 173.0, "Lat": 25.011, "Long": 67.07815000000001 },
    { "Family_id": 174.0, "Lat": 31.60258, "Long": 74.39091 },
    { "Family_id": 175.0, "Lat": 31.58072, "Long": 74.42482 },
    { "Family_id": 176.0, "Lat": 31.62379, "Long": 74.46883 },
    { "Family_id": 177.0, "Lat": 25.00281, "Long": 67.07705 },
    { "Family_id": 178.0, "Lat": 25.02095, "Long": 67.09116 },
    { "Family_id": 179.0, "Lat": 24.93579, "Long": 67.11373 },
    { "Family_id": 180.0, "Lat": 31.58102, "Long": 74.45753 },
    { "Family_id": 181.0, "Lat": 24.99623, "Long": 67.17679 },
    { "Family_id": 182.0, "Lat": 24.99303, "Long": 67.05944 },
    { "Family_id": 183.0, "Lat": 31.54394, "Long": 74.41447000000001 },
    { "Family_id": 184.0, "Lat": 24.94383, "Long": 67.05775 },
    { "Family_id": 185.0, "Lat": 31.5788, "Long": 74.47061 },
    { "Family_id": 186.0, "Lat": 31.64714, "Long": 74.43213 },
    { "Family_id": 187.0, "Lat": 31.66057, "Long": 74.51053999999999 },
    { "Family_id": 188.0, "Lat": 24.93817, "Long": 67.0425 },
    { "Family_id": 189.0, "Lat": 24.93969, "Long": 67.1102 },
    { "Family_id": 190.0, "Lat": 31.58639, "Long": 74.39045 },
    { "Family_id": 191.0, "Lat": 24.94954, "Long": 67.07239 },
    { "Family_id": 192.0, "Lat": 24.88107, "Long": 67.13354000000001 },
    { "Family_id": 193.0, "Lat": 25.01271, "Long": 67.10116 },
    { "Family_id": 194.0, "Lat": 31.58904, "Long": 74.42627 },
    { "Family_id": 195.0, "Lat": 24.97449, "Long": 67.05833 },
    { "Family_id": 196.0, "Lat": 31.61899, "Long": 74.50741000000001 },
    { "Family_id": 197.0, "Lat": 24.92464, "Long": 67.08586 },
    { "Family_id": 198.0, "Lat": 24.95849, "Long": 67.08815 },
    { "Family_id": 199.0, "Lat": 31.008775, "Long": 74.23045 },
    { "Family_id": 200.0, "Lat": 31.52192, "Long": 74.44831 },
    { "Family_id": 201.0, "Lat": 31.64257, "Long": 74.38962 },
    { "Family_id": 202.0, "Lat": 24.95081, "Long": 67.13856 },
    { "Family_id": 203.0, "Lat": 24.97228, "Long": 67.06665000000001 },
    { "Family_id": 204.0, "Lat": 31.65964, "Long": 74.42211 },
    { "Family_id": 205.0, "Lat": 31.59794, "Long": 74.45479999999999 },
    { "Family_id": 206.0, "Lat": 24.94089, "Long": 67.08974 },
    { "Family_id": 207.0, "Lat": 24.97364, "Long": 67.03783 },
    { "Family_id": 208.0, "Lat": 24.9387, "Long": 67.16339 },
    { "Family_id": 209.0, "Lat": 31.54994, "Long": 74.40894 },
    { "Family_id": 210.0, "Lat": 25.02574, "Long": 67.16503 },
    { "Family_id": 211.0, "Lat": 24.94078, "Long": 67.1099 },
    { "Family_id": 212.0, "Lat": 25.01584, "Long": 67.12389 },
    { "Family_id": 213.0, "Lat": 31.65621, "Long": 74.42565 },
    { "Family_id": 214.0, "Lat": 24.96439, "Long": 67.07547 },
    { "Family_id": 215.0, "Lat": 24.88838, "Long": 67.15244 },
    { "Family_id": 216.0, "Lat": 31.5536, "Long": 74.51947 },
    { "Family_id": 217.0, "Lat": 31.5953, "Long": 74.48263 },
    { "Family_id": 218.0, "Lat": 24.9327, "Long": 67.16304 },
    { "Family_id": 219.0, "Lat": 24.99347, "Long": 67.10390000000001 },
    { "Family_id": 220.0, "Lat": 24.99972, "Long": 67.06684 },
    { "Family_id": 221.0, "Lat": 24.96732, "Long": 67.02065 },
    { "Family_id": 222.0, "Lat": 24.95229, "Long": 67.10349000000001 },
    { "Family_id": 223.0, "Lat": 24.88704, "Long": 67.12989 },
    { "Family_id": 224.0, "Lat": 24.94694, "Long": 67.16385 },
    { "Family_id": 225.0, "Lat": 31.63324, "Long": 74.46312999999999 },
    { "Family_id": 226.0, "Lat": 31.58633, "Long": 74.46954 },
    { "Family_id": 227.0, "Lat": 25.00445, "Long": 67.05406 },
    { "Family_id": 228.0, "Lat": 24.93849, "Long": 67.06878 },
    { "Family_id": 229.0, "Lat": 24.98039, "Long": 67.09202 },
    { "Family_id": 230.0, "Lat": 31.60697, "Long": 74.39151 },
    { "Family_id": 231.0, "Lat": 31.53881, "Long": 74.39016 },
    { "Family_id": 232.0, "Lat": 25.02249, "Long": 67.06095 },
    { "Family_id": 233.0, "Lat": 24.91749, "Long": 67.0691 },
    { "Family_id": 234.0, "Lat": 24.98072, "Long": 67.17704 },
    { "Family_id": 235.0, "Lat": 31.53083, "Long": 74.47138 },
    { "Family_id": 236.0, "Lat": 24.87093, "Long": 67.17377 },
    { "Family_id": 237.0, "Lat": 24.99976, "Long": 67.1133 },
    { "Family_id": 238.0, "Lat": 24.92096, "Long": 67.15507 },
    { "Family_id": 239.0, "Lat": 24.98254, "Long": 67.08095 },
    { "Family_id": 240.0, "Lat": 25.04356, "Long": 67.09248 },
    { "Family_id": 241.0, "Lat": 25.0077, "Long": 67.07681000000001 },
    { "Family_id": 242.0, "Lat": 24.93823, "Long": 67.10946 },
    { "Family_id": 243.0, "Lat": 25.04367, "Long": 67.14828 },
    { "Family_id": 244.0, "Lat": 31.6471, "Long": 74.47381 },
    { "Family_id": 245.0, "Lat": 24.98319, "Long": 67.07588 },
    { "Family_id": 246.0, "Lat": 24.99451, "Long": 67.07801 },
    { "Family_id": 247.0, "Lat": 24.99749, "Long": 67.11714 },
    { "Family_id": 248.0, "Lat": 31.62721, "Long": 74.43323 },
    { "Family_id": 249.0, "Lat": 24.88573, "Long": 67.09099 },
    { "Family_id": 250.0, "Lat": 31.56658, "Long": 74.4493 },
    { "Family_id": 251.0, "Lat": 31.63133, "Long": 74.41746 },
    { "Family_id": 252.0, "Lat": 24.97054, "Long": 67.10306 },
    { "Family_id": 253.0, "Lat": 31.62428, "Long": 74.4127 },
    { "Family_id": 254.0, "Lat": 31.58198, "Long": 74.45479999999999 },
    { "Family_id": 255.0, "Lat": 25.03086, "Long": 67.07927000000001 },
    { "Family_id": 256.0, "Lat": 31.61165, "Long": 74.46417 },
    { "Family_id": 257.0, "Lat": 31.56933, "Long": 74.52825 },
    { "Family_id": 258.0, "Lat": 24.89799, "Long": 67.16621 },
    { "Family_id": 259.0, "Lat": 24.97945, "Long": 67.17681 },
    { "Family_id": 260.0, "Lat": 24.99124, "Long": 67.04445 },
    { "Family_id": 261.0, "Lat": 25.02323, "Long": 67.08341 },
    { "Family_id": 262.0, "Lat": 24.94026, "Long": 67.15 },
    { "Family_id": 263.0, "Lat": 24.9989, "Long": 67.10633 },
    { "Family_id": 264.0, "Lat": 24.90586, "Long": 67.11554000000001 },
    { "Family_id": 265.0, "Lat": 25.00534, "Long": 67.05729000000001 },
    { "Family_id": 266.0, "Lat": 24.9204, "Long": 67.12038 },
    { "Family_id": 267.0, "Lat": 24.92849, "Long": 67.15985 },
    { "Family_id": 268.0, "Lat": 31.6296, "Long": 74.46991 },
    { "Family_id": 269.0, "Lat": 25.03838, "Long": 67.12479 },
    { "Family_id": 270.0, "Lat": 24.9354, "Long": 67.11504000000001 },
    { "Family_id": 271.0, "Lat": 24.93689, "Long": 67.11978 },
    { "Family_id": 272.0, "Lat": 31.58903, "Long": 74.47699 },
    { "Family_id": 273.0, "Lat": 25.00821, "Long": 67.14333 },
    { "Family_id": 274.0, "Lat": 31.55013, "Long": 74.5408 },
    { "Family_id": 275.0, "Lat": 25.03499, "Long": 67.07950000000001 },
    { "Family_id": 276.0, "Lat": 25.03077, "Long": 67.15255 },
    { "Family_id": 277.0, "Lat": 24.96288, "Long": 67.16222 },
    { "Family_id": 278.0, "Lat": 24.9255, "Long": 67.15684 },
    { "Family_id": 279.0, "Lat": 24.93741, "Long": 67.06277 },
    { "Family_id": 280.0, "Lat": 24.92886, "Long": 67.11036 },
    { "Family_id": 281.0, "Lat": 24.96156, "Long": 67.0738 },
    { "Family_id": 282.0, "Lat": 24.9217, "Long": 67.13582000000001 },
    { "Family_id": 283.0, "Lat": 31.56458, "Long": 74.43567999999999 },
    { "Family_id": 284.0, "Lat": 24.93117, "Long": 67.1282 },
    { "Family_id": 285.0, "Lat": 24.95418, "Long": 67.172 },
    { "Family_id": 286.0, "Lat": 31.61457, "Long": 74.52844999999999 },
    { "Family_id": 287.0, "Lat": 24.89425, "Long": 67.18038 },
    { "Family_id": 288.0, "Lat": 31.65049, "Long": 74.47996 },
    { "Family_id": 289.0, "Lat": 24.93217, "Long": 67.15536 },
    { "Family_id": 290.0, "Lat": 24.9272, "Long": 67.1206 },
    { "Family_id": 291.0, "Lat": 24.87881, "Long": 67.08033 },
    { "Family_id": 292.0, "Lat": 24.93329, "Long": 67.04681000000001 },
    { "Family_id": 293.0, "Lat": 24.94174, "Long": 67.05085 },
    { "Family_id": 294.0, "Lat": 31.63952, "Long": 74.44259 },
    { "Family_id": 295.0, "Lat": 31.61855, "Long": 74.49633 },
    { "Family_id": 296.0, "Lat": 31.71434, "Long": 74.46247 },
    { "Family_id": 297.0, "Lat": 31.5965, "Long": 74.45438 },
    { "Family_id": 298.0, "Lat": 24.95377, "Long": 67.16457 },
    { "Family_id": 299.0, "Lat": 24.98491, "Long": 67.16366000000001 },
    { "Family_id": 300.0, "Lat": 31.68863, "Long": 74.39814 },
    { "Family_id": 301.0, "Lat": 24.93001, "Long": 67.13943 },
    { "Family_id": 302.0, "Lat": 31.65715, "Long": 74.40802 },
    { "Family_id": 303.0, "Lat": 24.99034, "Long": 67.0523 },
    { "Family_id": 304.0, "Lat": 31.61285, "Long": 74.53198 },
    { "Family_id": 305.0, "Lat": 31.64699, "Long": 74.44685 },
    { "Family_id": 306.0, "Lat": 31.52238, "Long": 74.49756000000001 },
    { "Family_id": 307.0, "Lat": 24.93741, "Long": 67.14711 },
    { "Family_id": 308.0, "Lat": 24.95386, "Long": 67.13254 },
    { "Family_id": 309.0, "Lat": 24.88895, "Long": 67.09814 },
    { "Family_id": 310.0, "Lat": 31.61644, "Long": 74.45316 },
    { "Family_id": 311.0, "Lat": 31.58789, "Long": 74.43122 },
    { "Family_id": 312.0, "Lat": 31.58217, "Long": 74.53604 },
    { "Family_id": 313.0, "Lat": 31.62585, "Long": 74.44452 },
    { "Family_id": 314.0, "Lat": 25.00462, "Long": 67.12368000000001 },
    { "Family_id": 315.0, "Lat": 31.58731, "Long": 74.41197 },
    { "Family_id": 316.0, "Lat": 31.70274, "Long": 74.46133999999999 },
    { "Family_id": 317.0, "Lat": 24.94584, "Long": 67.15372 },
    { "Family_id": 318.0, "Lat": 31.59811, "Long": 74.40115 },
    { "Family_id": 319.0, "Lat": 24.94198, "Long": 67.09419 },
    { "Family_id": 320.0, "Lat": 25.00641, "Long": 71.64701 },
    { "Family_id": 321.0, "Lat": 31.55128, "Long": 74.43572999999999 },
    { "Family_id": 322.0, "Lat": 31.55032, "Long": 74.45848 },
    { "Family_id": 323.0, "Lat": 24.96862, "Long": 67.11935 },
    { "Family_id": 324.0, "Lat": 24.96192, "Long": 67.11313 },
    { "Family_id": 325.0, "Lat": 24.92856, "Long": 67.09014 },
    { "Family_id": 326.0, "Lat": 24.95695, "Long": 67.13335000000001 },
    { "Family_id": 327.0, "Lat": 25.0423, "Long": 67.04771000000001 },
    { "Family_id": 328.0, "Lat": 31.56446, "Long": 74.46976000000001 },
    { "Family_id": 329.0, "Lat": 31.60169, "Long": 74.49931000000001 },
    { "Family_id": 330.0, "Lat": 31.61989, "Long": 74.47955999999999 },
    { "Family_id": 331.0, "Lat": 25.03573, "Long": 67.07261000000001 },
    { "Family_id": 332.0, "Lat": 24.94789, "Long": 67.09793 },
    { "Family_id": 333.0, "Lat": 31.58895, "Long": 74.48267 },
    { "Family_id": 334.0, "Lat": 31.56039, "Long": 74.52483000000001 },
    { "Family_id": 335.0, "Lat": 31.61523, "Long": 74.52125 },
    { "Family_id": 336.0, "Lat": 24.9665, "Long": 67.0524 },
    { "Family_id": 337.0, "Lat": 24.91008, "Long": 67.16828 },
    { "Family_id": 338.0, "Lat": 24.95256, "Long": 67.08827000000001 },
    { "Family_id": 339.0, "Lat": 31.60479, "Long": 74.41094 },
    { "Family_id": 340.0, "Lat": 31.68994, "Long": 74.45335 },
    { "Family_id": 341.0, "Lat": 24.90142, "Long": 67.08081 },
    { "Family_id": 342.0, "Lat": 31.61497, "Long": 74.41569 },
    { "Family_id": 343.0, "Lat": 24.96851, "Long": 67.071 },
    { "Family_id": 344.0, "Lat": 24.89311, "Long": 67.11365 },
    { "Family_id": 345.0, "Lat": 25.00711, "Long": 67.15858 },
    { "Family_id": 346.0, "Lat": 31.59379, "Long": 74.53808000000001 },
    { "Family_id": 347.0, "Lat": 25.01614, "Long": 67.04939 },
    { "Family_id": 348.0, "Lat": 24.9683, "Long": 67.1531 },
    { "Family_id": 349.0, "Lat": 31.52825, "Long": 74.53626 },
    { "Family_id": 350.0, "Lat": 31.60728, "Long": 74.38811 },
    { "Family_id": 351.0, "Lat": 25.01451, "Long": 67.06663 },
    { "Family_id": 352.0, "Lat": 25.01883, "Long": 67.06045 },
    { "Family_id": 353.0, "Lat": 31.61609, "Long": 74.40652 },
    { "Family_id": 354.0, "Lat": 24.92333, "Long": 67.10174 },
    { "Family_id": 355.0, "Lat": 31.61596, "Long": 74.44688 },
    { "Family_id": 356.0, "Lat": 24.97028, "Long": 67.05679 },
    { "Family_id": 357.0, "Lat": 31.54324, "Long": 74.44160000000001 },
    { "Family_id": 358.0, "Lat": 24.93737, "Long": 67.02723 },
    { "Family_id": 359.0, "Lat": 25.01772, "Long": 67.09588000000001 },
    { "Family_id": 360.0, "Lat": 24.98656, "Long": 67.10526 },
    { "Family_id": 361.0, "Lat": 31.59826, "Long": 74.47991999999999 },
    { "Family_id": 362.0, "Lat": 24.87381, "Long": 67.15029 },
    { "Family_id": 363.0, "Lat": 31.57375, "Long": 74.47004 },
    { "Family_id": 364.0, "Lat": 31.6164, "Long": 74.39107 },
    { "Family_id": 365.0, "Lat": 24.98195, "Long": 67.03049 },
    { "Family_id": 366.0, "Lat": 24.89343, "Long": 67.12732 },
    { "Family_id": 367.0, "Lat": 24.93958, "Long": 67.13164 },
    { "Family_id": 368.0, "Lat": 24.96859, "Long": 67.07577 },
    { "Family_id": 369.0, "Lat": 31.59866, "Long": 74.40088 },
    { "Family_id": 370.0, "Lat": 25.05097, "Long": 67.12617 },
    { "Family_id": 371.0, "Lat": 24.86767, "Long": 67.14069 },
    { "Family_id": 372.0, "Lat": 25.0202, "Long": 67.04227 },
    { "Family_id": 373.0, "Lat": 31.54417, "Long": 74.40255 },
    { "Family_id": 374.0, "Lat": 31.62862, "Long": 74.38567 },
    { "Family_id": 375.0, "Lat": 31.53359, "Long": 74.46267 },
    { "Family_id": 376.0, "Lat": 31.63446, "Long": 74.40679 },
    { "Family_id": 377.0, "Lat": 25.00404, "Long": 67.04452 },
    { "Family_id": 378.0, "Lat": 31.60247, "Long": 74.41952 },
    { "Family_id": 379.0, "Lat": 31.65548, "Long": 74.44962 },
    { "Family_id": 380.0, "Lat": 25.03371, "Long": 67.17729 },
    { "Family_id": 381.0, "Lat": 31.55617, "Long": 74.45175 },
    { "Family_id": 382.0, "Lat": 25.02294, "Long": 67.02495 },
    { "Family_id": 383.0, "Lat": 25.05154, "Long": 67.16214 },
    { "Family_id": 384.0, "Lat": 24.98368, "Long": 67.08088000000001 },
    { "Family_id": 385.0, "Lat": 24.9826, "Long": 67.08831 },
    { "Family_id": 386.0, "Lat": 24.95332, "Long": 67.03577 },
    { "Family_id": 387.0, "Lat": 24.96488, "Long": 67.12743999999999 },
    { "Family_id": 388.0, "Lat": 31.62777, "Long": 74.41855 },
    { "Family_id": 389.0, "Lat": 24.95915, "Long": 67.13133 },
    { "Family_id": 390.0, "Lat": 24.9938, "Long": 67.14219 },
    { "Family_id": 391.0, "Lat": 25.02981, "Long": 67.11284 },
    { "Family_id": 392.0, "Lat": 25.00555, "Long": 67.07038 },
    { "Family_id": 393.0, "Lat": 24.94132, "Long": 67.07761 },
    { "Family_id": 394.0, "Lat": 24.9683, "Long": 67.0591 },
    { "Family_id": 395.0, "Lat": 31.62978, "Long": 74.42081999999999 },
    { "Family_id": 396.0, "Lat": 24.93893, "Long": 67.15548 },
    { "Family_id": 397.0, "Lat": 24.98052, "Long": 67.03591 },
    { "Family_id": 398.0, "Lat": 31.52897, "Long": 74.45894 },
    { "Family_id": 399.0, "Lat": 25.04058, "Long": 67.04666 },
    { "Family_id": 400.0, "Lat": 31.62532, "Long": 74.44922 },
    { "Family_id": 401.0, "Lat": 24.93491, "Long": 67.08530999999999 },
    { "Family_id": 402.0, "Lat": 31.54926, "Long": 74.48785000000001 },
    { "Family_id": 403.0, "Lat": 24.93865, "Long": 67.18764 },
    { "Family_id": 404.0, "Lat": 25.0088, "Long": 67.16156000000001 },
    { "Family_id": 405.0, "Lat": 24.96048, "Long": 67.15478 },
    { "Family_id": 406.0, "Lat": 31.62325, "Long": 74.3883 },
    { "Family_id": 407.0, "Lat": 31.59003, "Long": 74.42605999999999 },
    { "Family_id": 408.0, "Lat": 31.55914, "Long": 74.44632 },
    { "Family_id": 409.0, "Lat": 25.01935, "Long": 67.12164 },
    { "Family_id": 410.0, "Lat": 31.65576, "Long": 74.41384 },
    { "Family_id": 411.0, "Lat": 25.02927, "Long": 67.16826999999999 },
    { "Family_id": 412.0, "Lat": 24.96059, "Long": 67.06128 },
    { "Family_id": 413.0, "Lat": 31.64144, "Long": 74.37737 },
    { "Family_id": 414.0, "Lat": 31.57341, "Long": 74.45955 },
    { "Family_id": 415.0, "Lat": 31.70046, "Long": 74.49419999999999 },
    { "Family_id": 416.0, "Lat": 31.64269, "Long": 74.42456 },
    { "Family_id": 417.0, "Lat": 31.5481, "Long": 74.49665 },
    { "Family_id": 418.0, "Lat": 24.89151, "Long": 67.08872000000001 },
    { "Family_id": 419.0, "Lat": 31.58578, "Long": 74.45879000000001 },
    { "Family_id": 420.0, "Lat": 24.98393, "Long": 67.17699 },
    { "Family_id": 421.0, "Lat": 24.95734, "Long": 67.07195 },
    { "Family_id": 422.0, "Lat": 25.04826, "Long": 67.15145 },
    { "Family_id": 423.0, "Lat": 31.61265, "Long": 74.40839 },
    { "Family_id": 424.0, "Lat": 25.02859, "Long": 67.04921 },
    { "Family_id": 425.0, "Lat": 25.01651, "Long": 67.09975 },
    { "Family_id": 426.0, "Lat": 31.63139, "Long": 74.50799 },
    { "Family_id": 427.0, "Lat": 25.04164, "Long": 67.14745 },
    { "Family_id": 428.0, "Lat": 31.67511, "Long": 74.40613 },
    { "Family_id": 429.0, "Lat": 24.91664, "Long": 67.18162 },
    { "Family_id": 430.0, "Lat": 24.89531, "Long": 67.11753 },
    { "Family_id": 431.0, "Lat": 25.02387, "Long": 67.0492 },
    { "Family_id": 432.0, "Lat": 31.56505, "Long": 74.49116000000001 },
    { "Family_id": 433.0, "Lat": 31.65854, "Long": 74.51356 },
    { "Family_id": 434.0, "Lat": 24.91411, "Long": 67.11993 },
    { "Family_id": 435.0, "Lat": 24.98871, "Long": 67.09251 },
    { "Family_id": 436.0, "Lat": 31.56591, "Long": 74.42343 },
    { "Family_id": 437.0, "Lat": 31.56608, "Long": 74.40144 },
    { "Family_id": 438.0, "Lat": 31.56712, "Long": 74.48514 },
    { "Family_id": 439.0, "Lat": 31.5613, "Long": 74.48709000000001 },
    { "Family_id": 440.0, "Lat": 24.96093, "Long": 67.08747000000001 },
    { "Family_id": 441.0, "Lat": 31.62848, "Long": 74.41521 },
    { "Family_id": 442.0, "Lat": 31.5906, "Long": 74.4576 },
    { "Family_id": 443.0, "Lat": 24.91011, "Long": 67.06272 },
    { "Family_id": 444.0, "Lat": 31.54023, "Long": 74.41759 },
    { "Family_id": 445.0, "Lat": 24.96593, "Long": 67.05832000000001 },
    { "Family_id": 446.0, "Lat": 31.6609, "Long": 74.36449 },
    { "Family_id": 447.0, "Lat": 24.94177, "Long": 67.03773 },
    { "Family_id": 448.0, "Lat": 31.60133, "Long": 74.45389999999999 },
    { "Family_id": 449.0, "Lat": 31.66068, "Long": 74.41987 },
    { "Family_id": 450.0, "Lat": 24.95599, "Long": 67.03856 },
    { "Family_id": 451.0, "Lat": 24.99645, "Long": 67.11392 },
    { "Family_id": 452.0, "Lat": 31.01006, "Long": 74.01412 },
    { "Family_id": 453.0, "Lat": 25.01141, "Long": 67.10176 },
    { "Family_id": 454.0, "Lat": 31.64713, "Long": 74.4007 },
    { "Family_id": 455.0, "Lat": 24.89356, "Long": 67.15723 },
    { "Family_id": 456.0, "Lat": 24.98816, "Long": 67.08376 },
    { "Family_id": 457.0, "Lat": 31.58355, "Long": 74.42976 },
    { "Family_id": 458.0, "Lat": 24.96036, "Long": 67.17436 },
    { "Family_id": 459.0, "Lat": 24.94469, "Long": 67.05131 },
    { "Family_id": 460.0, "Lat": 31.64478, "Long": 74.38511 },
    { "Family_id": 461.0, "Lat": 25.01142, "Long": 67.05076000000001 },
    { "Family_id": 462.0, "Lat": 24.90193, "Long": 67.13907 },
    { "Family_id": 463.0, "Lat": 24.96515, "Long": 67.12242 },
    { "Family_id": 464.0, "Lat": 24.95625, "Long": 67.0859 },
    { "Family_id": 465.0, "Lat": 31.69033, "Long": 74.43183 },
    { "Family_id": 466.0, "Lat": 24.95556, "Long": 67.07713 },
    { "Family_id": 467.0, "Lat": 25.04255, "Long": 67.04528 },
    { "Family_id": 468.0, "Lat": 25.00586, "Long": 67.05598 },
    { "Family_id": 469.0, "Lat": 24.95392, "Long": 67.13649 },
    { "Family_id": 470.0, "Lat": 31.62271, "Long": 74.42757999999999 },
    { "Family_id": 471.0, "Lat": 24.97844, "Long": 67.10263 },
    { "Family_id": 472.0, "Lat": 24.93785, "Long": 67.09912 },
    { "Family_id": 473.0, "Lat": 24.96957, "Long": 67.09566000000001 },
    { "Family_id": 474.0, "Lat": 31.64259, "Long": 74.3763 },
    { "Family_id": 475.0, "Lat": 31.5526, "Long": 74.47979 },
    { "Family_id": 476.0, "Lat": 31.6257, "Long": 74.50546 },
    { "Family_id": 477.0, "Lat": 31.54336, "Long": 74.41968 },
    { "Family_id": 478.0, "Lat": 31.6239, "Long": 74.48011 },
    { "Family_id": 479.0, "Lat": 24.95766, "Long": 67.1185 },
    { "Family_id": 480.0, "Lat": 24.95121, "Long": 67.08769000000001 },
    { "Family_id": 481.0, "Lat": 25.05141, "Long": 67.10428 },
    { "Family_id": 482.0, "Lat": 31.63259, "Long": 74.50648 },
    { "Family_id": 483.0, "Lat": 24.96647, "Long": 67.12644 },
    { "Family_id": 484.0, "Lat": 25.01964, "Long": 67.05498 },
    { "Family_id": 485.0, "Lat": 31.60188, "Long": 74.46 },
    { "Family_id": 486.0, "Lat": 31.67396, "Long": 74.47592 },
    { "Family_id": 487.0, "Lat": 31.57621, "Long": 74.47632 },
    { "Family_id": 488.0, "Lat": 31.69456, "Long": 74.48147 },
    { "Family_id": 489.0, "Lat": 31.53791, "Long": 74.45681 },
    { "Family_id": 490.0, "Lat": 24.94363, "Long": 67.12 },
    { "Family_id": 491.0, "Lat": 31.61593, "Long": 74.41521 },
    { "Family_id": 492.0, "Lat": 24.95818, "Long": 67.02692 },
    { "Family_id": 493.0, "Lat": 31.60448, "Long": 74.44042 },
    { "Family_id": 494.0, "Lat": 31.53921, "Long": 74.53954 },
    { "Family_id": 495.0, "Lat": 31.52543, "Long": 74.46256000000001 },
    { "Family_id": 496.0, "Lat": 24.99678, "Long": 67.06727000000001 },
    { "Family_id": 497.0, "Lat": 24.99996, "Long": 67.14447 },
    { "Family_id": 498.0, "Lat": 31.7066, "Long": 74.37141 },
    { "Family_id": 499.0, "Lat": 24.87437, "Long": 67.18926 },
    { "Family_id": 500.0, "Lat": 24.96815, "Long": 67.01924000000001 },
    { "Family_id": 501.0, "Lat": 24.89607, "Long": 67.04221 },
    { "Family_id": 502.0, "Lat": 24.99288, "Long": 67.12871 },
    { "Family_id": 503.0, "Lat": 31.54144, "Long": 74.39331 },
    { "Family_id": 504.0, "Lat": 24.91646, "Long": 67.10694000000001 },
    { "Family_id": 505.0, "Lat": 24.87894, "Long": 67.10249 },
    { "Family_id": 506.0, "Lat": 24.97041, "Long": 67.12341 },
    { "Family_id": 507.0, "Lat": 25.00356, "Long": 67.13147 },
    { "Family_id": 508.0, "Lat": 25.00143, "Long": 67.09388 },
    { "Family_id": 509.0, "Lat": 24.96493, "Long": 67.06574 },
    { "Family_id": 510.0, "Lat": 24.9933, "Long": 67.11789 },
    { "Family_id": 511.0, "Lat": 24.92674, "Long": 67.04497 },
    { "Family_id": 512.0, "Lat": 25.00802, "Long": 67.16392 },
    { "Family_id": 513.0, "Lat": 31.608, "Long": 74.40907 },
    { "Family_id": 514.0, "Lat": 31.67159, "Long": 74.46979 },
    { "Family_id": 515.0, "Lat": 31.61343, "Long": 74.53079000000001 },
    { "Family_id": 516.0, "Lat": 31.59492, "Long": 74.46503 },
    { "Family_id": 517.0, "Lat": 24.92168, "Long": 67.18155 },
    { "Family_id": 518.0, "Lat": 31.57948, "Long": 74.51341000000001 },
    { "Family_id": 519.0, "Lat": 24.91756, "Long": 67.08330000000001 },
    { "Family_id": 520.0, "Lat": 31.5989, "Long": 74.44932 },
    { "Family_id": 521.0, "Lat": 24.94645, "Long": 67.14961000000001 },
    { "Family_id": 522.0, "Lat": 25.02112, "Long": 67.02753 },
    { "Family_id": 523.0, "Lat": 31.65105, "Long": 74.45575 },
    { "Family_id": 524.0, "Lat": 24.92245, "Long": 67.16605 },
    { "Family_id": 525.0, "Lat": 31.54303, "Long": 74.51249 },
    { "Family_id": 526.0, "Lat": 25.02793, "Long": 67.08865 },
    { "Family_id": 527.0, "Lat": 24.9182, "Long": 67.11192 },
    { "Family_id": 528.0, "Lat": 24.99393, "Long": 67.0829 },
    { "Family_id": 529.0, "Lat": 31.61652, "Long": 74.53654 },
    { "Family_id": 530.0, "Lat": 31.52708, "Long": 74.49915 },
    { "Family_id": 531.0, "Lat": 25.02405, "Long": 67.14887 },
    { "Family_id": 532.0, "Lat": 24.94566, "Long": 67.15983 },
    { "Family_id": 533.0, "Lat": 31.56759, "Long": 74.40629 },
    { "Family_id": 534.0, "Lat": 24.90074, "Long": 67.14209 },
    { "Family_id": 535.0, "Lat": 31.64307, "Long": 74.48246 },
    { "Family_id": 536.0, "Lat": 24.8779, "Long": 67.08923 },
    { "Family_id": 537.0, "Lat": 24.89487, "Long": 67.17995 },
    { "Family_id": 538.0, "Lat": 31.57335, "Long": 74.49187 },
    { "Family_id": 539.0, "Lat": 31.62192, "Long": 74.39134 },
    { "Family_id": 540.0, "Lat": 31.67687, "Long": 74.42865 },
    { "Family_id": 541.0, "Lat": 31.58275, "Long": 74.40426000000001 },
    { "Family_id": 542.0, "Lat": 25.04271, "Long": 67.08674 },
    { "Family_id": 543.0, "Lat": 24.94572, "Long": 67.09012 },
    { "Family_id": 544.0, "Lat": 31.65718, "Long": 74.46675 },
    { "Family_id": 545.0, "Lat": 31.65601, "Long": 74.40212 },
    { "Family_id": 546.0, "Lat": 24.95733, "Long": 67.06211 },
    { "Family_id": 547.0, "Lat": 31.53649, "Long": 74.46866 },
    { "Family_id": 548.0, "Lat": 31.54465, "Long": 74.42087 }
];



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_donor_donor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/donor/donor.component */ "./src/app/pages/donor/donor.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");




















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__["AdminLayoutComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
            _pages_donor_donor_component__WEBPACK_IMPORTED_MODULE_18__["DonorComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__["WelcomeComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_14__["AppRoutes"], {
                useHash: true
            }),
            ngx_loading__WEBPACK_IMPORTED_MODULE_5__["NgxLoadingModule"].forRoot({}),
            _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"],
            _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__["NavbarModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
            _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_10__["FixedPluginModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_donor_donor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/donor/donor.component */ "./src/app/pages/donor/donor.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");







const AppRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'donor', component: _pages_donor_donor_component__WEBPACK_IMPORTED_MODULE_4__["DonorComponent"] },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"] },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__["AdminLayoutComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'welcome'
    }
];


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



let AuthGuard = class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.isLoggedIn();
        ;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



let AuthService = class AuthService {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    signIn(userData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem('ACCESS_TOKEN', userData.type);
        });
    }
    isLoggedIn() {
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    }
    logout() {
        localStorage.removeItem('NGOID');
        localStorage.removeItem('NGONAME');
        localStorage.removeItem('NGOKEY');
        localStorage.removeItem('ACCESS_TOKEN');
    }
};
AuthService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], AuthService);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
            })
        };
    }
    //Donor Apis
    getUsers() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getUsers', this.httpOptions);
    }
    getTransactions(ngoid) {
        const payload = ngoid;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getTransactions', { NGOId: payload }, this.httpOptions);
    }
    updateTransaction(tId, status, key) {
        const payload = tId;
        const statusPayload = status;
        const payloadkey = key;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/updateTransaction', { tId: payload, status: statusPayload, key: payloadkey }, this.httpOptions);
    }
    getDonorLogin(userdata) {
        const regno = userdata.regno;
        const password = userdata.password;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getDonorLogin', { regno: Number(regno), pass: Number(password) }, this.httpOptions);
    }
    getUserRequest(ngoId) {
        const payload = JSON.stringify(ngoId);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getUserRequest', { NGOId: payload }, this.httpOptions);
    }
    getFamilyLatLng(id) {
        const idPayload = id;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getFamilyLatLng', { NGOId: idPayload }, this.httpOptions);
    }
    getFamilyLatLngForGovernment() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getFamilyLatLngForGovernment', this.httpOptions);
    }
    getNGOLatLng() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getNGOLatLng', this.httpOptions);
    }
    getNGOCapacity(name) {
        const payload = name;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getNGOCapacity', { NGOId: payload }, this.httpOptions);
    }
    getNGOBeneficiaries(id) {
        const payload = id;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getNGOBeneficiaries', { NGOId: payload }, this.httpOptions);
    }
    getNGOUnprocessedRequests() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getNGOUnprocessedRequests', this.httpOptions);
    }
    getRequestStatusCountForNGO(regno) {
        const payload = regno;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getRequestStatusCountForNGO', { regno: payload }, this.httpOptions);
    }
    getRequestDateChart(regno) {
        const payload = regno;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getRequestDateChart', { NGOId: payload }, this.httpOptions);
    }
    getMonthlyRequest(regno) {
        const payload = regno;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getMonthlyRequest', { NGOId: payload }, this.httpOptions);
    }
    closeConnectionFromDB() {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/closeConnection', this.httpOptions);
    }
    //Government APIS
    getTransactionsForGovernment() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getTransactionsForGovernment', this.httpOptions);
    }
    getUserRequestForGovernment() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getUserRequestForGovernment', this.httpOptions);
    }
    getNGOCapacityForGovernment() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getNGOCapacityForGovernment', this.httpOptions);
    }
    getNGOBeneficiariesForGovernment() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getNGOBeneficiariesForGovernment', this.httpOptions);
    }
    getNGOUnprocessedRequestsForGovernment() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getNGOUnprocessedRequestsForGovernment', this.httpOptions);
    }
    getRequestStatusCountForNGOForGovernment() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getRequestStatusCountForGovernment', this.httpOptions);
    }
    getRequestDateChartForGovernment() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getRequestDateChartForGovernment', this.httpOptions);
    }
    getProvinceDataForGovernment() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getProvinceDataForGovernment', this.httpOptions);
    }
    getMonthlyRequestForGovernment() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].NODE_HOST + '/getMonthlyRequestForGovernment', this.httpOptions);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HttpService);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-layout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AdminLayoutComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".help-block{\r\n    margin-left:10px;\r\n    margin-bottom: 10px;\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwLWJsb2Nre1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");






let LoginComponent = class LoginComponent {
    constructor(toastr, router, authService, formBuilder) {
        this.toastr = toastr;
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            regno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: 'government'
        });
        this.utilFunctions();
    }
    get formControls() { return this.authForm.controls; }
    signIn() {
        this.isSubmitted = true;
        if (this.authForm.invalid) {
            return;
        }
        if (this.authForm.value.regno == 'govt' && this.authForm.value.password == 'admin') {
            this.authService.signIn(this.authForm.value);
            this.router.navigateByUrl('/government');
        }
        else {
            this.toastr.error('<span data-notify="icon" class="nc-icon nc-simple-remove"></span><span data-notify="message">Invalid Login!</span>', "", {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: "alert alert-error alert-with-icon",
                positionClass: "toast-bottom-right"
            });
        }
    }
    utilFunctions() {
        $('.js-tilt').tilt({
            scale: 1.1
        });
        //   var input = $('.validate-input .input100');
        //   $('#loginButton').on('click',function(){
        //       var check = true;
        //       for(var i=0; i<input.length; i++) {
        //           if(validate(input[i]) == false){
        //               showValidate(input[i]);
        //               check=false;
        //           }
        //       }
        //       return check;
        //   });
        //   $('.validate-form .input100').each(function(){
        //       $(this).focus(function(){
        //          hideValidate(this);
        //       });
        //   });
        //   function validate (input) {
        //       if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        //           if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //               return false;
        //           }
        //       }
        //       else {
        //           if($(input).val().trim() == ''){
        //               return false;
        //           }
        //       }
        //   }
        //   function showValidate(input) {
        //       var thisAlert = $(input).parent();
        //       $(thisAlert).addClass('alert-validate');
        //   }
        //   function hideValidate(input) {
        //       var thisAlert = $(input).parent();
        //       $(thisAlert).removeClass('alert-validate');
        //   }
        // }
    }
};
LoginComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/donor/donor.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/donor/donor.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".help-block{\r\n    margin-left:10px;\r\n    margin-bottom: 10px;\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9ub3IvZG9ub3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9ub3IvZG9ub3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwLWJsb2Nre1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/donor/donor.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/donor/donor.component.ts ***!
  \************************************************/
/*! exports provided: DonorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorComponent", function() { return DonorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");








let DonorComponent = class DonorComponent {
    constructor(router, authService, _httpService, toastr, formBuilder) {
        this.router = router;
        this.authService = authService;
        this._httpService = _httpService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.ngxLoadingAnimationTypes = ngx_loading__WEBPACK_IMPORTED_MODULE_4__["ngxLoadingAnimationTypes"];
        this.isSubmitted = false;
        this.loading = false;
    }
    ngOnInit() {
        this.authDonorForm = this.formBuilder.group({
            regno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: 'donor'
        });
        this.utilFunctions();
    }
    get formControls() { return this.authDonorForm.controls; }
    signIn() {
        this.isSubmitted = true;
        if (this.authDonorForm.invalid) {
            return;
        }
        this.loading = true;
        // this.authService.signIn(this.authDonorForm.value)
        //       this.loading = false;
        //       this.router.navigate(['/dashboard'],{state: {data: this.authDonorForm.value.regno}});
        this._httpService.getDonorLogin(this.authDonorForm.value).subscribe(data => {
            if (data['success'] != 1) {
                this.toastr.error('<span data-notify="icon" class="nc-icon nc-simple-remove"></span><span data-notify="message">DB Error!</span>', "", {
                    timeOut: 3000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-warning alert-with-icon",
                    positionClass: "toast-bottom-right"
                });
                this.loading = false;
            }
            else {
                var login = data['data'];
                if (login.length > 0) {
                    this.authService.signIn(this.authDonorForm.value);
                    this.loading = false;
                    localStorage.setItem('NGOID', this.authDonorForm.value.regno);
                    localStorage.setItem('NGOKEY', login[0].ID);
                    localStorage.setItem('NGONAME', login[0].Name);
                    this.router.navigate(['/dashboard']);
                }
                else {
                    this.toastr.error('<span data-notify="icon" class="nc-icon nc-simple-remove"></span><span data-notify="message">Invalid Login!</span>', "", {
                        timeOut: 3000,
                        closeButton: true,
                        enableHtml: true,
                        toastClass: "alert alert-danger alert-with-icon",
                        positionClass: "toast-bottom-right"
                    });
                    this.loading = false;
                }
            }
        });
    }
    utilFunctions() {
        $('.js-tilt').tilt({
            scale: 1.1
        });
    }
};
DonorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
DonorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./donor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/donor/donor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./donor.component.css */ "./src/app/pages/donor/donor.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], DonorComponent);



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _helper_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helper/names */ "./src/app/_helper/names.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");




let RegisterComponent = class RegisterComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.cnic = '';
    }
    ngOnInit() {
        this.utilFunction();
    }
    utilFunction() {
        $('.js-tilt').tilt({
            scale: 1.1
        });
        const component = this;
        var form = $("#signup-form");
        form.steps({
            headerTag: "h3",
            bodyTag: "fieldset",
            transitionEffect: "fade",
            labels: {
                previous: "Previous",
                next: "Next",
                finish: "Finish",
                current: "",
            },
            titleTemplate: '<h3 class="title">#title#</h3>',
            onStepChanged: function (event, currentIndex, priorIndex) {
                if (currentIndex === 1 && priorIndex === 0) {
                    console.log($('#name').val().length);
                    if ($('#name').val().length == 0) {
                        $('#name').text(_helper_names__WEBPACK_IMPORTED_MODULE_2__["Names"][Math.floor(Math.random() * 49)].Name);
                        $('#fathername').text(_helper_names__WEBPACK_IMPORTED_MODULE_2__["Names"][Math.floor((Math.random() * 49))]["Father Name"]);
                    }
                }
            },
            onFinished: function (event, currentIndex) {
                component.toastr.success('<span data-notify="icon" class="nc-icon nc-check-2"></span><span data-notify="message">Registration Successful! Your Request has been sent.</span>', "", {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-success alert-with-icon",
                    positionClass: "toast-bottom-right"
                });
                // $("#registerResponse").text("Registration Successful! Please Login");
                // $("#resId").css("display", "block");
                // $("#citizenid").removeClass("p-t-136").addClass("p-t-100");
            },
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FixedPluginComponent = class FixedPluginComponent {
    constructor() {
        this.sidebarColor = "white";
        this.sidebarActiveColor = "danger";
        this.state = true;
    }
    changeSidebarColor(color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-color', color);
        }
    }
    changeSidebarActiveColor(color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarActiveColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-active-color', color);
        }
    }
    ngOnInit() { }
};
FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fixedplugin-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html")).default
    })
], FixedPluginComponent);



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






let FixedPluginModule = class FixedPluginModule {
};
FixedPluginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
    })
], FixedPluginModule);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'footer-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");





let FooterModule = class FooterModule {
};
FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
    })
], FooterModule);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");






let NavbarComponent = class NavbarComponent {
    constructor(authService, location, renderer, element, router) {
        this.authService = authService;
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.isCollapsed = true;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        if (localStorage.getItem('NGOID')) {
            this.DashboardName = localStorage.getItem('NGONAME');
        }
        else if (localStorage.getItem('ACCESS_TOKEN') == "government") {
            this.DashboardName = 'Government';
        }
        else {
            this.router.navigateByUrl('/donor');
        }
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(listTitle => listTitle);
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
        });
    }
    logout() {
        var type = localStorage.getItem("ACCESS_TOKEN");
        this.authService.logout();
        this.router.navigateByUrl(type == 'donor' ? '/donor' : '/login');
    }
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title + ' - ' + this.DashboardName;
            }
        }
        return 'Dashboard';
    }
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    ;
    collapse() {
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("navbar-cmp", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'navbar-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






let NavbarModule = class NavbarModule {
};
NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
    })
], NavbarModule);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '', type: 'donor' },
    { path: '/government', title: 'Dashboard', icon: 'nc-bank', class: '', type: 'government' },
    { path: '/maps', title: 'Locate Entities', icon: 'nc-pin-3', class: '', type: 'government' },
    { path: '/maps', title: 'Locate Users', icon: 'nc-pin-3', class: '', type: 'donor' },
    { path: '/icons', title: 'Inventory', icon: 'nc-box', class: '', type: 'donor' },
    { path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '', type: '' }
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '', type:'' },
    // { path: '/typography',    title: 'Contact Us',        icon:'nc-email-85', class: '', type: 'government' }
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro', type:'citizen' },
];
let SidebarComponent = class SidebarComponent {
    ngOnInit() {
        var user = localStorage.getItem('ACCESS_TOKEN');
        this.menuItems = ROUTES.filter(menuItem => (menuItem.type == '' || menuItem.type == user));
    }
};
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sidebar-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");





let SidebarModule = class SidebarModule {
};
SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
    })
], SidebarModule);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home_menu {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 999;\r\n}\r\n\r\n\r\n.main_menu .navbar {\r\n    padding: 0 !important;\r\n}\r\n\r\n\r\n.main_menu .navbar-brand {\r\n    padding: 0rem !important;\r\n}\r\n\r\n\r\n.main_menu .navbar-toggler {\r\n    position: relative !important;\r\n    z-index: 1 !important;\r\n}\r\n\r\n\r\n.main_menu .main-menu-item {\r\n    text-align: right !important;\r\n    justify-content: right !important;\r\n}\r\n\r\n\r\nul {\r\n    list-style: none !important;\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n}\r\n\r\n\r\nimg {\r\n    max-width: 100% !important;\r\n}\r\n\r\n\r\n.banner_part{\r\n    height: 100%;\r\n    position: relative;\r\n    background-image: url('bg-image.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n\r\n.blackLayer{\r\n\r\n    width:100%;\r\n    height:100%;\r\n    background-color:rgba(0, 0, 0, 0.856);\r\n    opacity:0.85;\r\n  \r\n  }\r\n\r\n\r\n.banner_part .banner_text {\r\n    display: table;\r\n    width: 100%;\r\n    height: 950px;\r\n    margin-top: -64px;\r\n}\r\n\r\n\r\n.banner_part .banner_text .banner_text_iner {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.banner_part .banner_text h1 {\r\n    font-size: 55px;\r\n    text-transform: capitalize;\r\n    font-weight: 700;\r\n    margin-bottom: 22px;\r\n    line-height: 1.2;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.banner_part .banner_text p {\r\n    font-size: 18px;\r\n    line-height: 1.8;\r\n    font-family: \"Roboto\",sans-serif;\r\n    padding-right: 20px;\r\n    color: #fff;\r\n    padding-right: 88px;\r\n}\r\n\r\n\r\n.banner_part .banner_text .btn_2 {\r\n    margin-top: 43px;\r\n    width: 190px;\r\n}\r\n\r\n\r\n.btn_2 {\r\n    display: inline-block;\r\n    padding: 13.5px 0;\r\n    width: 160px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    color: #fff;\r\n    background-color: #00c424;\r\n    transition: all .4s ease-in-out;\r\n    text-transform: capitalize;\r\n    border: 1px solid #00c424;\r\n    border-radius: 2px;\r\n    font-family: \"Roboto\",sans-serif;\r\n    border-radius: 50px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7OztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQzs7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7OztBQVFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQ0FBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7OztBQUVBOztJQUVJLFVBQVU7SUFDVixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLFlBQVk7O0VBRWQ7OztBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QjtJQUd6QiwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZV9tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuXHJcbi5tYWluX21lbnUgLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluX21lbnUgLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nOiAwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluX21lbnUgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWluX21lbnUgLm1haW4tbWVudS1pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5iYW5uZXJfcGFydHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ltZy9iZy1pbWFnZS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmxhY2tMYXllcntcclxuXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC44NTYpO1xyXG4gICAgb3BhY2l0eTowLjg1O1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmJhbm5lcl9wYXJ0IC5iYW5uZXJfdGV4dCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NTBweDtcclxuICAgIG1hcmdpbi10b3A6IC02NHB4O1xyXG59XHJcbiAgXHJcbi5iYW5uZXJfcGFydCAuYmFubmVyX3RleHQgLmJhbm5lcl90ZXh0X2luZXIge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5iYW5uZXJfcGFydCAuYmFubmVyX3RleHQgaDEge1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJhbm5lcl9wYXJ0IC5iYW5uZXJfdGV4dCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIixzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy1yaWdodDogODhweDtcclxufVxyXG5cclxuLmJhbm5lcl9wYXJ0IC5iYW5uZXJfdGV4dCAuYnRuXzIge1xyXG4gICAgbWFyZ2luLXRvcDogNDNweDtcclxuICAgIHdpZHRoOiAxOTBweDtcclxufVxyXG5cclxuLmJ0bl8yIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEzLjVweCAwO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzQyNDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBjNDI0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7fSJdfQ== */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false,
    NODE_HOST: 'https://mycallsda.au-syd.mybluemix.net'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

/*!

=========================================================
* Paper Dashboard Angular - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Al_Wasl_Connect\Al-Wasl.Connect\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map