var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var bl_editor_1 = require('./bl-editor');
var style_editor_1 = require('./style-editor');
var sign_up_1 = require('./sign-up');
var AppComponent = (function () {
    function AppComponent() {
        this.page = 'welcome';
    }
    AppComponent.prototype.onPageChange = function (page) {
        this.page = page;
        console.log('app: ' + page);
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'ffa',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, bl_editor_1.default, style_editor_1.default, sign_up_1.default],
            templateUrl: 'app/html/ffa.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, http_1.HTTP_PROVIDERS);
//# sourceMappingURL=ffa.js.map