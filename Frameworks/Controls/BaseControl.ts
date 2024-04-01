import { IControlData } from "Domain/Interfaces";
import { Container } from "Frameworks/Container";

export class BaseControl {
    constructor(container: Container) {
        this.Container = container;
    }

    protected Container: Container;
    protected Data: IControlData;

    public draw(data: IControlData): JSX.Element {
        throw new Error(`Method 'draw' is not implemented for '${this.constructor.name}'`);
    };
    public getProperties(): IControlData {
        throw new Error(`Field 'Properties' is not implemented for '${this.constructor.name}'`);
    }
}