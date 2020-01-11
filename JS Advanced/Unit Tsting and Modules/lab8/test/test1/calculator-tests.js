const { expect } = require('chai');
const  createCalculator = require("../../addSubtract.js");

var calc;

beforeEach(() => {
    calc = createCalculator();
});

const addTest = [
    [1, 1],
    ["1", 1],
    [[1], 1],
    [-1, -1]
];

const subtractTest = [
    [1, -1],
    ["1", -1],
    [[1], -1],
    [-1, 1]
];

describe("Create calculator tests suite.", () => {
    //test saturation
    addTest.forEach(x => it(`add ${JSON.stringify(x[0])} => ${x[1]}`, () => {
        expect(calc.add(x[0])).to.equal(undefined);
        expect(calc.get()).to.equal(x[1]);
    }));

    //test saturation
    subtractTest.forEach(x => it(`subtract ${JSON.stringify(x[0])} => ${x[1]}`, () => {
        expect(calc.subtract(x[0])).to.equal(undefined);
        expect(calc.get()).to.equal(x[1]);
    }));


    //edge cases
    it("add {} => NaN ", function () {
        expect(calc.add({})).to.equal(undefined);
        expect(isNaN(calc.get())).to.equal(true);
    });
    it('subtract 1 => NaN ', function () {
        expect(calc.subtract(1)).to.equal(undefined);
        expect(calc.get()).to.equal(-1);
    });
});

   // it('add 1 => 1 ', function () {
   //     expect(calc.add(1)).to.equal(undefined);
   //     expect(calc.get()).to.equal(1);
   // });
   // it("add '1' => 1 ", function () {
   //     expect(calc.add("1")).to.equal(undefined);
   //     expect(calc.get()).to.equal(1);
   // });
   // it("add [1] => 1 ", function () {
   //     expect(calc.add([1])).to.equal(undefined);
   //     expect(calc.get()).to.equal(1);
   // });
