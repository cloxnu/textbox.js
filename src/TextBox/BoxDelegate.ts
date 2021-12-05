interface BoxDelegate {
    render(): void;
    show(): void;
    hide(): void;
    destroy(fn?: Function): void;
    remove(): void;
}

export default BoxDelegate;