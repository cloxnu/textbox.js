import { ConfigManager, InnerConfig } from "./Config";

class ComponentConfig extends InnerConfig {
    id?: string;
    class?: string[] | string;
    innerHTML?: string;

    setIn(element: HTMLElement) {
        if (this.id) {
            element.id = this.id;
        }
        if (this.class) {
            switch (typeof this.class) {
                case 'string':
                    element.classList.add(this.class);
                    break;
                case 'object':
                    if (Array.isArray(this.class)) {
                        element.classList.add(...this.class);
                    }
                    break;
            }
        }
        if (this.innerHTML) {
            element.innerHTML = this.innerHTML;
        }
    }
}

abstract class ComponentConfigManager <T extends ComponentConfig> extends ConfigManager <T> {
    protected abstract toInnerConfig(value: any, defaultInnerConfig?: ComponentConfig): T;
}

export {
    ComponentConfig,
    ComponentConfigManager,
}
