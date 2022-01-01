import buttonStyle from "../assets/css/button.css";

const style: { [value: string]: string | undefined } = {
    default: buttonStyle["submit-btn"],
    submit: buttonStyle["submit-btn"],
    cancel: buttonStyle["cancel-btn"],
    waiting: buttonStyle["waiting-btn"],
    destroy: buttonStyle["destroy-btn"],
    img: buttonStyle["img-btn"],
    none: '',
}

export default {
    style,
}
