import { ConfigConverter, InnerConfig } from "./Config";

declare global {
    interface OuterConfig {
        message: string | object;
    }
}

class MessageInnerConfig extends InnerConfig {
    content = "";
}

class MessageConfigConverter extends ConfigConverter <MessageInnerConfig> {
    get entrance(): any {
        return this.outerConfig.message;
    }

    get default(): Partial<OuterConfig> {
        return {
            message: "",
        }
    }

    /** Convert Method */

    stringEntrance(): MessageInnerConfig {
        let config = new MessageInnerConfig();
        config.content = this.outerConfig.message as string;
        return config;
    }

    numberEntrance(): MessageInnerConfig {
        return this.stringEntrance();
    }

    objectEntrance(): MessageInnerConfig {
        return {...new MessageInnerConfig(), ...this.entrance as object};
    }
}

export {
    MessageInnerConfig,
    MessageConfigConverter,
}

