(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/usuario/usuario/usuario.component */ "./src/app/components/usuario/usuario/usuario.component.ts");
/* harmony import */ var _components_usuario_agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/usuario/agregar-usuario/agregar-usuario.component */ "./src/app/components/usuario/agregar-usuario/agregar-usuario.component.ts");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/components/inicio/inicio.component.ts");
/* harmony import */ var _components_usuario_eliminar_usuario_eliminar_usuario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/usuario/eliminar-usuario/eliminar-usuario.component */ "./src/app/components/usuario/eliminar-usuario/eliminar-usuario.component.ts");
/* harmony import */ var _components_usuario_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/usuario/editar-usuario/editar-usuario.component */ "./src/app/components/usuario/editar-usuario/editar-usuario.component.ts");
/* harmony import */ var _services_canActivateService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/canActivateService */ "./src/app/services/canActivateService.ts");
/* harmony import */ var _components_costumer_costumer_costumer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/costumer/costumer/costumer.component */ "./src/app/components/costumer/costumer/costumer.component.ts");
/* harmony import */ var _components_costumer_add_costumer_add_costumer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/costumer/add-costumer/add-costumer.component */ "./src/app/components/costumer/add-costumer/add-costumer.component.ts");
/* harmony import */ var _components_costumer_update_costumer_update_costumer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/costumer/update-costumer/update-costumer.component */ "./src/app/components/costumer/update-costumer/update-costumer.component.ts");
/* harmony import */ var _components_costumer_delete_costumer_delete_costumer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/costumer/delete-costumer/delete-costumer.component */ "./src/app/components/costumer/delete-costumer/delete-costumer.component.ts");
/* harmony import */ var _components_insurance_insurance_insurance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/insurance/insurance/insurance.component */ "./src/app/components/insurance/insurance/insurance.component.ts");
/* harmony import */ var _components_insurance_add_insurance_add_insurance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/insurance/add-insurance/add-insurance.component */ "./src/app/components/insurance/add-insurance/add-insurance.component.ts");
/* harmony import */ var _components_insurance_update_insurance_update_insurance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/insurance/update-insurance/update-insurance.component */ "./src/app/components/insurance/update-insurance/update-insurance.component.ts");
/* harmony import */ var _components_insurance_delete_insurance_delete_insurance_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/insurance/delete-insurance/delete-insurance.component */ "./src/app/components/insurance/delete-insurance/delete-insurance.component.ts");
/* harmony import */ var _components_insurance_customer_insurancecustomer_insurancecustomer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/insurance-customer/insurancecustomer/insurancecustomer.component */ "./src/app/components/insurance-customer/insurancecustomer/insurancecustomer.component.ts");
/* harmony import */ var _components_insurance_customer_addinsurancecustomer_addinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component */ "./src/app/components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component.ts");
/* harmony import */ var _components_insurance_customer_updateinsurancecustomer_updateinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component */ "./src/app/components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component.ts");
/* harmony import */ var _components_insurance_customer_deleteinsurancecustomer_deleteinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component */ "./src/app/components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component.ts");
/* harmony import */ var _components_service_service_service_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/service/service/service.component */ "./src/app/components/service/service/service.component.ts");
/* harmony import */ var _components_service_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/service/add-service/add-service.component */ "./src/app/components/service/add-service/add-service.component.ts");
/* harmony import */ var _components_service_update_service_update_service_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/service/update-service/update-service.component */ "./src/app/components/service/update-service/update-service.component.ts");
/* harmony import */ var _components_service_delete_service_delete_service_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/service/delete-service/delete-service.component */ "./src/app/components/service/delete-service/delete-service.component.ts");
/* harmony import */ var _components_technical_technical_technical_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/technical/technical/technical.component */ "./src/app/components/technical/technical/technical.component.ts");
/* harmony import */ var _components_technical_add_technical_add_technical_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/technical/add-technical/add-technical.component */ "./src/app/components/technical/add-technical/add-technical.component.ts");
/* harmony import */ var _components_technical_update_technical_update_technical_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/technical/update-technical/update-technical.component */ "./src/app/components/technical/update-technical/update-technical.component.ts");
/* harmony import */ var _components_technical_delete_technical_delete_technical_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/technical/delete-technical/delete-technical.component */ "./src/app/components/technical/delete-technical/delete-technical.component.ts");
/* harmony import */ var _components_request_add_request_add_request_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/request/add-request/add-request.component */ "./src/app/components/request/add-request/add-request.component.ts");
/* harmony import */ var _components_request_update_request_update_request_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/request/update-request/update-request.component */ "./src/app/components/request/update-request/update-request.component.ts");
/* harmony import */ var _components_request_delete_request_delete_request_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/request/delete-request/delete-request.component */ "./src/app/components/request/delete-request/delete-request.component.ts");
/* harmony import */ var _components_request_request_request_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/request/request/request.component */ "./src/app/components/request/request/request.component.ts");
/* harmony import */ var _components_request_commentary_commentary_commentary_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/request/commentary/commentary/commentary.component */ "./src/app/components/request/commentary/commentary/commentary.component.ts");
/* harmony import */ var _components_request_detail_request_detail_request_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/request/detail-request/detail-request.component */ "./src/app/components/request/detail-request/detail-request.component.ts");




































