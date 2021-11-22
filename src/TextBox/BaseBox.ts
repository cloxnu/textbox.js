import utils from '../utils';
import { Component } from '../Component/Component';
import { DefaultConfig, UserConfig } from '../Config/Config';

interface BoxConfig {
    id: string,
    title: string,
}

class BoxDefaultConfig extends DefaultConfig implements BoxConfig {
    id = utils.generate_id();
    title = "";
}

class BaseBox {
    private config: BoxConfig;
    private components: Component[] = [];

    constructor(config: UserConfig) {
        const defaultConfig = new BoxDefaultConfig();
        this.config = defaultConfig.set(config);
    }

    render() {
        console.log('TextBox render: ' + this.config.id);
    }

    destroy() {
        console.log('TextBox destory: ' + this.config.title);
    }

    get getComponents(): Component[] {
        return this.components;
    }
}

export default BaseBox;
