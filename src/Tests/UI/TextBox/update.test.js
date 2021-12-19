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


describe('TextBox update method', () => {
    test('update message', async () => {
        let actual = await page.evaluate(() => {
            tb = textbox({
                message: 'World',
            });
            const beforeUpdate = tb.messageComponent.element.innerText;

            tb.update({
                message: 'Hello',
            });
            const afterUpdate = tb.messageComponent.element.innerText;

            return {
                beforeUpdate: beforeUpdate,
                afterUpdate: afterUpdate,
            };
        });

        expect(actual.beforeUpdate).toBe('World');
        expect(actual.afterUpdate).toBe('Hello');
    });

    test('update alias', async () => {
        let actual = await page.evaluate(() => {
            tb = textbox({
                alias: {
                    m: 'message',
                },
            });
            const beforeUpdate = tb.messageComponent.element.innerText;

            tb.update({
                m: 'Hello',
            });
            const afterUpdate = tb.messageComponent.element.innerText;

            return {
                beforeUpdate: beforeUpdate,
                afterUpdate: afterUpdate,
            };
        });

        expect(actual.beforeUpdate).toBe('');
        expect(actual.afterUpdate).toBe('Hello');
    });

    test('update preset', async () => {
        let actual = await page.evaluate(() => {
            tb = textbox({
                message: 'World',
            });
            const beforeUpdate = tb.messageComponent.element.innerText;

            tb.update({
                preset: {
                    message: 'Hello',
                },
            });
            const afterUpdate = tb.messageComponent.element.innerText;

            return {
                beforeUpdate: beforeUpdate,
                afterUpdate: afterUpdate,
            };
        });

        expect(actual.beforeUpdate).toBe('World');
        expect(actual.afterUpdate).toBe('Hello');
    });

    test('update multi-level alias', async () => {
        let actual = await page.evaluate(() => {
            tb = textbox({
                alias: {
                    bt: ['b', 't'],
                },
                preset: {
                    alias: {
                        b: 'button',
                    },
                    b: {
                        alias: {
                            t: 'text',
                        },
                    },
                },
                btn_text: 'btn',
            });
            const beforeUpdate = tb.buttonGroupComponent.buttons[0].element.innerText;

            tb.update({
                preset: {
                    bt: 'Hello',
                },
            });
            const afterUpdate = tb.buttonGroupComponent.buttons[0].element.innerText;

            return {
                beforeUpdate: beforeUpdate,
                afterUpdate: afterUpdate,
            };
        });

        expect(actual.beforeUpdate).toBe('btn');
        expect(actual.afterUpdate).toBe('Hello');
    });
})
