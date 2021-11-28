import { MessageConfigConverter, MessageInnerConfig } from "../Config/MessageConfig";
import { Component, UserConfig } from "./Component";

class MessageComponent extends Component {
    private config: MessageInnerConfig;

    constructor(config: UserConfig) {
        super();
        let configConverter = new MessageConfigConverter(config);
        this.config = configConverter.toInnerConfig() ?? new MessageInnerConfig();
    }

    protected buildElement(): HTMLElement {
        let ele = document.createElement('span');
        ele.classList.add('text-box-message');
        ele.textContent = this.config.content;
        return ele;
    }
}

export {
    MessageComponent,
};