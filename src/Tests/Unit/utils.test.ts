import utils from "../../utils"

describe('utils', () => {
    test('generate two different IDs', () => {
        expect(utils.generate_id()).not.toBe(utils.generate_id());
    })
})
