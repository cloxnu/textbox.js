import { InnerConfig, OuterConfig } from "./Config";

class OneButtonInnerConfig {
    text = "";
}

class ButtonInnerConfig extends InnerConfig {
    buttons: OneButtonInnerConfig[] = [];
}

class ButtonOuterConfig extends OuterConfig {
    button: string | string[] | object | object[] = "";

    get entrance() {
        return this.button;
    }

    getInnerConfig(): ButtonInnerConfig {
        let config = new ButtonInnerConfig();
        switch (typeof this.entrance) {
            case 'string':
                let oneConfig = new OneButtonInnerConfig();
                oneConfig.text = this.button as string;
                config.buttons = [oneConfig];
                break;
            case 'object':
                if (Array.isArray(this.entrance)) {
                    this.entrance.forEach(item => {
                        let oneConfig = new OneButtonInnerConfig();
                        if (typeof item == 'string') {
                            oneConfig.text = item;
                        }
                        else if (typeof item == 'object') {
                            oneConfig = {...oneConfig, ...item};
                        }
                        config.buttons.push(oneConfig);
                    })
                }
                else {
                    config.buttons = [{...new OneButtonInnerConfig(), ...this.button as object}];
                }
                
                break;
        }
        return config;
    }
    
}

export {
    ButtonInnerConfig,
    ButtonOuterConfig,
}
