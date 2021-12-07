import utils from "../utils";
import BaseBox from "./BaseBox";
import { Component } from "../Component/Component";
import { MessageComponent } from "../Component/MessageComponent";
import { ButtonComponent } from "../Component/ButtonComponent";
import { UserConfig } from "../Config/Config";

class TextBox extends BaseBox {
    messageComponent: MessageComponent;
    buttonComponent: ButtonComponent;

    constructor(config?: UserConfig) {
        super(config);
        this.messageComponent = new MessageComponent(this.outerConfig);
        this.buttonComponent = new ButtonComponent(this.outerConfig);
        this.buttonComponent.boxDelegate = this;
    }

    get content(): Component | undefined {
        return undefined;
    }

    protected get components(): Component[] {
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
