import { MessageConfigConverter, MessageInnerConfig } from "../Config/MessageConfig";
import { Component } from "./Component";
import boxStyles from '../css/textbox.css';
import { OuterConfig } from "../Config/Config";

class MessageComponent extends Component {
    private config: MessageInnerConfig;

    constructor(config: OuterConfig, name?: string) {
        super();
        let configConverter = new MessageConfigConverter(config, name);
        this.config = configConverter.toInnerConfig() ?? new MessageInnerConfig();
    }

    protected buildElement(): HTMLElement {
        let ele = document.createElement('span');
        ele.classList.add(boxStyles["textbox-message"]);
        ele.textContent = this.config.content;
        return ele;
    }
}

export {
    MessageComponent,
};