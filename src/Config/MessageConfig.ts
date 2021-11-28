import { OuterConfig } from "../Component/Component";
import { InnerConfig } from "./Config";

class MessageInnerConfig extends InnerConfig {
    content = "";
    color = "#243";
}

class MessageOuterConfig extends OuterConfig {
    message: string | object = "";

    get entrance() {
        return this.message;
    }

    getInnerConfig(): MessageInnerConfig {
        let config = new MessageInnerConfig();
        switch (typeof this.entrance) {
            case 'string':
                config.content = this.message as string;
                break;
            case 'object':
                config = {...config, ...this.entrance as object};
                break;
        }
        return config;
    }
}

export {
    MessageInnerConfig,
    MessageOuterConfig,
}

