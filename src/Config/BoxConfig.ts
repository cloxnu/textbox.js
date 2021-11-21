import utils from "../utils";

interface BoxConfig {
    id: string,
    title: string,
}

class DefaultConfig implements BoxConfig {
    id = utils.generate_id();
    title = "";
}

export {
    BoxConfig,
    DefaultConfig,
}
