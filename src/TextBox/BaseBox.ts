import _ from 'lodash';
import utils from '../utils';
import { Component, UserConfig } from '../Component/Component';
import boxStyles from '../css/textbox.css';
import BoxDelegate from './BoxDelegate';
import { PresetConfigConverter } from '../Config/PresetConfig';
import { AliasConfigConverter } from '../Config/AliasConfig';
import { BoxConfig } from '../Config/BoxConfig';

//@ts-ignore
import buttonCancelSvg from '../assets/x.svg';

class BaseBox extends Component implements BoxDelegate {
    private config: BoxConfig;
    exists: boolean = false;

    constructor(config?: UserConfig) {
        super();
        if (typeof config != 'undefined') {
            config = this.loadPresetConfig(config);
            config = this.loadAliasConfig(config);
        }
        this.config = _.merge(new BoxConfig(), config);
        this.log('Load config:', config);
    }

    private loadAliasConfig(config: UserConfig): UserConfig {
        let configConverter = new AliasConfigConverter(config);
        return configConverter.filter(config);
    }

    private loadPresetConfig(config: UserConfig): UserConfig {
        let configConverter = new PresetConfigConverter(config);
        return configConverter.filter(config);
    }

    render(): void {
        this._show();
        if (this.exists) {
            return;
        }
        this.log('Box render:', this.config.id);
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

    destroy(fn?: Function): void {
        if (!this.exists) {
            return;
        }
        this.log('Box destory:', this.config.id);
        this._hide();
        this.exists = false;
        setTimeout(() => {
            if (!this.exists) {
                this.element.remove();
            }
            if (typeof fn === 'function') {
                fn();
            }
        }, 300);
    }

    remove(): void {
        this.exists = false;
        this.element.remove();
    }

    protected get components(): Component[] {
        return [];
    }

    log(...message: any[]) {
        if (this.config.log) {
            console.log(`[${this.constructor.name}]`, ...message);
        }
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
            };
            ele.innerHTML = buttonCancelSvg;
            this._cancelButton = ele;
        }
        return this._cancelButton!;
    }

    /** More Function */

    public static RemoveAllBox() {
        let allBox = document.getElementsByClassName(boxStyles['textbox-wrapper']);
        while(allBox[0]) {
            allBox[0].remove();
        }
    }
    
}

export default BaseBox;
