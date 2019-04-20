import { Subscriber } from "./index";
export declare class Listener {
    protected subscriber: Subscriber;
    protected callback: any;
    constructor(subscriber: Subscriber, callback: any);
    getSubscriber(): Subscriber;
    run(data: any): void;
}
