import { Component, ComponentConfig } from "./Component";

interface ButtonComponentConfig extends ComponentConfig {
    btn_text: string[],
}

class ButtonComponent implements Component {
    element: HTMLElement;

    constructor(config: ButtonComponentConfig) {
        /*
        <div id="text-box-${this.id}-btn-div" class="text-box-btn-div">
            <button id="text-box-${this.id}-confirm-btn" class="submit-btn" onclick="all_textbox['${this.id}'].submit_btn_clicked()">${data.button_text !== undefined ? htmlencode(data.button_text) : i18n['room.confirm']}</button>
        </div>
        */
        let div = document.createElement('div');
        div.id = `text-box-${config.id}-btn-div`
        div.classList.add('text-box-btn-div');

        for (let index = 0; index < config.btn_text.length; index++) {
            let button = document.createElement('button');
            button.id = config.id
            button.classList.add("text-box-submit-btn");
            button.innerText = config.btn_text[index];

            div.appendChild(button);
        }

        this.element = div;
    }
}

export {
    ButtonComponentConfig, 
    ButtonComponent,
}
