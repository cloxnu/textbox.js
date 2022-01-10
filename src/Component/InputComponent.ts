import { OuterConfig } from "../Config/Config";
import { InputConfigManager, InputInnerConfig } from "../Config/InputConfig";
import { ManageableComponent } from "./ManageableComponent";
import inputStyle from '../assets/css/component/input.css';
import utils from "../utils";

class InputComponent extends ManageableComponent <InputConfigManager, InputInnerConfig> {
    constructor(config: OuterConfig, name?: string, defaultInnerConfig?: InputInnerConfig) {
        super(new InputConfigManager(config, name, defaultInnerConfig));
    }

    protected buildElement(): HTMLInputElement {
        let input = document.createElement('input');
        input.classList.add(inputStyle["component-input"]);

        return input;
    }

    protected configureElement(element: HTMLInputElement): void {
        element.type = this.config.type;
        element.value = this.config.value;
        element.placeholder = this.config.placeholder;
        utils.check(this.config.max_length, obj => element.maxLength = obj);
    }
}

export {
    InputComponent,
}
