import React from "react";
import { ITabPanelProps, ITabPanelState } from ".";
import { Guid } from "Applications/Guid";
import styles from "./TabPanel.module.scss";

export class TabPanel extends React.Component<ITabPanelProps, ITabPanelState> {
    constructor(props: Readonly<ITabPanelProps>) {
        super(props);

        this.state = {
            activeTabIndex: this.props.tabs.findIndex(tab => tab.active)
        }
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.tab_panel}>
                <div className={styles.tabs}>
                    {
                        this.props.tabs.map((tab, index) =>
                            <button
                                key={Guid.new()}
                                className={[
                                    styles.tab,
                                    this.state.activeTabIndex === index ? styles.active : null
                                ].join(' ')}
                                disabled={this.state.activeTabIndex === index}
                                onClick={() => { this._onToggleTab(index); }}
                            >
                                {tab.label}
                            </button>
                        )
                    }
                </div>
                <div className={styles.containers}>
                    {
                        this.props.tabs.map((tab, index) =>
                            index === this.state.activeTabIndex
                                ? <React.Fragment key={Guid.new()}>{tab.container}</React.Fragment>
                                : null
                        )
                    }
                </div>
            </div>
        );
    }

    private _onToggleTab(newIndex: number): void {
        this.setState({
            activeTabIndex: newIndex
        });
    }
}