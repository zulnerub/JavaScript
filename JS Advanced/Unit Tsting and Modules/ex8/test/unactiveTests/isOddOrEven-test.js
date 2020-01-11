const isOddOrEven = require("../../isOddOrEven.js");

let assert = require("chai").assert;

describe("isOddOrEven function", function () {
    it('Pass number to return undefined', function () {
        let actual = isOddOrEven(1);
        assert.equal(actual, undefined);
    });

    it ("Pass string with even length", function () {
        let actual = isOddOrEven("even");
        assert.equal(actual, "even");
    });

    it ("Pass string with add length", function () {
        let actual = isOddOrEven("add");
        assert.equal(actual, "add");
    });


});