import { ComponentConfig } from "../Config/ComponentConfig";
import utils from "../utils";

abstract class Component {

    abstract config: ComponentConfig;

    /** Element */

    private _element?: HTMLElement;

    public get element(): HTMLElement {
        if (utils.empty(this._element)) {
            this._element = this.buildElement();
            this.configureElement(this._element);
            this.config.setIn(this._element);
        }
        return this._element!;
    }

    public updateElement(): void {
        if (this._element) {
            this.config.setIn(this._element);
            this.configureElement(this._element);
        }
    }

    protected abstract buildElement(): HTMLElement;
    protected abstract configureElement(element: HTMLElement): void;
}

export {
    Component,
}
