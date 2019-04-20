import { Emitter, EmitterService } from "./index";
export declare class ViewportService {
    protected emitter: Emitter;
    protected width: number;
    protected height: number;
    constructor(emitterService: EmitterService);
    getWidth(): number;
    getHeight(): number;
    getEmitter(): Emitter;
}
