import _ from "lodash";
import utils from "../utils";
import { ConfigConverter, ConfigManager, InnerConfig, OuterConfig } from "./Config";

class PresetInnerConfig extends InnerConfig implements OuterConfig {
    [key: string]: any;
}

class PresetConfigManager extends ConfigManager <PresetInnerConfig> {
    get defaultName(): string {
        return "preset";
    }

    protected toInnerConfig(value: any, defaultInnerConfig?: PresetInnerConfig): PresetInnerConfig {
        let configConverter = new PresetConfigConverter(value, this.name, defaultInnerConfig);
        return configConverter.toInnerConfig() ?? new PresetInnerConfig();
    }

    filter(config: OuterConfig): OuterConfig {
        return _.merge(this.innerConfig, config);
    }
}

class PresetConfigConverter extends ConfigConverter <PresetInnerConfig> {
    private name = 'preset';

    get defaultValue(): OuterConfig {
        return {};
    }

    constructor(value?: any, name?: string, defaultInnerConfig?: PresetInnerConfig) {
        super(value, defaultInnerConfig);
        this.name = name ?? this.name;
        this.value = value ?? this.defaultValue;
        this.defaultInnerConfig = defaultInnerConfig;
    }

    filter(config: OuterConfig): OuterConfig {
        let presetConfig = this.toInnerConfig() ?? new PresetInnerConfig();
        return _.merge(presetConfig, config);
    }

    /** Convert Method */

    objectValue(value: OuterConfig): PresetInnerConfig {
        if (value.hasOwnProperty(this.name)) {
            let configConverter = new PresetConfigConverter(value[this.name]);
            value = configConverter.filter(value);
        }
        return _.defaultsDeep(new PresetInnerConfig(), value);
    }

    arrayValue(value: any[]): PresetInnerConfig {
        let config = new PresetInnerConfig();
        value.forEach((item) => {
            if (utils.isObject(item)) {
                if (item.hasOwnProperty(this.name)) {
                    let configConverter = new PresetConfigConverter(item[this.name]);
                    item = configConverter.filter(item);
                }
                config = _.merge(config, item);
            }
        });
        return config;
    }
}

export {
    PresetInnerConfig,
    PresetConfigManager,
    PresetConfigConverter,
}
