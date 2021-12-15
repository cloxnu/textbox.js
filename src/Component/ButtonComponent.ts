import _ from "lodash";
import { ButtonConfigManager, ButtonInnerConfig } from "../Config/ButtonConfig";
import { OuterConfig } from "../Config/Config";
import ButtonPreset from "../Preset/ButtonPreset";
import BoxDelegate from "../TextBox/BoxDelegate";
import { ManageableComponent } from "./ManageableComponent";

class ButtonComponent extends ManageableComponent <ButtonConfigManager, ButtonInnerConfig> {
    public boxDelegate?: BoxDelegate;

    constructor(config: OuterConfig, name?: string, defaultInnerConfig?: ButtonInnerConfig) {
        super(new ButtonConfigManager(config, name, defaultInnerConfig));
    }

    protected buildElement(): HTMLButtonElement {
        let button = document.createElement('button');
        button.classList.add(ButtonPreset.style[this.config.style] ?? '');
        button.textContent = this.config.text;
        button.onclick = () => {
            if (typeof this.config.callback == 'function' && 
                this.config.callback(this.boxDelegate)) {
                this.boxDelegate?.destroy();
            }
        }
        return button;
    }
    
}

export {
    ButtonComponent,
}
