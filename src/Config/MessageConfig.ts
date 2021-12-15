import _ from "lodash";
import { ComponentConfig, ComponentConfigManager } from "./ComponentConfig";
import { ConfigConverter, OuterConfig } from "./Config";

class MessageInnerConfig extends ComponentConfig {
    content = "";
}

class MessageConfigManager extends ComponentConfigManager <MessageInnerConfig> {
    get defaultName(): string {
        return "message";
    }

    protected toInnerConfig(value: any, defaultInnerConfig?: MessageInnerConfig): MessageInnerConfig {
        let configConverter = new MessageConfigConverter(value, defaultInnerConfig);
        return configConverter.toInnerConfig() ?? new MessageInnerConfig();
    }
}

class MessageConfigConverter extends ConfigConverter <MessageInnerConfig> {
    get defaultValue(): string {
        return "";
    }

    /** Convert Method */

    stringValue(value: string): MessageInnerConfig {
        return this.objectValue({
            content: value,
        });
    }

    numberValue(value: number): MessageInnerConfig {
        return this.stringValue(value.toString());
    }

    objectValue(value: OuterConfig): MessageInnerConfig {
        return _.merge((this.defaultInnerConfig ?? new MessageInnerConfig()), value); 
    }
}

export {
    MessageInnerConfig,
    MessageConfigManager,
    MessageConfigConverter,
}

