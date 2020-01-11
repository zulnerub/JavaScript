const { expect } = require('chai');
const  result  = require('../../subSum');

describe("Sub sum lab task", () => {
    it("Sub sum is a function", () => {
        expect(typeof result()).to.equal("function")
    });
     it("Sub sum computes [1, 1] => 2", () => {
         expect(result([1, 1])).to.equal(2)
     });
     it("Sub sum computes [1, 1, 1], 1 => 2", () => {
         expect(result([1, 1, 1], 1)).to.equal(2)
     });
     it("Sub sum computes [1, 1, 1, 1], 1, 2 => 2", () => {
         expect(result([1, 1, 1, 1], 1, 2)).to.equal(2)
     });

     it("Sub sum computes [1, 1], -1, 1 => 2", () => {
         expect(result([1, 1], -1, 1)).to.equal(2)
     });
     it("Sub sum computes (1, -1, 1) => NaN", () => {
         expect(isNaN(result(1, -1, 1))).to.equal(true)
     });


// test saturation
     it("Sub sum computes [10, 20, 30, 40, 50, 60], 3, 300 => 150", () => {
         expect(result([10, 20, 30, 40, 50, 60],3, 300)).to.equal(150)
     });
     it("Sub sum computes [1.1, 2.2, 3.3, 4.4, 5.5], -3, 1 => 3.3", () => {
         expect(result([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.equal(3.3000000000000003)
     });
     it("Sub sum computes [10, 'twenty', 30, 40], 0, 2 => NaN", () => {
         expect(isNaN(result([10, 'twenty', 30, 40], 0, 2))).to.equal(true)
     });
     it("Sub sum computes [], 1, 2 => NaN", () => {
         expect(result([], 1, 2)).to.equal(0)
     });
     it("Sub sum computes 'text', 0, 2 => NaN", () => {
         expect(isNaN(result('text', 0, 2))).to.equal(true)
     });
});