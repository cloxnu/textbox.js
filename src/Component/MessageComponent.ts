import { MessageConfigManager, MessageInnerConfig } from "../Config/MessageConfig";
import style from '../assets/css/component/message.css';
import { OuterConfig } from "../Config/Config";
import _ from "lodash";
import { ManageableComponent } from "./ManageableComponent";

class MessageComponent extends ManageableComponent <MessageConfigManager, MessageInnerConfig> {

    constructor(config: OuterConfig, name?: string, defaultInnerConfig?: MessageInnerConfig) {
        super(new MessageConfigManager(config, name, defaultInnerConfig));
    }

    protected buildElement(): HTMLElement {
        let ele = document.createElement('span');
        ele.classList.add(style["component-message"]);
        return ele;
    }

    protected configureElement(element: HTMLElement) {
        element.textContent = this.config.content;
    }
}

export {
    MessageComponent,
};