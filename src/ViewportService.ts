import { injectable, inject } from "inversify";
import { Emitter, EmitterService } from "./index";

@injectable()
export class ViewportService
{
    protected emitter: Emitter;
    protected width: number;
    protected height: number;

    constructor(@inject(EmitterService) emitterService: EmitterService)
    {
        this.emitter = emitterService.createEmitter();

        let w = window;
        let d = document;
        let e = d.documentElement;
        let g = d.getElementsByTagName('body')[0];
        this.width = w.innerWidth || e.clientWidth || g.clientWidth;
        this.height = w.innerHeight|| e.clientHeight|| g.clientHeight;

        window.addEventListener('resize', (event: any) => {
            let changed = this.width != event.target.innerWidth || this.height != event.target.innerHeight;
            this.width = event.target.innerWidth;
            this.height = event.target.innerHeight;
            if (changed) {
                this.emitter.emit('change', {
                    width: this.width,
                    height: this.height
                });
            }
        });
    }

    public getWidth(): number
    {
        return this.width;
    }

    public getHeight(): number
    {
        return this.height;
    }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }
}