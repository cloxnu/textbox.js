//@ts-ignore
import buttonCancelSvg from '../assets/svg/x.svg';

import _ from 'lodash';
import utils from '../utils';
import { Component } from '../Component/Component';
import { OuterConfig, UserConfig } from '../Config/Config';
import boxStyle from '../assets/css/textbox.css';
import messageComponentStyle from '../assets/css/component/message.css';
import BoxDelegate from './BoxDelegate';
import { PresetConfigManager } from '../Config/PresetConfig';
import { AliasConfigManager } from '../Config/AliasConfig';
import { BoxConfig } from '../Config/BoxConfig';
import { MessageComponent } from '../Component/MessageComponent';
import { ButtonComponent } from '../Component/ButtonComponent';
import { ButtonInnerConfig } from '../Config/ButtonConfig';
import { MessageInnerConfig } from '../Config/MessageConfig';
import { FilterConfig } from '../Config/FilterConfig';
import { ContainerComponent } from '../Component/ContainerComponent';
import { ContainerInnerConfig } from '../Config/ContainerConfig';

class BaseBox extends Component implements BoxDelegate {
    config: BoxConfig;
    outerConfig: OuterConfig;
    storedAliasConfig: FilterConfig = {};
    exists: boolean = false;

    constructor(config?: UserConfig, defaultConfig?: UserConfig) {
        super();
        this.outerConfig = this.loadConfig(config, defaultConfig);
        this.config = _.merge(new BoxConfig(), this.outerConfig);
        this.log('Load config:', this.outerConfig);
    }

    private loadConfig(config?: UserConfig, defaultConfig?: UserConfig): OuterConfig {
        let outerConfig = config ?? {}
        if (typeof config != 'undefined') {
            outerConfig = this.loadPresetConfig(outerConfig);
            outerConfig = _.merge(defaultConfig, outerConfig);
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
        _.merge(this.config, config);

        this.backdrop.update(this.outerConfig);
        this.boxElement.update(this.outerConfig);
        this.titleBar.update(this.outerConfig);
        this.boxContent.update(this.outerConfig);
        this.titleComponent.update(this.outerConfig);
        this.cancelButton.update(this.outerConfig);
        
        this.log('Updated config:', this.outerConfig);
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

    private _backdrop?: ContainerComponent;
    private _boxElement?: ContainerComponent;
    private _titleBar?: ContainerComponent;
    private _boxContent?: ContainerComponent;
    private _titleComponent?: MessageComponent;
    private _cancelButton?: ButtonComponent;

    protected buildElement(): HTMLElement {
        let div = document.createElement('div');
        div.classList.add(boxStyle['textbox-wrapper']);
        div.appendChild(this.backdrop.element);
        div.appendChild(this.boxElement.element);
        return div;
    }

    protected configureElement(element: HTMLElement): void {}

    public get backdrop(): ContainerComponent {
        if (utils.empty(this._backdrop)) {
            let presetBackdropConfig = _.merge(new ContainerInnerConfig(), {
                class: boxStyle['textbox-backdrop'],
            });
            this._backdrop = new ContainerComponent(this.config, "backdrop", presetBackdropConfig);
        }
        return this._backdrop!;
    }

    public get boxElement(): ContainerComponent {
        if (utils.empty(this._boxElement)) {
            let presetBoxElementConfig = _.merge(new ContainerInnerConfig(), {
                class: boxStyle.textbox,
            });
            this._boxElement = new ContainerComponent(this.config, "box", presetBoxElementConfig);
            this._boxElement.components = [
                this.titleBar,
                this.boxContent,
            ];
        }
        return this._boxElement!;
    }

    public get titleBar(): ContainerComponent {
        if (utils.empty(this._titleBar)) {
            let presetTitleBarConfig = _.merge(new ContainerInnerConfig(), {
                class: boxStyle['textbox-title-bar'],
            });
            this._titleBar = new ContainerComponent(this.outerConfig, "title_bar", presetTitleBarConfig);
            this._titleBar.components = [
                this.titleComponent,
                this.cancelButton,
            ]
        }
        return this._titleBar!;
    }

    public get boxContent(): ContainerComponent {
        if (utils.empty(this._boxContent)) {
            let presetBoxContentConfig = _.merge(new ContainerInnerConfig(), {
                class: boxStyle['textbox-content'],
            }); 
            this._boxContent = new ContainerComponent(this.outerConfig, "box_content", presetBoxContentConfig);
            this._boxContent.components = this.components;
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
