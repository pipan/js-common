import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { CommonModule } from '../src/CommonModule';
import { DomService } from '../src/DomService';

test("test dom service", () => {
    let app: Application = new Application();
    app.run([CommonModule]);

    let domService: DomService = app.getContainer().get(DomService);
    // create
    let element: HTMLElement = domService.create('<div class="test"></div>');
    expect(element.classList.item(0)).toEqual('test');

    // insert
    domService.insert([element], document.body);
    expect(document.body.innerHTML).toEqual(element.outerHTML);
});