import { UserConfig } from "./Config/Config";
import TextBox from "./TextBox/TextBox";

function textbox(config: UserConfig) {
    const tb = new TextBox(config);
    tb.render();
    return tb;
}

export {
    textbox,
}