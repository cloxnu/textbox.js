import { ButtonConfigConverter, ButtonInnerConfig } from "../Config/ButtonConfig";
import { Component, UserConfig } from "./Component";
import buttonStyles from '../css/button.css';
import boxStyles from '../css/textbox.css';
import BoxDelegate from "../TextBox/BoxDelegate";

class ButtonComponent extends Component {
    private config: ButtonInnerConfig;

    constructor(config?: UserConfig, name?: string) {
        super();
        let configConverter = new ButtonConfigConverter(config, name);
        this.config = configConverter.toInnerConfig() ?? new ButtonInnerConfig();
    }

    protected buildElement(): HTMLElement {
        /*
        <div id="text-box-${this.id}-btn-div" class="text-box-btn-div">
            <button id="text-box-${this.id}-confirm-btn" class="submit-btn" onclick="all_textbox['${this.id}'].submit_btn_clicked()">${data.button_text !== undefined ? htmlencode(data.button_text) : i18n['room.confirm']}</button>
        </div>
        */

        let div = document.createElement('div');
        div.classList.add(boxStyles["textbox-btn-div"]);

        for (let index = 0; index < this.buttons.length; index++) {
            const button = this.buttons[index];
            div.appendChild(button);
        }
        return div;
    }

    /** Elements */

    private _buttons: HTMLButtonElement[] = [];
    public boxDelegate?: BoxDelegate;

    get buttons(): HTMLButtonElement[] {
        if (this._buttons.length == 0) {
            for (let index = 0; index < this.config.buttons.length; index++) {
                const buttonConfig = this.config.buttons[index];
                let button = document.createElement('button');
                button.classList.add(buttonStyles["submit-btn"]);
                button.textContent = buttonConfig.text;
                button.onclick = () => {
                    if (typeof buttonConfig.callback == 'function' && buttonConfig.callback()) {
                        this.boxDelegate?.destroy();
                    }
                }
                this._buttons.push(button);
            }
        }
        return this._buttons;
    }
}

export { 
    ButtonComponent,
}
