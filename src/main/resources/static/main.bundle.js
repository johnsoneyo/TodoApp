webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".example-icon {\n    padding: 0 14px;\n  }\n  \n  .example-spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n  }\n  \n  #container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;           /* establish flex container */\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;  /* make main axis vertical */\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; /* center items vertically, in this case */\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;     /* center items horizontally, in this case */\n    height: 100%;\n   \n}\n  \n  .box {\n    margin-top: 5px;\n    width: 1000px;\n \n   }\n  \n  /* .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  } */\n  \n  .example-full-width {\n    width: 50%;\n  }\n  \n  .example-h2 {\n    margin: 10px;\n  }\n  \n  .example-section {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 60px;\n  }\n  \n  .example-margin {\n    margin: 0 10px;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n \n  <mat-toolbar-row>\n    <span>Todo App</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n\n</mat-toolbar>\n\n<div id=\"container\"><!-- flex container -->\n  \n      <div class=\"box\" id=\"bluebox\"><!-- flex item -->\n        <mat-card >\n            <mat-card-header>\n               <mat-card-title>Add a Todo </mat-card-title>\n                <mat-card-subtitle>New Record</mat-card-subtitle>\n              </mat-card-header>\n        <mat-card-content>\n            <form class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Title\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"todo.title\" >\n                </mat-form-field>\n              \n                <mat-form-field class=\"example-full-width\">\n                  <textarea matInput placeholder=\"Description\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"todo.description\"></textarea>\n                </mat-form-field>\n              </form>\n\n              \n        </mat-card-content>\n\n\n          <mat-card-actions>\n            <button mat-button (click)=\"createTodo()\" color=\"primary\">Save</button>\n          </mat-card-actions>\n        </mat-card>\n\n       \n      </div>\n  \n      <div class=\"box\">\n\n          <mat-card>\n              <mat-table #table [dataSource]=\"dataSource\">\n                \n                    <!-- Position Column -->\n                    <ng-container matColumnDef=\"title\">\n                      <mat-header-cell *matHeaderCellDef> Title. </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\n                    </ng-container>\n                \n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"description\">\n                      <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.description}} </mat-cell>\n                    </ng-container>\n                \n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"timeCreated\">\n                      <mat-header-cell *matHeaderCellDef> Time </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.timeCreated}} </mat-cell>\n                    </ng-container>\n                \n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"completed\">\n                      <mat-header-cell *matHeaderCellDef> Completed </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> \n                      \n                          <mat-checkbox class=\"example-margin\" [(ngModel)]=\"element.completed\" (click)=\"markCompleted(element)\"></mat-checkbox>\n                         \n                          <button mat-raised-button [color]=\"element.completed ? 'primary':'accent'\">{{element.completed ? 'completed':'pending'}}</button>\n                     \n                          <button mat-icon-button (click)=\"deleteTodo(element)\" >\n                              <mat-icon aria-label=\"backspace\">delete</mat-icon> \n                          </button>\n                        </mat-cell>\n                    </ng-container>\n\n                \n                \n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                  </mat-table>\n            </mat-card>\n\n\n      </div>\n     \n  </div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_model__ = __webpack_require__("./src/app/todo-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service__ = __webpack_require__("./src/app/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_datasource__ = __webpack_require__("./src/app/todo.datasource.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.todo = new __WEBPACK_IMPORTED_MODULE_1__todo_model__["a" /* Todo */]();
        this.displayedColumns = ['title', 'description', 'timeCreated', 'completed'];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.createTodo = function () {
        var _this = this;
        this.service.saveTodo(this.todo).subscribe(function (dim) {
            _this.service.getTodos().subscribe(function (todos) {
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__todo_datasource__["a" /* TodoDataSource */](todos);
            });
        });
    };
    AppComponent.prototype.markCompleted = function (todo) {
        var _this = this;
        this.service.toggleCompleted(todo.id).subscribe(function (dim) {
            _this.service.getTodos().subscribe(function (todos) {
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__todo_datasource__["a" /* TodoDataSource */](todos);
            });
        });
    };
    AppComponent.prototype.deleteTodo = function (todo) {
        var _this = this;
        this.service.deleteTodo(todo.id).subscribe(function (dim) {
            _this.service.getTodos().subscribe(function (todos) {
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__todo_datasource__["a" /* TodoDataSource */](todos);
            });
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms___ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_service__ = __webpack_require__("./src/app/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_12__angular_material_table__["a" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_checkbox__["a" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["b" /* NoopAnimationsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms___["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["a" /* MatInputModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__todo_service__["a" /* TodoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todo-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/todo.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TodoDataSource = /** @class */ (function (_super) {
    __extends(TodoDataSource, _super);
    function TodoDataSource(todos) {
        var _this = _super.call(this) || this;
        _this.todos = todos;
        return _this;
    }
    TodoDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(this.todos);
    };
    TodoDataSource.prototype.disconnect = function () { };
    return TodoDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.saveTodo = function (todo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/v1/todo/saveTodo', todo, options).map(function (res) { return res.json(); });
    };
    TodoService.prototype.getTodos = function () {
        return this.http.get('http://localhost:8080/v1/todo/getTodos').map(function (res) { return res.json(); });
    };
    TodoService.prototype.toggleCompleted = function (id) {
        return this.http.get('http://localhost:8080/v1/todo/toggleCompleted/' + id).map(function (res) { return res.json(); });
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.http.get('http://localhost:8080/v1/todo/deleteTodo/' + id).map(function (res) { return res.json(); });
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map