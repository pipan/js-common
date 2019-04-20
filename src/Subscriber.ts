import { Emitter } from "./index";

export class Subscriber
{
    protected emitter: Emitter;
    protected event: string;

    constructor(emitter: Emitter, event: string)
    {
        this.emitter = emitter;
        this.event = event;
    }

    public unsubscribe(): void
    {
        this.emitter.off(this);
    }

    public getEvent(): string
    {
        return this.event;
    }
}