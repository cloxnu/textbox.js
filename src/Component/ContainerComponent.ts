import { OuterConfig } from "../Config/Config";
import { ContainerConfigManager, ContainerInnerConfig } from "../Config/ContainerConfig";
import { Component } from "./Component";
import { ManageableComponent } from "./ManageableComponent";

class ContainerComponent extends ManageableComponent <ContainerConfigManager, ContainerInnerConfig> {
    components: Component[] = [];
    
    constructor(config: OuterConfig, name?: string, defaultInnerConfig?: ContainerInnerConfig) {
        super(new ContainerConfigManager(config, name, defaultInnerConfig));
    }

    protected buildElement(): HTMLElement {
        let div = document.createElement('div');
        this.components.forEach(component => {
            div.appendChild(component.element);
        });
        return div;
    }

    protected configureElement(element: HTMLElement): void {}
}

export {
    ContainerComponent,
}
