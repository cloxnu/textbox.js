const generate_id = () => {
    let now              = new Date().getTime()
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return now + result;
}

const empty = (e?: any): boolean => {
    if (e == null || typeof(e) == "undefined") {
        return true;
    }
    return false;
}

export default {
    generate_id,
    empty
};
