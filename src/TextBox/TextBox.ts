import utils from "../utils";
import BaseBox from "./BaseBox";
import { TextBoxConfig, TextBoxDefaultConfig } from "../Config/TextBoxConfig";
import { Component } from "../Component/Component";
import { MessageComponent } from "../Component/MessageComponent";
import { ButtonComponent } from "../Component/ButtonComponent";

class TextBox extends BaseBox {
    private messageComponent: MessageComponent
    protected content?: Component
    private buttonComponent: ButtonComponent

    constructor(config: TextBoxConfig) {
        super(config);
        config = Object.assign({}, new TextBoxDefaultConfig(), config);
        this.messageComponent = new MessageComponent(config);
        this.buttonComponent = new ButtonComponent(config);
    }

    get getContent(): Component | undefined {
        return undefined;
    }

    get getComponents(): Component[] {
        if (utils.empty(this.content)) {
            return [
                this.messageComponent, 
                this.buttonComponent
            ];
        } else {
            return [
                this.messageComponent,
                this.content!,
                this.buttonComponent,
            ];
        }
    }
}

export default TextBox;
