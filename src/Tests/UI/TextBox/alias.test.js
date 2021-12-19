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


describe('TextBox alias config', () => {
    test('alias object', async () => {
        let actual = await page.evaluate(() => {
            tb = textbox({
                alias: {
                    t: 'title',
                    m: 'message',
                },
                t: 'Hello',
                m: 'World',
            });

            return {
                title: tb.titleComponent.element.innerText,
                message: tb.messageComponent.element.innerText,
            };
        });

        expect(actual.title).toBe('Hello');
        expect(actual.message).toBe('World');
    });

    test('alias array', async () => {
        let actual = await page.evaluate(() => {
            tb = textbox({
                alias: [{
                    t: 'title',
                }, {
                    m: 'message',
                }],
                t: 'Hello',
                m: 'World',
            });

            return {
                title: tb.titleComponent.element.innerText,
                message: tb.messageComponent.element.innerText,
            };
        });

        expect(actual.title).toBe('Hello');
        expect(actual.message).toBe('World');
    });

    test('alias button', async () => {
        let actual = await page.evaluate(async () => {
            tb = textbox({
                alias: {
                    btn_t: ['button', 'text'],
                    btn_c: ['button', 'callback'],
                },
                btn_t: 'btn',
                btn_c: function() {
                    return false;
                }
            });
            tb.buttonGroupComponent.buttons[0].element.id = "testBtn";
            await sleep(800);

            return {
                btn_text: tb.buttonGroupComponent.buttons[0].element.innerText,
            };
        });

        let opacity = async () => {
            return await page.evaluate(() => {
                return getComputedStyle(tb.element).getPropertyValue('opacity');
            });
        };

        expect(actual.btn_text).toBe('btn');
        expect(await opacity()).toBe('1');
        await page.click('#testBtn');
        await sleep(500);
        expect(await opacity()).toBe('1');

    });

    test('2nd level alias', async () => {
        let actual = await page.evaluate(() => {
            tb = textbox({
                alias: {
                    b: 'button',
                },
                b: {
                    alias: {
                        t: 'text',
                    },
                    t: 'btn',
                }
            });

            return {
                btn_text: tb.buttonGroupComponent.buttons[0].element.innerText,
            };
        });

        expect(actual.btn_text).toBe('btn');
    });
});

describe('TextBox default alias', () => {
    test('btn_text', async () => {
        let actual = await page.evaluate(() => {
            tb = textbox({
                btn_text: 'btn',
            });

            return {
                btn_text: tb.buttonGroupComponent.buttons[0].element.innerText,
            };
        });

        expect(actual.btn_text).toBe('btn');
    })
})
