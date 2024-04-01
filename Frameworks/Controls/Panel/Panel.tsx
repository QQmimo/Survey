import { EnumControlType, EnumMode } from "Domain/Enums";
import { IPanelData } from ".";
import { BaseControl } from "..";
import { Container } from "Frameworks/Container";
import styles from "./Panel.module.scss";

export class Panel extends BaseControl {
    public draw = (data: IPanelData): JSX.Element => {
        if (data.type === EnumControlType.Panel) {
            return (
                <div className={[styles.panel, data.label ? null : styles.borderless].join(' ')}>
                    {
                        data.label
                            ? <div className={styles.label}>{data.label}</div>
                            : null
                    }
                    <div className={styles.container}>
                        <Container
                            {...this.Container.props}
                            data={data.childs}
                        />
                    </div>
                    {
                        this.Container.props.mode === EnumMode.Edit
                            ? <div className={styles.toolbar}>

                            </div>
                            : null
                    }
                </div>
            );
        }
    }
}