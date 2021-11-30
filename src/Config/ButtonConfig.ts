import { ConfigConverter, InnerConfig } from "./Config";

declare global {
    interface OuterConfig {
        button: string | string[] | object | object[];
        btn_callback: () => boolean;
    }
}

class OneButtonInnerConfig {
    text = "";
    callback = () => { return true; }
}

class ButtonInnerConfig extends InnerConfig {
    buttons: OneButtonInnerConfig[] = [];
}

class ButtonConfigConverter extends ConfigConverter <ButtonInnerConfig> {
    get entrance(): any {
        return this.outerConfig.button;
    }

    get default(): Partial<OuterConfig> {
        return {
            button: "OK",
            btn_callback: () => { return true; },
        }
    }

    /** Convert Method */

    stringEntrance(): ButtonInnerConfig {
        let config = new ButtonInnerConfig();
        let oneConfig = new OneButtonInnerConfig();
        oneConfig.text = this.outerConfig.button as string;
        if (typeof this.outerConfig.btn_callback == 'function') {
            oneConfig.callback = this.outerConfig.btn_callback;
        }

        config.buttons = [oneConfig]; 
        return config;
    }

    numberEntrance(): ButtonInnerConfig {
        return this.stringEntrance();
    }

    arrayEntrance(): ButtonInnerConfig {
        let config = new ButtonInnerConfig();
        this.entrance.forEach((item: string | OneButtonInnerConfig) => {
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

    objectEntrance(): ButtonInnerConfig {
        let config = new ButtonInnerConfig();
        config.buttons = [{...new OneButtonInnerConfig(), ...this.outerConfig.button as object}];
        return config;
    }
}

export {
    OneButtonInnerConfig,
    ButtonInnerConfig,
    ButtonConfigConverter,
}
