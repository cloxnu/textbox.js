type UserConfig = Object;

class DefaultConfig {
    set(config: UserConfig): (typeof this) {
        return Object.assign({}, this, config);
    }
}

export {
    UserConfig,
    DefaultConfig,
}

