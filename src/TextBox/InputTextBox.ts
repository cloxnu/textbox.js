import { Component } from "../Component/Component";
import { UserConfig } from "../Config/Config";
import TextBox from "./TextBox";

class InputTextBox extends TextBox {
    protected content?: Component | undefined

    constructor(config: UserConfig) {
        super(config);
    }
    
    get getContent(): Component | undefined {
        return this.content;
    }
}

export default InputTextBox;