var routes = [
    { path: '', component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__["InicioComponent"] },
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'usuario', component: _components_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'usuario/agregar', component: _components_usuario_agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_5__["AgregarUsuarioComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'usuario/eliminar/:id', component: _components_usuario_eliminar_usuario_eliminar_usuario_component__WEBPACK_IMPORTED_MODULE_7__["EliminarUsuarioComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'usuario/editar/:id', component: _components_usuario_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_8__["EditarUsuarioComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'costumer', component: _components_costumer_costumer_costumer_component__WEBPACK_IMPORTED_MODULE_10__["CostumerComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'costumer/add', component: _components_costumer_add_costumer_add_costumer_component__WEBPACK_IMPORTED_MODULE_11__["AddCostumerComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'costumer/delete/:id', component: _components_costumer_delete_costumer_delete_costumer_component__WEBPACK_IMPORTED_MODULE_13__["DeleteCostumerComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'costumer/update/:id', component: _components_costumer_update_costumer_update_costumer_component__WEBPACK_IMPORTED_MODULE_12__["UpdateCostumerComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'insurance', component: _components_insurance_insurance_insurance_component__WEBPACK_IMPORTED_MODULE_14__["InsuranceComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'insurance/add', component: _components_insurance_add_insurance_add_insurance_component__WEBPACK_IMPORTED_MODULE_15__["AddInsuranceComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'insurance/delete/:id', component: _components_insurance_update_insurance_update_insurance_component__WEBPACK_IMPORTED_MODULE_16__["UpdateInsuranceComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'insurance/update/:id', component: _components_insurance_delete_insurance_delete_insurance_component__WEBPACK_IMPORTED_MODULE_17__["DeleteInsuranceComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'insurance/customer', component: _components_insurance_customer_insurancecustomer_insurancecustomer_component__WEBPACK_IMPORTED_MODULE_18__["InsurancecustomerComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'insurance/customer/add', component: _components_insurance_customer_addinsurancecustomer_addinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_19__["AddinsurancecustomerComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'insurance/customer/delete/:id', component: _components_insurance_customer_deleteinsurancecustomer_deleteinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_21__["DeleteinsurancecustomerComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'insurance/customer/update/:id', component: _components_insurance_customer_updateinsurancecustomer_updateinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_20__["UpdateinsurancecustomerComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'service', component: _components_service_service_service_component__WEBPACK_IMPORTED_MODULE_22__["ServiceComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'service/add', component: _components_service_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_23__["AddServiceComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'service/delete/:id', component: _components_service_delete_service_delete_service_component__WEBPACK_IMPORTED_MODULE_25__["DeleteServiceComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'service/update/:id', component: _components_service_update_service_update_service_component__WEBPACK_IMPORTED_MODULE_24__["UpdateServiceComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'technical', component: _components_technical_technical_technical_component__WEBPACK_IMPORTED_MODULE_26__["TechnicalComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'technical/add', component: _components_technical_add_technical_add_technical_component__WEBPACK_IMPORTED_MODULE_27__["AddTechnicalComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'technical/delete/:id', component: _components_technical_delete_technical_delete_technical_component__WEBPACK_IMPORTED_MODULE_29__["DeleteTechnicalComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'technical/update/:id', component: _components_technical_update_technical_update_technical_component__WEBPACK_IMPORTED_MODULE_28__["UpdateTechnicalComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'request', component: _components_request_request_request_component__WEBPACK_IMPORTED_MODULE_33__["RequestComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'request/add', component: _components_request_add_request_add_request_component__WEBPACK_IMPORTED_MODULE_30__["AddRequestComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'request/delete/:id', component: _components_request_delete_request_delete_request_component__WEBPACK_IMPORTED_MODULE_32__["DeleteRequestComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'request/update/:id', component: _components_request_update_request_update_request_component__WEBPACK_IMPORTED_MODULE_31__["UpdateRequestComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'request/detail/:id', component: _components_request_detail_request_detail_request_component__WEBPACK_IMPORTED_MODULE_35__["DetailRequestComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
    { path: 'request/add/commentary/:id', component: _components_request_commentary_commentary_commentary_component__WEBPACK_IMPORTED_MODULE_34__["CommentaryComponent"], canActivate: [_services_canActivateService__WEBPACK_IMPORTED_MODULE_9__["CanActivateViaAuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n    <p style=\"font-size: 20px; color: white\">Cargando...</p>\r\n</ngx-spinner>\r\n<html *ngIf=\"user.ok === false\">\r\n<app-login></app-login>\r\n\r\n</html>\r\n\r\n<html *ngIf=\"user.ok === true\">\r\n\r\n<head>\r\n    <title>ServiAsistimos</title>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\" />\r\n</head>\r\n\r\n<body>\r\n    <app-header></app-header>\r\n    <app-menu></app-menu>\r\n    <div class=\"content-padder content-background\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .user {\n  text-align: center;\n  padding-bottom: 20px; }\n\n:host ::ng-deep .navbar-filter {\n  background: #f8f8f8 !important; }\n\n:host ::ng-deep .uk-icon {\n  color: white !important; }\n\n:host ::ng-deep .plus-circle {\n  padding: 30px;\n  color: white !important; }\n\n:host ::ng-deep thead {\n  background: #03a9f4; }\n\n:host ::ng-deep thead tr th {\n    color: #fff; }\n\n:host ::ng-deep textarea {\n  resize: vertical; }\n\n:host ::ng-deep .inputfile {\n  border: dashed 2px;\n  width: 100% !important;\n  cursor: pointer; }\n\n:host ::ng-deep .uk-form-custom {\n  width: 100%; }\n\n:host ::ng-deep .submitbutton {\n  width: 50%;\n  margin-top: 20px; }\n\n:host ::ng-deep #floating-button {\n  /* \r\n    width: 55px;\r\n    height: 55px;\r\n    border-radius: 50%; */\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  cursor: pointer;\n  background: #009688 !important; }\n\n:host ::ng-deep #floating-button button {\n    color: white;\n    font-size: 20px; }\n\n:host ::ng-deep #floating-button p {\n    position: absolute;\n    top: 0;\n    display: block;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    line-height: 55px;\n    font-family: 'Roboto';\n    font-weight: 300;\n    -webkit-animation: plus-out 0.3s;\n            animation: plus-out 0.3s;\n    transition: all 0.3s; }\n\n:host ::ng-deep .uk-button-success {\n  background: #8bc34a !important;\n  color: #fff;\n  border: 1px solid transparent; }\n\n:host ::ng-deep .p-no-margin {\n  margin-top: -20px !important; }\n\n:host ::ng-deep .up-badge {\n  margin-top: -15px !important; }\n\n:host ::ng-deep .uk-card-custom {\n  padding: 0px 20px !important;\n  border-bottom: none !important; }\n\n:host ::ng-deep .uk-card-custom .uk-width-auto {\n    margin-left: -20px; }\n\n:host ::ng-deep .blue {\n  background: #00a1f1 !important; }\n\n:host ::ng-deep .green {\n  background: #7dbb00 !important; }\n\n:host ::ng-deep .white-text {\n  color: white; }\n\n:host ::ng-deep .no-margin-top {\n  margin-top: 0 !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb3llY3Rvc1xcQW5ndWxhclxcSVJPTkdZTUFOR1VMQVIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUh4QjtFQVFJLDhCQUE4QixFQUFBOztBQVJsQztFQVdJLHVCQUFtQyxFQUFBOztBQVh2QztFQWNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFmM0I7RUFxQkksbUJBQW1CLEVBQUE7O0FBckJ2QjtJQXdCWSxXQUFXLEVBQUE7O0FBeEJ2QjtFQTZCVyxnQkFBZ0IsRUFBQTs7QUE3QjNCO0VBK0JJLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQWpDbkI7RUFxQ0ksV0FBVyxFQUFBOztBQXJDZjtFQXlDSSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBMUNwQjtFQThDSTs7O3lCQ1JxQjtFRFlyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsOEJBQThCLEVBQUE7O0FBdERsQztJQXdEUSxZQUFXO0lBQ1gsZUFBZSxFQUFBOztBQXpEdkI7SUE0RFEsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixjQUFjO0lBQ2QsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixvQkFBb0IsRUFBQTs7QUF6RTVCO0VBaUZJLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsNkJBQTZCLEVBQUE7O0FBbkZqQztFQXdGSSw0QkFBNEIsRUFBQTs7QUF4RmhDO0VBNkZJLDRCQUE0QixFQUFBOztBQTdGaEM7RUFtR0ksNEJBQTRCO0VBQzVCLDhCQUE4QixFQUFBOztBQXBHbEM7SUFzR1Esa0JBQWtCLEVBQUE7O0FBdEcxQjtFQTRHTyw4QkFBOEIsRUFBQTs7QUE1R3JDO0VBNkdPLDhCQUE4QixFQUFBOztBQTdHckM7RUFnSEksWUFBWSxFQUFBOztBQWhIaEI7RUFvSEksd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXB7XHJcbi51c2Vye1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcbi5uYXZiYXItZmlsdGVye1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmOCAhaW1wb3J0YW50O1xyXG59XHJcbi51ay1pY29ue1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBsdXMtY2lyY2xle1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vL1RhYmxlXHJcblxyXG50aGVhZHtcclxuICAgIGJhY2tncm91bmQ6ICMwM2E5ZjQ7XHJcbiAgICB0cntcclxuICAgICAgICB0aHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG50ZXh0YXJlYSB7IHJlc2l6ZTogdmVydGljYWw7IH0gXHJcbi5pbnB1dGZpbGV7XHJcbiAgICBib3JkZXI6IGRhc2hlZCAycHg7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udWstZm9ybS1jdXN0b217XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN1Ym1pdGJ1dHRvbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4jZmxvYXRpbmctYnV0dG9uIHtcclxuICAgIC8qIFxyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMwMDk2ODggIWltcG9ydGFudDtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGFuaW1hdGlvbjogcGx1cy1vdXQgMC4zcztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIH1cclxufVxyXG5cclxuLy9FbmQgVGFibGVcclxuXHJcbi51ay1idXR0b24tc3VjY2Vzc1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGJjMzRhICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucC1uby1tYXJnaW5cclxue1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVwLWJhZGdlXHJcbntcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vQ2FyZHNcclxuLnVrLWNhcmQtY3VzdG9tXHJcbntcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAudWstd2lkdGgtYXV0b3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQ29sb3JzXHJcbi8vQmFja2dyb3VuZHNcclxuLmJsdWV7IGJhY2tncm91bmQ6ICMwMGExZjEgIWltcG9ydGFudH1cclxuLmdyZWVue2JhY2tncm91bmQ6ICM3ZGJiMDAgIWltcG9ydGFudDt9XHJcbi8vVGV4dCBjb2xvclxyXG4ud2hpdGUtdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5vLW1hcmdpbi10b3B7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbn0iLCI6aG9zdCA6Om5nLWRlZXAgLnVzZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XG5cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWZpbHRlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY4ZjggIWltcG9ydGFudDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLnVrLWljb24ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLnBsdXMtY2lyY2xlIHtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgOjpuZy1kZWVwIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzAzYTlmNDsgfVxuICA6aG9zdCA6Om5nLWRlZXAgdGhlYWQgdHIgdGgge1xuICAgIGNvbG9yOiAjZmZmOyB9XG5cbjpob3N0IDo6bmctZGVlcCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7IH1cblxuOmhvc3QgOjpuZy1kZWVwIC5pbnB1dGZpbGUge1xuICBib3JkZXI6IGRhc2hlZCAycHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLnVrLWZvcm0tY3VzdG9tIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuOmhvc3QgOjpuZy1kZWVwIC5zdWJtaXRidXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbjpob3N0IDo6bmctZGVlcCAjZmxvYXRpbmctYnV0dG9uIHtcbiAgLyogXHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDk2ODggIWltcG9ydGFudDsgfVxuICA6aG9zdCA6Om5nLWRlZXAgI2Zsb2F0aW5nLWJ1dHRvbiBidXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7IH1cbiAgOmhvc3QgOjpuZy1kZWVwICNmbG9hdGluZy1idXR0b24gcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgYW5pbWF0aW9uOiBwbHVzLW91dCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzOyB9XG5cbjpob3N0IDo6bmctZGVlcCAudWstYnV0dG9uLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjOGJjMzRhICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtbm8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogLTIwcHggIWltcG9ydGFudDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLnVwLWJhZGdlIHtcbiAgbWFyZ2luLXRvcDogLTE1cHggIWltcG9ydGFudDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLnVrLWNhcmQtY3VzdG9tIHtcbiAgcGFkZGluZzogMHB4IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIDpob3N0IDo6bmctZGVlcCAudWstY2FyZC1jdXN0b20gLnVrLXdpZHRoLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsdWUge1xuICBiYWNrZ3JvdW5kOiAjMDBhMWYxICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgOjpuZy1kZWVwIC5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICM3ZGJiMDAgIWltcG9ydGFudDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLndoaXRlLXRleHQge1xuICBjb2xvcjogd2hpdGU7IH1cblxuOmhvc3QgOjpuZy1kZWVwIC5uby1tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OyB9XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_encrypt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/encrypt.service */ "./src/app/services/encrypt.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/user */ "./src/app/models/user.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(permissionsService, encryptService) {
        this.permissionsService = permissionsService;
        this.encryptService = encryptService;
        this.title = 'ServiAsistimos';
        this.loginstatus = localStorage.getItem('loginstatus');
        this.dataUser();
    }
    AppComponent.prototype.dataUser = function () {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.user = this.encryptService.getValue();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsService"],
            _services_encrypt_service__WEBPACK_IMPORTED_MODULE_3__["EncryptService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_right_click_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-right-click-menu */ "./node_modules/ng2-right-click-menu/fesm5/ng2-right-click-menu.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/fesm5/ngx-currency.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _components_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/usuario/usuario/usuario.component */ "./src/app/components/usuario/usuario/usuario.component.ts");
/* harmony import */ var _components_usuario_eliminar_usuario_eliminar_usuario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/usuario/eliminar-usuario/eliminar-usuario.component */ "./src/app/components/usuario/eliminar-usuario/eliminar-usuario.component.ts");
/* harmony import */ var _components_usuario_agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/usuario/agregar-usuario/agregar-usuario.component */ "./src/app/components/usuario/agregar-usuario/agregar-usuario.component.ts");
/* harmony import */ var _components_complements_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/complements/header/header.component */ "./src/app/components/complements/header/header.component.ts");
/* harmony import */ var _components_complements_menu_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/complements/menu/menu.component */ "./src/app/components/complements/menu/menu.component.ts");
/* harmony import */ var _components_complements_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/complements/footer/footer.component */ "./src/app/components/complements/footer/footer.component.ts");
/* harmony import */ var _components_complements_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/complements/notfound/notfound.component */ "./src/app/components/complements/notfound/notfound.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/components/inicio/inicio.component.ts");
/* harmony import */ var _components_usuario_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/usuario/editar-usuario/editar-usuario.component */ "./src/app/components/usuario/editar-usuario/editar-usuario.component.ts");
/* harmony import */ var _services_canActivateService__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/canActivateService */ "./src/app/services/canActivateService.ts");
/* harmony import */ var _components_costumer_costumer_costumer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/costumer/costumer/costumer.component */ "./src/app/components/costumer/costumer/costumer.component.ts");
/* harmony import */ var _components_costumer_add_costumer_add_costumer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/costumer/add-costumer/add-costumer.component */ "./src/app/components/costumer/add-costumer/add-costumer.component.ts");
/* harmony import */ var _components_costumer_update_costumer_update_costumer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/costumer/update-costumer/update-costumer.component */ "./src/app/components/costumer/update-costumer/update-costumer.component.ts");
/* harmony import */ var _components_costumer_delete_costumer_delete_costumer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/costumer/delete-costumer/delete-costumer.component */ "./src/app/components/costumer/delete-costumer/delete-costumer.component.ts");
/* harmony import */ var _components_insurance_insurance_insurance_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/insurance/insurance/insurance.component */ "./src/app/components/insurance/insurance/insurance.component.ts");
/* harmony import */ var _components_insurance_add_insurance_add_insurance_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/insurance/add-insurance/add-insurance.component */ "./src/app/components/insurance/add-insurance/add-insurance.component.ts");
/* harmony import */ var _components_insurance_update_insurance_update_insurance_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/insurance/update-insurance/update-insurance.component */ "./src/app/components/insurance/update-insurance/update-insurance.component.ts");
/* harmony import */ var _components_insurance_delete_insurance_delete_insurance_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/insurance/delete-insurance/delete-insurance.component */ "./src/app/components/insurance/delete-insurance/delete-insurance.component.ts");
/* harmony import */ var _components_insurance_customer_insurancecustomer_insurancecustomer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/insurance-customer/insurancecustomer/insurancecustomer.component */ "./src/app/components/insurance-customer/insurancecustomer/insurancecustomer.component.ts");
/* harmony import */ var _components_insurance_customer_addinsurancecustomer_addinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component */ "./src/app/components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component.ts");
/* harmony import */ var _components_insurance_customer_updateinsurancecustomer_updateinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component */ "./src/app/components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component.ts");
/* harmony import */ var _components_insurance_customer_deleteinsurancecustomer_deleteinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component */ "./src/app/components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component.ts");
/* harmony import */ var _components_service_service_service_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/service/service/service.component */ "./src/app/components/service/service/service.component.ts");
/* harmony import */ var _components_service_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/service/add-service/add-service.component */ "./src/app/components/service/add-service/add-service.component.ts");
/* harmony import */ var _components_service_update_service_update_service_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/service/update-service/update-service.component */ "./src/app/components/service/update-service/update-service.component.ts");
/* harmony import */ var _components_service_delete_service_delete_service_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/service/delete-service/delete-service.component */ "./src/app/components/service/delete-service/delete-service.component.ts");
/* harmony import */ var _components_technical_technical_technical_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/technical/technical/technical.component */ "./src/app/components/technical/technical/technical.component.ts");
/* harmony import */ var _components_technical_add_technical_add_technical_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/technical/add-technical/add-technical.component */ "./src/app/components/technical/add-technical/add-technical.component.ts");
/* harmony import */ var _components_technical_update_technical_update_technical_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/technical/update-technical/update-technical.component */ "./src/app/components/technical/update-technical/update-technical.component.ts");
/* harmony import */ var _components_technical_delete_technical_delete_technical_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/technical/delete-technical/delete-technical.component */ "./src/app/components/technical/delete-technical/delete-technical.component.ts");
/* harmony import */ var _components_request_add_request_add_request_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/request/add-request/add-request.component */ "./src/app/components/request/add-request/add-request.component.ts");
/* harmony import */ var _components_request_update_request_update_request_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/request/update-request/update-request.component */ "./src/app/components/request/update-request/update-request.component.ts");
/* harmony import */ var _components_request_delete_request_delete_request_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/request/delete-request/delete-request.component */ "./src/app/components/request/delete-request/delete-request.component.ts");
/* harmony import */ var _components_request_request_request_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/request/request/request.component */ "./src/app/components/request/request/request.component.ts");
/* harmony import */ var _components_request_commentary_commentary_commentary_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/request/commentary/commentary/commentary.component */ "./src/app/components/request/commentary/commentary/commentary.component.ts");
/* harmony import */ var _components_request_detail_request_detail_request_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/request/detail-request/detail-request.component */ "./src/app/components/request/detail-request/detail-request.component.ts");






















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_16__["UsuarioComponent"],
                _components_usuario_eliminar_usuario_eliminar_usuario_component__WEBPACK_IMPORTED_MODULE_17__["EliminarUsuarioComponent"],
                _components_usuario_agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_18__["AgregarUsuarioComponent"],
                _components_complements_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _components_complements_menu_menu_component__WEBPACK_IMPORTED_MODULE_20__["MenuComponent"],
                _components_complements_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _components_complements_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_22__["NotfoundComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
                _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_24__["InicioComponent"],
                _components_usuario_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_25__["EditarUsuarioComponent"],
                _components_costumer_costumer_costumer_component__WEBPACK_IMPORTED_MODULE_27__["CostumerComponent"],
                _components_costumer_add_costumer_add_costumer_component__WEBPACK_IMPORTED_MODULE_28__["AddCostumerComponent"],
                _components_costumer_update_costumer_update_costumer_component__WEBPACK_IMPORTED_MODULE_29__["UpdateCostumerComponent"],
                _components_costumer_delete_costumer_delete_costumer_component__WEBPACK_IMPORTED_MODULE_30__["DeleteCostumerComponent"],
                _components_insurance_insurance_insurance_component__WEBPACK_IMPORTED_MODULE_31__["InsuranceComponent"],
                _components_insurance_add_insurance_add_insurance_component__WEBPACK_IMPORTED_MODULE_32__["AddInsuranceComponent"],
                _components_insurance_update_insurance_update_insurance_component__WEBPACK_IMPORTED_MODULE_33__["UpdateInsuranceComponent"],
                _components_insurance_delete_insurance_delete_insurance_component__WEBPACK_IMPORTED_MODULE_34__["DeleteInsuranceComponent"],
                _components_insurance_customer_insurancecustomer_insurancecustomer_component__WEBPACK_IMPORTED_MODULE_35__["InsurancecustomerComponent"],
                _components_insurance_customer_addinsurancecustomer_addinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_36__["AddinsurancecustomerComponent"],
                _components_insurance_customer_updateinsurancecustomer_updateinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_37__["UpdateinsurancecustomerComponent"],
                _components_insurance_customer_deleteinsurancecustomer_deleteinsurancecustomer_component__WEBPACK_IMPORTED_MODULE_38__["DeleteinsurancecustomerComponent"],
                _components_service_service_service_component__WEBPACK_IMPORTED_MODULE_39__["ServiceComponent"],
                _components_service_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_40__["AddServiceComponent"],
                _components_service_update_service_update_service_component__WEBPACK_IMPORTED_MODULE_41__["UpdateServiceComponent"],
                _components_service_delete_service_delete_service_component__WEBPACK_IMPORTED_MODULE_42__["DeleteServiceComponent"],
                _components_technical_technical_technical_component__WEBPACK_IMPORTED_MODULE_43__["TechnicalComponent"],
                _components_technical_add_technical_add_technical_component__WEBPACK_IMPORTED_MODULE_44__["AddTechnicalComponent"],
                _components_technical_update_technical_update_technical_component__WEBPACK_IMPORTED_MODULE_45__["UpdateTechnicalComponent"],
                _components_technical_delete_technical_delete_technical_component__WEBPACK_IMPORTED_MODULE_46__["DeleteTechnicalComponent"],
                _components_request_add_request_add_request_component__WEBPACK_IMPORTED_MODULE_47__["AddRequestComponent"],
                _components_request_update_request_update_request_component__WEBPACK_IMPORTED_MODULE_48__["UpdateRequestComponent"],
                _components_request_delete_request_delete_request_component__WEBPACK_IMPORTED_MODULE_49__["DeleteRequestComponent"],
                _components_request_request_request_component__WEBPACK_IMPORTED_MODULE_50__["RequestComponent"],
                _components_request_commentary_commentary_commentary_component__WEBPACK_IMPORTED_MODULE_51__["CommentaryComponent"],
                _components_request_detail_request_detail_request_component__WEBPACK_IMPORTED_MODULE_52__["DetailRequestComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_right_click_menu__WEBPACK_IMPORTED_MODULE_9__["ShContextMenuModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__["AngularEditorModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                ngx_currency__WEBPACK_IMPORTED_MODULE_11__["NgxCurrencyModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsModule"].forRoot(),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
                _services_canActivateService__WEBPACK_IMPORTED_MODULE_26__["CanActivateViaAuthGuard"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/complements/footer/footer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/complements/footer/footer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/complements/footer/footer.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/complements/footer/footer.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxlbWVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/complements/footer/footer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/complements/footer/footer.component.ts ***!
  \*******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/complements/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/complements/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/complements/header/header.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/complements/header/header.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div uk-sticky class=\"uk-navbar-container tm-navbar-container uk-active\">\r\n   <div class=\"uk-container uk-container-expand\">\r\n      <nav uk-navbar>\r\n         <div class=\"uk-navbar-left\">\r\n            <a id=\"sidebar_toggle\" class=\"uk-navbar-toggle\" uk-navbar-toggle-icon></a>\r\n            <!-- <a><img width=\"100\" height=\"100\" src=\"../../../../assets/images/logo.png\" alt=\"logo\"></a> -->\r\n            <a routerLink=\"\" class=\"uk-navbar-item uk-logo\">\r\n               ServiAsistimos\r\n            </a>\r\n         </div>\r\n         <div class=\"uk-navbar-right uk-light\">\r\n            <ul class=\"uk-navbar-nav\">\r\n               <li class=\"uk-active\">\r\n                  <a href=\"#\">\r\n                     {{user.user.name}} {{user.user.lastName}}\r\n                     <span uk-icon=\"chevron-down\"></span>\r\n                  </a>\r\n\r\n                  <div uk-dropdown=\"pos: bottom-right; mode: click; offset: -17;\">\r\n                     <ul class=\"uk-nav uk-navbar-dropdown-nav\">\r\n                        <li class=\"uk-nav-header\">Opciones</li>\r\n                        <li><a (click)=\"logout()\">Cerrar sesión</a></li>\r\n                     </ul>\r\n                  </div>\r\n               </li>\r\n            </ul>\r\n         </div>\r\n      </nav>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/complements/header/header.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/complements/header/header.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxlbWVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/complements/header/header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/complements/header/header.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/encrypt.service */ "./src/app/services/encrypt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(encryptService, router) {
        this.encryptService = encryptService;
        this.router = router;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = this.encryptService.getValue();
    };
    HeaderComponent.prototype.logout = function () {
        sessionStorage.clear();
        window.location.href = '';
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/complements/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/complements/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_3__["EncryptService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/complements/menu/menu.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/complements/menu/menu.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\" class=\"tm-sidebar-left uk-background-default\">\r\n    <div class=\"user\">\r\n        <img id=\"avatar\" width=\"200\" height=\"200\" class=\"uk-border-circle\" src=\"../../../../assets/images/logo.png\" />\r\n        <div class=\"uk-margin-top\"></div>\r\n        <h3>\r\n            <strong>\r\n                {{user.user.name}}{{user.user.lastName}}\r\n            </strong>\r\n        </h3>\r\n        <div id=\"email\" class=\"uk-text-truncate\">\r\n            <h6>{{user.user.email}}</h6>\r\n        </div>\r\n        <div id=\"email\" class=\"uk-text-truncate\">\r\n            <h6>{{user.user.role}}</h6>\r\n        </div>\r\n    </div>\r\n\r\n    <ul class=\"uk-nav uk-nav-default\">\r\n        <hr class=\"uk-divider-icon\">\r\n        <li style=\"text-align: center;\">\r\n            <a routerLink=\"/request\" routerLinkActive=\"active\">\r\n                <i class=\"fas fa-users\"></i>\r\n                <strong>  Requerimientos</strong>\r\n            </a>\r\n        </li>\r\n        <hr class=\"uk-divider-icon\">\r\n        <li style=\"text-align: center;\">\r\n            <a routerLink=\"/usuario\" routerLinkActive=\"active\">\r\n                <i class=\"fas fa-users\"></i>\r\n                <strong>  Usuarios</strong>\r\n            </a>\r\n        </li>\r\n        <hr class=\"uk-divider-icon\">\r\n        <li style=\"text-align: center;\">\r\n            <a routerLink=\"/costumer\"><i class=\"fas fa-cogs\"></i><b>  Clientes</b></a>\r\n        </li>\r\n        <hr class=\"uk-divider-icon\">\r\n        <li style=\"text-align: center;\">\r\n            <a routerLink=\"/insurance\"><i class=\"fas fa-car-crash\"></i><b>   Seguros</b></a>\r\n        </li>\r\n\r\n        <!-- <hr class=\"uk-divider-icon\">\r\n        <li style=\"text-align: center;\">\r\n            <a routerLink=\"/insurance/customer\"><i class=\"fas fa-car-crash\"></i><b>Seguros y Clientes</b></a>\r\n        </li> -->\r\n\r\n        <hr class=\"uk-divider-icon\">\r\n        <li style=\"text-align: center;\">\r\n            <a routerLink=\"/service\"><i class=\"fas fa-car-crash\"></i><b>   Servicios</b></a>\r\n        </li>\r\n        <hr class=\"uk-divider-icon\">\r\n        <li style=\"text-align: center;\">\r\n            <a routerLink=\"/technical\"><i class=\"fas fa-car-crash\"></i><b>   Tecnicos</b></a>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/complements/menu/menu.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/complements/menu/menu.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uk-nav-item {\n  list-style-type: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05); }\n\n.uk-nav-default > li > a {\n  color: #aeb2b7 !important;\n  text-decoration: none;\n  display: block;\n  padding: 10px 0 10px 15px;\n  font-size: 12px;\n  outline: 0;\n  transition: all 200ms ease-in; }\n\n.uk-nav-default > li > a:hover {\n  background: rgba(204, 202, 202, 0.411765);\n  color: #607D8B !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wbGVtZW50cy9tZW51L0Q6XFxQcm95ZWN0b3NcXEFuZ3VsYXJcXElST05HWU1BTkdVTEFSL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21wbGVtZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLHFCQUFxQjtFQUNyQixrREFBa0QsRUFBQTs7QUFHdEQ7RUFDSSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFVBQVU7RUFLViw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSx5Q0FBbUQ7RUFDbkQseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBsZW1lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAudWstbmF2LWl0ZW17XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG4gICAgfVxyXG5cclxuICAgIC51ay1uYXYtZGVmYXVsdD5saT5hIHtcclxuICAgICAgICBjb2xvcjogI2FlYjJiNyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcclxuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICB9XHJcbiAgICAudWstbmF2LWRlZmF1bHQ+bGk+YTpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwNCwgMjAyLCAyMDIsIDAuNDExNzY0NzA1ODgyMzUyOSk7XHJcbiAgICAgICAgY29sb3I6ICM2MDdEOEIgIWltcG9ydGFudDtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/complements/menu/menu.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/complements/menu/menu.component.ts ***!
  \***************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/encrypt.service */ "./src/app/services/encrypt.service.ts");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(encryptService) {
        this.encryptService = encryptService;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.user = this.encryptService.getValue();
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/complements/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/complements/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_3__["EncryptService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/complements/notfound/notfound.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/complements/notfound/notfound.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-background\">\r\n    <div class=\"uk-section-large\">\r\n        <div class=\"uk-container uk-container-large\">\r\n            <div uk-grid class=\"uk-grid-collapse uk-grid-match uk-child-width-1-1@s uk-child-width-1-4@l\">\r\n                <div></div>\r\n                <div>\r\n                    <div class=\"uk-card uk-card-default uk-card-body\">\r\n                        <h1 class=\"uk-heading-primary uk-text-middle\">404</h1>\r\n                        Page not found\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"uk-card uk-card-primary uk-card-body\">\r\n                        <h3 class=\"uk-card-title\">What is this page</h3>\r\n                        <p>\r\n                            Sometimes things go wrong and you get lost, the content you\r\n                            are trying to see does not exist or is no longer visible. Please\r\n                            contact the administrator if you belive it's an error.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/complements/notfound/notfound.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/complements/notfound/notfound.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxlbWVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/complements/notfound/notfound.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/complements/notfound/notfound.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/components/complements/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/components/complements/notfound/notfound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/costumer/add-costumer/add-costumer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/costumer/add-costumer/add-costumer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Agregar Cliente</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/costumer\">Clientes</a></li>\n      <li><span>Agregar Cliente</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Nombre Cliente</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"name\" />\n          </div>\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Telefono</label>\n            <input class=\"uk-input\" type=\"number\" formControlName=\"phone\" />\n          </div>\n\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Dirección</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"address\" />\n          </div>\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Ciudad</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"city\" />\n          </div>\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Departamento</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"department\" />\n          </div>\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/costumer/add-costumer/add-costumer.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/costumer/add-costumer/add-costumer.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29zdHVtZXIvYWRkLWNvc3R1bWVyL2FkZC1jb3N0dW1lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/costumer/add-costumer/add-costumer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/costumer/add-costumer/add-costumer.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddCostumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCostumerComponent", function() { return AddCostumerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/costumerService */ "./src/app/services/costumerService.ts");







var AddCostumerComponent = /** @class */ (function () {
    function AddCostumerComponent(generalService, formBuilder, route, router, costumerService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.costumerService = costumerService;
    }
    AddCostumerComponent.prototype.ngOnInit = function () {
        this.formGroupUser = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    AddCostumerComponent.prototype.captureInformation = function () {
        var data = {
            nameCostumer: this.formGroupUser.value.name,
            phone: this.formGroupUser.value.phone,
            address: this.formGroupUser.value.address,
            city: this.formGroupUser.value.city,
            department: this.formGroupUser.value.department,
        };
        this.addCostumer(data);
    };
    AddCostumerComponent.prototype.addCostumer = function (data) {
        var _this = this;
        this.costumerService.postCostumer(data).subscribe(function (res) {
            if (res.ok) {
                _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
                _this.router.navigate(['/costumer']);
            }
            else {
                _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
            }
        }, function (err) {
            _this.generalService.abrirMensaje('Error de Servidor', 'error');
        });
    };
    AddCostumerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-costumer',
            template: __webpack_require__(/*! ./add-costumer.component.html */ "./src/app/components/costumer/add-costumer/add-costumer.component.html"),
            styles: [__webpack_require__(/*! ./add-costumer.component.scss */ "./src/app/components/costumer/add-costumer/add-costumer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_5__["CostumerService"]])
    ], AddCostumerComponent);
    return AddCostumerComponent;
}());



/***/ }),

/***/ "./src/app/components/costumer/costumer/costumer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/costumer/costumer/costumer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Clientes</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><span>Clientes</span></li>\n    </ul>\n  </div>\n</div>\n\n<!-- End No data -->\n<div class=\"uk-section-small\" *ngIf=\"costumers.length == 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <h2>No hay datos <i class=\"fas fa-table\"></i></h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"costumers.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <div class=\"uk-navbar-left\">\n        <div class=\"uk-search uk-search-navbar\">\n          <span uk-search-icon></span>\n          <input class=\"uk-search-input\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Buscar...\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"uk-section-small\" *ngIf=\"costumers.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <div class=\"uk-overflow-auto\">\n          <table class=\"uk-table uk-table-small uk-table-divider\">\n            <thead>\n              <tr>\n                <th>Dirección</th>\n                <th>Ciudad</th>\n                <th>Departamento</th>\n                <th>Nombre Cliente</th>\n                <th>Telefono</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let costu of costumers | filter:term | paginate: { itemsPerPage: 10, currentPage: p }\" [shAttachMenu]=\"menu\"\n                (contextmenu)=\"leftClick(costu._id)\">\n                <td> {{costu.address}}</td>\n                <td>{{costu.city}}</td>\n                <td>{{costu.department}}</td>\n                <td>{{costu.nameCostumer}}</td>\n                <td>{{costu.phone}}</td>\n              </tr>\n            </tbody>\n          </table>\n          <div style=\"text-align: center;\">\n            <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\n            </pagination-controls>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"floating-button\" style=\"border-radius: 50%;\" routerLink=\"/costumer/add\">\n  <span class=\"plus-circle\" uk-icon=\"plus\"></span>\n</div>\n\n<!-- Clic derecho -->\n\n<sh-context-menu #menu>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/costumer/update/{{idCustomer}}\">\n      <span uk-icon=\"icon: pencil\"></span>\n      Editar Cliente\n    </div>\n  </ng-template>\n   <ng-template shContextMenuItem>\n    <div routerLink=\"/costumer/delete/{{idCustomer}}\">\n      <span uk-icon=\"icon: trash\"></span>\n      Eliminar Cliente\n    </div>\n  </ng-template>\n</sh-context-menu>"

/***/ }),

/***/ "./src/app/components/costumer/costumer/costumer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/costumer/costumer/costumer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29zdHVtZXIvY29zdHVtZXIvY29zdHVtZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/costumer/costumer/costumer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/costumer/costumer/costumer.component.ts ***!
  \********************************************************************/
/*! exports provided: CostumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostumerComponent", function() { return CostumerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/costumerService */ "./src/app/services/costumerService.ts");



var CostumerComponent = /** @class */ (function () {
    function CostumerComponent(costumerService) {
        this.costumerService = costumerService;
        this.costumers = [];
    }
    CostumerComponent.prototype.ngOnInit = function () {
        this.getCustomer();
    };
    CostumerComponent.prototype.getCustomer = function () {
        var _this = this;
        this.costumerService.getCostumer().subscribe(function (res) {
            _this.costumers = res.costumers;
        }, function (errror) {
        });
    };
    CostumerComponent.prototype.leftClick = function (id) {
        this.idCustomer = id;
    };
    CostumerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-costumer',
            template: __webpack_require__(/*! ./costumer.component.html */ "./src/app/components/costumer/costumer/costumer.component.html"),
            styles: [__webpack_require__(/*! ./costumer.component.scss */ "./src/app/components/costumer/costumer/costumer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_2__["CostumerService"]])
    ], CostumerComponent);
    return CostumerComponent;
}());



/***/ }),

/***/ "./src/app/components/costumer/delete-costumer/delete-costumer.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/costumer/delete-costumer/delete-costumer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n      <h1><span class=\"ion-speedometer\"></span> Eliminar Cliente</h1>\n      <ul class=\"uk-breadcrumb\">\n          <li><a href=\"\">Inicio</a></li>\n          <li><a routerLink=\"/costumer\"><span>Clientes</span></a></li>\n          <li><span>Eliminar Cliente</span></li>\n      </ul>\n  </div>\n</div>\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div class=\"uk-grid-small\" >\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <p class=\"uk-text-large\">Se eliminará el cliente de manera permanente</p>\n        <p uk-margin>\n            <button class=\"uk-button uk-button-default\" routerLink=\"/costumer\" >Cancelar</button>\n            <button class=\"uk-button uk-button-danger\" (click)=eliminar()>Aceptar</button>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/costumer/delete-costumer/delete-costumer.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/costumer/delete-costumer/delete-costumer.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29zdHVtZXIvZGVsZXRlLWNvc3R1bWVyL2RlbGV0ZS1jb3N0dW1lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/costumer/delete-costumer/delete-costumer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/costumer/delete-costumer/delete-costumer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DeleteCostumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCostumerComponent", function() { return DeleteCostumerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/costumerService */ "./src/app/services/costumerService.ts");





var DeleteCostumerComponent = /** @class */ (function () {
    function DeleteCostumerComponent(generalService, router, route, costumerService) {
        this.generalService = generalService;
        this.router = router;
        this.route = route;
        this.costumerService = costumerService;
    }
    DeleteCostumerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idCustomer = params['id']; });
    };
    DeleteCostumerComponent.prototype.eliminar = function () {
        var _this = this;
        this.generalService.abrirConfirmacion().subscribe(function (response) {
            _this.costumerService.deleteCustomer(_this.idCustomer).subscribe(function (res) {
                _this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
                _this.router.navigate(['/costumer']);
            }, function (error) {
            });
        }, function (err) {
            _this.generalService.abrirMensaje('Verificar información', 'error');
        });
    };
    DeleteCostumerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-costumer',
            template: __webpack_require__(/*! ./delete-costumer.component.html */ "./src/app/components/costumer/delete-costumer/delete-costumer.component.html"),
            styles: [__webpack_require__(/*! ./delete-costumer.component.scss */ "./src/app/components/costumer/delete-costumer/delete-costumer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_4__["CostumerService"]])
    ], DeleteCostumerComponent);
    return DeleteCostumerComponent;
}());



