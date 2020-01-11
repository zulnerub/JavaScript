function solve() {
    return {
        elements: [],
        add: function (el) {
            this.elements.push(el);
            this.elements.sort((a, b) => a - b);
            this.size++;
        },
        remove: function (index) {
            if (index >= 0 && index < this.elements.length){
                this.elements.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.elements.length){
                return this.elements[index];
            }
        },
        size: 0
    }
}