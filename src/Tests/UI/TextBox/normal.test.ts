import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';
import { sleep } from '../../test_utils';

let browser: puppeteer.Browser;
let page: puppeteer.Page;
const url = `file://${__dirname}/../test.html`;

// https://github.com/americanexpress/jest-image-snapshot
const toMatchImageSnapshot = configureToMatchImageSnapshot({
    failureThreshold: 0,
    failureThresholdType: 'percent',
})
expect.extend({ toMatchImageSnapshot });


beforeAll(async () => {
    browser = await puppeteer.launch();
})

afterAll(async () => {
    return browser.close();
})

beforeEach(async () => {
    page = await browser.newPage();
    return page.goto(url);
})

afterEach(async () => {
    return page.close();
})

describe('TextBox display', () => {
    test('normal render', async () => {
        await page.evaluate('render_textbox()');
        await sleep(800);
        expect(await page.screenshot()).toMatchImageSnapshot();
    });
});
