import _ from "lodash";
import utils from "../utils";
import { ConfigConverter, ConfigManager, InnerConfig, OuterConfig } from "./Config";
import { FilterConfig, FilterConfigManager } from "./FilterConfig";

class AliasInnerConfig extends FilterConfig {
    [name: string]: string[];
}

class AliasConfigManager extends FilterConfigManager <AliasInnerConfig> {
    storedAliasConfig: FilterConfig = {};

    get defaultName(): string {
        return "alias";
    }

    protected toInnerConfig(value: any, defaultInnerConfig?: AliasInnerConfig): AliasInnerConfig {
        let configConverter = new AliasConfigConverter(value, defaultInnerConfig);
        return configConverter.toInnerConfig() ?? new AliasInnerConfig();
    }

    filter(config: OuterConfig): OuterConfig {
        let continueToAlias = true;
        do {
            let result = this.shallowAlias(config);
            continueToAlias = result.hasChange;
            config = _.merge(result.config, config);
        } while (continueToAlias);
        this.storedAliasConfig[this.name] = this.innerConfig;

        // 'alias' in the second level config.
        for (const name in config) {
            // except for 'alias' in the second level config.
            if (name == this.name) {
                continue;
            }
            if (Object.prototype.hasOwnProperty.call(config, name)) {
                const secondConfig = config[name];
                if (utils.isObject(secondConfig)) {
                    let configManager = new AliasConfigManager(secondConfig);
                    this.storedAliasConfig[name] = configManager.storedAliasConfig;
                    config[name] = _.merge(configManager.filter(secondConfig), secondConfig);
                }
            }
        }
        
        return config;
    }

    private shallowAlias(config: OuterConfig): {
        hasChange: boolean, config: OuterConfig
    } {
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
        let newConfig: OuterConfig = {};
        let hasChange = false;
        let aliasConfig = this.innerConfig;
        for (const name in aliasConfig) {
            // invalid alias, eg. 'btn' => 'btn'
            if (name == aliasConfig[name][0]) {
                continue;
            }
            if (!Object.prototype.hasOwnProperty.call(config, name)) {
                continue;
            }
            hasChange = true;
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

        return {
            hasChange: hasChange,
            config: newConfig,
        };
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
