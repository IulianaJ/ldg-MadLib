madLibs = require("./madLibs");

describe("madLibs", () => {
    test("given an adjective, a noun, a verb and an adverb, should return a phrase including all the words.", () => {
    const result = madLibs("brown", "cat", "jumped", "higher");

    expect(result).toEqual("My brown cat jumped higher than my dog.")
    })

    test("given a number, should return an error message", () => {
        const result = madLibs(4, "cat", "jumped", "higher");

        expect(result).toEqual("Please enter only words, not numbers.")
    })

    test("given an empty string, should return an error message", () => {
        const result = madLibs("", "cat", "jumped", "higher");

        expect(result).toEqual("Please complete all the inputs.")
    })
})

