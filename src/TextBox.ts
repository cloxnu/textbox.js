import generate_id from './utils';

class TextBox {
    private id: string;

    constructor() {
        this.id = generate_id();
    }

    show() {
        console.log('TextBox show: ' + this.id);
    }
}

export default TextBox;
