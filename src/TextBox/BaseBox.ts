import { Component } from '../Component/Component';
import { BoxConfig, DefaultConfig } from '../Config/BoxConfig';

class BaseBox {
    protected id: string;
    protected title: string;
    private components: Component[] = [];

    constructor(config: BoxConfig) {
        config = Object.assign({}, new DefaultConfig(), config);
        this.id = config.id;
        this.title = config.title;
    }

    render() {
        console.log('TextBox render: ' + this.id);
    }

    destroy() {
        console.log('TextBox destory: ' + this.id);
    }

    get getComponents(): Component[] {
        return this.components;
    }
}

export default BaseBox;
