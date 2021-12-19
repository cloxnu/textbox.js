import BaseBox from "./TextBox/BaseBox";
import TextBox from "./TextBox/TextBox";

import './assets/css/main.css';
import './assets/css/textbox.css';
import './assets/css/button.css';
import './assets/css/container.css';
import './assets/css/component/message.css';
import './assets/css/component/button_group.css';

import * as shortcut from "./shortcut";


//@ts-ignore
window.BaseBox = BaseBox;
//@ts-ignore
window.TextBox = TextBox;


//@ts-ignore
window.textbox = shortcut.textbox;
