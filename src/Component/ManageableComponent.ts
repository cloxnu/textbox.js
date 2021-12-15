import { ComponentConfig, ComponentConfigManager } from "../Config/ComponentConfig";
import { OuterConfig } from "../Config/Config";
import { Component } from "./Component";

abstract class ManageableComponent <T extends ComponentConfigManager<U>, 
                                    U extends ComponentConfig> 
        extends Component {
    protected configManager: T;

    get config(): U {
        return this.configManager.innerConfig;
    }

    constructor(configManager: T) {
        super();
        this.configManager = configManager;
    }

    update(config: OuterConfig): void {
        if (!this.configManager.update(config)) {
            return;
        }
        this.updateElement();
    }
}

export {
    ManageableComponent,
}
