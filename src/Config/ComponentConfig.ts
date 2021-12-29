import { ConfigManager, InnerConfig } from "./Config";

type CssItemType = {property: string, value: string, priority?: string};

class ComponentConfig extends InnerConfig {
    id?: string;
    class?: string[] | string;
    innerHTML?: string;
    color?: string;
    bgColor?: string;
    
    css?: CssItemType[];

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
        check(this.bgColor, obj => element.style.backgroundColor = obj);

        check(this.css, obj => {
            obj.forEach((item: CssItemType) => {
                element.style.setProperty(item.property, item.value, item.priority);
            });
        });
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
