import { MessageInnerConfig, MessageOuterConfig } from "../Config/MessageConfig";
import { Component, UserConfig } from "./Component";

class MessageComponent extends Component <MessageOuterConfig> {
    private config: MessageInnerConfig;

    protected get default() {
        return new MessageOuterConfig();
    }

    constructor(config: UserConfig) {
        console.log(typeof new MessageOuterConfig().getInnerConfig);
        super(config);
        console.log(typeof this.outerConfig.getInnerConfig);
        this.config = this.outerConfig.getInnerConfig();
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