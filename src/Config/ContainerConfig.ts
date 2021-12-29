import _ from "lodash";
import { ComponentConfig, ComponentConfigManager } from "./ComponentConfig";
import { ConfigConverter, OuterConfig } from "./Config";

class ContainerInnerConfig extends ComponentConfig {
    componentsConfig: OuterConfig = {};
}

class ContainerConfigManager extends ComponentConfigManager <ContainerInnerConfig> {
    get defaultName(): string {
        return 'container';
    }

    protected toInnerConfig(value: any, defaultInnerConfig?: ContainerInnerConfig): ContainerInnerConfig {
        let configConverter = new ContainerConfigConverter(value, defaultInnerConfig);
        return configConverter.toInnerConfig() ?? new ContainerInnerConfig();
    }
}

class ContainerConfigConverter extends ConfigConverter <ContainerInnerConfig> {
    get defaultValue(): any {
        return {};
    }

    objectValue(value: OuterConfig): ContainerInnerConfig {
        return _.merge((this.defaultInnerConfig ?? new ContainerInnerConfig()), value);
    }
}

export {
    ContainerInnerConfig,
    ContainerConfigManager,
    ContainerConfigConverter,
}
