import { injectable } from "inversify";
import { Emitter } from "./Emitter";
import { Subscriber } from './Subscriber';

@injectable()
export class EmitterService
{
    protected globalEmitter: Emitter;
    
    constructor()
    {
        this.globalEmitter = this.createEmitter();
    }

    public createEmitter(): Emitter
    {
        return new Emitter();
    }

    public emit(event: string, data: any = {}): void
    {
        this.globalEmitter.emit(event, data);
    }

    public on(event: string, callback: any): Subscriber
    {
        return this.globalEmitter.on(event, callback);
    }

    public off(subscriber: Subscriber): void
    {
        this.globalEmitter.off(subscriber);
    }
}