import { injectable } from "inversify";

@injectable()
export class DomService
{
    protected domParser: any;

    constructor()
    {
        this.domParser = new DOMParser();
    }

    public insert(element: any, into: any): void 
    {
        if (element.length > 0) {
            for (let i = 0; i < element.length; i++) {
                into.appendChild(element[i]);
            }
        } else {
            into.appendChild(element);
        }        
    }

    public create(element: string): any
    {
        let parsed: any = this.domParser.parseFromString(element, 'text/html');
        return parsed.body.firstElementChild;
    }
}