import _ from "lodash";
import BoxDelegate from "../TextBox/BoxDelegate";
import { ConfigConverter, OuterConfig } from "./Config";
import { ComponentConfig, ComponentConfigManager } from "./ComponentConfig";

class ButtonInnerConfig extends ComponentConfig {
    text = "OK";
    callback = (_?: BoxDelegate): boolean => { return true; };
    style = "default";
}

class ButtonConfigManager extends ComponentConfigManager <ButtonInnerConfig> {
    get defaultName(): string {
        return "button";
    }

    protected toInnerConfig(value: any, defaultInnerConfig?: ButtonInnerConfig): ButtonInnerConfig {
        let configConverter = new ButtonConfigConverter(value, defaultInnerConfig);
        return configConverter.toInnerConfig() ?? new ButtonInnerConfig();
    }
}

class ButtonConfigConverter extends ConfigConverter <ButtonInnerConfig> {
    get defaultValue(): string {
        return "OK";
    }

    /** Convert Method */

    stringValue(value: string): ButtonInnerConfig | undefined {
        return this.objectValue({
            text: value,
        });
    }

    numberValue(value: number): ButtonInnerConfig | undefined {
        return this.stringValue(value.toString());
    }

    objectValue(value: OuterConfig): ButtonInnerConfig | undefined {
        return _.merge((this.defaultInnerConfig ?? new ButtonInnerConfig()), value);
    }
}

export {
    ButtonInnerConfig,
    ButtonConfigManager,
    ButtonConfigConverter,
}
