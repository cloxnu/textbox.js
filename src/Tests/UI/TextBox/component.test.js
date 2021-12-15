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


describe('TextBox message component', () => {
    test('title & message', async () => {
        let actual = await page.evaluate(() => {
            tb = textbox({
                title: 'Hello',
                message: 'World',
            });
            return {
                title: tb.titleComponent.element.innerText,
                message: tb.messageComponent.element.innerText,
            };
        });

        expect(actual.title).toBe('Hello');
        expect(actual.message).toBe('World');
    });
});


describe('TextBox button component', () => {
    test('button text & default button callback', async () => {
        let actual = await page.evaluate(async () => {
            tb = textbox({
                button: 'btn',
            });
            tb.buttonComponent.buttons[0].id = "testBtn";
            await sleep(800);
            return {
                button: tb.buttonGroupComponent.buttons[0].element.innerText,
            }
        });

        let isExists = async () => {
            return await page.evaluate(() => {
                return document.body.contains(document.getElementById('testBtn'));
            });
        };

        expect(actual.button).toBe('btn');
        await page.click('#testBtn');
        expect(await isExists()).toBeTruthy();
        await sleep(800);
        expect(await isExists()).toBeFalsy();
    });

    test('button callback return false', async () => {
        await page.evaluate(async () => {
            tb = textbox({
                button: {
                    text: 'btn',
                    callback: function() {
                        return false;
                    }
                }
            });
            tb.buttonGroupComponent.buttons[0].element.id = "testBtn";
            await sleep(800);
        });

        let opacity = async () => {
            return await page.evaluate(() => {
                return getComputedStyle(tb.element).getPropertyValue('opacity');
            });
        };

        expect(await opacity()).toBe('1');
        await page.click('#testBtn');
        await sleep(500);
        expect(await opacity()).toBe('1');
    })
});
