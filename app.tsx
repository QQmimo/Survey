import React from "react";
import { createRoot } from 'react-dom/client';
import { Checkbox, Panel, Select, Textbox } from "Frameworks/Controls";
import { Editor } from "Frameworks/Editor";

window.onload = () => {
    const root = createRoot(document.querySelector('#app'));

    root.render(
        <Editor
            controls={[
                Panel,
                Textbox,
                Select,
                Checkbox
            ]}
        />
    );
}