import utils from "../utils";
import { ConfigConverter, InnerConfig, OuterConfig } from "./Config";

class AliasInnerConfig extends InnerConfig {
    [name: string]: string[];
}

class AliasConfigConverter extends ConfigConverter <AliasInnerConfig> {
    get defaultName(): string {
        return 'alias';
    }

    get defaultValue(): OuterConfig {
        return {};
    }

    filter(config: OuterConfig) {
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
        let aliasConfig = this.toInnerConfig() ?? new AliasInnerConfig();
        let newConfig: OuterConfig = {};
        for (const name in aliasConfig) {
            if (!Object.prototype.hasOwnProperty.call(config, name)) {
                continue;
            }
            const element = config[name];
            delete config[name];
            const aliasArray: string[] = utils.deepCopy(aliasConfig[name]);
            const lastName = aliasArray.pop();
            if (typeof lastName == 'undefined') {
                continue;
            }
            let dynamicConfig: OuterConfig = {}
            dynamicConfig[lastName] = element;
            aliasArray.reverse().forEach((key) => {
                const old = Object.assign({}, dynamicConfig);
                dynamicConfig = {};
                dynamicConfig[key] = old;
            });
            newConfig = utils.deepMerge(newConfig, dynamicConfig);
        }
        utils.deepMerge(newConfig, config);
        utils.deepMerge(config, newConfig);
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
                Object.assign(config, this.objectValue(item));
            }
        })
        return config;
    }
}

export {
    AliasInnerConfig,
    AliasConfigConverter,
}
