import _ from "lodash";

type UserConfig = Object;

interface OuterConfig {
    [key: string]: any;
}

class InnerConfig {
    static get default(): InstanceType<typeof this> {
        return new this();
    }
}

abstract class ConfigManager <T extends InnerConfig> {
    hasName: boolean;
    name: string;
    value: any;
    innerConfig: T;
    defaultInnerConfig?: T;

    get defaultName(): string {
        throw new Error("DefaultName must be implemented!");
    }

    /**
     * The `ConfigManager` can manage config from outer to inner.
     * @param config The outer config.
     * @param name The `config` represent itself if `name` is '', default name if `name` is nil.
     * @param defaultInnerConfig 
     */
    constructor(config: OuterConfig, name?: string, defaultInnerConfig?: T) {
        this.hasName = (name != '');
        this.name = name ?? this.defaultName;
        this.value = this.hasName ? config[this.name] : config;
        this.innerConfig = this.toInnerConfig(this.value, defaultInnerConfig);
    }

    update(config: OuterConfig): boolean {
        if (this.hasName && !config.hasOwnProperty(this.name)) {
            return false;
        }
        this.value = this.hasName ? config[this.name] : config;
        _.merge(this.innerConfig, this.toInnerConfig(this.value, this.innerConfig));
        return true;
    }

    protected abstract toInnerConfig(value: any, defaultInnerConfig?: T): T;
}

class ConfigConverter <T extends InnerConfig> {
    value: any;
    defaultInnerConfig?: T;

    constructor(value?: any, defaultInnerConfig?: T) {
        this.value = value ?? this.defaultValue;
        this.defaultInnerConfig = defaultInnerConfig;
    }

    get defaultValue(): any {
        return "";
    }

    toInnerConfig(): T | undefined {
        switch (typeof this.value) {
            case 'string':
                return this.stringValue(this.value);
            case 'number':
                return this.numberValue(this.value);
            case 'object':
                if (Array.isArray(this.value)) {
                    return this.arrayValue(this.value);
                } else {
                    return this.objectValue(this.value);
                }
            default:
                break;
        }
        return undefined;
    }

    /** Convert Method */

    stringValue(value: string): T | undefined { return; }
    numberValue(value: number): T | undefined { return; }
    arrayValue(value: Array<any>): T | undefined { return; }
    objectValue(value: OuterConfig): T | undefined { return; }
}

export {
    UserConfig,
    OuterConfig,
    InnerConfig,
    ConfigManager,
    ConfigConverter,
}