/***/ }),

/***/ "./src/app/components/costumer/update-costumer/update-costumer.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/costumer/update-costumer/update-costumer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Editar Cliente</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/costumer\">Clientes</a></li>\n      <li><span>Editar Cliente</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Nombre Cliente</label>\n            <input class=\"uk-input\" type=\"text\" [(ngModel)]=\"customer.nameCostumer\" formControlName=\"name\" />\n          </div>\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Telefono</label>\n            <input class=\"uk-input\" type=\"number\" [(ngModel)]=\"customer.phone\" formControlName=\"phone\" />\n          </div>\n\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Dirección</label>\n            <input class=\"uk-input\" type=\"text\" [(ngModel)]=\"customer.address\" formControlName=\"address\" />\n          </div>\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Ciudad</label>\n            <input class=\"uk-input\" type=\"text\"[(ngModel)]=\"customer.city\"  formControlName=\"city\" />\n          </div>\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Departamento</label>\n            <input class=\"uk-input\" type=\"text\" [(ngModel)]=\"customer.department\" formControlName=\"department\" />\n          </div>\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/costumer/update-costumer/update-costumer.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/costumer/update-costumer/update-costumer.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29zdHVtZXIvdXBkYXRlLWNvc3R1bWVyL3VwZGF0ZS1jb3N0dW1lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/costumer/update-costumer/update-costumer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/costumer/update-costumer/update-costumer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UpdateCostumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCostumerComponent", function() { return UpdateCostumerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/costumerService */ "./src/app/services/costumerService.ts");







var UpdateCostumerComponent = /** @class */ (function () {
    function UpdateCostumerComponent(generalService, formBuilder, costumerService, router, route) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.costumerService = costumerService;
        this.router = router;
        this.route = route;
        this.customer = new Object();
    }
    UpdateCostumerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idCustomer = params['id']; });
        this.formGroupUser = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.getCustomerById();
    };
    UpdateCostumerComponent.prototype.getCustomerById = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.costumerService.getCostumerById(this.idCustomer).subscribe(function (res) {
                    _this.customer = res.costumer;
                }, function (err) { });
                return [2 /*return*/];
            });
        });
    };
    UpdateCostumerComponent.prototype.captureInformation = function () {
        var data = {
            nameCostumer: this.formGroupUser.value.name,
            phone: this.formGroupUser.value.phone,
            address: this.formGroupUser.value.address,
            city: this.formGroupUser.value.city,
            department: this.formGroupUser.value.department,
        };
        this.updateCostumer(data);
    };
    UpdateCostumerComponent.prototype.updateCostumer = function (data) {
        var _this = this;
        this.costumerService.updateCostumer(data, this.idCustomer).subscribe(function (res) {
            if (res.ok) {
                _this.generalService.abrirMensaje('Actualizado Correctamente', 'success');
                _this.router.navigate(['/costumer']);
            }
            else {
                _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
            }
        }, function (err) {
            _this.generalService.abrirMensaje('Error de Servidor', 'error');
        });
    };
    UpdateCostumerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-costumer',
            template: __webpack_require__(/*! ./update-costumer.component.html */ "./src/app/components/costumer/update-costumer/update-costumer.component.html"),
            styles: [__webpack_require__(/*! ./update-costumer.component.scss */ "./src/app/components/costumer/update-costumer/update-costumer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_5__["CostumerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UpdateCostumerComponent);
    return UpdateCostumerComponent;
}());



/***/ }),

/***/ "./src/app/components/inicio/inicio.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\r\n  <div class=\"uk-container uk-container-large\">\r\n    <h1><span class=\"ion-speedometer\"></span> Inicio</h1>\r\n    <ul class=\"uk-breadcrumb\">\r\n      <li><a>Inicio</a></li>\r\n      <li><span>Inicio</span></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"uk-section-small\">\r\n  <div class=\"uk-container uk-container-large\">\r\n    <div uk-grid class=\"uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-4@xl\">\r\n      <div>\r\n        <div class=\"uk-card uk-card-default uk-card-body\">\r\n          <span class=\"statistics-text\">New Registrations</span><br />\r\n          <span class=\"statistics-number\">\r\n            14.164\r\n            <span class=\"uk-label uk-label-success\">\r\n              8% <span class=\"ion-arrow-up-c\"></span>\r\n            </span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"uk-card uk-card-default uk-card-body\">\r\n          <span class=\"statistics-text\">Total Invoices</span><br />\r\n          <span class=\"statistics-number\">\r\n            2.316\r\n            <span class=\"uk-label uk-label-success\">\r\n              37% <span class=\"ion-arrow-up-c\"></span>\r\n            </span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"uk-card uk-card-default uk-card-body\">\r\n          <span class=\"statistics-text\">Total Income</span><br />\r\n          <span class=\"statistics-number\">\r\n            6.384€\r\n            <span class=\"uk-label uk-label-success\">\r\n              26% <span class=\"ion-arrow-up-c\"></span>\r\n            </span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/inicio/inicio.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/inicio/inicio.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.ts ***!
  \*******************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");



