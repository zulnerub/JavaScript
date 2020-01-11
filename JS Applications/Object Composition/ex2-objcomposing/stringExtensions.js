(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)){
            return `${str}${this}`;
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)){
            return `${this}${str}`;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.toString() === "";
    };

    String.prototype.truncate = function (n) {
        if (n < 4){
            return '.'.repeat(n);
        }

        if (n >= this.length){
            return this.toString();
        }else{
            let endIndex = this.substr(0, n - 2).lastIndexOf(" ");
            if (endIndex !== -1){
                return this.substr(0, endIndex).toString() + '...';
            }else{
                return this.substr(0, n - 3) + '...';
            }
        }
    };

    String.format = function(string, ...params){
        return params.reduce((prev, current, i) => {
            prev = prev.replace(`{${i}}`, current);
            return prev;
        }, string);
    };
}())

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);

str = String.format('The {0} {1} fox', 'quick', 'brown');
//str = String.format('jumps {0} {1}', 'dog');

console.log(str);