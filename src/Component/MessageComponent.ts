import { Component, ComponentConfig, UserConfig } from "./Component";

class MessageComponentConfig extends ComponentConfig {
    message = "";
}

class MessageComponent extends Component <MessageComponentConfig> {
    protected get default() {
        return new MessageComponentConfig();
    }

    constructor(config: UserConfig) {
        super(config);
    }

    protected buildElement(): HTMLElement {
        let ele = document.createElement('span');
        ele.classList.add('text-box-message');
        ele.textContent = this.config.message;
        return ele;
    }
}

export {
    MessageComponentConfig,
    MessageComponent,
};