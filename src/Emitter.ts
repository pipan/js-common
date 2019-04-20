import { Listener, Subscriber } from "./index";

export class Emitter
{
    protected listeners: any;
    constructor()
    {
        this.listeners = {};
    }

    public emit(event: string, data: any): void
    {
        if (!this.listeners[event]) {
            return;
        }
        for (let i = 0; i < this.listeners[event].length; i++) {
            this.listeners[event][i].run(data);
        }
    }

    public on(event: string, callback: any): Subscriber
    {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        let listener = new Listener(new Subscriber(this, event), callback);
        this.listeners[event].push(listener);
        return listener.getSubscriber();
    }

    public off(subscriber: Subscriber): void
    {
        let event = subscriber.getEvent();
        if (!this.listeners[event]) {
            return;
        }
        let index = -1;
        for (let i = 0; i < this.listeners[event].length; i++) {
            if (this.listeners[event][i].getSubscriber() === subscriber) {
                index = i;
            }
        }
        if (index == -1) {
            return;
        }
        this.listeners[event].splice(index, 1);
    }
}