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

function isObject(item: any): boolean {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

function isArray(item: any): boolean {
    return (item && typeof item === 'object' && Array.isArray(item));
}

export default {
    generate_id,
    empty,
    isObject,
    isArray,
};
