import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { CommonModule } from '../src/CommonModule';
import { EmitterService } from '../src/EmitterService';
import { ViewportService } from '../src/ViewportService';
import { Emitter } from '../src/Emitter';
import { Subscriber } from '../src/Subscriber';

let app: Application = new Application();
app.run([CommonModule]);
let emitterService: EmitterService = app.getContainer().get(EmitterService);

test("create emitter from service", () => {
    let emitter: Emitter = emitterService.createEmitter()
    expect(emitter).toBeInstanceOf(Emitter);
});

test("register listener", () => {
    let emitter: Emitter = emitterService.createEmitter();
    
    let sub:Subscriber = emitter.on("test", () => {});
    expect(sub).toBeInstanceOf(Subscriber);
});
 
test("emit event", () => {
    let emitter: Emitter = emitterService.createEmitter();
    let value: number = 0;
    emitter.on("test", (data: number) => {
        value = data;
    });

    emitter.emit("test", 1);
    expect(value).toBe(1);
});

test("unregister listener", () => {
    let emitter: Emitter = emitterService.createEmitter();
    let value: number = 0;
    let sub: Subscriber = emitter.on("test", (data: number) => {
        value = data;
    });

    emitter.off(sub);
    emitter.emit("test", 0);
    expect(value).toBe(0);
});