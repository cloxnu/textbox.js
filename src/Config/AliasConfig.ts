import _ from "lodash";
import utils from "../utils";
import { ConfigConverter, ConfigManager, InnerConfig, OuterConfig } from "./Config";

class AliasInnerConfig extends InnerConfig {
    [name: string]: string[];
}

class AliasConfigManager extends ConfigManager <AliasInnerConfig> {
    get defaultName(): string {
        return "alias";
    }

    protected toInnerConfig(value: any, defaultInnerConfig?: AliasInnerConfig): AliasInnerConfig {
        let configConverter = new AliasConfigConverter(value, defaultInnerConfig);
        return configConverter.toInnerConfig() ?? new AliasInnerConfig();
    }

    filter(config: OuterConfig): OuterConfig {
        /**
         * <------ config
         * alias: { <----- aliasConfig
         *     'btn_text': ['button', 'text'],
         *          ^      ^            ^
         *         name   aliasArray   lastName
         * },
         * btn_text: 'hello',
         *    ^         ^
         *   name      element
         */
        let aliasConfig = this.innerConfig;
        let newConfig: OuterConfig = {};
        for (const name in aliasConfig) {
            if (!Object.prototype.hasOwnProperty.call(config, name)) {
                continue;
            }
            const element = config[name];
            delete config[name];
            const aliasArray: string[] = _.cloneDeep(aliasConfig[name]);
            const lastName = aliasArray.pop();
            if (typeof lastName == 'undefined') {
                continue;
            }
            let dynamicConfig: OuterConfig = {}
            dynamicConfig[lastName] = element;
            aliasArray.reverse().forEach((key) => {
                const old = _.cloneDeep(dynamicConfig);
                dynamicConfig = {};
                dynamicConfig[key] = old;
            });
            newConfig = _.merge(newConfig, dynamicConfig);
        }
        return _.merge(newConfig, config);
    }
}

class AliasConfigConverter extends ConfigConverter <AliasInnerConfig> {
    get defaultValue(): OuterConfig {
        return {};
    }

    /** Convert Method */

    objectValue(value: OuterConfig): AliasInnerConfig {
        let config = new AliasInnerConfig();
        for (const key in value) {
            const element = value[key];
            switch (typeof element) {
                case 'string':
                    config[key] = [value[key]];
                    break;
                case 'object':
                    if (Array.isArray(element)) {
                        config[key] = value[key];
                        break;
                    }
                    break;
            }
        }
        return config;
    }

    arrayValue(value: any[]): AliasInnerConfig {
        let config = new AliasInnerConfig();
        value.forEach((item) => {
            if (utils.isObject(item)) {
                config = _.merge(config, this.objectValue(item));
            }
        })
        return config;
    }
}

export {
    AliasInnerConfig,
    AliasConfigManager,
    AliasConfigConverter,
}
