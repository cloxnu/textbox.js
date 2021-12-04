import utils from "../utils";

class BoxConfig {
    id: string = utils.generate_id();
    title: string = "";
    log: boolean = false;
}

export {
    BoxConfig,
}
