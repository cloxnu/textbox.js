import { Component } from "../Component/Component";
import { TextBoxConfig } from "../Config/TextBoxConfig";
import TextBox from "./TextBox";

class InputTextBox extends TextBox {
    protected content?: Component | undefined

    constructor(config: TextBoxConfig) {
        super(config);
    }
    
    get getContent(): Component | undefined {
        return this.content;
    }
}

export default InputTextBox;
