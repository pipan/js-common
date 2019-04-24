import { Container } from "inversify";
import { Module } from "@wildebeest/js-modules";
import { DomService } from "./DomService";
import { EmitterService } from "./EmitterService";
import { Emitter } from "./Emitter";
import { ViewportService } from "./ViewportService";

export class CommonModule implements Module
{
    getDependencies(): Array<any>
    {
        return [];
    }

    register(container: Container): void
    {
        container.bind<DomService>(DomService).toSelf().inSingletonScope();
        container.bind<ViewportService>(ViewportService).toSelf().inSingletonScope();
        container.bind<EmitterService>(EmitterService).toSelf().inSingletonScope();
    }

    boot(container: Container): void { }
}