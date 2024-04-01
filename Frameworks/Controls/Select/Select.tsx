import { BaseControl } from "..";
import { ISelectData } from ".";
import { EnumControlType } from "Domain/Enums";
import { Guid } from "Applications/Guid";
import styles from "./Select.module.scss";

export class Select extends BaseControl {
    public draw = (data: ISelectData): JSX.Element => {
        if (data.type === EnumControlType.Select) {
            return (
                <div className={[styles.select, data.inline ? styles.inline : null].join(' ')}>
                    <div className={styles.label}>{data.label}</div>
                    <div className={styles.container}>
                        <select>
                            {
                                data.options.map(option =>
                                    <option
                                        key={Guid.new()}
                                        value={option.value}
                                    >
                                        {option.text}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                </div>
            );
        }
    }
}