const sleep = require("../../test_utils");

let page;
const url = `file://${__dirname}/../test.html`;

beforeEach(async () => {
    page = await global.__BROWSER__.newPage();
    return page.goto(url);
});

afterEach(async () => {
    return page.close();
});


describe('TextBox preset config', () => {
    test('single preset', async () => {
        let actual = await page.evaluate(() => {
            let pre = {
                title: 'Hello',
                message: 'World',
            }
            tb = textbox({
                preset: pre,
            });

            return {
                title: tb.titleComponent.element.innerText,
                message: tb.messageComponent.element.innerText,
            };
        });

        expect(actual.title).toBe('Hello');
        expect(actual.message).toBe('World');
    });

    test('double presets', async () => {
        let actual = await page.evaluate(() => {
            let pre1 = {
                title: 'Hello',
            };
            let pre2 = {
                preset: pre1,
                message: 'World',
            }
            tb = textbox({
                preset: pre2,
                button: "btn",
            });

            return {
                title: tb.titleComponent.element.innerText,
                message: tb.messageComponent.element.innerText,
                button: tb.buttonGroupComponent.buttons[0].element.innerText,
            };
        });

        expect(actual.title).toBe('Hello');
        expect(actual.message).toBe('World');
        expect(actual.button).toBe('btn');
    });

    test('presets array', async () => {
        let actual = await page.evaluate(() => {
            let pre1 = {
                title: 'Hello',
            };
            let pre2 = {
                preset: [
                    pre1,
                    {
                        message: 'World',
                    }
                ],
                button: 'btn',
            }
            tb = textbox({
                preset: pre2,
                button: "btn",
            });

            return {
                title: tb.titleComponent.element.innerText,
                message: tb.messageComponent.element.innerText,
                button: tb.buttonGroupComponent.buttons[0].element.innerText,
            };
        });

        expect(actual.title).toBe('Hello');
        expect(actual.message).toBe('World');
        expect(actual.button).toBe('btn');
    });

    test('multiple presets', async () => {
        let actual = await page.evaluate(() => {
            let pre1 = {
                title: 'Hello',
            };
            let pre2 = {
                preset: [
                    pre1,
                ],
                button: 'btn',
            }
            let pre3 = {
                preset: pre2,
            };
            let pre4 = {
                preset: pre3,
                message: 'World',
            }

            tb = textbox({
                preset: pre4,
            });

            return {
                title: tb.titleComponent.element.innerText,
                message: tb.messageComponent.element.innerText,
                button: tb.buttonGroupComponent.buttons[0].element.innerText,
            };
        });

        expect(actual.title).toBe('Hello');
        expect(actual.message).toBe('World');
        expect(actual.button).toBe('btn');
    });

    test('preset config in the presets array', async () => {
        let actual = await page.evaluate(() => {
            let pre1 = {
                title: 'Hello',
            };
            let pre2 = {
                preset: [{
                    preset: pre1,
                }, {
                    message: 'World',
                }],
                button: 'btn',
            }
            tb = textbox({
                preset: pre2,
                button: "btn",
            });

            return {
                title: tb.titleComponent.element.innerText,
                message: tb.messageComponent.element.innerText,
                button: tb.buttonGroupComponent.buttons[0].element.innerText,
            };
        });

        expect(actual.title).toBe('Hello');
        expect(actual.message).toBe('World');
        expect(actual.button).toBe('btn');
    });
});
