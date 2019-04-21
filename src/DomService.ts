import { injectable } from "inversify";

@injectable()
export class DomService
{
    protected domParser: any;

    constructor()
    {
        this.domParser = new DOMParser();
    }

    public insert(elements: Array<HTMLElement>, into: HTMLElement): void 
    {
        // if (element.length > 0) {?
            for (let i = 0; i < elements.length; i++) {
                into.appendChild(elements[i]);
            }
        // } else {
            // into.appendChild(element);
        // }        
    }

    public create(element: string): HTMLElement
    {
        let parsed: any = this.domParser.parseFromString(element, 'text/html');
        return parsed.body.firstElementChild;
    }
}