import { ConfigManager, InnerConfig, OuterConfig } from "./Config";

class FilterConfig extends InnerConfig {
    [key: string]: any;
}

abstract class FilterConfigManager <T extends FilterConfig> extends ConfigManager <T> {
    abstract filter(config: OuterConfig): OuterConfig;
}

export {
    FilterConfig,
    FilterConfigManager,
}
