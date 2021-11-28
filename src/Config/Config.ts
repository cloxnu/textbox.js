type UserConfig = Object;

class InnerConfig {
    static get default(): InstanceType<typeof this> {
        return new this();
    }
}

declare global {
    interface OuterConfig {}
}


class ConfigConverter <T extends InnerConfig = InnerConfig> {
    outerConfig: Partial<OuterConfig>;

    constructor(config: UserConfig) {
        this.outerConfig = Object.assign({}, this.default, config);
    }

    get entrance(): any {
        throw new Error("Entrance method must be implemented!");
    }

    get default(): Partial<OuterConfig> {
        return {};
    }

    toInnerConfig(): T | undefined {
        switch (typeof this.entrance) {
            case 'string':
                return this.stringEntrance();
            case 'number':
                return this.numberEntrance();
            case 'object':
                if (Array.isArray(this.entrance)) {
                    return this.arrayEntrance();
                } else {
                    return this.objectEntrance();
                }
            default:
                break;
        }
        return undefined;
    }

    /** Convert Method */

    stringEntrance(): T | undefined { return; }
    numberEntrance(): T | undefined { return; }
    arrayEntrance(): T | undefined { return; }
    objectEntrance(): T | undefined { return; }
}

export {
    UserConfig,
    InnerConfig,
    OuterConfig,
    ConfigConverter,
}

