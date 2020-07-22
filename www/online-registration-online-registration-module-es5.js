function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["online-registration-online-registration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/online-registration/online-registration.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online-registration/online-registration.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOnlineRegistrationOnlineRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Online Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n  \n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"createCode()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Name</ion-label>\n        <ion-input formControlName=\"name\" type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"></ion-input>\n        <ion-item *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n          <p *ngIf=\"f.name.errors.required\">Name is required</p>\n        </ion-item>\n      </ion-item>\n      <ion-item >\n        <ion-label position=\"stacked\">College</ion-label>\n        <ion-input type=\"text\" formControlName=\"college\" class=\"form-control\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.college.errors }\"></ion-input>\n        <ion-item *ngIf=\"submitted && f.college.errors\" class=\"invalid-feedback\">\n          <p *ngIf=\"f.college.errors.required\">College is required</p>\n        </ion-item>\n      </ion-item> \n      <ion-item >\n        <ion-label position=\"stacked\">Phone</ion-label>\n        <ion-input formControlName=\"phone\" type=\"number\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\"></ion-input>\n        <ion-item *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n          <p *ngIf=\"f.phone.errors.required\">Phone is required</p>\n          <p *ngIf=\"f.phone.errors.minLength\">phone number should have 10digits</p>\n          <p *ngIf=\"f.phone.errors.maxLength\">phone number should have 10digits</p>\n        </ion-item>\n      </ion-item> \n      <ion-item >\n        <ion-label position=\"stacked\">Roll no</ion-label>\n        <ion-input formControlName=\"rollno\" type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.rollno.errors }\"></ion-input>\n        <ion-item *ngIf=\"submitted && f.rollno.errors\" class=\"invalid-feedback\">\n          <p *ngIf=\"f.rollno.errors.required\">Roll No is required</p>\n        </ion-item>       \n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"></ion-input>\n        <ion-item *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <p *ngIf=\"f.email.errors.required\">Email Id is required</p>\n            <p *ngIf=\"f.email.errors.pattern\">Please provide a valid email-id</p>\n        </ion-item>\n      </ion-item>    \n      <ion-item>\n        <ion-text style=\"text-align: center;\">Amount to be paid is: Rs.310.00</ion-text>\n      </ion-item> \n      <ion-item>\n        <button type=submit size=\"small\" class=\"btn btn-primary waves-effect waves-dark\">Proceed<ion-icon slot=\"end\" name=\"create\"></ion-icon></button>\n      </ion-item>\n      </ion-list>   \n  </form>\n  \n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/online-registration/qrgenerate/qrgenerate.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online-registration/qrgenerate/qrgenerate.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOnlineRegistrationQrgenerateQrgenerateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid style=\"background-color:aquamarine;\">\n    <ion-row style=\"margin-top:10%\">\n      <ion-col>\n        <div></div>\n      </ion-col>\n      <ion-col>\n        <ion-text color=\"primary\" align=\"center\">\n          <h1 style=\"color:black;\"><b>Ecficio 4.0</b></h1> \n          <h2 style=\"color: black;\"><b>Receipt No:{{registerUser.receipt}}</b></h2>  \n       </ion-text>\n        <div align=\"center\">\n          <ngx-qrcode \n            [elementType]=\"canvas\" \n            [value] = \"qrdata\" >\n          </ngx-qrcode>\n        </div>\n        <ion-text color=\"primary\" align=\"center\">\n          <div align=\"center\" style=\"color:black;\">{{registerUser.name}}</div>\n          <p style=\"color:black;\">Thanks For Registering!!</p>\n        </ion-text>\n        <ion-datetime displayFormat=\"MMM DD YYYY, h:mm A\" [(ngModel)]=\"registerUser.timestamp\" style=\"color:black;\"></ion-datetime>\n        <p style=\"color:black;\"><b>Note:</b>Please Show The <b>QRCODE</b> at the Time of Participating in Events</p>\n      </ion-col>\n      <ion-col>\n        <div></div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n    </ion-row>\n  </ion-grid>\n      \n  <ion-button style=\"text-align: center;\" align=\"center\" (click)=\"done()\">Done</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/online-registration/online-registration-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/online-registration/online-registration-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: OnlineRegistrationPageRoutingModule */

  /***/
  function srcAppOnlineRegistrationOnlineRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineRegistrationPageRoutingModule", function () {
      return OnlineRegistrationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _online_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./online-registration.page */
    "./src/app/online-registration/online-registration.page.ts");
    /* harmony import */


    var _qrgenerate_qrgenerate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./qrgenerate/qrgenerate.component */
    "./src/app/online-registration/qrgenerate/qrgenerate.component.ts");

    var routes = [{
      path: '',
      component: _online_registration_page__WEBPACK_IMPORTED_MODULE_3__["OnlineRegistrationPage"]
    }, {
      path: ':id',
      component: _qrgenerate_qrgenerate_component__WEBPACK_IMPORTED_MODULE_4__["QrgenerateComponent"]
    }];

    var OnlineRegistrationPageRoutingModule = function OnlineRegistrationPageRoutingModule() {
      _classCallCheck(this, OnlineRegistrationPageRoutingModule);
    };

    OnlineRegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OnlineRegistrationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/online-registration/online-registration.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/online-registration/online-registration.module.ts ***!
    \*******************************************************************/

  /*! exports provided: OnlineRegistrationPageModule */

  /***/
  function srcAppOnlineRegistrationOnlineRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineRegistrationPageModule", function () {
      return OnlineRegistrationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _online_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./online-registration-routing.module */
    "./src/app/online-registration/online-registration-routing.module.ts");
    /* harmony import */


    var _online_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./online-registration.page */
    "./src/app/online-registration/online-registration.page.ts");
    /* harmony import */


    var _qrgenerate_qrgenerate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./qrgenerate/qrgenerate.component */
    "./src/app/online-registration/qrgenerate/qrgenerate.component.ts");
    /* harmony import */


    var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @techiediaries/ngx-qrcode */
    "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/ngx-qrcode2.js");

    var OnlineRegistrationPageModule = function OnlineRegistrationPageModule() {
      _classCallCheck(this, OnlineRegistrationPageModule);
    };

    OnlineRegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _online_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnlineRegistrationPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__["NgxQRCodeModule"]],
      declarations: [_online_registration_page__WEBPACK_IMPORTED_MODULE_6__["OnlineRegistrationPage"], _qrgenerate_qrgenerate_component__WEBPACK_IMPORTED_MODULE_7__["QrgenerateComponent"]]
    })], OnlineRegistrationPageModule);
    /***/
  },

  /***/
  "./src/app/online-registration/online-registration.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/online-registration/online-registration.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOnlineRegistrationOnlineRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list button {\n  margin-left: 25%;\n}\n\nion-list {\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.form-control {\n  border: 0;\n  margin: 0px;\n  padding: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25saW5lLXJlZ2lzdHJhdGlvbi9DOlxcVXNlcnNcXGFiYmhpbmF2XFxFY2ZpY2lvL3NyY1xcYXBwXFxvbmxpbmUtcmVnaXN0cmF0aW9uXFxvbmxpbmUtcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb25saW5lLXJlZ2lzdHJhdGlvbi9vbmxpbmUtcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUNKO0FDQUE7O0FEQ0E7RUFDSSxnQkFBZTtFQUNmLGlCQUNKO0FDQ0E7O0FEQ0E7RUFDSSxTQUFRO0VBQ1IsV0FBVTtFQUNWLFlBQVc7QUNFZiIsImZpbGUiOiJzcmMvYXBwL29ubGluZS1yZWdpc3RyYXRpb24vb25saW5lLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCBidXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDoyNSVcclxufVxyXG5pb24tbGlzdHtcclxuICAgIHBhZGRpbmctbGVmdDo1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6NSVcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG59IiwiaW9uLWxpc3QgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/online-registration/online-registration.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/online-registration/online-registration.page.ts ***!
    \*****************************************************************/

  /*! exports provided: OnlineRegistrationPage */

  /***/
  function srcAppOnlineRegistrationOnlineRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineRegistrationPage", function () {
      return OnlineRegistrationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ittop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ittop.service */
    "./src/app/ittop.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OnlineRegistrationPage =
    /*#__PURE__*/
    //razor_secret=HRrxX8Rhb3b3K3Wurle0UHkf
    function () {
      function OnlineRegistrationPage(us, alrt, fb, router) {
        _classCallCheck(this, OnlineRegistrationPage);

        this.us = us;
        this.alrt = alrt;
        this.fb = fb;
        this.router = router;
        this.submitted = false;
        this.err = "";
        this.userDetails = {};
        this.paymentAmount = 10;
        this.currency = "INR";
        this.currencyIcon = "₹"; //razor_key="HRrxX8Rhb3b3K3Wurle0UHkf";

        this.razor_key = "rzp_test_tKmGlTQpVe7iyL";
      }

      _createClass(OnlineRegistrationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registrationForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rollno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            college: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]]
          });
        }
      }, {
        key: "call",
        value: function call() {
          console.log(this.paymentAmount);
        }
      }, {
        key: "createCode",
        value: function createCode() {
          var _this = this;

          this.submitted = true;

          if (this.registrationForm.invalid) {
            return;
          }

          this.us.validEmail({
            email: this.registrationForm.value.email
          }).subscribe(function (data) {
            console.log(data);

            if (data == true) {
              _this.userDetails.email = _this.registrationForm.value.email;

              _this.paywithRazor();
            } else {
              alert('enter valid email address');
            }
          });
        }
      }, {
        key: "paywithRazor",
        value: function paywithRazor() {
          this.userDetails.name = this.registrationForm.value.name;
          this.userDetails.email = this.registrationForm.value.email;
          this.userDetails.phone = this.registrationForm.value.phone;
          this.userDetails.college = this.registrationForm.value.college;
          this.userDetails.rollno = this.registrationForm.value.rollno;
          var paymentAmount = this.paymentAmount;
          var options = {
            description: 'Payment',
            image: 'https://res.cloudinary.com/dmm4awbwm/image/upload/v1591517273/favicon_pbwxru.jpg',
            currency: this.currency,
            key: this.razor_key,
            amount: this.paymentAmount,
            name: 'Ecficio',
            prefill: {
              email: this.registrationForm.value.email,
              contact: this.registrationForm.value.phone,
              name: this.registrationForm.value.name
            },
            theme: {
              color: '#F37254'
            },
            modal: {
              ondismiss: function ondismiss() {
                alert('dismissed');
              }
            }
          };

          var successCallback = function successCallback(payment_id) {
            var _this2 = this;

            this.userDetails.tid = payment_id;
            this.userDetails.paymentAmount = paymentAmount;
            this.userDetails.paid = true;
            this.userDetails.timestamp = new Date();
            this.us.addUser(this.userDetails).subscribe(function (data) {
              if (data['message'] == 'already exists') {
                alert("email already registered");
              } else if (data['message'] == 'success') {
                alert("receipt:" + data['receipt']);

                _this2.router.navigate(['online-registration/', data['receipt']]);
              } else {
                alert('some error occured');
              }
            }); //alert('payment_id: ' + payment_id);
          };

          var cancelCallback = function cancelCallback(error) {
            alert(error.description + ' (Error ' + error.code + ')');
          };

          RazorpayCheckout.open(options, successCallback, cancelCallback);
        }
      }, {
        key: "f",
        get: function get() {
          return this.registrationForm.controls;
        }
      }]);

      return OnlineRegistrationPage;
    }();

    OnlineRegistrationPage.ctorParameters = function () {
      return [{
        type: _ittop_service__WEBPACK_IMPORTED_MODULE_3__["IttopService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    OnlineRegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-online-registration',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./online-registration.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/online-registration/online-registration.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./online-registration.page.scss */
      "./src/app/online-registration/online-registration.page.scss"))["default"]]
    }) //razor_secret=HRrxX8Rhb3b3K3Wurle0UHkf
    ], OnlineRegistrationPage);
    /***/
  },

  /***/
  "./src/app/online-registration/qrgenerate/qrgenerate.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/online-registration/qrgenerate/qrgenerate.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOnlineRegistrationQrgenerateQrgenerateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ubGluZS1yZWdpc3RyYXRpb24vcXJnZW5lcmF0ZS9xcmdlbmVyYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/online-registration/qrgenerate/qrgenerate.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/online-registration/qrgenerate/qrgenerate.component.ts ***!
    \************************************************************************/

  /*! exports provided: QrgenerateComponent */

  /***/
  function srcAppOnlineRegistrationQrgenerateQrgenerateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrgenerateComponent", function () {
      return QrgenerateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_ittop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/ittop.service */
    "./src/app/ittop.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var QrgenerateComponent = /*#__PURE__*/function () {
      function QrgenerateComponent(us, route, navCtrl) {
        _classCallCheck(this, QrgenerateComponent);

        this.us = us;
        this.route = route;
        this.navCtrl = navCtrl;
        this.registerUser = {};
      }

      _createClass(QrgenerateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.rno = Number(this.route.snapshot.paramMap.get('id'));
          this.us.getUser({
            receipt: this.rno
          }).subscribe(function (data) {
            if (data['message'] == 'success') {
              _this3.registerUser = data['data'];
              _this3.qrdata = _this3.registerUser.receipt.toString().replace(/\s/g, "") + " " + _this3.registerUser.name.replace(/\s/g, "") + " " + _this3.registerUser.college.replace(/\s/g, "") + " " + _this3.registerUser.phone.toString().replace(/\s/g, "") + " " + _this3.registerUser.rollno.replace(/\s/g, "") + " " + _this3.registerUser.email.replace(/\s/g, "");
              console.log(_this3.qrdata);
            } else {
              alert(data);
            }
          });
        }
      }, {
        key: "done",
        value: function done() {
          this.navCtrl.back();
        }
      }]);

      return QrgenerateComponent;
    }();

    QrgenerateComponent.ctorParameters = function () {
      return [{
        type: src_app_ittop_service__WEBPACK_IMPORTED_MODULE_2__["IttopService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    QrgenerateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qrgenerate',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./qrgenerate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/online-registration/qrgenerate/qrgenerate.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./qrgenerate.component.scss */
      "./src/app/online-registration/qrgenerate/qrgenerate.component.scss"))["default"]]
    })], QrgenerateComponent);
    /***/
  }
}]);
//# sourceMappingURL=online-registration-online-registration-module-es5.js.map