import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { CommonModule } from '../src/CommonModule';
import { ViewportService } from '../src/ViewportService';

let app: Application = new Application();
app.run([CommonModule]);
let viewportService: ViewportService = app.getContainer().get(ViewportService);

test("test viewport height", () => {
    expect(viewportService.getHeight()).toBeGreaterThan(0);
});

test("test viewport width", () => {
    expect(viewportService.getWidth()).toBeGreaterThan(0);
});