import { IControlData } from "Domain/Interfaces";

export interface ITextboxData extends IControlData {
    label: string;
    placeholder?: string;
    inline?: boolean;
}