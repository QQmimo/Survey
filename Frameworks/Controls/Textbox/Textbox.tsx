import { ITextboxData } from ".";
import { BaseControl } from "..";
import { EnumControlType } from "Domain/Enums";
import { Guid } from "Applications/Guid";
import styles from "./Textbox.module.scss";

export class Textbox extends BaseControl {
    public draw = (data: ITextboxData): JSX.Element => {
        if (data.type === EnumControlType.Textbox) {
            this.Data = data;
            return (
                <div className={[styles.textbox, data.inline ? styles.inline : null].join(' ')}>
                    <div className={styles.label}>
                        {data.label}
                    </div>
                    <div className={styles.container}>
                        <input type="text" />
                    </div>
                </div>
            );
        }
    }

    public getProperties(): ITextboxData {
        const data: ITextboxData = this.Data as ITextboxData;

        return {
            id: data?.id ?? Guid.new(),
            type: EnumControlType.Textbox,
            label: data?.label,
            inline: data?.inline,
            placeholder: data?.placeholder
        };
    }
}