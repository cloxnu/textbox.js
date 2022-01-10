import utils from "../utils";
import { ConfigManager, InnerConfig } from "./Config";

type CssItemType = {property: string, value: string, priority?: string};
enum Type {
    Number,
    String,
    Array,
    Dictionary,
}

class ComponentConfig extends InnerConfig {
    id?: string;
    class?: string[] | string;
    innerHTML?: string;
    color?: string;
    bgColor?: string;
    
    attr?: object;
    css?: CssItemType[] | CssItemType;
    csskv?: object;

    setIn(element: HTMLElement) {
        check(this.id, Type.String, obj => element.id = obj);

        check(this.class, Type.String, obj => {
            element.classList.add(obj);
        });
        check(this.class, Type.Array, obj => {
            element.classList.add(...obj);
        });

        check(this.innerHTML, Type.String, obj => element.innerHTML = obj);
        check(this.color, Type.String, obj => element.style.color = obj);
        check(this.bgColor, Type.String, obj => element.style.backgroundColor = obj);

        check(this.css, Type.Dictionary, obj => {
            if ('property' in obj && 'value' in obj) {
                element.style.setProperty(obj.property, obj.value, obj.priority);
            }
        });
        check(this.css, Type.Array, obj => {
            obj.forEach((item: CssItemType) => {
                if ('property' in item && 'value' in item) {
                    element.style.setProperty(item.property, item.value, item.priority);
                }
            });
        });

        check(this.attr, Type.Dictionary, obj => {
            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    const value = obj[key];
                    element.setAttribute(key, value);
                }
            }
        });

        check(this.csskv, Type.Dictionary, obj => {
            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    const value = obj[key];
                    element.style.setProperty(key, value);
                }
            }
        });
        check(this.csskv, Type.Array, obj => {
            obj.forEach((item: any) => {
                if (utils.isObject(item)) {
                    for (const key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            const value = obj[key];
                            element.style.setProperty(key, value);
                        }
                    }
                }
            });
        });
    }
}

function check(obj: any, type: Type, block: (obj: any) => void) {
    if (obj &&
        (type === Type.Number && typeof(obj) === 'number') ||
        (type === Type.String && typeof(obj) === 'string') ||
        (type === Type.Array && utils.isArray(obj)) ||
        (type === Type.Dictionary && utils.isObject(obj))) {
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
