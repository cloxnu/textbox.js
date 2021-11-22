import { Component, ComponentConfig } from "./Component";
import { DefaultConfig, UserConfig } from "../Config/Config";

interface MessageComponentConfig extends ComponentConfig {
    message: string,
}

class MessageComponentDefaultConfig extends DefaultConfig implements MessageComponentConfig {
    message = "";
}

class MessageComponent implements Component {
    config: MessageComponentConfig;

    get default() {
        return new MessageComponentDefaultConfig();
    }

    constructor(config: UserConfig) {
        this.config = this.default.set(config);
    }

    buildElement(): HTMLElement {
        let ele = document.createElement('span');
        ele.classList.add('text-box-message');
        ele.innerText = this.config.message;
        return ele;
    }
}

export {
    MessageComponentConfig,
    MessageComponent,
};