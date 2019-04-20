"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Listener = (function () {
    function Listener(subscriber, callback) {
        this.subscriber = subscriber;
        this.callback = callback;
    }
    Listener.prototype.getSubscriber = function () {
        return this.subscriber;
    };
    Listener.prototype.run = function (data) {
        return this.callback(data);
    };
    return Listener;
}());
exports.Listener = Listener;
//# sourceMappingURL=Listener.js.map