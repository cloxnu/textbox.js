import { ConfigManager, InnerConfig } from "./Config";

class ComponentConfig extends InnerConfig {
    id?: string;
    class?: string[] | string;
    innerHTML?: string;
    color?: string;

    setIn(element: HTMLElement) {
        check(this.id, obj => element.id = obj);
        check(this.class, obj => {
            switch (typeof obj) {
                case 'string':
                    element.classList.add(obj);
                    break;
                case 'object':
                    if (Array.isArray(obj)) {
                        element.classList.add(...obj);
                    }
                    break;
            }
        });
        check(this.innerHTML, obj => element.innerHTML = obj);
        check(this.color, obj => element.style.color = obj);
    }
}

function check(obj: any, block: (obj: any) => void) {
    if (obj) {
        block(obj);
    }
}

abstract class ComponentConfigManager <T extends ComponentConfig> extends ConfigManager <T> {
    protected abstract toInnerConfig(value: any, defaultInnerConfig?: ComponentConfig): T;
}

export {
    ComponentConfig,
    ComponentConfigManager,
}
