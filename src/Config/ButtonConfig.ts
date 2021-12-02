import { ConfigConverter, InnerConfig } from "./Config";

class OneButtonInnerConfig {
    text = "";
    callback = () => { return true; }
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
            else if (typeof item == 'object') {
                oneConfig = {...oneConfig, ...item};
            }
            config.buttons.push(oneConfig);
        })
        return config;
    }

    objectValue(value: Object): ButtonInnerConfig {
        let config = new ButtonInnerConfig();
        config.buttons = [{...new OneButtonInnerConfig(), ...value}];
        return config;
    }
}

export {
    OneButtonInnerConfig,
    ButtonInnerConfig,
    ButtonConfigConverter,
}
