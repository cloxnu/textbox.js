import { ButtonGroupConfigManager, ButtonGroupInnerConfig } from "../Config/ButtonGroupConfig";
import buttonGroupStyle from '../assets/css/component/button_group.css';
import BoxDelegate from "../TextBox/BoxDelegate";
import { OuterConfig } from "../Config/Config";
import _ from "lodash";
import { ButtonComponent } from "./ButtonComponent";
import { ManageableComponent } from "./ManageableComponent";

class ButtonGroupComponent extends ManageableComponent <ButtonGroupConfigManager, ButtonGroupInnerConfig> {
    public buttons: ButtonComponent[] = [];

    constructor(config: OuterConfig, name?: string, defaultInnerConfig?: ButtonGroupInnerConfig) {
        super(new ButtonGroupConfigManager(config, name, defaultInnerConfig));
    }

    public _boxDelegate?: BoxDelegate;

    get boxDelegate(): BoxDelegate | undefined {
        return this._boxDelegate;
    }

    set boxDelegate(value: BoxDelegate | undefined) {
        this._boxDelegate = value;
        this.buttons.forEach(button => {
            button.boxDelegate = value;
        });
    }

    protected buildElement(): HTMLElement {
        /*
        <div id="text-box-${this.id}-btn-div" class="text-box-btn-div">
            <button id="text-box-${this.id}-confirm-btn" class="submit-btn" onclick="all_textbox['${this.id}'].submit_btn_clicked()">${data.button_text !== undefined ? htmlencode(data.button_text) : i18n['room.confirm']}</button>
        </div>
        */

        this.buttons = [];
        this.config.buttons.forEach(buttonOuterConfig => {
            let buttonComponent = new ButtonComponent(buttonOuterConfig, '');
            buttonComponent.boxDelegate = this.boxDelegate;
            this.buttons.push(buttonComponent);
        });

        let div = document.createElement('div');
        div.classList.add(buttonGroupStyle["component-button-div"]);

        this.buttons.forEach(button => {
            div.appendChild(button.element);
        });

        return div;
    }
}

export { 
    ButtonGroupComponent,
}
