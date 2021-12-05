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
        console.log(_.cloneDeep(presetConfig));
        console.log(_.cloneDeep(config));
        return _.merge(presetConfig, config);
    }

    /** Convert Method */

    objectValue(value: Object): PresetInnerConfig {
        return _.defaultsDeep(new PresetInnerConfig(), value);
    }

    arrayValue(value: any[]): PresetInnerConfig {
        let config = new PresetInnerConfig();
        value.forEach((item) => {
            if (utils.isObject(item)) {
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
