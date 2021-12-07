import _ from "lodash";
import BoxDelegate from "../TextBox/BoxDelegate";
import utils from "../utils";
import { ConfigConverter, InnerConfig, OuterConfig } from "./Config";

class OneButtonInnerConfig {
    text = "OK";
    callback = (_?: BoxDelegate): boolean => { return true; }
}

class ButtonInnerConfig extends InnerConfig {
    buttons: OneButtonInnerConfig[] = [];
}

class ButtonConfigConverter extends ConfigConverter <ButtonInnerConfig> {
    get defaultName(): string {
        return "button";
    }

    get defaultValue(): string {
        return "OK";
    }

    /** Convert Method */

    stringValue(value: string): ButtonInnerConfig {
        let config = new ButtonInnerConfig();
        let oneConfig = new OneButtonInnerConfig();
        oneConfig.text = value;

        config.buttons = [oneConfig]; 
        return config;
    }

    numberValue(value: number): ButtonInnerConfig {
        return this.stringValue(value.toString());
    }

    arrayValue(value: Array<any>): ButtonInnerConfig {
        let config = new ButtonInnerConfig();
        value.forEach((item: string | OneButtonInnerConfig) => {
            let oneConfig = new OneButtonInnerConfig();
            if (typeof item == 'string') {
                oneConfig.text = item;
            }
            else if (utils.isObject(item)) {
                oneConfig = _.merge(oneConfig, item);
            }
            config.buttons.push(oneConfig);
        })
        return config;
    }

    objectValue(value: OuterConfig): ButtonInnerConfig {
        let config = new ButtonInnerConfig();
        config.buttons = [_.merge(new OneButtonInnerConfig(), value)];
        return config;
    }
}

export {
    OneButtonInnerConfig,
    ButtonInnerConfig,
    ButtonConfigConverter,
}
