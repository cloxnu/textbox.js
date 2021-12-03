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

function deepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
}

function isObject(item: any): boolean {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
  
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function deepMerge(target: { [x: string]: any }, ...sources: any[]): { [x: string]: any } {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                deepMerge(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return deepMerge(target, ...sources);
}

export default {
    generate_id,
    empty,
    deepCopy,
    deepMerge,
    isObject,
};
