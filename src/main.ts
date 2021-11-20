import TextBox from "./TextBox";

import './css/main.css';

//@ts-ignore
!('TextBox' in window) && (window.TextBox = TextBox);
