import { Component, ComponentConfig } from "./Component";

interface MessageComponentConfig extends ComponentConfig {
    message: string
}

class MessageComponent implements Component {
    element: HTMLElement;

    constructor(config: MessageComponentConfig) {
        let ele = document.createElement('span');
        ele.id = `text-box-${config.id}-message`;
        ele.classList.add('text-box-message');
        ele.innerText = config.message;
        this.element = ele;
    }
}

export {
    MessageComponentConfig,
    MessageComponent,
};