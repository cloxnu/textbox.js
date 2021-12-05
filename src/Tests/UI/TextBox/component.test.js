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


describe('TextBox component', () => {
    test('title & message', async () => {
        let actual = await page.evaluate(() => {
            let tb = textbox({
                title: 'Hello',
                message: 'World',
            });
            return {
                title: tb.titleElement.innerText,
                message: tb.messageComponent.element.innerText,
            };
        });
        expect(actual.title).toBe('Hello');
        expect(actual.message).toBe('World');
    })
});
