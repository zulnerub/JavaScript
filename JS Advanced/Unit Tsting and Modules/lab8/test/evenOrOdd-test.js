const isOddOrEven = require("../evenOrOdd.js");
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("isOddOrEven function", function () {
    it('Pass number to return undefined', function () {
        let actual = isOddOrEven(2);
        assert.equal(actual, undefined);
    });

    it ("Pass string with even length", function () {
        let actual = isOddOrEven("even");
        assert.equal(actual, "even");
    });
});