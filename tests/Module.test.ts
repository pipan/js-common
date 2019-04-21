import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { CommonModule } from '../src/CommonModule';
import { DomService } from '../src/DomService';
import { EmitterService } from '../src/EmitterService';
import { ViewportService } from '../src/ViewportService';

test("test registration of services", () => {
    let app: Application = new Application();
    app.run([CommonModule]);

    expect(app.getContainer().get(DomService)).toBeInstanceOf(DomService);
    expect(app.getContainer().get(EmitterService)).toBeInstanceOf(EmitterService);
    expect(app.getContainer().get(ViewportService)).toBeInstanceOf(ViewportService);
});