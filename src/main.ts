import BaseBox from "./TextBox/BaseBox";
import TextBox from "./TextBox/TextBox";

import './css/main.css';
import './css/textbox.css';
import './css/button.css';
import * as shortcut from "./shortcut";


//@ts-ignore
window.BaseBox = BaseBox;
//@ts-ignore
window.TextBox = TextBox;


//@ts-ignore
window.textbox = shortcut.textbox;