var InicioComponent = /** @class */ (function () {
    function InicioComponent(generalService) {
        this.generalService = generalService;
        this.requerimientos = [];
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent.prototype.exportar = function () {
        this.generalService.exportAsExcelFile(this.requerimientos, 'requerimientos' + new Date());
    };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/components/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/components/inicio/inicio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Relacionar Seguro y Cliente</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/insurance/customer\">Seguro y Cliente</a></li>\n      <li><span>Relacionar Seguro y Cliente</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid  (ngSubmit)=\"captureInformation()\">\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Seguro</label>\n            <select class=\"uk-select\" formControlName=\"insurance\">\n              <option *ngFor=\"let insu of insurance\" value=\"{{insu._id}}\">{{insu.nameInsurance}}</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Cliente</label>\n            <select class=\"uk-select\" formControlName=\"customer\">\n              <option *ngFor=\"let custom of costumers\" value=\"{{custom._id}}\">{{custom.nameCostumer}}</option>\n            </select>\n          </div>\n\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlLWN1c3RvbWVyL2FkZGluc3VyYW5jZWN1c3RvbWVyL2FkZGluc3VyYW5jZWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AddinsurancecustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddinsurancecustomerComponent", function() { return AddinsurancecustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/insuranceService */ "./src/app/services/insuranceService.ts");
/* harmony import */ var src_app_services_insuranceCustomerService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/insuranceCustomerService */ "./src/app/services/insuranceCustomerService.ts");
/* harmony import */ var src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/costumerService */ "./src/app/services/costumerService.ts");









var AddinsurancecustomerComponent = /** @class */ (function () {
    function AddinsurancecustomerComponent(generalService, formBuilder, route, router, insuranceCustomerService, insuranceService, costumerService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.insuranceCustomerService = insuranceCustomerService;
        this.insuranceService = insuranceService;
        this.costumerService = costumerService;
        this.costumers = [];
        this.insurance = [];
    }
    AddinsurancecustomerComponent.prototype.ngOnInit = function () {
        this.formGroupUser = this.formBuilder.group({
            insurance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            customer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.getInsurance();
        this.getCustomer();
    };
    AddinsurancecustomerComponent.prototype.getInsurance = function () {
        var _this = this;
        this.insuranceService.getInsurance().subscribe(function (res) {
            _this.insurance = res.insurance;
            console.log(_this.insurance);
        }, function (err) {
            console.log(err);
        });
    };
    AddinsurancecustomerComponent.prototype.getCustomer = function () {
        var _this = this;
        this.costumerService.getCostumer().subscribe(function (res) {
            _this.costumers = res.costumers;
            console.log(_this.costumers);
        }, function (errror) {
            console.log(errror);
        });
    };
    AddinsurancecustomerComponent.prototype.captureInformation = function () {
        var data = {
            costumer: this.formGroupUser.value.customer,
            insurance: this.formGroupUser.value.insurance,
        };
        console.log(data);
        this.agregar(data);
    };
    AddinsurancecustomerComponent.prototype.agregar = function (data) {
        var _this = this;
        this.insuranceCustomerService.postInsuranceCustomer(data).subscribe(function (res) {
            console.log(res);
            _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
            _this.router.navigate(['/insurance/customer/']);
        }, function (err) {
            _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        });
    };
    AddinsurancecustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addinsurancecustomer',
            template: __webpack_require__(/*! ./addinsurancecustomer.component.html */ "./src/app/components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component.html"),
            styles: [__webpack_require__(/*! ./addinsurancecustomer.component.scss */ "./src/app/components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_insuranceCustomerService__WEBPACK_IMPORTED_MODULE_6__["InsuranceCustomerService"],
            src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_5__["InsuranceService"],
            src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_7__["CostumerService"]])
    ], AddinsurancecustomerComponent);
    return AddinsurancecustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  deleteinsurancecustomer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlLWN1c3RvbWVyL2RlbGV0ZWluc3VyYW5jZWN1c3RvbWVyL2RlbGV0ZWluc3VyYW5jZWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: DeleteinsurancecustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteinsurancecustomerComponent", function() { return DeleteinsurancecustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteinsurancecustomerComponent = /** @class */ (function () {
    function DeleteinsurancecustomerComponent() {
    }
    DeleteinsurancecustomerComponent.prototype.ngOnInit = function () {
    };
    DeleteinsurancecustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deleteinsurancecustomer',
            template: __webpack_require__(/*! ./deleteinsurancecustomer.component.html */ "./src/app/components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component.html"),
            styles: [__webpack_require__(/*! ./deleteinsurancecustomer.component.scss */ "./src/app/components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeleteinsurancecustomerComponent);
    return DeleteinsurancecustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance-customer/insurancecustomer/insurancecustomer.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/insurancecustomer/insurancecustomer.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Seguros y Clientes</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><span>Seguros y Clientes</span></li>\n    </ul>\n  </div>\n</div>\n\n<!-- End No data -->\n<div class=\"uk-section-small\" *ngIf=\"insuranceCustomer.length == 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <h2>No hay datos <i class=\"fas fa-table\"></i></h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"insuranceCustomer.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <div class=\"uk-navbar-left\">\n        <div class=\"uk-search uk-search-navbar\">\n          <span uk-search-icon></span>\n          <input class=\"uk-search-input\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Buscar...\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"insuranceCustomer.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n\n    <div class=\"uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center\" uk-grid>\n\n      <div *ngFor=\"let insu of insuranceCustomerS | filter:term | paginate: { itemsPerPage: 6, currentPage: p }\"\n        [shAttachMenu]=\"menu\" (contextmenu)=\"leftClick(insu._id)\">\n        <div class=\"uk-card uk-card-default uk-card-body\">\n          {{insu.nameInsurance}}\n          <img src=\"../../../../assets/images/post.jpg\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"insuranceCustomer.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <div style=\"text-align: center;\">\n          <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\n          </pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div id=\"floating-button\" style=\"border-radius: 50%;\" routerLink=\"/insurance/customer/add\">\n  <span class=\"plus-circle\" uk-icon=\"plus\"></span>\n</div>\n\n<!-- Clic derecho -->\n\n<sh-context-menu #menu>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/insurance/update/{{idInsurance}}\">\n      <span uk-icon=\"icon: trash\"></span>\n      Eliminar Seguro\n    </div>\n  </ng-template>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/insurance/delete/{{idInsurance}}\">\n      <span uk-icon=\"icon: pencil\"></span>\n      Editar Seguro\n    </div>\n  </ng-template>\n</sh-context-menu>"

/***/ }),

/***/ "./src/app/components/insurance-customer/insurancecustomer/insurancecustomer.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/insurancecustomer/insurancecustomer.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlLWN1c3RvbWVyL2luc3VyYW5jZWN1c3RvbWVyL2luc3VyYW5jZWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/insurance-customer/insurancecustomer/insurancecustomer.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/insurancecustomer/insurancecustomer.component.ts ***!
  \************************************************************************************************/
/*! exports provided: InsurancecustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurancecustomerComponent", function() { return InsurancecustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_insuranceCustomerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/insuranceCustomerService */ "./src/app/services/insuranceCustomerService.ts");



var InsurancecustomerComponent = /** @class */ (function () {
    function InsurancecustomerComponent(insuranceCustomerService) {
        this.insuranceCustomerService = insuranceCustomerService;
        this.insuranceCustomer = [];
    }
    InsurancecustomerComponent.prototype.ngOnInit = function () {
        this.getInsurance();
    };
    InsurancecustomerComponent.prototype.getInsurance = function () {
        var _this = this;
        this.insuranceCustomerService.getInsuranceCustomer().subscribe(function (res) {
            _this.insuranceCustomer = res.insurancesCostumers;
            console.log(_this.insuranceCustomer);
        }, function (err) {
            console.log(err);
        });
    };
    InsurancecustomerComponent.prototype.leftClick = function (id) {
        this.idInsuranceCustomer = id;
    };
    InsurancecustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insurancecustomer',
            template: __webpack_require__(/*! ./insurancecustomer.component.html */ "./src/app/components/insurance-customer/insurancecustomer/insurancecustomer.component.html"),
            styles: [__webpack_require__(/*! ./insurancecustomer.component.scss */ "./src/app/components/insurance-customer/insurancecustomer/insurancecustomer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_insuranceCustomerService__WEBPACK_IMPORTED_MODULE_2__["InsuranceCustomerService"]])
    ], InsurancecustomerComponent);
    return InsurancecustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  updateinsurancecustomer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlLWN1c3RvbWVyL3VwZGF0ZWluc3VyYW5jZWN1c3RvbWVyL3VwZGF0ZWluc3VyYW5jZWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: UpdateinsurancecustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateinsurancecustomerComponent", function() { return UpdateinsurancecustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateinsurancecustomerComponent = /** @class */ (function () {
    function UpdateinsurancecustomerComponent() {
    }
    UpdateinsurancecustomerComponent.prototype.ngOnInit = function () {
    };
    UpdateinsurancecustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateinsurancecustomer',
            template: __webpack_require__(/*! ./updateinsurancecustomer.component.html */ "./src/app/components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component.html"),
            styles: [__webpack_require__(/*! ./updateinsurancecustomer.component.scss */ "./src/app/components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateinsurancecustomerComponent);
    return UpdateinsurancecustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance/add-insurance/add-insurance.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/insurance/add-insurance/add-insurance.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Agregar Seguro</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/insurance\">Seguros</a></li>\n      <li><span>Agregar Seguro</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid  (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Nombre Seguro</label>\n            <input class=\"uk-input\" type=\"text\"  formControlName=\"name\"/>\n          </div>\n\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/insurance/add-insurance/add-insurance.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/insurance/add-insurance/add-insurance.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlL2FkZC1pbnN1cmFuY2UvYWRkLWluc3VyYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/insurance/add-insurance/add-insurance.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/insurance/add-insurance/add-insurance.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddInsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInsuranceComponent", function() { return AddInsuranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/insuranceService */ "./src/app/services/insuranceService.ts");







var AddInsuranceComponent = /** @class */ (function () {
    function AddInsuranceComponent(generalService, formBuilder, route, router, insuranceServide) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.insuranceServide = insuranceServide;
    }
    AddInsuranceComponent.prototype.ngOnInit = function () {
        this.formGroupUser = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    AddInsuranceComponent.prototype.captureInformation = function () {
        var data = {
            nameInsurance: this.formGroupUser.value.name,
        };
        this.agregar(data);
    };
    AddInsuranceComponent.prototype.agregar = function (data) {
        var _this = this;
        this.insuranceServide.postInsurance(data).subscribe(function (res) {
            _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
            _this.router.navigate(['/insurance']);
        }, function (err) {
            _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        });
    };
    AddInsuranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-insurance',
            template: __webpack_require__(/*! ./add-insurance.component.html */ "./src/app/components/insurance/add-insurance/add-insurance.component.html"),
            styles: [__webpack_require__(/*! ./add-insurance.component.scss */ "./src/app/components/insurance/add-insurance/add-insurance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_5__["InsuranceService"]])
    ], AddInsuranceComponent);
    return AddInsuranceComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance/delete-insurance/delete-insurance.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/insurance/delete-insurance/delete-insurance.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n      <h1><span class=\"ion-speedometer\"></span> Eliminar Seguro</h1>\n      <ul class=\"uk-breadcrumb\">\n          <li><a routerLink=\"\">Inicio</a></li>\n          <li><a routerLink=\"/insurance\"><span>Seguros</span></a></li>\n          <li><span>Eliminar Seguro</span></li>\n      </ul>\n  </div>\n</div>\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div class=\"uk-grid-small\" >\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <p class=\"uk-text-large\">Se eliminará el seguro de manera permanente</p>\n        <p uk-margin>\n            <button class=\"uk-button uk-button-default\" routerLink=\"/insurance\" >Cancelar</button>\n            <button class=\"uk-button uk-button-danger\" (click)=eliminar()>Aceptar</button>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/insurance/delete-insurance/delete-insurance.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/insurance/delete-insurance/delete-insurance.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlL2RlbGV0ZS1pbnN1cmFuY2UvZGVsZXRlLWluc3VyYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/insurance/delete-insurance/delete-insurance.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/insurance/delete-insurance/delete-insurance.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DeleteInsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteInsuranceComponent", function() { return DeleteInsuranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/insuranceService */ "./src/app/services/insuranceService.ts");





var DeleteInsuranceComponent = /** @class */ (function () {
    function DeleteInsuranceComponent(generalService, router, route, insuranceService) {
        this.generalService = generalService;
        this.router = router;
        this.route = route;
        this.insuranceService = insuranceService;
    }
    DeleteInsuranceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idInsurance = params['id']; });
    };
    DeleteInsuranceComponent.prototype.eliminar = function () {
        var _this = this;
        this.generalService.abrirConfirmacion().subscribe(function (response) {
            _this.insuranceService.deleteInsurance(_this.idInsurance).subscribe(function (res) {
                _this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
                _this.router.navigate(['/insurance']);
            }, function (error) {
            });
        }, function (err) {
            _this.generalService.abrirMensaje('Verificar información', 'error');
        });
    };
    DeleteInsuranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-insurance',
            template: __webpack_require__(/*! ./delete-insurance.component.html */ "./src/app/components/insurance/delete-insurance/delete-insurance.component.html"),
            styles: [__webpack_require__(/*! ./delete-insurance.component.scss */ "./src/app/components/insurance/delete-insurance/delete-insurance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_4__["InsuranceService"]])
    ], DeleteInsuranceComponent);
    return DeleteInsuranceComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance/insurance/insurance.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/insurance/insurance/insurance.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Seguros</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><span>Seguros</span></li>\n    </ul>\n  </div>\n</div>\n\n<!-- End No data -->\n<div class=\"uk-section-small\" *ngIf=\"insurance.length == 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <h2>No hay datos <i class=\"fas fa-table\"></i></h2>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\" *ngIf=\"insurance.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <div class=\"uk-navbar-left\">\n        <div class=\"uk-search uk-search-navbar\">\n          <span uk-search-icon></span>\n          <input class=\"uk-search-input\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Buscar...\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"insurance.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n\n    <div class=\"uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center\" uk-grid>\n\n      <div *ngFor=\"let insu of insurance | filter:term  | paginate: { itemsPerPage: 6, currentPage: p }\"\n        [shAttachMenu]=\"menu\" (contextmenu)=\"leftClick(insu._id)\">\n        <div class=\"uk-card uk-card-default uk-card-body\">\n          {{insu.nameInsurance}}\n          <img src=\"../../../../assets/images/post.jpg\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"insurance.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <div style=\"text-align: center;\">\n          <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\n          </pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div id=\"floating-button\" style=\"border-radius: 50%;\" routerLink=\"/insurance/add\">\n  <span class=\"plus-circle\" uk-icon=\"plus\"></span>\n</div>\n\n<!-- Clic derecho -->\n\n<sh-context-menu #menu>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/insurance/update/{{idInsurance}}\">\n      <span uk-icon=\"icon: trash\"></span>\n      Eliminar Seguro\n    </div>\n  </ng-template>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/insurance/delete/{{idInsurance}}\">\n      <span uk-icon=\"icon: pencil\"></span>\n      Editar Seguro\n    </div>\n  </ng-template>\n</sh-context-menu>"

/***/ }),

/***/ "./src/app/components/insurance/insurance/insurance.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/insurance/insurance/insurance.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZS9pbnN1cmFuY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/insurance/insurance/insurance.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/insurance/insurance/insurance.component.ts ***!
  \***********************************************************************/
/*! exports provided: InsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceComponent", function() { return InsuranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/insuranceService */ "./src/app/services/insuranceService.ts");



var InsuranceComponent = /** @class */ (function () {
    function InsuranceComponent(insuranceService) {
        this.insuranceService = insuranceService;
        this.insurance = [];
        this.idInsurance = [];
    }
    InsuranceComponent.prototype.ngOnInit = function () {
        this.getInsurance();
    };
    InsuranceComponent.prototype.getInsurance = function () {
        var _this = this;
        this.insuranceService.getInsurance().subscribe(function (res) {
            _this.insurance = res.insurance;
        }, function (err) {
        });
    };
    InsuranceComponent.prototype.leftClick = function (id) {
        this.idInsurance = id;
    };
    InsuranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insurance',
            template: __webpack_require__(/*! ./insurance.component.html */ "./src/app/components/insurance/insurance/insurance.component.html"),
            styles: [__webpack_require__(/*! ./insurance.component.scss */ "./src/app/components/insurance/insurance/insurance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_2__["InsuranceService"]])
    ], InsuranceComponent);
    return InsuranceComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance/update-insurance/update-insurance.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/insurance/update-insurance/update-insurance.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Editar Seguro</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/insurance\">Seguros</a></li>\n      <li><span>Editar Seguro</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid  (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Nombre Seguro</label>\n            <input class=\"uk-input\" type=\"text\" [(ngModel)]=\"insurance.nameInsurance\" formControlName=\"name\"/>\n          </div>\n\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/insurance/update-insurance/update-insurance.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/insurance/update-insurance/update-insurance.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlL3VwZGF0ZS1pbnN1cmFuY2UvdXBkYXRlLWluc3VyYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/insurance/update-insurance/update-insurance.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/insurance/update-insurance/update-insurance.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UpdateInsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInsuranceComponent", function() { return UpdateInsuranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/insuranceService */ "./src/app/services/insuranceService.ts");







var UpdateInsuranceComponent = /** @class */ (function () {
    function UpdateInsuranceComponent(generalService, formBuilder, route, router, insuranceServide) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.insuranceServide = insuranceServide;
        this.insurance = new Object();
    }
    UpdateInsuranceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idInsurance = params['id']; });
        this.formGroupUser = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.getCustomerById();
    };
    UpdateInsuranceComponent.prototype.getCustomerById = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.insuranceServide.getInsuranceById(this.idInsurance).subscribe(function (res) {
                    _this.insurance = res.Insurance;
                }, function (err) { });
                return [2 /*return*/];
            });
        });
    };
    UpdateInsuranceComponent.prototype.captureInformation = function () {
        var data = {
            nameInsurance: this.formGroupUser.value.name,
        };
        this.agregar(data);
    };
    UpdateInsuranceComponent.prototype.agregar = function (data) {
        var _this = this;
        this.insuranceServide.updateInsurance(data, this.idInsurance).subscribe(function (res) {
            _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
            _this.router.navigate(['/insurance']);
        }, function (err) {
            _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        });
    };
    UpdateInsuranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-insurance',
            template: __webpack_require__(/*! ./update-insurance.component.html */ "./src/app/components/insurance/update-insurance/update-insurance.component.html"),
            styles: [__webpack_require__(/*! ./update-insurance.component.scss */ "./src/app/components/insurance/update-insurance/update-insurance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_5__["InsuranceService"]])
    ], UpdateInsuranceComponent);
    return UpdateInsuranceComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <title>UI Admin - Clean and responsive administration panel</title>\r\n\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"description\" content=\"Clean and responsive administration panel\">\r\n    <meta name=\"keywords\" content=\"Admin,Panel,HTML,CSS,XML,JavaScript\">\r\n    <meta name=\"author\" content=\"Erik Campobadal\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\r\n\r\n</head>\r\n\r\n<body style=\"background: url('assets/main/img/bglogin.jpeg');\">\r\n\r\n    <div class=\"content-background\">\r\n        <div class=\"uk-section-large\">\r\n            <div class=\"uk-container uk-container-large\">\r\n                <div uk-grid class=\"uk-child-width-1-1@s uk-child-width-2-3@l\">\r\n                    <div class=\"uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl\">\r\n                        <div class=\"outer\">\r\n                            <div class=\"middle\">\r\n                                <div class=\"uk-card uk-card-default login-body inner\">\r\n                                    <div class=\"uk-card-body\">\r\n                                        <h2 style=\"text-align: center\">\r\n                                           ServiAsistimos\r\n                                        </h2><br />\r\n                                        <form [formGroup]=\"data\">\r\n                                            <fieldset class=\"uk-fieldset uk-flex uk-flex-center\">\r\n\r\n                                                <div class=\"uk-margin\">\r\n                                                    <div class=\"uk-position-relative\">\r\n                                                        <label class=\"uk-form-icon\" uk-icon=\"icon: mail\"></label>\r\n                                                        <input formControlName=\"email\" class=\"uk-input\" type=\"email\"\r\n                                                            placeholder=\"Email\">\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"uk-margin\">\r\n                                                    <div class=\"uk-position-relative\">\r\n                                                        <label class=\"uk-form-icon\" uk-icon=\"icon: lock\"></label>\r\n                                                        <input formControlName=\"password\" class=\"uk-input\"\r\n                                                            type=\"password\" placeholder=\"Contraseña\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"uk-margin uk-flex uk-flex-center\">\r\n                                                    <button type=\"submit\" class=\"uk-button uk-button-primary\"\r\n                                                        [disabled]=\"!data.valid\" (click)=\"login()\">\r\n                                                        <span class=\"ion-forward\"></span>&nbsp; Ingresar\r\n                                                    </button>\r\n                                                </div>\r\n\r\n                                            </fieldset>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"uk-width-1-1@s uk-width-1-5@l uk-width-1-3@xl\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  height: 100%; }\n\n.content-background {\n  background: none; }\n\n.uk-section-large {\n  padding-top: 0 !important; }\n\n.login-body {\n  margin-top: 40px; }\n\n.outer {\n  display: table;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.middle {\n  display: table-cell;\n  vertical-align: middle; }\n\n.inner {\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n  /*whatever width you want*/ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9EOlxcUHJveWVjdG9zXFxBbmd1bGFyXFxJUk9OR1lNQU5HVUxBUi9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQXlCLEVBQUE7O0FBSTdCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMEJBQUEsRUFBMkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnQtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi51ay1zZWN0aW9uLWxhcmdle1xyXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIC8vcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2luLWJvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ub3V0ZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmlubmVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIC8qd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_userService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userService */ "./src/app/services/userService.ts");
/* harmony import */ var src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/encrypt.service */ "./src/app/services/encrypt.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(generalService, router, userService, formBuilder, encryptService) {
        this.generalService = generalService;
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.encryptService = encryptService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.data = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    LoginComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    'email': this.data.value.email,
                    'password': this.data.value.password
                };
                this.userService.login(data).subscribe(function (res) {
                    if (res.ok) {
                        _this.encryptService.setValue(res);
                        _this.generalService.abrirMensaje('Ingreso correcto al sistema', 'success');
                        window.location.href = '';
                    }
                    else {
                        _this.generalService.abrirMensaje('Verificar información', 'error');
                    }
                }, function (err) {
                    _this.generalService.abrirMensaje('Verificar información', 'error');
                });
                return [2 /*return*/];
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_userService__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__["EncryptService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/request/add-request/add-request.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/request/add-request/add-request.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Agregar Requerimiento</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/request\">Requerimientos</a></li>\n      <li><span>Agregar Requerimiento</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Direccion</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"address\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Ciudad</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"city\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Departamento</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"department\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Referencia</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"reference\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Celular</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"phone\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Serviasitimos</label>\n            <input currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\" type=\"text\"\n              formControlName=\"valueAsistimos\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Cliente</label>\n            <input currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\" type=\"text\"\n              formControlName=\"valueCostumer\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Materiales</label>\n            <input currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\" type=\"text\"\n              formControlName=\"valueMaterials\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Mano de Obra</label>\n            <input currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\" type=\"text\"\n              formControlName=\"workforce\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Factura</label>\n            <input class=\"uk-input\" type=\"number\" formControlName=\"bill\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Estado Requerimiento</label>\n            <select class=\"uk-select\" formControlName=\"state\">\n              <option value=\"EN PROGRESO\">EN PROGRESO</option>\n              <option value=\"PENDIENTE\">PENDIENTE</option>\n              <option value=\"TERMINADO\">TERMINADO</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Servicio</label>\n            <select class=\"uk-select\" formControlName=\"service\">\n              <option *ngFor=\"let serv of service\" value=\"{{serv._id}}\">\n                {{serv.nameService}}</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Cliente</label>\n            <select class=\"uk-select\" formControlName=\"costumer\">\n              <option *ngFor=\"let custom of costumers\" value=\"{{custom._id}}\">\n                {{custom.nameCostumer}}</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Tecnico</label>\n            <select class=\"uk-select\" formControlName=\"technical\">\n              <option *ngFor=\"let tech of technical\" value=\"{{tech._id}}\">\n                {{tech.nameTechnical}} {{tech.lastNameTechnical}}</option>\n            </select>\n          </div>\n\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Seguro</label>\n            <select class=\"uk-select\" formControlName=\"insurance\">\n              <option *ngFor=\"let insu of insurance\" value=\"{{insu._id}}\">{{insu.nameInsurance}}</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Comentario Inicial</label>\n            <textarea class=\"uk-textarea\" formControlName=\"commentary\"></textarea>\n          </div>\n\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Materiales</label>\n            <textarea class=\"uk-textarea\" formControlName=\"materials\"></textarea>\n          </div>\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/request/add-request/add-request.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/request/add-request/add-request.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC9hZGQtcmVxdWVzdC9hZGQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/request/add-request/add-request.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/request/add-request/add-request.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRequestComponent", function() { return AddRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");
/* harmony import */ var src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/servicesService */ "./src/app/services/servicesService.ts");
/* harmony import */ var src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/costumerService */ "./src/app/services/costumerService.ts");
/* harmony import */ var src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/techicalService */ "./src/app/services/techicalService.ts");
/* harmony import */ var src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/encrypt.service */ "./src/app/services/encrypt.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/insuranceService */ "./src/app/services/insuranceService.ts");













var AddRequestComponent = /** @class */ (function () {
    function AddRequestComponent(generalService, formBuilder, route, router, requestService, serviceService, costumerService, technicalService, encryptService, insuranceService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.requestService = requestService;
        this.serviceService = serviceService;
        this.costumerService = costumerService;
        this.technicalService = technicalService;
        this.encryptService = encryptService;
        this.insuranceService = insuranceService;
        this.costumers = [];
        this.service = [];
        this.insurance = [];
        this.technical = [];
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_10__["User"]();
    }
    AddRequestComponent.prototype.ngOnInit = function () {
        this.initializeList();
        this.user = this.encryptService.getValue();
        this.formGroupUser = this.formBuilder.group({
            valueMaterials: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            valueAsistimos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            valueCostumer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reference: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            costumer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            service: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            technical: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            insurance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            commentary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            workforce: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bill: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            materials: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    AddRequestComponent.prototype.initializeList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getService();
                this.getTechnical();
                this.getCustomer();
                this.getInsurance();
                return [2 /*return*/];
            });
        });
    };
    AddRequestComponent.prototype.getService = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.serviceService.getService().subscribe(function (res) {
                    _this.service = res.services;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    AddRequestComponent.prototype.getCustomer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.costumerService.getCostumer().subscribe(function (res) {
                    _this.costumers = res.costumers;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    AddRequestComponent.prototype.getTechnical = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.technicalService.getTechnical().subscribe(function (res) {
                    _this.technical = res.technical;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    AddRequestComponent.prototype.getInsurance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.insuranceService.getInsurance().subscribe(function (res) {
                    _this.insurance = res.insurance;
                }, function (err) {
                });
                return [2 /*return*/];
            });
        });
    };
    AddRequestComponent.prototype.captureInformation = function () {
        var _this = this;
        var insurance = this.insurance.filter(function (x) { return x._id === _this.formGroupUser.value.insurance; });
        var service = this.service.filter(function (x) { return x._id === _this.formGroupUser.value.service; });
        var technical = this.technical.filter(function (x) { return x._id === _this.formGroupUser.value.technical; });
        var costumer = this.costumers.filter(function (x) { return x._id === _this.formGroupUser.value.costumer; });
        var data = {
            valueMaterials: this.formGroupUser.value.valueMaterials,
            valueAsistimos: this.formGroupUser.value.valueAsistimos,
            valueCostumer: this.formGroupUser.value.valueCostumer,
            reference: this.formGroupUser.value.reference,
            phone: this.formGroupUser.value.phone,
            address: this.formGroupUser.value.address,
            city: this.formGroupUser.value.city,
            department: this.formGroupUser.value.department,
            state: this.formGroupUser.value.state,
            costumer: this.formGroupUser.value.costumer,
            service: this.formGroupUser.value.service,
            technical: this.formGroupUser.value.technical,
            insurance: this.formGroupUser.value.insurance,
            user: this.user.user._id,
            commentary: this.formGroupUser.value.commentary,
            nameCostumer: costumer[0].nameCostumer,
            nameService: service[0].nameService,
            nameTechnical: technical[0].nameTechnical,
            nameInsurance: insurance[0].nameInsurance,
            lastnameTechnical: technical[0].lastNameTechnical,
            workforce: this.formGroupUser.value.workforce,
            bill: this.formGroupUser.value.bill,
            materials: this.formGroupUser.value.materials
        };
        this.agregar(data);
    };
    AddRequestComponent.prototype.agregar = function (data) {
        var _this = this;
        this.requestService.postRequest(data).subscribe(function (res) {
            if (res.ok) {
                _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
                _this.router.navigate(['/request']);
            }
            else {
                _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
            }
        }, function (err) {
            _this.generalService.abrirMensaje('Error de Servidor', 'error');
        });
    };
    AddRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-request',
            template: __webpack_require__(/*! ./add-request.component.html */ "./src/app/components/request/add-request/add-request.component.html"),
            styles: [__webpack_require__(/*! ./add-request.component.scss */ "./src/app/components/request/add-request/add-request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_requestService__WEBPACK_IMPORTED_MODULE_5__["RequestService"],
            src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_6__["ServicesService"],
            src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_7__["CostumerService"],
            src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_8__["TechnicalService"],
            src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_9__["EncryptService"],
            src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_11__["InsuranceService"]])
    ], AddRequestComponent);
    return AddRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/request/commentary/commentary/commentary.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/request/commentary/commentary/commentary.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Agregar Comentario</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/request\">Requerimientos</a></li>\n      <li><span>Agregar Comentario</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Comentario</label>\n            <textarea class=\"uk-textarea\" formControlName=\"commentary\"></textarea>\n          </div>\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/request/commentary/commentary/commentary.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/request/commentary/commentary/commentary.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC9jb21tZW50YXJ5L2NvbW1lbnRhcnkvY29tbWVudGFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/request/commentary/commentary/commentary.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/request/commentary/commentary/commentary.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CommentaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentaryComponent", function() { return CommentaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/encrypt.service */ "./src/app/services/encrypt.service.ts");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");







