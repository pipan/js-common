import { Emitter, Subscriber } from "./index";
export declare class EmitterService {
    protected globalEmitter: Emitter;
    constructor();
    createEmitter(): Emitter;
    emit(event: string, data?: any): void;
    on(event: string, callback: any): Subscriber;
    off(subscriber: Subscriber): void;
}
