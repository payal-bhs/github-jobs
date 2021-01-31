import { getDateDiff, getPlural } from "./helper";

describe("Plural", () => {
    it("should provide Plural", () => {
        expect(getPlural(3)).toEqual("s");
    });

    it("should not provide Plural", () => {
        expect(getPlural(1)).toEqual("");
    });
});

describe("getDateDiff", () => {
    it("should provide date difference", () => {
        expect(getDateDiff("Sun Dec 20 01:35:53 UTC 2020")).toEqual("1 month ago");
    });

    it("should provide date difference", () => {
        expect(getDateDiff("Sun Nov 8 01:35:53 UTC 2020")).toEqual("2 months ago");
    });
});