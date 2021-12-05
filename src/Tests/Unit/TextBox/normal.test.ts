import TextBox from "../../../TextBox/TextBox";
import { sleep } from "../../test_utils";

describe('TextBox normal', () => {
    test('render', () => {
        let tb = new TextBox();
        tb.render();
        expect(tb.element.parentElement).toEqual(document.body);
    });
    
    test('destroy', async () => {
        let tb = new TextBox();
        tb.render();
        await sleep(500);

        tb.destroy();
        expect(tb.element.parentElement).toEqual(document.body);
        await sleep(500);
        expect(tb.element.parentElement).not.toEqual(document.body);
    });

    test('remove', async () => {
        let tb = new TextBox();
        tb.render()
        await sleep(500);

        tb.remove();
        expect(tb.element.parentElement).not.toEqual(document.body);
    });
});
