import { textbox } from "../../../shortcut"

describe('TextBox component', () => {
    test('title & message', () => {
        let tb = textbox({
            title: "Hello",
            message: "World",
        })
    
        expect(tb.titleElement.textContent).toBe("Hello");
        expect(tb.messageComponent.element.textContent).toBe("World");
    });

    test('button', () => {
        let tb = textbox({
            button: "test",
        })

        expect(tb.buttonComponent.element.textContent = "test");
    });
});