var CommentaryComponent = /** @class */ (function () {
    function CommentaryComponent(generalService, formBuilder, router, route, requestService, encryptService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.requestService = requestService;
        this.encryptService = encryptService;
        this.idUser = this.encryptService.getValue().user;
    }
    CommentaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idRequest = params['id']; });
        this.formGroupUser = this.formBuilder.group({
            commentary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    CommentaryComponent.prototype.captureInformation = function () {
        var data = {
            commentary: this.formGroupUser.value.commentary,
            request: this.idRequest,
            user: this.idUser._id
        };
        this.addCommentary(data);
    };
    CommentaryComponent.prototype.addCommentary = function (data) {
        var _this = this;
        this.requestService.addCommentary(data).subscribe(function (res) {
            _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
            _this.router.navigate(['/request']);
        }, function (err) {
            _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        });
    };
    CommentaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commentary',
            template: __webpack_require__(/*! ./commentary.component.html */ "./src/app/components/request/commentary/commentary/commentary.component.html"),
            styles: [__webpack_require__(/*! ./commentary.component.scss */ "./src/app/components/request/commentary/commentary/commentary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_requestService__WEBPACK_IMPORTED_MODULE_6__["RequestService"],
            src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_5__["EncryptService"]])
    ], CommentaryComponent);
    return CommentaryComponent;
}());



/***/ }),

/***/ "./src/app/components/request/delete-request/delete-request.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/request/delete-request/delete-request.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n      <h1><span class=\"ion-speedometer\"></span> Eliminar Requerimiento</h1>\n      <ul class=\"uk-breadcrumb\">\n          <li><a routerLink=\"\">Inicio</a></li>\n          <li><a routerLink=\"/request\"><span>Requerimientos</span></a></li>\n          <li><span>Eliminar Requerimiento</span></li>\n      </ul>\n  </div>\n</div>\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div class=\"uk-grid-small\" >\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <p class=\"uk-text-large\">Se eliminará el seguro de manera permanente</p>\n        <p uk-margin>\n            <button class=\"uk-button uk-button-default\" routerLink=\"/insurance\" >Cancelar</button>\n            <button class=\"uk-button uk-button-danger\" (click)=eliminar()>Aceptar</button>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/request/delete-request/delete-request.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/request/delete-request/delete-request.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC9kZWxldGUtcmVxdWVzdC9kZWxldGUtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/request/delete-request/delete-request.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/request/delete-request/delete-request.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeleteRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRequestComponent", function() { return DeleteRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");





var DeleteRequestComponent = /** @class */ (function () {
    function DeleteRequestComponent(generalService, router, route, requestService) {
        this.generalService = generalService;
        this.router = router;
        this.route = route;
        this.requestService = requestService;
    }
    DeleteRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idRequest = params['id']; });
    };
    DeleteRequestComponent.prototype.eliminar = function () {
        var _this = this;
        this.generalService.abrirConfirmacion().subscribe(function (response) {
            _this.requestService.deleteRequest(_this.idRequest).subscribe(function (res) {
                _this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
                _this.router.navigate(['/request']);
            }, function (error) {
            });
        }, function (err) {
            _this.generalService.abrirMensaje('Verificar información', 'error');
        });
    };
    DeleteRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-request',
            template: __webpack_require__(/*! ./delete-request.component.html */ "./src/app/components/request/delete-request/delete-request.component.html"),
            styles: [__webpack_require__(/*! ./delete-request.component.scss */ "./src/app/components/request/delete-request/delete-request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_requestService__WEBPACK_IMPORTED_MODULE_4__["RequestService"]])
    ], DeleteRequestComponent);
    return DeleteRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/request/detail-request/detail-request.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/request/detail-request/detail-request.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Detalle Requerimiento</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/request\">Requerimientos</a></li>\n      <li><span>Detalle Requerimiento</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Direccion</label>\n            <input class=\"uk-input\" type=\"text\" disabled formControlName=\"address\" [(ngModel)]=\"request.address\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Ciudad</label>\n            <input class=\"uk-input\" type=\"text\" disabled formControlName=\"city\" [(ngModel)]=\"request.city\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Departamento</label>\n            <input class=\"uk-input\" type=\"text\" disabled formControlName=\"department\"\n              [(ngModel)]=\"request.department\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Referencia</label>\n            <input class=\"uk-input\" type=\"text\" disabled formControlName=\"reference\" [(ngModel)]=\"request.reference\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Numero</label>\n            <input class=\"uk-input\" type=\"text\" disabled formControlName=\"phone\" [(ngModel)]=\"request.phone\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Serviasitimos</label>\n            <input disabled currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\"\n              type=\"text\" formControlName=\"valueAsistimos\" [(ngModel)]=\"request.valueAsistimos\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Cliente</label>\n            <input disabled currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\"\n              type=\"text\" formControlName=\"valueCostumer\" [(ngModel)]=\"request.valueCostumer\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Materiales</label>\n            <input disabled currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\"\n              type=\"text\" formControlName=\"valueMaterials\" [(ngModel)]=\"request.valueMaterials\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Estado Requerimiento</label>\n            <select disabled class=\"uk-select\" formControlName=\"state\" [(ngModel)]=\"request.state\">\n              <option value=\"EN PROGRESO\">EN PROGRESO</option>\n              <option value=\"PENDIENTE\">PENDIENTE</option>\n              <option value=\"TERMINADO\">TERMINADO</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Servicio</label>\n            <select disabled class=\"uk-select\" formControlName=\"service\" [(ngModel)]=\"request.service\">\n              <option *ngFor=\"let serv of service\" value=\"{{serv._id}}\">\n                {{serv.nameService}}</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Cliente</label>\n            <select disabled class=\"uk-select\" formControlName=\"costumer\" [(ngModel)]=\"request.costumer\">\n              <option *ngFor=\"let custom of costumers\" value=\"{{custom._id}}\">\n                {{custom.nameCostumer}}</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Tecnico</label>\n            <select disabled class=\"uk-select\" formControlName=\"technical\" [(ngModel)]=\"request.technical\">\n              <option *ngFor=\"let tech of technical\" value=\"{{tech._id}}\">\n                {{tech.nameTechnical}} {{tech.lastNameTechnical}}</option>\n            </select>\n          </div>\n\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Seguro</label>\n            <select disabled class=\"uk-select\" formControlName=\"insurance\" [(ngModel)]=\"request.insurance\">\n              <option *ngFor=\"let insu of insurance\" value=\"{{insu._id}}\">{{insu.nameInsurance}}</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Comentario Inicial</label>\n            <textarea disabled class=\"uk-textarea\" formControlName=\"commentary\"\n              [(ngModel)]=\"request.commentary\"></textarea>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <h1 style=\"text-align: center;\"> Comentarios</h1>\n        <div uk-alert *ngFor=\"let com of comentarios\">\n          <a class=\"uk-alert-close\" uk-close></a>\n          <strong>Fecha Comentario {{com.created}}</strong>\n          <p>{{com.commentary}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/request/detail-request/detail-request.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/request/detail-request/detail-request.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC9kZXRhaWwtcmVxdWVzdC9kZXRhaWwtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/request/detail-request/detail-request.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/request/detail-request/detail-request.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetailRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailRequestComponent", function() { return DetailRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");
/* harmony import */ var src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/servicesService */ "./src/app/services/servicesService.ts");
/* harmony import */ var src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/costumerService */ "./src/app/services/costumerService.ts");
/* harmony import */ var src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/techicalService */ "./src/app/services/techicalService.ts");
/* harmony import */ var src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/encrypt.service */ "./src/app/services/encrypt.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/insuranceService */ "./src/app/services/insuranceService.ts");













var DetailRequestComponent = /** @class */ (function () {
    function DetailRequestComponent(generalService, formBuilder, route, router, requestService, serviceService, costumerService, technicalService, encryptService, insuranceService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.requestService = requestService;
        this.serviceService = serviceService;
        this.costumerService = costumerService;
        this.technicalService = technicalService;
        this.encryptService = encryptService;
        this.insuranceService = insuranceService;
        this.costumers = [];
        this.service = [];
        this.insurance = [];
        this.comentarios = [];
        this.technical = [];
        this.request = [];
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_10__["User"]();
        this.request = new Object();
    }
    DetailRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idRequest = params['id']; });
        this.initializeList();
        this.user = this.encryptService.getValue();
        this.formGroupUser = this.formBuilder.group({
            valueMaterials: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            valueAsistimos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            valueCostumer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reference: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            costumer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            service: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            technical: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            insurance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            commentary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    DetailRequestComponent.prototype.initializeList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getRequestById();
                this.getService();
                this.getTechnical();
                this.getCustomer();
                this.getInsurance();
                return [2 /*return*/];
            });
        });
    };
    DetailRequestComponent.prototype.getRequestById = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.requestService.getRequestById(this.idRequest).subscribe(function (res) {
                    console.log(res);
                    if (res.commentaries !== 'there arent commentaries in this request') {
                        _this.comentarios = res.commentaries;
                    }
                    _this.request = res.request;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    DetailRequestComponent.prototype.getService = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.serviceService.getService().subscribe(function (res) {
                    _this.service = res.services;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    DetailRequestComponent.prototype.getCustomer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.costumerService.getCostumer().subscribe(function (res) {
                    _this.costumers = res.costumers;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    DetailRequestComponent.prototype.getTechnical = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.technicalService.getTechnical().subscribe(function (res) {
                    _this.technical = res.technical;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    DetailRequestComponent.prototype.getInsurance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.insuranceService.getInsurance().subscribe(function (res) {
                    _this.insurance = res.insurance;
                }, function (err) {
                });
                return [2 /*return*/];
            });
        });
    };
    DetailRequestComponent.prototype.captureInformation = function () {
        var _this = this;
        var insurance = this.insurance.filter(function (x) { return x._id === _this.formGroupUser.value.insurance; });
        var service = this.service.filter(function (x) { return x._id === _this.formGroupUser.value.service; });
        var technical = this.technical.filter(function (x) { return x._id === _this.formGroupUser.value.technical; });
        var costumer = this.costumers.filter(function (x) { return x._id === _this.formGroupUser.value.costumer; });
        var data = {
            valueMaterials: this.formGroupUser.value.valueMaterials,
            valueAsistimos: this.formGroupUser.value.valueAsistimos,
            valueCostumer: this.formGroupUser.value.valueCostumer,
            reference: this.formGroupUser.value.reference,
            phone: this.formGroupUser.value.phone,
            address: this.formGroupUser.value.address,
            city: this.formGroupUser.value.city,
            department: this.formGroupUser.value.department,
            state: this.formGroupUser.value.state,
            costumer: this.formGroupUser.value.costumer,
            service: this.formGroupUser.value.service,
            technical: this.formGroupUser.value.technical,
            insurance: this.formGroupUser.value.insurance,
            user: this.user.user._id,
            commentary: this.formGroupUser.value.commentary,
            nameCostumer: costumer[0].nameCostumer,
            nameService: service[0].nameService,
            nameTechnical: technical[0].nameTechnical,
            nameInsurance: insurance[0].nameInsurance,
            lastnameTechnical: technical[0].lastNameTechnical,
        };
        this.agregar(data);
    };
    DetailRequestComponent.prototype.agregar = function (data) {
        var _this = this;
        this.requestService.updateRequest(data, this.idRequest).subscribe(function (res) {
            console.log(res);
            _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
            _this.router.navigate(['/request']);
        }, function (err) {
            console.log(err);
            _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        });
    };
    DetailRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-request',
            template: __webpack_require__(/*! ./detail-request.component.html */ "./src/app/components/request/detail-request/detail-request.component.html"),
            styles: [__webpack_require__(/*! ./detail-request.component.scss */ "./src/app/components/request/detail-request/detail-request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_requestService__WEBPACK_IMPORTED_MODULE_5__["RequestService"],
            src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_6__["ServicesService"],
            src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_7__["CostumerService"],
            src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_8__["TechnicalService"],
            src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_9__["EncryptService"],
            src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_11__["InsuranceService"]])
    ], DetailRequestComponent);
    return DetailRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/request/request/request.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/request/request/request.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Requerimientos</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><span>Requerimientos</span></li>\n    </ul>\n  </div>\n</div>\n\n<!-- End No data -->\n<div class=\"uk-section-small\" *ngIf=\"request.length == 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <h2>No hay datos <i class=\"fas fa-table\"></i></h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"request.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <div class=\"uk-navbar-left\">\n        <div class=\"uk-search uk-search-navbar\">\n          <span uk-search-icon></span>\n          <input class=\"uk-search-input\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Buscar...\">\n        </div>\n        <button class=\"uk-button uk-button-default\" (click)=\"exportar()\">\n          <i class=\"fas fa-file-excel fa-lg\"></i> Exportar</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"request.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <div class=\"uk-overflow-auto\">\n          <table class=\"uk-table uk-table-small uk-table-divider\">\n            <thead>\n              <tr>\n                <th>Estado</th>\n                <th>Referencia</th>\n                <th>Dirección</th>\n                <th>Ciudad</th>\n                <th>Departamento</th>\n                <th>Fecha Creación</th>\n                <th>Celular</th>\n                <th>Seguro</th>\n                <th>Cliente</th>\n                <th>Tecnico</th>\n                <th>Factura</th>\n                <th>Servicio</th>\n                <th>Comentario</th>\n                <th>Valor ServiAsistimos</th>\n                <th>Valor Cliente</th>\n                <th>Materiales</th>\n                <th>Valor Materiales</th>\n                <th>Valor mano de Obra</th>\n                <th>Usuario Creación</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let costu of request | filter:term | paginate: { itemsPerPage: 10, currentPage: p }\"\n                [shAttachMenu]=\"menu\" (contextmenu)=\"leftClick(costu._id)\">\n                <td *ngIf=\"costu.state === 'EN PROGRESO'\" style=\"background-color: rgb(253, 164, 0);\">\n                  <p style=\"color: aliceblue;\">{{costu.state}}</p>\n                </td>\n                <td *ngIf=\"costu.state === 'PENDIENTE'\" style=\"background-color: rgb(255, 0, 0);\">\n                  <p style=\"color: aliceblue;\">{{costu.state}}</p>\n                </td>\n                <td *ngIf=\"costu.state === 'TERMINADO'\" style=\"background-color: rgb(0, 253, 42);\">\n                  <p style=\"color: aliceblue;\">{{costu.state}}</p>\n                </td>\n                <td>{{costu.reference}}</td>\n                <td> {{costu.address}}</td>\n                <td>{{costu.city}}</td>\n                <td>{{costu.department}}</td>\n                <td>{{costu.created}}</td>\n                <td>{{costu.phone}}</td>\n\n                <td>{{costu.nameInsurance}}</td>\n                <td>{{costu.nameCostumer}}</td>\n                <td>{{costu.nameTechnical}}</td>\n                <td>{{costu.bill}}</td>\n                <td>{{costu.nameService}}</td>\n                <td>\n                  <button class=\"uk-button uk-button-default uk-margin-small-right\" type=\"button\"\n                    uk-toggle=\"target: #modal-example\"\n                    (click)=\"modalComentario(costu.commentary, 'COMENTARIO')\">VER</button>\n                </td>\n                <td>{{costu.valueAsistimos | currency}}</td>\n                <td>{{costu.valueCostumer | currency}}</td>\n                <td>\n                  <button class=\"uk-button uk-button-default uk-margin-small-right\" type=\"button\"\n                    uk-toggle=\"target: #modal-example\"\n                    (click)=\"modalComentario(costu.materials, 'MATERIALES')\">VER</button>\n                </td>\n                <td>{{costu.valueMaterials | currency}}</td>\n                <td>{{costu.workforce | currency}}</td>\n                <td>{{costu.user.name}}{{costu.user.lastName}}</td>\n              </tr>\n            </tbody>\n          </table>\n          <div style=\"text-align: center;\">\n            <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\n            </pagination-controls>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div id=\"floating-button\" style=\"border-radius: 50%;\" routerLink=\"/request/add\">\n  <span class=\"plus-circle\" uk-icon=\"plus\"></span>\n</div>\n\n<!-- Clic derecho -->\n\n<sh-context-menu #menu>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/request/delete/{{idRequest}}\">\n      <span uk-icon=\"icon: trash\"></span>\n      Eliminar Requerimiento\n    </div>\n  </ng-template>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/request/update/{{idRequest}}\">\n      <span uk-icon=\"icon: pencil\"></span>\n      Editar Requerimiento\n    </div>\n  </ng-template>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/request/add/commentary/{{idRequest}}\">\n      <span uk-icon=\"icon: plus\"></span>\n      Agregar Comentario\n    </div>\n  </ng-template>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/request/detail/{{idRequest}}\">\n      <span uk-icon=\"icon: plus\"></span>\n      Detalle Requerimiento\n    </div>\n  </ng-template>\n</sh-context-menu>\n\n\n\n<!--MODAL-->\n<div id=\"modal-example\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body\">\n    <button class=\"uk-modal-close-outside\" type=\"button\" uk-close></button>\n    <h2 class=\"uk-modal-title\">{{tittle}}</h2>\n    <p>{{comentary}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/request/request/request.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/request/request/request.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC9yZXF1ZXN0L3JlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/request/request/request.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/request/request/request.component.ts ***!
  \*****************************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");




var RequestComponent = /** @class */ (function () {
    function RequestComponent(requestService, generalService) {
        this.requestService = requestService;
        this.generalService = generalService;
        this.request = [];
        this.exportararchivo = [];
        this.comentary = [];
        this.idRequest = [];
    }
    RequestComponent.prototype.ngOnInit = function () {
        this.getInsurance();
    };
    RequestComponent.prototype.getInsurance = function () {
        var _this = this;
        this.requestService.getRequest().subscribe(function (res) {
            _this.request = res.request;
            console.log(_this.request);
        }, function (err) {
        });
    };
    RequestComponent.prototype.leftClick = function (id) {
        this.idRequest = id;
    };
    RequestComponent.prototype.exportar = function () {
        var _this = this;
        this.request.forEach(function (element) {
            var data = {
                'Dirección': element.address,
                'Ciudad': element.city,
                'Departamento': element.department,
                'Fecha Creación': element.created,
                'Telefono': element.phone,
                'Referencia': element.reference,
                'Servicio': element.service,
                'Seguro': 'prueba daniel',
                'Nombre Tecnico': element.technical,
                'Apellido Tecnico': element.technical,
                'Cliente': element.costumer,
                'Valor ServiAssitimos': element.valueAsistimos,
                'Valor Cliente': element.valueCostumer,
                'Valor Materiales': element.valueMaterials,
                'Valor Mano de Obra': element.workforce,
                'Factura': element.bill,
                'Materiales': element.materials,
            };
            _this.exportararchivo.push(data);
        });
        this.generalService.exportAsExcelFile(this.exportararchivo, 'Requerimiento');
    };
    RequestComponent.prototype.modalComentario = function (com, nombre) {
        this.tittle = nombre;
        this.comentary = com;
    };
    RequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/components/request/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.scss */ "./src/app/components/request/request/request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_requestService__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/components/request/update-request/update-request.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/request/update-request/update-request.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Actualizar Requerimiento</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/request\">Requerimientos</a></li>\n      <li><span>Actualizar Requerimiento</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Direccion</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"address\" [(ngModel)]=\"request.address\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Ciudad</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"city\" [(ngModel)]=\"request.city\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Departamento</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"department\" [(ngModel)]=\"request.department\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Referencia</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"reference\" [(ngModel)]=\"request.reference\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Celular</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"phone\" [(ngModel)]=\"request.phone\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Serviasitimos</label>\n            <input currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\" type=\"text\"\n              formControlName=\"valueAsistimos\" [(ngModel)]=\"request.valueAsistimos\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Cliente</label>\n            <input currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\" type=\"text\"\n              formControlName=\"valueCostumer\" [(ngModel)]=\"request.valueCostumer\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Materiales</label>\n            <input currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\" type=\"text\"\n              formControlName=\"valueMaterials\" [(ngModel)]=\"request.valueMaterials\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Valor Mano de Obra</label>\n            <input currencyMask [options]=\"{ prefix: '$ ', thousands: '.', decimal: ',' }\" class=\"uk-input\" type=\"text\"\n              formControlName=\"workforce\" [(ngModel)]=\"request.workforce\"/>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Factura</label>\n            <input class=\"uk-input\" type=\"number\" formControlName=\"bill\" [(ngModel)]=\"request.bill\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Estado Requerimiento</label>\n            <select class=\"uk-select\" formControlName=\"state\" [(ngModel)]=\"request.state\">\n              <option value=\"EN PROGRESO\">EN PROGRESO</option>\n              <option value=\"PENDIENTE\">PENDIENTE</option>\n              <option value=\"TERMINADO\">TERMINADO</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Servicio</label>\n            <select class=\"uk-select\" formControlName=\"service\" [(ngModel)]=\"request.service\">\n              <option *ngFor=\"let serv of service\" value=\"{{serv._id}}\">\n                {{serv.nameService}}</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Cliente</label>\n            <select class=\"uk-select\" formControlName=\"costumer\" [(ngModel)]=\"request.costumer\">\n              <option *ngFor=\"let custom of costumers\" value=\"{{custom._id}}\">\n                {{custom.nameCostumer}}</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Tecnico</label>\n            <select class=\"uk-select\" formControlName=\"technical\" [(ngModel)]=\"request.technical\">\n              <option *ngFor=\"let tech of technical\" value=\"{{tech._id}}\">\n                {{tech.nameTechnical}} {{tech.lastNameTechnical}}</option>\n            </select>\n          </div>\n\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Seguro</label>\n            <select class=\"uk-select\" formControlName=\"insurance\" [(ngModel)]=\"request.insurance\">\n              <option *ngFor=\"let insu of insurance\" value=\"{{insu._id}}\">{{insu.nameInsurance}}</option>\n            </select>\n          </div>\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Comentario Inicial</label>\n            <textarea class=\"uk-textarea\" formControlName=\"commentary\" [(ngModel)]=\"request.commentary\"></textarea>\n          </div>\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Materiales</label>\n            <textarea class=\"uk-textarea\" formControlName=\"materials\" [(ngModel)]=\"request.materials\"></textarea>\n          </div>\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"floating-button\" style=\"border-radius: 50%;\" routerLink=\"/request/add/commentary/{{idRequest}}\">\n  <span class=\"plus-circle\" uk-icon=\"plus\"></span>\n</div>\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <h1 style=\"text-align: center;\"> Comentarios</h1>\n        <div uk-alert *ngFor=\"let com of comentarios\">\n          <a class=\"uk-alert-close\" uk-close></a>\n          <strong>Fecha Comentario {{com.created}}</strong>\n          <p>{{com.commentary}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/request/update-request/update-request.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/request/update-request/update-request.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC91cGRhdGUtcmVxdWVzdC91cGRhdGUtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/request/update-request/update-request.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/request/update-request/update-request.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UpdateRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRequestComponent", function() { return UpdateRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");
/* harmony import */ var src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/servicesService */ "./src/app/services/servicesService.ts");
/* harmony import */ var src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/costumerService */ "./src/app/services/costumerService.ts");
/* harmony import */ var src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/techicalService */ "./src/app/services/techicalService.ts");
/* harmony import */ var src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/encrypt.service */ "./src/app/services/encrypt.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/insuranceService */ "./src/app/services/insuranceService.ts");













var UpdateRequestComponent = /** @class */ (function () {
    function UpdateRequestComponent(generalService, formBuilder, route, router, requestService, serviceService, costumerService, technicalService, encryptService, insuranceService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.requestService = requestService;
        this.serviceService = serviceService;
        this.costumerService = costumerService;
        this.technicalService = technicalService;
        this.encryptService = encryptService;
        this.insuranceService = insuranceService;
        this.costumers = [];
        this.service = [];
        this.insurance = [];
        this.comentarios = [];
        this.technical = [];
        this.request = [];
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_10__["User"]();
        this.request = new Object();
    }
    UpdateRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idRequest = params['id']; });
        this.initializeList();
        this.user = this.encryptService.getValue();
        this.formGroupUser = this.formBuilder.group({
            valueMaterials: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            valueAsistimos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            valueCostumer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reference: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            costumer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            service: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            technical: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            insurance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            commentary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            workforce: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bill: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            materials: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    UpdateRequestComponent.prototype.initializeList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getRequestById();
                this.getService();
                this.getTechnical();
                this.getCustomer();
                this.getInsurance();
                return [2 /*return*/];
            });
        });
    };
    UpdateRequestComponent.prototype.getRequestById = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.requestService.getRequestById(this.idRequest).subscribe(function (res) {
                    console.log(res);
                    if (res.commentaries !== 'there arent commentaries in this request') {
                        _this.comentarios = res.commentaries;
                    }
                    _this.request = res.request;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    UpdateRequestComponent.prototype.getService = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.serviceService.getService().subscribe(function (res) {
                    _this.service = res.services;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    UpdateRequestComponent.prototype.getCustomer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.costumerService.getCostumer().subscribe(function (res) {
                    _this.costumers = res.costumers;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    UpdateRequestComponent.prototype.getTechnical = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.technicalService.getTechnical().subscribe(function (res) {
                    _this.technical = res.technical;
                }, function (errror) {
                });
                return [2 /*return*/];
            });
        });
    };
    UpdateRequestComponent.prototype.getInsurance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.insuranceService.getInsurance().subscribe(function (res) {
                    _this.insurance = res.insurance;
                }, function (err) {
                });
                return [2 /*return*/];
            });
        });
    };
    UpdateRequestComponent.prototype.captureInformation = function () {
        var _this = this;
        var insurance = this.insurance.filter(function (x) { return x._id === _this.formGroupUser.value.insurance; });
        var service = this.service.filter(function (x) { return x._id === _this.formGroupUser.value.service; });
        var technical = this.technical.filter(function (x) { return x._id === _this.formGroupUser.value.technical; });
        var costumer = this.costumers.filter(function (x) { return x._id === _this.formGroupUser.value.costumer; });
        var data = {
            valueMaterials: this.formGroupUser.value.valueMaterials,
            valueAsistimos: this.formGroupUser.value.valueAsistimos,
            valueCostumer: this.formGroupUser.value.valueCostumer,
            reference: this.formGroupUser.value.reference,
            phone: this.formGroupUser.value.phone,
            address: this.formGroupUser.value.address,
            city: this.formGroupUser.value.city,
            department: this.formGroupUser.value.department,
            state: this.formGroupUser.value.state,
            costumer: this.formGroupUser.value.costumer,
            service: this.formGroupUser.value.service,
            technical: this.formGroupUser.value.technical,
            insurance: this.formGroupUser.value.insurance,
            user: this.user.user._id,
            commentary: this.formGroupUser.value.commentary,
            nameCostumer: costumer[0].nameCostumer,
            nameService: service[0].nameService,
            nameTechnical: technical[0].nameTechnical,
            nameInsurance: insurance[0].nameInsurance,
            lastnameTechnical: technical[0].lastNameTechnical,
            workforce: this.formGroupUser.value.workforce,
            bill: this.formGroupUser.value.bill,
            materials: this.formGroupUser.value.materials
        };
        this.agregar(data);
    };
    UpdateRequestComponent.prototype.agregar = function (data) {
        var _this = this;
        this.requestService.updateRequest(data, this.idRequest).subscribe(function (res) {
            if (res.ok) {
                _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
                _this.router.navigate(['/request']);
            }
            else {
                _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
            }
        }, function (err) {
            _this.generalService.abrirMensaje('Error de Servidor', 'error');
        });
    };
    UpdateRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-request',
            template: __webpack_require__(/*! ./update-request.component.html */ "./src/app/components/request/update-request/update-request.component.html"),
            styles: [__webpack_require__(/*! ./update-request.component.scss */ "./src/app/components/request/update-request/update-request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_requestService__WEBPACK_IMPORTED_MODULE_5__["RequestService"],
            src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_6__["ServicesService"],
            src_app_services_costumerService__WEBPACK_IMPORTED_MODULE_7__["CostumerService"],
            src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_8__["TechnicalService"],
            src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_9__["EncryptService"],
            src_app_services_insuranceService__WEBPACK_IMPORTED_MODULE_11__["InsuranceService"]])
    ], UpdateRequestComponent);
    return UpdateRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/service/add-service/add-service.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/service/add-service/add-service.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Agregar Servicio</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/service\">Servicios</a></li>\n      <li><span>Agregar Servicio</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Nombre Servicio</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"nameService\" />\n          </div>\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Comentario</label>\n            <!-- <input class=\"uk-input\" type=\"number\" formControlName=\"commentary\" /> -->\n            <textarea class=\"uk-textarea\" formControlName=\"commentary\"></textarea>\n          </div>\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/service/add-service/add-service.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/service/add-service/add-service.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZS9hZGQtc2VydmljZS9hZGQtc2VydmljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/service/add-service/add-service.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/service/add-service/add-service.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceComponent", function() { return AddServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/servicesService */ "./src/app/services/servicesService.ts");
