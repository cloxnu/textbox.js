type UserConfig = Object;

class Config {
    static get default(): InstanceType<typeof this> {
        return new this();
    }
}

class InnerConfig extends Config {
    
}

abstract class OuterConfig extends Config {
    abstract get entrance(): any;
    abstract getInnerConfig(): InnerConfig;
}

export {
    UserConfig,
    Config,
    InnerConfig,
    OuterConfig,
}

