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
var SignUp = (function () {
    function SignUp(http) {
        this.username = '';
        this.password = '';
        this.http = http;
        console.log('register...');
        http.get('./auth/register').map(function (res) { return res.json(); });
    }
    SignUp.prototype.register = function () {
        var _this = this;
        console.log('register...');
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('./auth/register', JSON.stringify({ firstName: 'Joe', lastName: 'Smith' }), { headers: headers })
            .map(function (res) {
            return res;
        })
            .subscribe(function (res) {
            _this.postResponse = res;
        });
    };
    SignUp = __decorate([
        angular2_1.Component({
            selector: 'sign-up',
            templateUrl: 'app/html/sign-up.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SignUp);
    return SignUp;
})();
var Person = (function () {
    function Person() {
    }
    return Person;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignUp;
//# sourceMappingURL=sign-up.js.map