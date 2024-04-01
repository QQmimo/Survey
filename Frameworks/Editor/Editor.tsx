import React from "react";
import { IEditorProps } from ".";
import { Container } from "Frameworks/Container";
import { EnumMode } from "Domain/Enums";
import { IControlData } from "Domain/Interfaces";
import { TabPanel } from "Frameworks/TabPanel";
import styles from "./Editor.module.scss";

export class Editor extends React.Component<IEditorProps> {
    public render(): React.ReactNode {
        return (
            <div className={styles.editor}>
                <TabPanel
                    tabs={[
                        {
                            label: 'Form',
                            active: true,
                            container: this._renderForm()
                        },
                        {
                            label: 'JSON',
                            container: this._renderJSON()
                        }
                    ]}
                />
            </div>
        );
    }

    private _renderForm(): JSX.Element {
        const data: IControlData[] = require('../../data.json');
        return (
            <>
                <Container
                    controls={this.props.controls}
                    mode={EnumMode.Edit}
                    data={data}
                />
                <div className={styles.properties}>
                    <div>Properties</div>
                </div>
            </>
        );
    }

    private _renderJSON(): JSX.Element {
        return (
            <textarea />
        );
    }
}