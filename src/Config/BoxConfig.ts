import utils from "../utils";
import { ComponentConfig } from "./ComponentConfig";

class BoxConfig extends ComponentConfig {
    id: string = utils.generate_id();
    log: boolean = false;
    id_attribute: boolean = false;
}

export {
    BoxConfig,
}