/* harmony import */ var src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/encrypt.service */ "./src/app/services/encrypt.service.ts");







var AddServiceComponent = /** @class */ (function () {
    function AddServiceComponent(generalService, formBuilder, router, servicesService, encryptService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.servicesService = servicesService;
        this.encryptService = encryptService;
    }
    AddServiceComponent.prototype.ngOnInit = function () {
        this.idUser = this.encryptService.getValue();
        this.formGroupUser = this.formBuilder.group({
            commentary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nameService: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    AddServiceComponent.prototype.captureInformation = function () {
        var data = {
            commentary: this.formGroupUser.value.commentary,
            nameService: this.formGroupUser.value.nameService,
            user: this.idUser.user._id
        };
        this.addCostumer(data);
    };
    AddServiceComponent.prototype.addCostumer = function (data) {
        var _this = this;
        this.servicesService.postService(data).subscribe(function (res) {
            _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
            _this.router.navigate(['/service']);
        }, function (err) {
            _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        });
    };
    AddServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-service',
            template: __webpack_require__(/*! ./add-service.component.html */ "./src/app/components/service/add-service/add-service.component.html"),
            styles: [__webpack_require__(/*! ./add-service.component.scss */ "./src/app/components/service/add-service/add-service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_5__["ServicesService"],
            src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__["EncryptService"]])
    ], AddServiceComponent);
    return AddServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/service/delete-service/delete-service.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/service/delete-service/delete-service.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Eliminar Servicio</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a href=\"\">Inicio</a></li>\n      <li><a routerLink=\"/usuario\"><span>Servicios</span></a></li>\n      <li><span>Eliminar Servicio</span></li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div class=\"uk-grid-small\">\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <p class=\"uk-text-large\">Se eliminará el servicio de manera permanente</p>\n        <p uk-margin>\n          <button class=\"uk-button uk-button-default\" routerLink=\"/usuario\">Cancelar</button>\n          <button class=\"uk-button uk-button-danger\" (click)=eliminar()>Aceptar</button>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/service/delete-service/delete-service.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/service/delete-service/delete-service.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZS9kZWxldGUtc2VydmljZS9kZWxldGUtc2VydmljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/service/delete-service/delete-service.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/service/delete-service/delete-service.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeleteServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteServiceComponent", function() { return DeleteServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/servicesService */ "./src/app/services/servicesService.ts");





var DeleteServiceComponent = /** @class */ (function () {
    function DeleteServiceComponent(generalService, router, route, serviceService) {
        this.generalService = generalService;
        this.router = router;
        this.route = route;
        this.serviceService = serviceService;
    }
    DeleteServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idService = params['id']; });
    };
    DeleteServiceComponent.prototype.eliminar = function () {
        var _this = this;
        this.generalService.abrirConfirmacion().subscribe(function (response) {
            _this.serviceService.deleteService(_this.idService).subscribe(function (res) {
                _this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
                _this.router.navigate(['/service']);
            }, function (error) {
            });
        }, function (err) {
            _this.generalService.abrirMensaje('Verificar información', 'error');
        });
    };
    DeleteServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-service',
            template: __webpack_require__(/*! ./delete-service.component.html */ "./src/app/components/service/delete-service/delete-service.component.html"),
            styles: [__webpack_require__(/*! ./delete-service.component.scss */ "./src/app/components/service/delete-service/delete-service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]])
    ], DeleteServiceComponent);
    return DeleteServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/service/service/service.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/service/service/service.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Servicios</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><span>Servicios</span></li>\n    </ul>\n  </div>\n</div>\n\n<!-- End No data -->\n<div class=\"uk-section-small\" *ngIf=\"service.length == 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <h2>No hay datos <i class=\"fas fa-table\"></i></h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"service.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <div class=\"uk-navbar-left\">\n        <div class=\"uk-search uk-search-navbar\">\n          <span uk-search-icon></span>\n          <input class=\"uk-search-input\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Buscar...\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\" *ngIf=\"service.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n\n    <div class=\"uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center\" uk-grid>\n\n      <div *ngFor=\"let servi of service | filter:term  | paginate: { itemsPerPage: 6, currentPage: p }\"\n        [shAttachMenu]=\"menu\" (contextmenu)=\"leftClick(servi._id)\">\n        <div class=\"uk-card uk-card-default uk-card-body\">\n          {{servi.nameService}}\n          <img src=\"../../../../assets/images/post.jpg\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"service.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <div style=\"text-align: center;\">\n          <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\n          </pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"floating-button\" style=\"border-radius: 50%;\" routerLink=\"/service/add\">\n  <span class=\"plus-circle\" uk-icon=\"plus\"></span>\n</div>\n\n<!-- Clic derecho -->\n\n<sh-context-menu #menu>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/service/update/{{idService}}\">\n      <span uk-icon=\"icon: pencil\"></span>\n      Editar Servicio\n    </div>\n  </ng-template>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/service/delete/{{idService}}\">\n      <span uk-icon=\"icon: trash\"></span>\n      Eliminar Servicio\n    </div>\n  </ng-template>\n</sh-context-menu>\n\n\n\n<!-- Modal Comentario -->\n<div id=\"modal-close-default\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <h2 class=\"uk-modal-title\">Comentario</h2>\n    <p>{{comentario}}</p>\n  </div>\n</div>\n<!-- Fin Modal Comentario -->"

/***/ }),

/***/ "./src/app/components/service/service/service.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/service/service/service.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZS9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/service/service/service.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/service/service/service.component.ts ***!
  \*****************************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/servicesService */ "./src/app/services/servicesService.ts");



var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(serviceService) {
        this.serviceService = serviceService;
        this.service = [];
    }
    ServiceComponent.prototype.ngOnInit = function () {
        this.getCustomer();
    };
    ServiceComponent.prototype.getCustomer = function () {
        var _this = this;
        this.serviceService.getService().subscribe(function (res) {
            _this.service = res.services;
        }, function (errror) {
        });
    };
    ServiceComponent.prototype.leftClick = function (id) {
        this.idService = id;
    };
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/components/service/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.scss */ "./src/app/components/service/service/service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/service/update-service/update-service.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/service/update-service/update-service.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Editar Servicio</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/service\">Servicios</a></li>\n      <li><span>Editar Servicio</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Nombre Servicio</label>\n            <input class=\"uk-input\" type=\"text\" [(ngModel)]=\"service.nameService\" formControlName=\"nameService\" />\n          </div>\n\n          <div class=\"uk-width-1-1@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Comentario</label>\n            <textarea class=\"uk-textarea\" [(ngModel)]=\"service.commentary\" formControlName=\"commentary\"></textarea>\n          </div>\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/service/update-service/update-service.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/service/update-service/update-service.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZS91cGRhdGUtc2VydmljZS91cGRhdGUtc2VydmljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/service/update-service/update-service.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/service/update-service/update-service.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UpdateServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateServiceComponent", function() { return UpdateServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/servicesService */ "./src/app/services/servicesService.ts");
/* harmony import */ var src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/encrypt.service */ "./src/app/services/encrypt.service.ts");







var UpdateServiceComponent = /** @class */ (function () {
    function UpdateServiceComponent(generalService, formBuilder, router, route, servicesService, encryptService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.servicesService = servicesService;
        this.encryptService = encryptService;
        this.service = new Object();
    }
    UpdateServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idService = params['id']; });
        this.idUser = this.encryptService.getValue();
        this.formGroupUser = this.formBuilder.group({
            commentary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nameService: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.getServiceById();
    };
    UpdateServiceComponent.prototype.getServiceById = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.servicesService.getServiceById(this.idService).subscribe(function (res) {
                    _this.service = res.service;
                }, function (err) { });
                return [2 /*return*/];
            });
        });
    };
    UpdateServiceComponent.prototype.captureInformation = function () {
        var data = {
            commentary: this.formGroupUser.value.commentary,
            nameService: this.formGroupUser.value.nameService,
            user: this.idUser.user._id
        };
        this.updateService(data);
    };
    UpdateServiceComponent.prototype.updateService = function (data) {
        var _this = this;
        this.servicesService.updateService(data, this.idService).subscribe(function (res) {
            _this.generalService.abrirMensaje('Actualizado Correctamente', 'success');
            _this.router.navigate(['/service']);
        }, function (err) {
            _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        });
    };
    UpdateServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-service',
            template: __webpack_require__(/*! ./update-service.component.html */ "./src/app/components/service/update-service/update-service.component.html"),
            styles: [__webpack_require__(/*! ./update-service.component.scss */ "./src/app/components/service/update-service/update-service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_servicesService__WEBPACK_IMPORTED_MODULE_5__["ServicesService"],
            src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__["EncryptService"]])
    ], UpdateServiceComponent);
    return UpdateServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/technical/add-technical/add-technical.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/technical/add-technical/add-technical.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Agregar Tecnico</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/technical\">Tecnicos</a></li>\n      <li><span>Agregar Tecnico</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Nombres Tecnico</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"nameTechnical\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Apellidos Tecnico</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"lastNameTechnical\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Documento</label>\n            <input class=\"uk-input\" type=\"number\" formControlName=\"document\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Celular</label>\n            <input class=\"uk-input\" type=\"number\" formControlName=\"phone\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Correo Electronico</label>\n            <input class=\"uk-input\" type=\"email\" formControlName=\"email\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Especialidad</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"specialty\" />\n          </div>\n\n         \n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Banco</label>\n            <input class=\"uk-input\" type=\"text\" formControlName=\"bank\" />\n          </div>\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Cuenta Bancaria</label>\n            <input class=\"uk-input\" type=\"number\" formControlName=\"numberBill\" />\n          </div>\n\n\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/technical/add-technical/add-technical.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/technical/add-technical/add-technical.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVjaG5pY2FsL2FkZC10ZWNobmljYWwvYWRkLXRlY2huaWNhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/technical/add-technical/add-technical.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/technical/add-technical/add-technical.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddTechnicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTechnicalComponent", function() { return AddTechnicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/techicalService */ "./src/app/services/techicalService.ts");







