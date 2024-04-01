import { BaseControl } from "..";
import { ICheckboxData } from ".";
import { EnumControlType } from "Domain/Enums";
import styles from "./Checkbox.module.scss";

export class Checkbox extends BaseControl {
    public draw = (data: ICheckboxData): JSX.Element => {
        if (data.type === EnumControlType.Checkbox) {
            return (
                <div className={styles.checkbox}>
                    <input type="checkbox" id={data.id} />
                    <label htmlFor={data.id}>
                        {data.label}
                    </label>
                </div>
            );
        }
    }
}