import { IControlData } from "Domain/Interfaces";

export interface IPanelData extends IControlData {
    label?: string;
    childs: IControlData[];
}