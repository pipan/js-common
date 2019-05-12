import { Container } from "inversify";
import { Module } from "@wildebeest/js-modules";
export declare class CommonModule implements Module {
    getDependencies(): Array<any>;
    register(container: Container): void;
    boot(container: Container): void;
}
