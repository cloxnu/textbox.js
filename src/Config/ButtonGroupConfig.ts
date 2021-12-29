import _ from "lodash";
import { ConfigConverter, OuterConfig } from "./Config";
import { ComponentConfig, ComponentConfigManager } from "./ComponentConfig";

class ButtonGroupInnerConfig extends ComponentConfig {
    buttons: OuterConfig[] = [];
}

class ButtonGroupConfigManager extends ComponentConfigManager <ButtonGroupInnerConfig> {
    get defaultName(): string {
        return "buttons";
    }

    protected toInnerConfig(value: any, defaultInnerConfig?: ButtonGroupInnerConfig): ButtonGroupInnerConfig {
        let configConverter = new ButtonGroupConfigConverter(value, defaultInnerConfig);
        return configConverter.toInnerConfig() ?? new ButtonGroupInnerConfig();
    }
}

class ButtonGroupConfigConverter extends ConfigConverter <ButtonGroupInnerConfig> {
    get defaultValue(): string {
        return "OK";
    }

    /** Convert Method */

    stringValue(value: string): ButtonGroupInnerConfig {
        return this.singleButton(value);
    }

    numberValue(value: number): ButtonGroupInnerConfig {
        return this.stringValue(value.toString());
    }

    arrayValue(value: Array<any>): ButtonGroupInnerConfig {
        let config = this.defaultInnerConfig ?? new ButtonGroupInnerConfig();
        value.forEach(item => {
            config.buttons.push(item);
        })
        return config;
    }

    objectValue(value: OuterConfig): ButtonGroupInnerConfig {
        return this.singleButton(value);
    }

    /** Private */

    private singleButton(value: any): ButtonGroupInnerConfig {
        let config = this.defaultInnerConfig ?? new ButtonGroupInnerConfig();
        config.buttons = [value]; 
        return config;
    }
}

export {
    ButtonGroupInnerConfig,
    ButtonGroupConfigManager,
    ButtonGroupConfigConverter,
}
