import utils from '../utils';
import { Component, ComponentConfig, UserConfig } from '../Component/Component';

class BoxConfig extends ComponentConfig {
    id: string = utils.generate_id();
    title: string = "";
}

class BaseBox extends Component <BoxConfig> {
    get default() {
        return new BoxConfig();
    }

    constructor(config: UserConfig) {
        super(config);
    }

    render() {
        console.log('TextBox render: ' + this.config.id);
        document.body.appendChild(this.element);
    }

    destroy() {
        console.log('TextBox destory: ' + this.config.title);
    }

    get components(): Component[] {
        return [];
    }

    /** Element */
    protected buildElement(): HTMLElement {
        let div = document.createElement('div');
        this.components.forEach(component => {
            div.appendChild(component.element);
        });
        return div;
    }
}

export default BaseBox;