var AddTechnicalComponent = /** @class */ (function () {
    function AddTechnicalComponent(generalService, formBuilder, route, router, technicalService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.technicalService = technicalService;
    }
    AddTechnicalComponent.prototype.ngOnInit = function () {
        this.formGroupUser = this.formBuilder.group({
            nameTechnical: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastNameTechnical: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            document: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            specialty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            numberBill: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    AddTechnicalComponent.prototype.captureInformation = function () {
        var data = {
            nameTechnical: this.formGroupUser.value.nameTechnical,
            lastNameTechnical: this.formGroupUser.value.lastNameTechnical,
            document: this.formGroupUser.value.document,
            email: this.formGroupUser.value.email,
            phone: this.formGroupUser.value.phone,
            specialty: this.formGroupUser.value.specialty,
            numberBill: this.formGroupUser.value.numberBill,
            bank: this.formGroupUser.value.bank
        };
        this.addCostumer(data);
    };
    AddTechnicalComponent.prototype.addCostumer = function (data) {
        var _this = this;
        this.technicalService.postTechnical(data).subscribe(function (res) {
            if (res.ok) {
                _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
                _this.router.navigate(['/technical']);
            }
            else {
                _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
            }
        }, function (err) {
            _this.generalService.abrirMensaje('Error de servidor', 'error');
        });
    };
    AddTechnicalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-technical',
            template: __webpack_require__(/*! ./add-technical.component.html */ "./src/app/components/technical/add-technical/add-technical.component.html"),
            styles: [__webpack_require__(/*! ./add-technical.component.scss */ "./src/app/components/technical/add-technical/add-technical.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_5__["TechnicalService"]])
    ], AddTechnicalComponent);
    return AddTechnicalComponent;
}());



/***/ }),

/***/ "./src/app/components/technical/delete-technical/delete-technical.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/technical/delete-technical/delete-technical.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n      <h1><span class=\"ion-speedometer\"></span> Eliminar Tecnico</h1>\n      <ul class=\"uk-breadcrumb\">\n          <li><a href=\"\">Inicio</a></li>\n          <li><a routerLink=\"/technical\"><span>Tecnicos</span></a></li>\n          <li><span>Eliminar Tecnico</span></li>\n      </ul>\n  </div>\n</div>\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div class=\"uk-grid-small\" >\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <p class=\"uk-text-large\">Se eliminará el Tecnico de manera permanente</p>\n        <p uk-margin>\n            <button class=\"uk-button uk-button-default\" routerLink=\"/costumer\" >Cancelar</button>\n            <button class=\"uk-button uk-button-danger\" (click)=eliminar()>Aceptar</button>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/technical/delete-technical/delete-technical.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/technical/delete-technical/delete-technical.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVjaG5pY2FsL2RlbGV0ZS10ZWNobmljYWwvZGVsZXRlLXRlY2huaWNhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/technical/delete-technical/delete-technical.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/technical/delete-technical/delete-technical.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DeleteTechnicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTechnicalComponent", function() { return DeleteTechnicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/techicalService */ "./src/app/services/techicalService.ts");





var DeleteTechnicalComponent = /** @class */ (function () {
    function DeleteTechnicalComponent(generalService, router, route, technicalService) {
        this.generalService = generalService;
        this.router = router;
        this.route = route;
        this.technicalService = technicalService;
    }
    DeleteTechnicalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idTechnical = params['id']; });
    };
    DeleteTechnicalComponent.prototype.eliminar = function () {
        var _this = this;
        this.generalService.abrirConfirmacion().subscribe(function (response) {
            _this.technicalService.deleteTechnical(_this.idTechnical).subscribe(function (res) {
                _this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
                _this.router.navigate(['/technical']);
            }, function (error) {
            });
        }, function (err) {
            _this.generalService.abrirMensaje('Verificar información', 'error');
        });
    };
    DeleteTechnicalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-technical',
            template: __webpack_require__(/*! ./delete-technical.component.html */ "./src/app/components/technical/delete-technical/delete-technical.component.html"),
            styles: [__webpack_require__(/*! ./delete-technical.component.scss */ "./src/app/components/technical/delete-technical/delete-technical.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_4__["TechnicalService"]])
    ], DeleteTechnicalComponent);
    return DeleteTechnicalComponent;
}());



/***/ }),

/***/ "./src/app/components/technical/technical/technical.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/technical/technical/technical.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Tecnicos</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><span>Tecnicos</span></li>\n    </ul>\n  </div>\n</div>\n\n<!-- End No data -->\n<div class=\"uk-section-small\" *ngIf=\"technical.length == 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <h2>No hay datos <i class=\"fas fa-table\"></i></h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-section-small\" *ngIf=\"technical.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div uk-alert>\n      <div class=\"uk-navbar-left\">\n        <div class=\"uk-search uk-search-navbar\">\n          <span uk-search-icon></span>\n          <input class=\"uk-search-input\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Buscar...\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"uk-section-small\" *ngIf=\"technical.length != 0\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n        <div class=\"uk-overflow-auto\">\n          <table class=\"uk-table uk-table-small uk-table-divider\">\n            <thead>\n              <tr>\n                <th>Documento</th>\n                <th>Correo</th>\n                <th>Nombres</th>\n                <th>Apellidos</th>\n                <th>Telefono</th>\n                <th>Especialidad</th>\n                <th>Banco</th>\n                <th>Numero de Cuenta</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let tech of technical | filter:term | paginate: { itemsPerPage: 10, currentPage: p }\"\n                [shAttachMenu]=\"menu\" (contextmenu)=\"leftClick(tech._id)\">\n                <td> {{tech.document}}</td>\n                <td>{{tech.email}}</td>\n                <td>{{tech.nameTechnical}}</td>\n                <td>{{tech.lastNameTechnical}}</td>\n                <td>{{tech.phone}}</td>\n                <td>{{tech.specialty}}</td>\n                <td>{{tech.bank}}</td>\n                <td>{{tech.numberBill}}</td>\n              </tr>\n            </tbody>\n          </table>\n          <div style=\"text-align: center;\">\n            <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\n            </pagination-controls>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"floating-button\" style=\"border-radius: 50%;\" routerLink=\"/technical/add\">\n  <span class=\"plus-circle\" uk-icon=\"plus\"></span>\n</div>\n\n<!-- Clic derecho -->\n\n<sh-context-menu #menu>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/technical/update/{{idTechnical}}\">\n      <span uk-icon=\"icon: pencil\"></span>\n      Editar Tecnico\n    </div>\n  </ng-template>\n  <ng-template shContextMenuItem>\n    <div routerLink=\"/technical/delete/{{idTechnical}}\">\n      <span uk-icon=\"icon: trash\"></span>\n      Eliminar Tecnico\n    </div>\n  </ng-template>\n</sh-context-menu>"

/***/ }),

/***/ "./src/app/components/technical/technical/technical.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/technical/technical/technical.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVjaG5pY2FsL3RlY2huaWNhbC90ZWNobmljYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/technical/technical/technical.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/technical/technical/technical.component.ts ***!
  \***********************************************************************/
/*! exports provided: TechnicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalComponent", function() { return TechnicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/techicalService */ "./src/app/services/techicalService.ts");



var TechnicalComponent = /** @class */ (function () {
    function TechnicalComponent(technicalService) {
        this.technicalService = technicalService;
        this.technical = [];
    }
    TechnicalComponent.prototype.ngOnInit = function () {
        this.getTechnical();
    };
    TechnicalComponent.prototype.getTechnical = function () {
        var _this = this;
        this.technicalService.getTechnical().subscribe(function (res) {
            _this.technical = res.technical;
            console.log(_this.technical);
        }, function (errror) {
        });
    };
    TechnicalComponent.prototype.leftClick = function (id) {
        this.idTechnical = id;
    };
    TechnicalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technical',
            template: __webpack_require__(/*! ./technical.component.html */ "./src/app/components/technical/technical/technical.component.html"),
            styles: [__webpack_require__(/*! ./technical.component.scss */ "./src/app/components/technical/technical/technical.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_2__["TechnicalService"]])
    ], TechnicalComponent);
    return TechnicalComponent;
}());



/***/ }),

/***/ "./src/app/components/technical/update-technical/update-technical.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/technical/update-technical/update-technical.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Editar Tecnico</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/technical\">Tecnicos</a></li>\n      <li><span>Editar Tecnico</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid (ngSubmit)=\"captureInformation()\">\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Nombres Tecnico</label>\n            <input class=\"uk-input\" type=\"text\" [(ngModel)]=\"technical.nameTechnical\" formControlName=\"nameTechnical\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Apellidos Tecnico</label>\n            <input class=\"uk-input\" type=\"text\" [(ngModel)]=\"technical.lastNameTechnical\"\n              formControlName=\"lastNameTechnical\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Documento</label>\n            <input class=\"uk-input\" type=\"number\" [(ngModel)]=\"technical.document\" formControlName=\"document\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Telefono</label>\n            <input class=\"uk-input\" type=\"number\" [(ngModel)]=\"technical.phone\" formControlName=\"phone\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Correo Electronico</label>\n            <input class=\"uk-input\" type=\"email\" [(ngModel)]=\"technical.email\" formControlName=\"email\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Especialidad</label>\n            <input class=\"uk-input\" type=\"text\" [(ngModel)]=\"technical.specialty\" formControlName=\"specialty\" />\n          </div>\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Banco</label>\n            <input class=\"uk-input\" type=\"text\" [(ngModel)]=\"technical.bank\" formControlName=\"bank\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Cuenta Bancaria</label>\n            <input class=\"uk-input\" type=\"number\" formControlName=\"numberBill\" [(ngModel)]=\"technical.numberBill\"/>\n          </div>\n\n\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/technical/update-technical/update-technical.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/technical/update-technical/update-technical.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVjaG5pY2FsL3VwZGF0ZS10ZWNobmljYWwvdXBkYXRlLXRlY2huaWNhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/technical/update-technical/update-technical.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/technical/update-technical/update-technical.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UpdateTechnicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTechnicalComponent", function() { return UpdateTechnicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/techicalService */ "./src/app/services/techicalService.ts");







var UpdateTechnicalComponent = /** @class */ (function () {
    function UpdateTechnicalComponent(generalService, formBuilder, route, router, technicalService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.technicalService = technicalService;
        this.technical = new Object();
    }
    UpdateTechnicalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.idTechnical = params['id']; });
        this.formGroupUser = this.formBuilder.group({
            nameTechnical: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastNameTechnical: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            document: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            specialty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            numberBill: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.getTechnical();
    };
    UpdateTechnicalComponent.prototype.getTechnical = function () {
        var _this = this;
        this.technicalService.getTechnicalById(this.idTechnical).subscribe(function (res) {
            _this.technical = res.technical;
        }, function (err) { });
    };
    UpdateTechnicalComponent.prototype.captureInformation = function () {
        var data = {
            nameTechnical: this.formGroupUser.value.nameTechnical,
            lastNameTechnical: this.formGroupUser.value.lastNameTechnical,
            document: this.formGroupUser.value.document,
            email: this.formGroupUser.value.email,
            phone: this.formGroupUser.value.phone,
            specialty: this.formGroupUser.value.specialty,
            numberBill: this.formGroupUser.value.numberBill,
            bank: this.formGroupUser.value.bank
        };
        this.updateTechnical(data);
    };
    UpdateTechnicalComponent.prototype.updateTechnical = function (data) {
        var _this = this;
        this.technicalService.updateTechnical(data, this.idTechnical).subscribe(function (res) {
            if (res.ok) {
                _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
                _this.router.navigate(['/technical']);
            }
            else {
                _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
            }
        }, function (err) {
            _this.generalService.abrirMensaje('Error de servidor', 'error');
        });
    };
    UpdateTechnicalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-technical',
            template: __webpack_require__(/*! ./update-technical.component.html */ "./src/app/components/technical/update-technical/update-technical.component.html"),
            styles: [__webpack_require__(/*! ./update-technical.component.scss */ "./src/app/components/technical/update-technical/update-technical.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_techicalService__WEBPACK_IMPORTED_MODULE_5__["TechnicalService"]])
    ], UpdateTechnicalComponent);
    return UpdateTechnicalComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/agregar-usuario/agregar-usuario.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/usuario/agregar-usuario/agregar-usuario.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\r\n  <div class=\"uk-container uk-container-large\">\r\n    <h1><span class=\"ion-speedometer\"></span> Agregar Usuario</h1>\r\n    <ul class=\"uk-breadcrumb\">\r\n      <li><a routerLink=\"\">Inicio</a></li>\r\n      <li><a routerLink=\"/usuario\">Usuarios</a></li>\r\n      <li><span>Agregar Usuario</span></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"uk-section-small\">\r\n  <div class=\"uk-container uk-container-large\">\r\n    <div>\r\n      <div class=\"uk-card uk-card-default uk-card-body\">\r\n\r\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid  (ngSubmit)=\"captureInformation()\">\r\n\r\n          <div class=\"uk-width-1-2@s\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Nombres</label>\r\n            <input class=\"uk-input\" type=\"text\"  formControlName=\"name\"/>\r\n          </div>\r\n\r\n          <div class=\"uk-width-1-2@s\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Apellidos</label>\r\n            <input class=\"uk-input\" type=\"text\" formControlName=\"lastName\" />\r\n          </div>\r\n          \r\n\r\n          <div class=\"uk-width-1-2@s\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Cedula</label>\r\n            <input class=\"uk-input\" type=\"number\" formControlName=\"document\" />\r\n          </div>\r\n\r\n          <div class=\"uk-width-1-2@s\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Rol</label>\r\n            <select class=\"uk-select\" formControlName=\"role\">\r\n              <option value=\"Administrador\">Administrador</option>\r\n              <option value=\"Usuario\">Usuario</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"uk-width-1-2@s\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">NickName</label>\r\n            <input class=\"uk-input\" type=\"text\" formControlName=\"nickname\" />\r\n          </div>\r\n\r\n\r\n          <div class=\"uk-width-1-2@s\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Correo</label>\r\n            <input class=\"uk-input\" type=\"email\" formControlName=\"email\" />\r\n          </div>\r\n\r\n          <div class=\"uk-width-1-2@s\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Contraseña</label>\r\n            <input class=\"uk-input\" type=\"password\" formControlName=\"password\" />\r\n          </div>\r\n\r\n          \r\n          <div class=\"uk-width-1-2@s\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Confirmacion Contraseña</label>\r\n            <input class=\"uk-input\" type=\"password\" formControlName=\"confirmpassword\" />\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\r\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\r\n              Guardar\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/usuario/agregar-usuario/agregar-usuario.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/usuario/agregar-usuario/agregar-usuario.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  text-align: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c3VhcmlvL2FncmVnYXItdXN1YXJpby9EOlxcUHJveWVjdG9zXFxBbmd1bGFyXFxJUk9OR1lNQU5HVUxBUi9zcmNcXGFwcFxcY29tcG9uZW50c1xcdXN1YXJpb1xcYWdyZWdhci11c3VhcmlvXFxhZ3JlZ2FyLXVzdWFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXN1YXJpby9hZ3JlZ2FyLXVzdWFyaW8vYWdyZWdhci11c3VhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/usuario/agregar-usuario/agregar-usuario.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/usuario/agregar-usuario/agregar-usuario.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AgregarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarUsuarioComponent", function() { return AgregarUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_userService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userService */ "./src/app/services/userService.ts");







var AgregarUsuarioComponent = /** @class */ (function () {
    function AgregarUsuarioComponent(generalService, formBuilder, route, router, userService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
    }
    AgregarUsuarioComponent.prototype.ngOnInit = function () {
        this.formGroupUser = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            document: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]
            ],
            nickname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    AgregarUsuarioComponent.prototype.captureInformation = function () {
        if (this.formGroupUser.value.password === this.formGroupUser.value.confirmpassword) {
            var data = {
                name: this.formGroupUser.value.name,
                lastName: this.formGroupUser.value.lastName,
                document: this.formGroupUser.value.document,
                role: this.formGroupUser.value.role,
                email: this.formGroupUser.value.email,
                nickname: this.formGroupUser.value.nickname,
                password: this.formGroupUser.value.password
            };
            this.agregar(data);
        }
        else {
            this.generalService.abrirMensaje('Las contraseñas no coinciden', 'error');
        }
    };
    AgregarUsuarioComponent.prototype.agregar = function (data) {
        var _this = this;
        this.userService.postUser(data).subscribe(function (res) {
            _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
            _this.router.navigate(['/usuario']);
        }, function (err) {
            _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        });
    };
    AgregarUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agregar-usuarios',
            template: __webpack_require__(/*! ./agregar-usuario.component.html */ "./src/app/components/usuario/agregar-usuario/agregar-usuario.component.html"),
            styles: [__webpack_require__(/*! ./agregar-usuario.component.scss */ "./src/app/components/usuario/agregar-usuario/agregar-usuario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_userService__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AgregarUsuarioComponent);
    return AgregarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/editar-usuario/editar-usuario.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/usuario/editar-usuario/editar-usuario.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\n  <div class=\"uk-container uk-container-large\">\n    <h1><span class=\"ion-speedometer\"></span> Editar Usuario</h1>\n    <ul class=\"uk-breadcrumb\">\n      <li><a routerLink=\"\">Inicio</a></li>\n      <li><a routerLink=\"/usuario\">Usuarios</a></li>\n      <li><span>Editar Usuario</span></li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"uk-section-small\">\n  <div class=\"uk-container uk-container-large\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-body\">\n\n        <form class=\"uk-grid-small\" [formGroup]=\"formGroupUser\" uk-grid  (ngSubmit)=\"captureInformation()\">\n\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Correo</label>\n            <input class=\"uk-input\" type=\"email\" formControlName=\"email\" [(ngModel)]=\"user.email\" />\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Contraseña</label>\n            <input class=\"uk-input\" type=\"password\" formControlName=\"password\" [(ngModel)]=\"user.password\" />\n          </div>\n\n          \n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">Confirmacion Contraseña</label>\n            <input class=\"uk-input\" type=\"password\" formControlName=\"confirmpassword\" />\n          </div>\n\n\n\n\n\n          <div class=\"uk-width-1-1@s uk-flex uk-flex-center\">\n            <button class=\"uk-button uk-button-primary submitbutton\" type=\"submit\" [disabled]=\"!formGroupUser.valid\">\n              Guardar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/usuario/editar-usuario/editar-usuario.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/usuario/editar-usuario/editar-usuario.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXN1YXJpby9lZGl0YXItdXN1YXJpby9lZGl0YXItdXN1YXJpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/usuario/editar-usuario/editar-usuario.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/usuario/editar-usuario/editar-usuario.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarUsuarioComponent", function() { return EditarUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_userService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userService */ "./src/app/services/userService.ts");






var EditarUsuarioComponent = /** @class */ (function () {
    function EditarUsuarioComponent(generalService, formBuilder, route, router, userService) {
        this.generalService = generalService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = new Object();
    }
    EditarUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generalService.abrirSpinner();
        this.route.params.subscribe(function (params) { return _this.idUser = params['id']; });
        this.formGroupUser = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.getUserById();
    };
    EditarUsuarioComponent.prototype.getUserById = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.userService.getUsersById(this.idUser).subscribe(function (res) {
                    _this.user = res.user;
                    _this.generalService.cerrarSpinner();
                }, function (err) { _this.generalService.cerrarSpinner(); });
                return [2 /*return*/];
            });
        });
    };
    EditarUsuarioComponent.prototype.captureInformation = function () {
        if (this.formGroupUser.value.password === this.formGroupUser.value.confirmpassword) {
            var data = {
                email: this.formGroupUser.value.email,
                password: this.formGroupUser.value.password
            };
            this.updateUser(data);
        }
        else {
            this.generalService.abrirMensaje('Las contraseñas no coinciden', 'error');
        }
    };
    EditarUsuarioComponent.prototype.updateUser = function (data) {
        var _this = this;
        this.generalService.abrirSpinner();
        this.userService.updateUser(data).subscribe(function (res) {
            _this.router.navigate(['/usuario']);
            _this.generalService.abrirMensaje('Agregado Correctamente', 'success');
            _this.generalService.cerrarSpinner();
        }, function (err) {
            _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
            _this.generalService.cerrarSpinner();
        });
    };
    EditarUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-usuario',
            template: __webpack_require__(/*! ./editar-usuario.component.html */ "./src/app/components/usuario/editar-usuario/editar-usuario.component.html"),
            styles: [__webpack_require__(/*! ./editar-usuario.component.scss */ "./src/app/components/usuario/editar-usuario/editar-usuario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_userService__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], EditarUsuarioComponent);
    return EditarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/eliminar-usuario/eliminar-usuario.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/usuario/eliminar-usuario/eliminar-usuario.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\r\n    <div class=\"uk-container uk-container-large\">\r\n        <h1><span class=\"ion-speedometer\"></span> Eliminar usuario</h1>\r\n        <ul class=\"uk-breadcrumb\">\r\n            <li><a href=\"\">Inicio</a></li>\r\n            <li><a routerLink=\"/usuario\"><span>Usuarios</span></a></li>\r\n            <li><span>Eliminar usuario</span></li>\r\n        </ul>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"uk-section-small\">\r\n    <div class=\"uk-container uk-container-large\">\r\n      <div class=\"uk-grid-small\" >\r\n        <div class=\"uk-card uk-card-default uk-card-body\">\r\n          <p class=\"uk-text-large\">Se eliminará el componente de manera permanente</p>\r\n          <p uk-margin>\r\n              <button class=\"uk-button uk-button-default\" routerLink=\"/usuario\" >Cancelar</button>\r\n              <button class=\"uk-button uk-button-danger\" (click)=eliminar()>Aceptar</button>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/usuario/eliminar-usuario/eliminar-usuario.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/usuario/eliminar-usuario/eliminar-usuario.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXN1YXJpby9lbGltaW5hci11c3VhcmlvL2VsaW1pbmFyLXVzdWFyaW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/usuario/eliminar-usuario/eliminar-usuario.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/usuario/eliminar-usuario/eliminar-usuario.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EliminarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarUsuarioComponent", function() { return EliminarUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_userService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/userService */ "./src/app/services/userService.ts");





var EliminarUsuarioComponent = /** @class */ (function () {
    function EliminarUsuarioComponent(generalService, router, route, userService) {
        this.generalService = generalService;
        this.router = router;
        this.route = route;
        this.userService = userService;
    }
    EliminarUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.isUser = params['id']; });
    };
    EliminarUsuarioComponent.prototype.eliminar = function () {
        var _this = this;
        this.generalService.abrirConfirmacion().subscribe(function (response) {
            _this.generalService.abrirSpinner();
            _this.userService.deleteUser(_this.isUser).subscribe(function (res) {
                _this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
                _this.router.navigate(['/usuario']);
                _this.generalService.cerrarSpinner();
            }, function (error) {
                _this.generalService.cerrarSpinner();
                _this.generalService.abrirMensaje('Verificar información', 'error');
            });
        }, function (err) {
            _this.generalService.abrirMensaje('Verificar información', 'error');
            _this.generalService.cerrarSpinner();
        });
    };
    EliminarUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eliminar-usuarios',
            template: __webpack_require__(/*! ./eliminar-usuario.component.html */ "./src/app/components/usuario/eliminar-usuario/eliminar-usuario.component.html"),
            styles: [__webpack_require__(/*! ./eliminar-usuario.component.scss */ "./src/app/components/usuario/eliminar-usuario/eliminar-usuario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_userService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], EliminarUsuarioComponent);
    return EliminarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/usuario/usuario.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/usuario/usuario/usuario.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section-small uk-section-default header\">\r\n  <div class=\"uk-container uk-container-large\">\r\n    <h1><span class=\"ion-speedometer\"></span> Usuarios</h1>\r\n    <ul class=\"uk-breadcrumb\">\r\n      <li><a routerLink=\"\">Inicio</a></li>\r\n      <li><span>Usuarios</span></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<!-- End No data -->\r\n<div class=\"uk-section-small\" *ngIf=\"users.length == 0\">\r\n  <div class=\"uk-container uk-container-large\">\r\n    <div uk-alert>\r\n      <h2>No hay datos <i class=\"fas fa-table\"></i></h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"uk-section-small\" *ngIf=\"users.length != 0\">\r\n  <div class=\"uk-container uk-container-large\">\r\n    <div uk-alert>\r\n      <div class=\"uk-navbar-left\">\r\n        <div class=\"uk-search uk-search-navbar\">\r\n          <span uk-search-icon></span>\r\n          <input class=\"uk-search-input\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Buscar...\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"uk-section-small\" *ngIf=\"users.length != 0\">\r\n  <div class=\"uk-container uk-container-large\">\r\n    <div>\r\n      <div class=\"uk-card uk-card-default uk-card-body\">\r\n        <div class=\"uk-overflow-auto\">\r\n          <table class=\"uk-table uk-table-small uk-table-divider\">\r\n            <thead>\r\n              <tr>\r\n                <th>Nombres</th>\r\n                <th>Apellidos</th>\r\n                <th>Correo</th>\r\n                <th>Documento</th>\r\n                <th>Rol</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of users | filter:term | paginate: { itemsPerPage: 10, currentPage: p }\"\r\n                [shAttachMenu]=\"menu\" (contextmenu)=\"leftClick(user._id)\">\r\n                <td> {{user.name}}</td>\r\n                <td>{{user.lastName}}</td>\r\n                <td>{{user.email}}</td>\r\n                <td>{{user.document}}</td>\r\n                <td>{{user.role}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div style=\"text-align: center;\">\r\n            <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\r\n            </pagination-controls>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"floating-button\" style=\"border-radius: 50%;\" routerLink=\"/usuario/agregar\">\r\n  <span class=\"plus-circle\" uk-icon=\"plus\"></span>\r\n</div>\r\n\r\n<!-- Clic derecho -->\r\n\r\n<sh-context-menu #menu>\r\n  <ng-template shContextMenuItem *ngIf=\"user._id === idUser\">\r\n    <div routerLink=\"/usuario/editar/{{idUser}}\">\r\n      <span uk-icon=\"icon: pencil\"></span>\r\n      Editar Usuario\r\n    </div>\r\n  </ng-template>\r\n  <!-- <ng-template shContextMenuItem>\r\n    <div routerLink=\"/usuario/eliminar/{{idUser}}\">\r\n      <span uk-icon=\"icon: trash\"></span>\r\n      Eliminar Usuario\r\n    </div>\r\n  </ng-template> -->\r\n  <ng-template shContextMenuItem *ngIf=\"user._id != idUser\">\r\n    <div>\r\n      <span uk-icon=\"icon: info\"></span>\r\n      No tienes permisos\r\n    </div>\r\n  </ng-template>\r\n</sh-context-menu>"

/***/ }),

/***/ "./src/app/components/usuario/usuario/usuario.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/usuario/usuario/usuario.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uk-icon {\n  color: black !important; }\n\n.plus-circle {\n  padding: 30px;\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c3VhcmlvL3VzdWFyaW8vRDpcXFByb3llY3Rvc1xcQW5ndWxhclxcSVJPTkdZTUFOR1VMQVIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVzdWFyaW9cXHVzdWFyaW9cXHVzdWFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzdWFyaW8vdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVrLWljb257XHJcbiAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5wbHVzLWNpcmNsZXtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/usuario/usuario/usuario.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/usuario/usuario/usuario.component.ts ***!
  \*****************************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userService */ "./src/app/services/userService.ts");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/encrypt.service */ "./src/app/services/encrypt.service.ts");





