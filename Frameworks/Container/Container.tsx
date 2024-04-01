import React from "react";
import { BaseControl } from "Frameworks/Controls";
import { IContainerProps, IContainerState } from ".";
import { Methods } from "Domain/Types";
import { EnumControlType } from "Domain/Enums";

export class Container extends React.Component<IContainerProps, IContainerState> {
    constructor(props: Readonly<IContainerProps>) {
        super(props);
        this.Controls = new Map<string, BaseControl>();
        for (const Control of this.props.controls) {
            this.Controls.set(Control.name, new Control(this));
        }

        this.state = {
            data: this.props.data
        };
    }

    protected Controls: Map<string, BaseControl>;
    protected broadcast<M extends keyof Methods<BaseControl>>(method: M, ...args: Parameters<BaseControl[M]>): ReturnType<BaseControl[M]> {
        let result: ReturnType<BaseControl[M]> = undefined;
        Array.from(this.Controls, ([key, value]) => value).forEach(control => {
            if (result === undefined) {
                result = control[method].call(this, ...args);
            }
        });
        if (result === undefined) {
            throw new Error(`Unknown type: '${args[0]?.type}'`);
        }
        return result;
    }
    protected draw = (): JSX.Element => {
        return (
            <>
                {
                    this.props.data.map((controlData, i) => {
                        return (
                            <React.Fragment key={controlData.id}>
                                {
                                    this.broadcast('draw', controlData)
                                }
                            </React.Fragment>
                        );
                    })
                }
            </>
        );
    }

    public render(): React.ReactNode {
        return this.draw();
    }
    public addControl(type: EnumControlType): void {
        this.broadcast('getProperties') //TODO: Определение контрола по типу и вывод его параметров
    }
}