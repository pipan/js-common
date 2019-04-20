import { Subscriber } from "./Subscriber";

export class Listener
{
    protected subscriber: Subscriber;
    protected callback: any;

    constructor(subscriber: Subscriber, callback: any)
    {
        this.subscriber = subscriber;
        this.callback = callback;
    }

    public getSubscriber(): Subscriber
    {
        return this.subscriber;
    }

    public run(data: any): void
    {
        return this.callback(data);
    }
}