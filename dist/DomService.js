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
var DomService = (function () {
    function DomService() {
        this.domParser = new DOMParser();
    }
    DomService.prototype.insert = function (elements, into) {
        for (var i = 0; i < elements.length; i++) {
            into.appendChild(elements[i]);
        }
    };
    DomService.prototype.create = function (element) {
        var parsed = this.domParser.parseFromString(element, 'text/html');
        return parsed.body.firstElementChild;
    };
    DomService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DomService);
    return DomService;
}());
exports.DomService = DomService;
//# sourceMappingURL=DomService.js.map