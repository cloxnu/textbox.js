import utils from "../utils";
import BaseBox from "./BaseBox";
import { Component } from "../Component/Component";
import { MessageComponent } from "../Component/MessageComponent";
import { ButtonComponent } from "../Component/ButtonComponent";
import { UserConfig } from "../Config/Config";

class TextBox extends BaseBox {
    private messageComponent: MessageComponent
    private buttonComponent: ButtonComponent

    constructor(config: UserConfig) {
        super(config);
        this.messageComponent = new MessageComponent(config);
        this.buttonComponent = new ButtonComponent(config);
    }

    get content(): Component | undefined {
        return undefined;
    }

    get components(): Component[] {
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
