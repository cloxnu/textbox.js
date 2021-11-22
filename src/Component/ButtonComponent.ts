import { Component, ComponentConfig } from "./Component";
import { DefaultConfig, UserConfig } from "../Config/Config";

interface ButtonComponentConfig extends ComponentConfig {
    btn_text: string[],
}

class ButtonComponentDefaultConfig extends DefaultConfig implements ButtonComponentConfig {
    btn_text = ["OK"];
}

class ButtonComponent implements Component {
    config: ButtonComponentConfig;

    get default() {
        return new ButtonComponentDefaultConfig();
    }

    constructor(config: UserConfig) {
        this.config = this.default.set(config);
    }

    buildElement(): HTMLElement {
        /*
        <div id="text-box-${this.id}-btn-div" class="text-box-btn-div">
            <button id="text-box-${this.id}-confirm-btn" class="submit-btn" onclick="all_textbox['${this.id}'].submit_btn_clicked()">${data.button_text !== undefined ? htmlencode(data.button_text) : i18n['room.confirm']}</button>
        </div>
        */

        let div = document.createElement('div');
        div.classList.add('text-box-btn-div');

        for (let index = 0; index < this.config.btn_text.length; index++) {
            let button = document.createElement('button');
            button.classList.add("text-box-submit-btn");
            button.innerText = this.config.btn_text[index];

            div.appendChild(button);
        }

        return div;
    }
}

export {
    ButtonComponentConfig, 
    ButtonComponent,
}
