import { InputComponent } from "../Component/InputComponent";
import { UserConfig } from "../Config/Config";
import TextBox from "./TextBox";

class InputTextBox extends TextBox {
    inputComponent: InputComponent;

    constructor(config?: UserConfig, defaultConfig?: UserConfig) {
        super(config, defaultConfig);
        this.inputComponent = new InputComponent(this.outerConfig);
    }

    update(config?: UserConfig): void {
        super.update(config);
        this.inputComponent.update(this.outerConfig);
    }

    onAppear(): void {
        if (this.inputComponent.config.focus_when_showing) {
            this.inputComponent.element.focus();
        }
    }

    onDisappear(): void {
        this.inputComponent.element.blur();
    }
    
    get content(): InputComponent {
        return this.inputComponent;
    }
}

export default InputTextBox;
