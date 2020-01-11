const StringBuilder = require("../stringBuilder");
let expect = require("chai").expect;

describe("StringBuilder", function () {
    it('FUNCTIONS ATTACHED TO INSTANCE !!!!!', function () {
        let expected = new StringBuilder("Test")
        expect(expected).to.have.property("prepend");
    });


    it('Can be instantiated with a passed in string argument or without anything', function () {
        let expected = new StringBuilder();
        expect(expected).to.be.a("object");
    });

    it('Can be instantiated with a passed string argument', function () {
        let expected = new StringBuilder("Test");
        expect(expected._stringArray).to.have.lengthOf(4);
    });

    it('append(string) - length', function () {
        let expected = new StringBuilder("test");
        expected.append("Demo");
        expect(expected._stringArray).to.have.lengthOf(8);
    });

    it('append(string)', function () {
        let expected = new StringBuilder("Te");
        expected.append("Demo");
        expect(expected._stringArray[0]).to.be.equal("T");
    });

    it('append(notStringArgument)', function () {
        let expected = new StringBuilder("Te");
        expect(() => expected.append(1).to.Throw("Argument must be string"));
    });

    it('prepend(string)', function () {
        let expected = new StringBuilder("Te");
        expected.prepend("Demo");
        expect(expected._stringArray[0]).to.be.equal("D");
    });

    it('prepend(string) - length', function () {
        let expected = new StringBuilder("Te");
        expected.prepend("Demo");
        expect(expected._stringArray).to.have.lengthOf(6);
    });

    it('prepend(notStringArgument)', function () {
        let expected = new StringBuilder("Te");
        expect(() => expected.prepend(1).to.Throw("Argument must be string"));
    });

    it('insertAt(string, index)', function () {
        let expected = new StringBuilder("Te");
        expected.insertAt("D", 1);
        expect(expected._stringArray[1]).to.be.equal("D");
    });


    it('insertAt(string, index)', function () {
        let expected = new StringBuilder("Te");
        expect(() => expected.insertAt(2, 1).to.Throw("Argument must be string"));
    });



    it('remove(startIndex, length)', function () {
        let expected = new StringBuilder("Test");
        expected.remove(1, 1);
        expect(expected._stringArray[1]).to.be.equal("s");
    });

    it('toString()', function () {
        let expected = new StringBuilder("Test");
        expect(expected.toString()).to.be.equal("Test");
    });

    it('Test if type of arguments is string', function () {
        expect(() => new StringBuilder(21)).to.Throw("Argument must be string");
    });


});