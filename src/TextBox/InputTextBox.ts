import { Component, UserConfig } from "../Component/Component";
import TextBox from "./TextBox";

class InputTextBox extends TextBox {
    constructor(config?: UserConfig) {
        super(config);
    }
    
    get content(): Component | undefined {
        return undefined;
    }
}

export default InputTextBox;
