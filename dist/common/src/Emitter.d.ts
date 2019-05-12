import { Subscriber } from './Subscriber';
export declare class Emitter {
    protected listeners: any;
    constructor();
    emit(event: string, data: any): void;
    on(event: string, callback: any): Subscriber;
    off(subscriber: Subscriber): void;
}
