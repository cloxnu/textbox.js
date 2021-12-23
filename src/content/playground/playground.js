var textarea = new CodeMirror(document.body, {
    value: "textbox({\n  title: 'Hello,',\n  message: 'World!',\n})",
    mode: "javascript",
    lineNumbers: true,
});

function run() {
    eval(textarea.getValue());
}

function save() {
    window.localStorage.setItem('code', textarea.getValue());
}

document.getElementById('run-btn').onclick = run;
document.getElementById('save-btn').onclick = save;

window.onload = () => {
    const code = window.localStorage.getItem('code');
    if (code) {
        textarea.setValue(code);
    }
}
