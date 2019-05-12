"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DomService_1 = require("./DomService");
var EmitterService_1 = require("./EmitterService");
var ViewportService_1 = require("./ViewportService");
var CommonModule = (function () {
    function CommonModule() {
    }
    CommonModule.prototype.getDependencies = function () {
        return [];
    };
    CommonModule.prototype.register = function (container) {
        container.bind(DomService_1.DomService).toSelf().inSingletonScope();
        container.bind(ViewportService_1.ViewportService).toSelf().inSingletonScope();
        container.bind(EmitterService_1.EmitterService).toSelf().inSingletonScope();
    };
    CommonModule.prototype.boot = function (container) { };
    return CommonModule;
}());
exports.CommonModule = CommonModule;
//# sourceMappingURL=CommonModule.js.map