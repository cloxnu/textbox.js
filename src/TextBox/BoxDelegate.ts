import { UserConfig } from "../Config/Config";

interface BoxDelegate {
    render(): void;
    show(): void;
    hide(): void;
    destroy(fn?: Function): void;
    remove(): void;
    update(config?: UserConfig): void;
}

export default BoxDelegate;