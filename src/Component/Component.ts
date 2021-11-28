import { OuterConfig, UserConfig } from "../Config/Config";
import utils from "../utils";

class Component {
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
