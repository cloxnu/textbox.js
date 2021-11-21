import { ButtonComponentConfig } from "../Component/ButtonComponent";
import { MessageComponentConfig } from "../Component/MessageComponent";
import { BoxConfig, DefaultConfig } from "./BoxConfig";

interface TextBoxConfig extends BoxConfig, MessageComponentConfig, ButtonComponentConfig {}

class TextBoxDefaultConfig extends DefaultConfig implements TextBoxConfig {
    message = "";
    btn_text = ["OK"];
}

export {
    TextBoxConfig,
    TextBoxDefaultConfig,
}
