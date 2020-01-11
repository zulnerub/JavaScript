(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        let sum = 0;
        this.forEach(el => sum += Number(el));
        return sum;
    };

    Array.prototype.average = function () {
        let average = 0;
        this.forEach(el => average += Number(el));
        average /= this.length;
        return average;
    };
}());