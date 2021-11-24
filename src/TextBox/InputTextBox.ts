import { Component } from "../Component/Component";
import { UserConfig } from "../Config/Config";
import TextBox from "./TextBox";

class InputTextBox extends TextBox {
    constructor(config: UserConfig) {
        super(config);
    }
    
    get content(): Component | undefined {
        return undefined;
    }
}

export default InputTextBox;
