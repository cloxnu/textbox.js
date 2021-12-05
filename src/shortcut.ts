import { UserConfig } from "./Config/Config";
import BaseBox from "./TextBox/BaseBox";
import TextBox from "./TextBox/TextBox";

function generate<T extends BaseBox>(box: T): T {
    box.render();
    return box;
}

function textbox(config?: UserConfig): TextBox {
    return generate(new TextBox(config));
}

export {
    textbox,
}