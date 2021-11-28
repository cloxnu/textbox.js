import { OuterConfig, UserConfig } from "../Config/Config";
import utils from "../utils";

class Component <T extends OuterConfig = OuterConfig> {
    outerConfig: T;
    
    protected get default(): T {
        throw new Error("default getter method must be implemented!");
    }

    constructor(config: UserConfig) {
        this.outerConfig = Object.assign({}, this.default, config);
    }

    /** Element */

    private _element?: HTMLElement;

    public get element(): HTMLElement {
        if (utils.empty(this._element)) {
            this._element = this.buildElement();
        }
        return this._element!;
    }

    protected buildElement(): HTMLElement {
        throw new Error("buildElement method must be implemented!");
    }
}

export {
    UserConfig,
    OuterConfig,
    Component,
}
