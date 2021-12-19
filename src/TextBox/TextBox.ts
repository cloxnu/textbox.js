import utils from "../utils";
import BaseBox from "./BaseBox";
import { Component } from "../Component/Component";
import { MessageComponent } from "../Component/MessageComponent";
import { ButtonGroupComponent } from "../Component/ButtonGroupComponent";
import { UserConfig } from "../Config/Config";
import _ from "lodash";
import TextBoxPreset from "../Preset/TextBoxPreset";

class TextBox extends BaseBox {
    messageComponent: MessageComponent;
    buttonGroupComponent: ButtonGroupComponent;

    constructor(config?: UserConfig) {
        _.merge(config, TextBoxPreset.preset);
        super(config);
        this.messageComponent = new MessageComponent(this.outerConfig);
        this.buttonGroupComponent = new ButtonGroupComponent(this.outerConfig);
        this.buttonGroupComponent.boxDelegate = this;
    }

    update(config?: UserConfig): void {
        super.update(config);
        this.messageComponent.update(this.outerConfig);
        this.buttonGroupComponent.update(this.outerConfig);
    }

    get content(): Component | undefined {
        return undefined;
    }

    protected get components(): Component[] {
        if (utils.empty(this.content)) {
            return [
                this.messageComponent, 
                this.buttonGroupComponent
            ];
        } else {
            return [
                this.messageComponent,
                this.content!,
                this.buttonGroupComponent,
            ];
        }
    }
}

export default TextBox;
