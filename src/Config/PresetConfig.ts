import _ from "lodash";
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

    filter(config: OuterConfig): OuterConfig {
        let presetConfig = this.toInnerConfig() ?? new PresetInnerConfig();
        return _.merge(presetConfig, config);
    }

    /** Convert Method */

    objectValue(value: OuterConfig): PresetInnerConfig {
        if (value.hasOwnProperty(this.name)) {
            let configConverter = new PresetConfigConverter(value);
            value = configConverter.filter(value);
        }
        return _.defaultsDeep(new PresetInnerConfig(), value);
    }

    arrayValue(value: any[]): PresetInnerConfig {
        let config = new PresetInnerConfig();
        value.forEach((item) => {
            if (utils.isObject(item)) {
                if (item.hasOwnProperty(this.name)) {
                    let configConverter = new PresetConfigConverter(item);
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
    PresetConfigConverter,
}
