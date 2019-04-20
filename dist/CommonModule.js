"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DomService_1 = require("./DomService");
var EmitterService_1 = require("./EmitterService");
var Emitter_1 = require("./Emitter");
var ViewportService_1 = require("./ViewportService");
var CommonModule = (function () {
    function CommonModule() {
    }
    CommonModule.prototype.getDependencies = function () {
        return [];
    };
    CommonModule.prototype.register = function (container) {
        container.bind(DomService_1.DomService).to(DomService_1.DomService).inSingletonScope();
        container.bind(ViewportService_1.ViewportService).toSelf().inSingletonScope();
        container.bind(EmitterService_1.EmitterService).toSelf().inSingletonScope();
        container.bind(Emitter_1.Emitter).toSelf();
    };
    CommonModule.prototype.boot = function (container) { };
    return CommonModule;
}());
exports.CommonModule = CommonModule;
//# sourceMappingURL=CommonModule.js.map