import utils from '../utils';
import { Component, ComponentConfig, UserConfig } from '../Component/Component';

class BoxConfig extends ComponentConfig {
    id: string = utils.generate_id();
    title: string = "";
}

class BaseBox extends Component <BoxConfig> {
    exists: boolean = false;

    get default() {
        return new BoxConfig();
    }

    constructor(config: UserConfig) {
        super(config);
    }

    render(): void {
        if (this.exists) {
            this.show();
            return;
        }
        console.log('TextBox render: ' + this.config.id);
        this.exists = true;
        document.body.appendChild(this.element);
    }

    show(): void {
        if (this.exists) {
            this.element.classList.remove('invisible');
        }
    }

    hide(): void {
        if (this.exists) {
            this.element.classList.add('invisible');
        }
    }

    destroy(): void {
        if (!this.exists) {
            return;
        }
        console.log('TextBox destory: ' + this.config.id);
        this.hide();
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
        div.classList.add('text-box-wrapper');
        div.appendChild(this.backdrop);
        div.appendChild(this.boxElement);
        return div;
    }

    public get backdrop(): HTMLDivElement {
        if (utils.empty(this._backdrop)) {
            let ele = document.createElement('div');
            ele.classList.add('text-box-backdrop');
            this._backdrop = ele;
        }
        return this._backdrop!;
    }

    public get boxElement(): HTMLDivElement {
        if (utils.empty(this._boxElement)) {
            let ele = document.createElement('div');
            ele.classList.add('text-box');
            ele.appendChild(this.titleBar);
            ele.appendChild(this.boxContent);
            this._boxElement = ele;
        }
        return this._boxElement!;
    }

    public get titleBar(): HTMLDivElement {
        if (utils.empty(this._titleBar)) {
            let ele = document.createElement('div');
            ele.classList.add('text-box-title-bar');
            ele.appendChild(this.titleElement);
            ele.appendChild(this.cancelButton);
            this._titleBar = ele;
        }
        return this._titleBar!;
    }

    public get boxContent(): HTMLDivElement {
        if (utils.empty(this._boxContent)) {
            let ele = document.createElement('div');
            ele.classList.add('text-box-content');

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
            ele.classList.add('text-box-title');
            ele.textContent = this.config.title;
            this._titleElement = ele;
        }
        return this._titleElement!;
    }
    
    public get cancelButton(): HTMLButtonElement {
        if (utils.empty(this._cancelButton)) {
            let box = this;
            let ele = document.createElement('button');
            ele.classList.add('text-box-cancel');
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
