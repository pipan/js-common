"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Emitter = (function () {
    function Emitter() {
        this.listeners = {};
    }
    Emitter.prototype.emit = function (event, data) {
        if (!this.listeners[event]) {
            return;
        }
        for (var i = 0; i < this.listeners[event].length; i++) {
            this.listeners[event][i].run(data);
        }
    };
    Emitter.prototype.on = function (event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        var listener = new index_1.Listener(new index_1.Subscriber(this, event), callback);
        this.listeners[event].push(listener);
        return listener.getSubscriber();
    };
    Emitter.prototype.off = function (subscriber) {
        var event = subscriber.getEvent();
        if (!this.listeners[event]) {
            return;
        }
        var index = -1;
        for (var i = 0; i < this.listeners[event].length; i++) {
            if (this.listeners[event][i].getSubscriber() === subscriber) {
                index = i;
            }
        }
        if (index == -1) {
            return;
        }
        this.listeners[event].splice(index, 1);
    };
    return Emitter;
}());
exports.Emitter = Emitter;
//# sourceMappingURL=Emitter.js.map