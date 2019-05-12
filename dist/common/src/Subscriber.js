"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber = (function () {
    function Subscriber(emitter, event) {
        this.emitter = emitter;
        this.event = event;
    }
    Subscriber.prototype.unsubscribe = function () {
        this.emitter.off(this);
    };
    Subscriber.prototype.getEvent = function () {
        return this.event;
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;
//# sourceMappingURL=Subscriber.js.map