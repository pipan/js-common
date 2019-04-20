import { Emitter } from "./index";
export declare class Subscriber {
    protected emitter: Emitter;
    protected event: string;
    constructor(emitter: Emitter, event: string);
    unsubscribe(): void;
    getEvent(): string;
}
