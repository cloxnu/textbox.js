import utils from '../utils';
import { Component, UserConfig } from '../Component/Component';
import boxStyles from '../css/textbox.css';
import BoxDelegate from './BoxDelegate';

declare global {
    interface OuterConfig {
        id: string,
        title: string,
    }
}

class BoxConfig {
    id: string = utils.generate_id();
    title: string = "";
}

class BaseBox extends Component implements BoxDelegate {
    private config: BoxConfig;
    exists: boolean = false;

    constructor(config: UserConfig) {
        super();
        this.config = Object.assign({}, new BoxConfig(), config);
    }

    render(): void {
        this._show();
        if (this.exists) {
            return;
        }
        console.log('Box render: ' + this.config.id);
        this.exists = true;
        document.body.appendChild(this.element);
    }

    private _show(): void {
        this.element.classList.remove(boxStyles.invisible);
    }

    private _hide(): void {
        this.element.classList.add(boxStyles.invisible);
    }

    show(): void {
        if (this.exists) {
            this._show();
        }
    }

    hide(): void {
        if (this.exists) {
            this._hide();
        }
    }

    destroy(): void {
        if (!this.exists) {
            return;
        }
        console.log('Box destory: ' + this.config.id);
        this._hide();
        this.exists = false;
        setTimeout(() => {
            if (!this.exists) {
                this.element.remove();
            }
        }, 300);
    }

    protected get components(): Component[] {
        return [];
    }

    /** Element */

    private _backdrop?: HTMLDivElement;
    private _boxElement?: HTMLDivElement;
    private _titleBar?: HTMLDivElement;
    private _boxContent?: HTMLDivElement;
    private _titleElement?: HTMLSpanElement;
    private _cancelButton?: HTMLButtonElement;

    protected buildElement(): HTMLElement {
        let div = document.createElement('div');
        div.classList.add(boxStyles['textbox-wrapper']);
        div.appendChild(this.backdrop);
        div.appendChild(this.boxElement);
        return div;
    }

    public get backdrop(): HTMLDivElement {
        if (utils.empty(this._backdrop)) {
            let ele = document.createElement('div');
            ele.classList.add(boxStyles['textbox-backdrop']);
            this._backdrop = ele;
        }
        return this._backdrop!;
    }

    public get boxElement(): HTMLDivElement {
        if (utils.empty(this._boxElement)) {
            let ele = document.createElement('div');
            ele.classList.add(boxStyles.textbox);
            ele.appendChild(this.titleBar);
            ele.appendChild(this.boxContent);
            this._boxElement = ele;
        }
        return this._boxElement!;
    }

    public get titleBar(): HTMLDivElement {
        if (utils.empty(this._titleBar)) {
            let ele = document.createElement('div');
            ele.classList.add(boxStyles['textbox-title-bar']);
            ele.appendChild(this.titleElement);
            ele.appendChild(this.cancelButton);
            this._titleBar = ele;
        }
        return this._titleBar!;
    }

    public get boxContent(): HTMLDivElement {
        if (utils.empty(this._boxContent)) {
            let ele = document.createElement('div');
            ele.classList.add(boxStyles['textbox-content']);

            this.components.forEach(component => {
                ele.appendChild(component.element);
            });
            this._boxContent = ele;
        }
        return this._boxContent!;
    }

    public get titleElement(): HTMLSpanElement {
        if (utils.empty(this._titleElement)) {
            let ele = document.createElement('span');
            ele.classList.add(boxStyles['textbox-title']);
            ele.textContent = this.config.title;
            this._titleElement = ele;
        }
        return this._titleElement!;
    }
    
    public get cancelButton(): HTMLButtonElement {
        if (utils.empty(this._cancelButton)) {
            let box = this;
            let ele = document.createElement('button');
            ele.classList.add(boxStyles['textbox-cancel']);
            ele.onclick = () => {
                box.destroy();
            }
            ele.innerHTML = "Cancel"; // x.svg needed
            this._cancelButton = ele;
        }
        return this._cancelButton!;
    }
    
}

export default BaseBox;
