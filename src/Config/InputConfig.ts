import _ from "lodash";
import { ComponentConfig, ComponentConfigManager } from "./ComponentConfig";
import { ConfigConverter, OuterConfig } from "./Config";

class InputInnerConfig extends ComponentConfig {
    type: string = 'text';
    focus_when_showing: boolean = true;
    value: string = '';
    placeholder: string = '';
    maxLength: number = -1;
}

class InputConfigManager extends ComponentConfigManager <InputInnerConfig> {
    get defaultName(): string {
        return 'input';
    }

    protected toInnerConfig(value: any, defaultInnerConfig?: InputInnerConfig): InputInnerConfig {
        const configConverter = new InputConfigConverter(value, defaultInnerConfig);
        return configConverter.toInnerConfig() ?? new InputInnerConfig();
    }
}

class InputConfigConverter extends ConfigConverter <InputInnerConfig> {
    get defaultValue(): any {
        return "";
    }

    stringValue(value: string): InputInnerConfig | undefined {
        return this.objectValue({
            'value': value,
        });
    }

    objectValue(value: OuterConfig): InputInnerConfig | undefined {
        return _.merge((this.defaultInnerConfig ?? new InputInnerConfig()), value);
    }
}

export {
    InputInnerConfig,
    InputConfigManager,
    InputConfigConverter,
}
