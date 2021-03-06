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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var Emitter_1 = require("./Emitter");
var EmitterService = (function () {
    function EmitterService() {
        this.globalEmitter = this.createEmitter();
    }
    EmitterService.prototype.createEmitter = function () {
        return new Emitter_1.Emitter();
    };
    EmitterService.prototype.emit = function (event, data) {
        if (data === void 0) { data = {}; }
        this.globalEmitter.emit(event, data);
    };
    EmitterService.prototype.on = function (event, callback) {
        return this.globalEmitter.on(event, callback);
    };
    EmitterService.prototype.off = function (subscriber) {
        this.globalEmitter.off(subscriber);
    };
    EmitterService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], EmitterService);
    return EmitterService;
}());
exports.EmitterService = EmitterService;
//# sourceMappingURL=EmitterService.js.map