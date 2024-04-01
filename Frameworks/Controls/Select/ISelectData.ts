import { IControlData } from "Domain/Interfaces";
import { IOption } from ".";

export interface ISelectData extends IControlData {
    label: string;
    options: IOption[];
    inline?: boolean;
}