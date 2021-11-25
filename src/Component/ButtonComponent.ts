import { Component, ComponentConfig, UserConfig } from "./Component";

class ButtonComponentConfig extends ComponentConfig {
    btn_text: string[] = ["OK"];
}

class ButtonComponent extends Component <ButtonComponentConfig> {
    get default() {
        return new ButtonComponentConfig();
    }

    constructor(config: UserConfig) {
        super(config);
    }

    protected buildElement(): HTMLElement {
        /*
        <div id="text-box-${this.id}-btn-div" class="text-box-btn-div">
            <button id="text-box-${this.id}-confirm-btn" class="submit-btn" onclick="all_textbox['${this.id}'].submit_btn_clicked()">${data.button_text !== undefined ? htmlencode(data.button_text) : i18n['room.confirm']}</button>
        </div>
        */

        let div = document.createElement('div');
        div.classList.add('text-box-btn-div');

        for (let index = 0; index < this.buttons.length; index++) {
            const button = this.buttons[index];
            div.appendChild(button);
        }
        return div;
    }

    /** Elements */

    private _buttons: HTMLButtonElement[] = [];

    get buttons(): HTMLButtonElement[] {
        if (this._buttons.length == 0) {
            for (let index = 0; index < this.config.btn_text.length; index++) {
                let button = document.createElement('button');
                button.classList.add("text-box-submit-btn");
                button.innerText = this.config.btn_text[index];
                this._buttons.push(button);
            }
        }
        return this._buttons!;
    }
}

export {
    ButtonComponentConfig, 
    ButtonComponent,
}
