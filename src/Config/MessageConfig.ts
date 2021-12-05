import _ from "lodash";
import { ConfigConverter, InnerConfig, OuterConfig } from "./Config";

class MessageInnerConfig extends InnerConfig {
    content = "";
}

class MessageConfigConverter extends ConfigConverter <MessageInnerConfig> {
    get defaultName(): string {
        return "message";
    }
    
    get defaultValue(): string {
        return "";
    }

    /** Convert Method */

    stringValue(value: string): MessageInnerConfig {
        let config = new MessageInnerConfig();
        config.content = value;
        return config;
    }

    numberValue(value: number): MessageInnerConfig {
        return this.stringValue(value.toString());
    }

    objectValue(value: OuterConfig): MessageInnerConfig {
        return _.merge(new MessageInnerConfig(), value); 
    }
}

export {
    MessageInnerConfig,
    MessageConfigConverter,
}

