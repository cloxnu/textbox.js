import { ComponentConfig, ComponentConfigManager } from "../Config/ComponentConfig";
import { OuterConfig } from "../Config/Config";
import utils from "../utils";

abstract class Component {

    abstract config: ComponentConfig;

    /** Element */

    private _element?: HTMLElement;

    public get element(): HTMLElement {
        if (utils.empty(this._element)) {
            this._element = this.buildElement();
            this.config.setIn(this._element);
        }
        return this._element!;
    }

    public updateElement(): void {
        if (!utils.empty(this._element)) {
            let ele = this.buildElement();
            this.config.setIn(ele);
            this.element.replaceWith(ele);
            this._element = ele;
        }
    }

    protected abstract buildElement(): HTMLElement;
}

export {
    Component,
}