var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(userService, generalService, encryptService) {
        this.userService = userService;
        this.generalService = generalService;
        this.encryptService = encryptService;
        this.users = [];
        this.user = [];
        this.idUser = 0;
        this.user = this.encryptService.getValue().user;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        this.generalService.abrirSpinner();
        this.getUsers();
    };
    UsuarioComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (res) {
            _this.users = res.users;
            _this.generalService.cerrarSpinner();
        }, function (err) {
            _this.generalService.abrirMensaje('Ocurrio un Error', 'error');
            _this.generalService.cerrarSpinner();
        });
    };
    UsuarioComponent.prototype.leftClick = function (id) {
        this.idUser = id;
    };
    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/components/usuario/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.scss */ "./src/app/components/usuario/usuario/usuario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_userService__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"],
            src_app_services_encrypt_service__WEBPACK_IMPORTED_MODULE_4__["EncryptService"]])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.user = {
            document: 0,
            email: '',
            image: '',
            lastName: '',
            name: '',
            password: '',
            role: ''
        };
        this.token = '';
        this.ok = false;
        this.user = {};
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/baseService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/baseService.ts ***!
  \*****************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environment_environments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environment/environments */ "./src/environment/environments.ts");
/* harmony import */ var _encrypt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./encrypt.service */ "./src/app/services/encrypt.service.ts");





var BaseService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseService, _super);
    function BaseService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.path = src_environment_environments__WEBPACK_IMPORTED_MODULE_3__["Environment"].BaseURL;
        _this.initializeHeader();
        return _this;
    }
    BaseService.prototype.initializeHeader = function () {
        return this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'x-token': this.token()
        });
    };
    BaseService.prototype.get = function (url) {
        return this.http.get(this.path + url, { headers: this.initializeHeader() });
    };
    BaseService.prototype.getById = function (url, id) {
        return this.http.get(this.path + url + id, { headers: this.initializeHeader() });
    };
    BaseService.prototype.post = function (url, data) {
        var params = data;
        return this.http.post(this.path + url, params, { headers: this.initializeHeader() });
    };
    BaseService.prototype.update = function (url, id, data) {
        var params = (data);
        return this.http.put(this.path + url + id, params, { headers: this.initializeHeader() });
    };
    BaseService.prototype.delete = function (url, id) {
        return this.http.delete(this.path + url + id, { headers: this.initializeHeader() });
    };
    BaseService.prototype.loginn = function (url, data) {
        var params = data;
        return this.http.post(this.path + url, params, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'x-token': '' })
        });
    };
    BaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BaseService);
    return BaseService;
}(_encrypt_service__WEBPACK_IMPORTED_MODULE_4__["EncryptService"]));



/***/ }),

/***/ "./src/app/services/canActivateService.ts":
/*!************************************************!*\
  !*** ./src/app/services/canActivateService.ts ***!
  \************************************************/
/*! exports provided: CanActivateViaAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateViaAuthGuard", function() { return CanActivateViaAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _encrypt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encrypt.service */ "./src/app/services/encrypt.service.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general.service */ "./src/app/services/general.service.ts");





var CanActivateViaAuthGuard = /** @class */ (function () {
    function CanActivateViaAuthGuard(encryptService, router, generalService) {
        this.encryptService = encryptService;
        this.router = router;
        this.generalService = generalService;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function () {
        // If the user is not logged in we'll send them back to the home page
        if (this.encryptService.token() === '') {
            this.generalService.abrirMensaje('No tienes Permisos', 'error');
            localStorage.clear();
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    CanActivateViaAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_encrypt_service__WEBPACK_IMPORTED_MODULE_3__["EncryptService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"]])
    ], CanActivateViaAuthGuard);
    return CanActivateViaAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/costumerService.ts":
/*!*********************************************!*\
  !*** ./src/app/services/costumerService.ts ***!
  \*********************************************/
/*! exports provided: CostumerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostumerService", function() { return CostumerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseService */ "./src/app/services/baseService.ts");




var CostumerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CostumerService, _super);
    function CostumerService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'url';
        return _this;
    }
    CostumerService.prototype.postCostumer = function (customer) {
        return this.post('costumer/createCostumer', customer);
    };
    CostumerService.prototype.updateCostumer = function (customer, id) {
        return this.update('costumer/updateCostumer/', id, customer);
    };
    CostumerService.prototype.getCostumer = function () {
        return this.get('costumer/costumers');
    };
    CostumerService.prototype.getCostumerById = function (id) {
        return this.getById('costumer/costumer/', id);
    };
    CostumerService.prototype.deleteCustomer = function (id) {
        return this.delete('costumer/deleteCostumer/', id);
    };
    CostumerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CostumerService);
    return CostumerService;
}(_baseService__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/services/encrypt.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/encrypt.service.ts ***!
  \*********************************************/
/*! exports provided: EncryptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptService", function() { return EncryptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environment_environments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environment/environments */ "./src/environment/environments.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");





var EncryptService = /** @class */ (function () {
    function EncryptService() {
        this.keyword = [];
        this.logindata = [];
    }
    EncryptService.prototype.setValue = function (value) {
        var ciphertext = [];
        ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(JSON.stringify(value), src_environment_environments__WEBPACK_IMPORTED_MODULE_3__["Environment"].clientEncryptionStorageValue);
        sessionStorage.setItem(src_environment_environments__WEBPACK_IMPORTED_MODULE_3__["Environment"].clientEncryptionStorageValue, ciphertext);
        return ciphertext;
    };
    /*
     * this function get token of local Storage
     */
    EncryptService.prototype.getValue = function () {
        var variable = sessionStorage.getItem(src_environment_environments__WEBPACK_IMPORTED_MODULE_3__["Environment"].clientEncryptionStorageValue);
        if (variable === null) {
            return this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        }
        else {
            var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(variable.toString(), src_environment_environments__WEBPACK_IMPORTED_MODULE_3__["Environment"].clientEncryptionStorageValue);
            var decryptedData = JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8));
            return decryptedData;
        }
    };
    /*
     * this function get token  of local Storage
     */
    EncryptService.prototype.token = function () {
        var variable = sessionStorage.getItem(src_environment_environments__WEBPACK_IMPORTED_MODULE_3__["Environment"].clientEncryptionStorageValue);
        if (variable === null) {
            return '';
        }
        else {
            var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(variable.toString(), src_environment_environments__WEBPACK_IMPORTED_MODULE_3__["Environment"].clientEncryptionStorageValue);
            var decryptedData = JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8));
            return decryptedData.token;
        }
    };
    EncryptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EncryptService);
    return EncryptService;
}());



/***/ }),

/***/ "./src/app/services/general.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);







var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var GeneralService = /** @class */ (function () {
    function GeneralService(spinner) {
        this.spinner = spinner;
    }
    GeneralService.prototype.abrirSpinner = function () {
        this.spinner.show();
    };
    GeneralService.prototype.cerrarSpinner = function () {
        this.spinner.hide();
    };
    GeneralService.prototype.abrirConfirmacion = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: '¿Está seguro?',
                text: '',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: '¡Cancelar!',
                confirmButtonText: '¡Confirmar!'
            }).then(function (result) {
                if (result.value) {
                    observer.next(true);
                }
            });
        });
        return observable;
    };
    GeneralService.prototype.abrirMensaje = function (msg, type) {
        var title = 'Mensaje';
        if (type === 'success') {
            title = '!Buen trabajo!';
        }
        else {
            title = 'Error';
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(title, msg, type);
    };
    GeneralService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(json);
        console.log('worksheet', worksheet);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_6__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    GeneralService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    GeneralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./src/app/services/insuranceCustomerService.ts":
/*!******************************************************!*\
  !*** ./src/app/services/insuranceCustomerService.ts ***!
  \******************************************************/
/*! exports provided: InsuranceCustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceCustomerService", function() { return InsuranceCustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseService */ "./src/app/services/baseService.ts");




var InsuranceCustomerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InsuranceCustomerService, _super);
    function InsuranceCustomerService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'url';
        return _this;
    }
    InsuranceCustomerService.prototype.postInsuranceCustomer = function (insuranceCostumer) {
        return this.post('insuranceCostumer/createInsuranceCostumer', insuranceCostumer);
    };
    InsuranceCustomerService.prototype.updateInsuranceCustomer = function (insuranceCostumer, id) {
        return this.update('insuranceCostumer/updateInsuranceCostumer/', id, insuranceCostumer);
    };
    InsuranceCustomerService.prototype.getInsuranceCustomer = function () {
        return this.get('insuranceCostumer/insurancesCostumers');
    };
    InsuranceCustomerService.prototype.getInsuranceCustomerById = function (id) {
        return this.getById('insuranceCostumer/insuranceCostumer/', id);
    };
    InsuranceCustomerService.prototype.deleteInsuranceCustomer = function (id) {
        return this.delete('insuranceCostumer/deleteInsuranceCostumer/', id);
    };
    InsuranceCustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InsuranceCustomerService);
    return InsuranceCustomerService;
}(_baseService__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/services/insuranceService.ts":
/*!**********************************************!*\
  !*** ./src/app/services/insuranceService.ts ***!
  \**********************************************/
/*! exports provided: InsuranceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceService", function() { return InsuranceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseService */ "./src/app/services/baseService.ts");




var InsuranceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InsuranceService, _super);
    function InsuranceService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'url';
        return _this;
    }
    InsuranceService.prototype.postInsurance = function (insurance) {
        return this.post('insurance/createInsurance', insurance);
    };
    InsuranceService.prototype.updateInsurance = function (insurance, id) {
        return this.update('insurance/updateInsurance/', id, insurance);
    };
    InsuranceService.prototype.getInsurance = function () {
        return this.get('insurance/insurances');
    };
    InsuranceService.prototype.getInsuranceById = function (id) {
        return this.getById('insurance/insurance/', id);
    };
    InsuranceService.prototype.deleteInsurance = function (id) {
        return this.delete('insurance/deleteInsurance/', id);
    };
    InsuranceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InsuranceService);
    return InsuranceService;
}(_baseService__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/services/requestService.ts":
/*!********************************************!*\
  !*** ./src/app/services/requestService.ts ***!
  \********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseService */ "./src/app/services/baseService.ts");




var RequestService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RequestService, _super);
    function RequestService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'url';
        return _this;
    }
    RequestService.prototype.postRequest = function (request) {
        return this.post('request/createRequest', request);
    };
    RequestService.prototype.updateRequest = function (request, id) {
        return this.update('request/updateRequest/', id, request);
    };
    RequestService.prototype.getRequest = function () {
        return this.get('request/getRequests');
    };
    RequestService.prototype.getRequestById = function (id) {
        return this.getById('request/request/', id);
    };
    RequestService.prototype.deleteRequest = function (id) {
        return this.delete('request/deleteRequest/', id);
    };
    RequestService.prototype.addCommentary = function (data) {
        return this.post('requestCommentary/createRequestCommentary/', data);
    };
    RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RequestService);
    return RequestService;
}(_baseService__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/services/servicesService.ts":
/*!*********************************************!*\
  !*** ./src/app/services/servicesService.ts ***!
  \*********************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseService */ "./src/app/services/baseService.ts");




var ServicesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ServicesService, _super);
    function ServicesService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'url';
        return _this;
    }
    ServicesService.prototype.postService = function (service) {
        return this.post('service/createService', service);
    };
    ServicesService.prototype.updateService = function (service, id) {
        return this.update('service/updateService/', id, service);
    };
    ServicesService.prototype.getService = function () {
        return this.get('service/services');
    };
    ServicesService.prototype.getServiceById = function (id) {
        return this.getById('service/service/', id);
    };
    ServicesService.prototype.deleteService = function (id) {
        return this.delete('service/deleteService/', id);
    };
    ServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServicesService);
    return ServicesService;
}(_baseService__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/services/techicalService.ts":
/*!*********************************************!*\
  !*** ./src/app/services/techicalService.ts ***!
  \*********************************************/
/*! exports provided: TechnicalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalService", function() { return TechnicalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseService */ "./src/app/services/baseService.ts");




var TechnicalService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TechnicalService, _super);
    function TechnicalService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'url';
        return _this;
    }
    TechnicalService.prototype.postTechnical = function (customer) {
        return this.post('technical/createTechnical', customer);
    };
    TechnicalService.prototype.updateTechnical = function (customer, id) {
        return this.update('technical/updateTechnical/', id, customer);
    };
    TechnicalService.prototype.getTechnical = function () {
        return this.get('technical/technicals');
    };
    TechnicalService.prototype.getTechnicalById = function (id) {
        return this.getById('technical/technical/', id);
    };
    TechnicalService.prototype.deleteTechnical = function (id) {
        return this.delete('technical/deleteTechnical/', id);
    };
    TechnicalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TechnicalService);
    return TechnicalService;
}(_baseService__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/services/userService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/userService.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseService */ "./src/app/services/baseService.ts");




var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'url';
        return _this;
    }
    UserService.prototype.getUsers = function () {
        return this.get('user/getUsers');
    };
    UserService.prototype.getUsersById = function (id) {
        return this.getById('user/getUser/', id);
    };
    UserService.prototype.updateUser = function (user) {
        return this.post('user/update/', user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.delete('user/deleteUser/', id);
    };
    UserService.prototype.postUser = function (user) {
        return this.post('user/create', user);
    };
    UserService.prototype.login = function (user) {
        return this.loginn('user/login', user);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}(_baseService__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/environment/environments.ts":
/*!*****************************************!*\
  !*** ./src/environment/environments.ts ***!
  \*****************************************/
/*! exports provided: Environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return Environment; });
var Environment;
(function (Environment) {
    Environment["BaseURL"] = "https://serviasistimos.herokuapp.com/";
    Environment["clientStorageType"] = "SESSION";
    Environment["clientEncryptionStorageValue"] = "SERVIASISTIMOS";
})(Environment || (Environment = {}));


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Proyectos\Angular\IRONGYMANGULAR\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map