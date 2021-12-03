import utils from "../utils";
import { ConfigConverter, InnerConfig, OuterConfig } from "./Config";

class PresetInnerConfig extends InnerConfig implements OuterConfig {
    [key: string]: any;
}

class PresetConfigConverter extends ConfigConverter <PresetInnerConfig> {
    get defaultName(): string {
        return 'preset';
    }

    get defaultValue(): OuterConfig {
        return {};
    }

    filter(config: OuterConfig) {
        let presetConfig = this.toInnerConfig() ?? new PresetInnerConfig();
        utils.deepMerge(presetConfig, config);
        utils.deepMerge(config, presetConfig);
    }

    /** Convert Method */

    objectValue(value: Object): PresetInnerConfig {
        return {...new PresetInnerConfig(), ...value};
    }

    arrayValue(value: any[]): PresetInnerConfig {
        let config = new PresetInnerConfig();
        value.forEach((item) => {
            if (utils.isObject(item)) {
                utils.deepMerge(config, item);
            }
        });
        return config;
    }
}

export {
    PresetInnerConfig,
    PresetConfigConverter,
}
