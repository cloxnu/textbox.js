import { UserConfig } from "./Config/Config";
import BaseBox from "./TextBox/BaseBox";
import TextBox from "./TextBox/TextBox";

function generate(box: BaseBox) {
    box.render();
    return box;
}

function textbox(config: UserConfig) {
    return generate(new TextBox(config));
}

export {
    textbox,
}