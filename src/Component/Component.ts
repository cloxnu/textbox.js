import { DefaultConfig } from "../Config/Config";

interface Component {
    config: ComponentConfig,
    default: DefaultConfig,
    buildElement(): HTMLElement,
}

interface ComponentConfig {}

class ComponentDefaultConfig extends DefaultConfig implements ComponentConfig {}

export {
    ComponentConfig,
    ComponentDefaultConfig,
    Component,
}
