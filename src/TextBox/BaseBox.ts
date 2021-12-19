//@ts-ignore
import buttonCancelSvg from '../assets/svg/x.svg';

import _ from 'lodash';
import utils from '../utils';
import { Component } from '../Component/Component';
import { OuterConfig, UserConfig } from '../Config/Config';
import boxStyle from '../assets/css/textbox.css';
import messageComponentStyle from '../assets/css/component/message.css';
import BoxDelegate from './BoxDelegate';
import { PresetConfigConverter, PresetConfigManager } from '../Config/PresetConfig';
import { AliasConfigConverter, AliasConfigManager, AliasInnerConfig } from '../Config/AliasConfig';
import { BoxConfig } from '../Config/BoxConfig';
import { MessageComponent } from '../Component/MessageComponent';
import { ButtonComponent } from '../Component/ButtonComponent';
import { ButtonInnerConfig } from '../Config/ButtonConfig';
import { MessageInnerConfig } from '../Config/MessageConfig';
import { FilterConfig } from '../Config/FilterConfig';

class BaseBox extends Component implements BoxDelegate {
    config: BoxConfig;
    outerConfig: OuterConfig;
    storedAliasConfig: FilterConfig = {};
    exists: boolean = false;

    constructor(config?: UserConfig) {
        super();
        this.outerConfig = this.loadConfig(config);
        this.config = _.merge(new BoxConfig(), this.outerConfig);
        this.log('Load config:', this.outerConfig);
    }

    private loadConfig(config?: UserConfig): OuterConfig {
        let outerConfig = config ?? {}
        if (typeof config != 'undefined') {
            outerConfig = this.loadPresetConfig(outerConfig);
            outerConfig = this.loadAliasConfig(outerConfig);
        }
        return outerConfig;
    }

    private loadPresetConfig(config: OuterConfig): OuterConfig {
        let configManager = new PresetConfigManager(config);
        return configManager.filter(config);
    }

    private loadAliasConfig(config: OuterConfig): OuterConfig {
        let configManager = new AliasConfigManager(config);
        this.storedAliasConfig = configManager.storedAliasConfig;
        return configManager.filter(config);
    }

    update(config?: UserConfig): void {
        config = _.merge({}, this.storedAliasConfig, config);
        config = this.loadConfig(config);
        _.merge(this.outerConfig, config);

        this.titleComponent.update(this.outerConfig);
        this.cancelButton.update(this.outerConfig);
        
        this.log('Updated config:', this.outerConfig);

        // Object.keys(new BoxConfig()).forEach(key => {
        //     console.log(key);
        //     if (config?.hasOwnProperty(key)) {
        //         _.merge(this.boxConfig, this.outerConfig);
        //         this.updateElement();
        //     }
        // });
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
        this.element.classList.remove(boxStyle.invisible);
    }

    private _hide(): void {
        this.element.classList.add(boxStyle.invisible);
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
    private _titleComponent?: MessageComponent;
    private _cancelButton?: ButtonComponent;

    protected buildElement(): HTMLElement {
        let div = document.createElement('div');
        div.classList.add(boxStyle['textbox-wrapper']);
        div.appendChild(this.backdrop);
        div.appendChild(this.boxElement);
        return div;
    }

    public get backdrop(): HTMLDivElement {
        if (utils.empty(this._backdrop)) {
            let ele = document.createElement('div');
            ele.classList.add(boxStyle['textbox-backdrop']);
            this._backdrop = ele;
        }
        return this._backdrop!;
    }

    public get boxElement(): HTMLDivElement {
        if (utils.empty(this._boxElement)) {
            let ele = document.createElement('div');
            ele.classList.add(boxStyle.textbox);
            ele.appendChild(this.titleBar);
            ele.appendChild(this.boxContent);
            this._boxElement = ele;
        }
        return this._boxElement!;
    }

    public get titleBar(): HTMLDivElement {
        if (utils.empty(this._titleBar)) {
            let ele = document.createElement('div');
            ele.classList.add(boxStyle['textbox-title-bar']);
            ele.appendChild(this.titleComponent.element);
            ele.appendChild(this.cancelButton.element);
            this._titleBar = ele;
        }
        return this._titleBar!;
    }

    public get boxContent(): HTMLDivElement {
        if (utils.empty(this._boxContent)) {
            let ele = document.createElement('div');
            ele.classList.add(boxStyle['textbox-content']);

            this.components.forEach(component => {
                ele.appendChild(component.element);
            });
            this._boxContent = ele;
        }
        return this._boxContent!;
    }

    public get titleComponent(): MessageComponent {
        if (utils.empty(this._titleComponent)) {
            let presetTitleConfig = _.merge(new MessageInnerConfig(), {
                class: messageComponentStyle.title,
            });
            this._titleComponent = new MessageComponent(this.outerConfig, "title", presetTitleConfig);
        }
        return this._titleComponent!;
    }
    
    public get cancelButton(): ButtonComponent {
        if (utils.empty(this._cancelButton)) {
            let presetButtonConfig = _.merge(new ButtonInnerConfig(), {
                style: 'img',
                text: '',
                class: boxStyle['textbox-cancel'],
                innerHTML: buttonCancelSvg,
            });

            this._cancelButton = new ButtonComponent(this.outerConfig, "x", presetButtonConfig);
            this._cancelButton.boxDelegate = this;
        }
        return this._cancelButton!;
    }

    /** More Function */

    public static RemoveAllBox() {
        let allBox = document.getElementsByClassName(boxStyle['textbox-wrapper']);
        while(allBox[0]) {
            allBox[0].remove();
        }
    }
    
}

export default BaseBox;
