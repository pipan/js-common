"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var index_1 = require("./index");
var ViewportService = (function () {
    function ViewportService(emitterService) {
        var _this = this;
        this.emitter = emitterService.createEmitter();
        var w = window;
        var d = document;
        var e = d.documentElement;
        var g = d.getElementsByTagName('body')[0];
        this.width = w.innerWidth || e.clientWidth || g.clientWidth;
        this.height = w.innerHeight || e.clientHeight || g.clientHeight;
        window.addEventListener('resize', function (event) {
            var changed = _this.width != event.target.innerWidth || _this.height != event.target.innerHeight;
            _this.width = event.target.innerWidth;
            _this.height = event.target.innerHeight;
            if (changed) {
                _this.emitter.emit('change', {
                    width: _this.width,
                    height: _this.height
                });
            }
        });
    }
    ViewportService.prototype.getWidth = function () {
        return this.width;
    };
    ViewportService.prototype.getHeight = function () {
        return this.height;
    };
    ViewportService.prototype.getEmitter = function () {
        return this.emitter;
    };
    ViewportService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(index_1.EmitterService)),
        __metadata("design:paramtypes", [index_1.EmitterService])
    ], ViewportService);
    return ViewportService;
}());
exports.ViewportService = ViewportService;
//# sourceMappingURL=ViewportService.js.map