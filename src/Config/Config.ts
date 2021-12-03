type UserConfig = Object;

class InnerConfig {
    static get default(): InstanceType<typeof this> {
        return new this();
    }
}

interface OuterConfig {
    [key: string]: any;
}

class ConfigConverter <T extends InnerConfig = InnerConfig> {
    name: string;
    value: any;

    constructor(config?: UserConfig, name?: string) {
        this.name = name ?? this.defaultName;
        let outerConfig: OuterConfig = config ?? {};
        this.value = outerConfig.hasOwnProperty(this.name) ? outerConfig[this.name] : this.defaultValue;
    }

    get defaultName(): string {
        return "";
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
    InnerConfig,
    OuterConfig,
    ConfigConverter,
}

