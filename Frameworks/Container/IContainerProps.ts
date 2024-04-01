import { EnumMode } from "Domain/Enums";
import { IControlData } from "Domain/Interfaces";
import { BaseControl } from "Frameworks/Controls";

export interface IContainerProps {
    data: IControlData[];
    controls: typeof BaseControl[];
    mode: EnumMode;
    onChange?: (data: IControlData[]) => void;
}