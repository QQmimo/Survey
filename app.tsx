import React from "react";
import { createRoot } from 'react-dom/client';
import { Checkbox, Panel, Select, Textbox } from "Frameworks/Controls";
import { Container } from "Frameworks/Container";
import { EnumMode } from "Domain/Enums";
import { IControlData } from "Domain/Interfaces";

window.onload = () => {
    const root = createRoot(document.querySelector('#app'));
    const data: IControlData[] = require('./data.json');

    root.render(
        <Container
            controls={[
                Panel,
                Textbox,
                Select,
                Checkbox
            ]}
            data={data}
            mode={EnumMode.View}
        />
    );
}