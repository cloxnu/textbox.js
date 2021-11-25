import utils from "../utils";

type UserConfig = Object;

class ComponentConfig {}

class Component <T extends ComponentConfig = ComponentConfig> {
    config: T;
    
    protected get default(): T {
        throw new Error("default getter method must be implemented!");
    }

    constructor(config: UserConfig) {
        this.config = Object.assign({}, this.default, config);
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
    ComponentConfig,
    Component,
}
