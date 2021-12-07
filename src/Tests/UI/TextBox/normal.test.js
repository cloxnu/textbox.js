const { configureToMatchImageSnapshot } = require('jest-image-snapshot');
const sleep = require('../../test_utils');

let page;
const url = `file://${__dirname}/../test.html`;

// https://github.com/americanexpress/jest-image-snapshot
const toMatchImageSnapshot = configureToMatchImageSnapshot({
    failureThreshold: 100,
    failureThresholdType: 'pixel',
});
expect.extend({ toMatchImageSnapshot });

beforeEach(async () => {
    page = await global.__BROWSER__.newPage();
    return page.goto(url);
});

afterEach(async () => {
    return page.close();
});

describe('TextBox normal', () => {
    test('render', async () => {
        await page.evaluate(() => {
            textbox();
        });
        await sleep(800);
        expect(await page.screenshot()).toMatchImageSnapshot();
    });

    test('hide', async () => {
        let actual = await page.evaluate(() => {
            function get_opacity() {
                return getComputedStyle(tb.element).getPropertyValue('opacity');
            }
            tb = textbox();
            // const show_opacity = get_opacity();
            tb.hide();
            const hide_opacity = get_opacity();
            return {
                // show_opacity: show_opacity,
                hide_opacity: hide_opacity,
            }
        });

        // expect(actual.show_opacity).toBe('1');
        expect(actual.hide_opacity).toBe('0');
    });
});
