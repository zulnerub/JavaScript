function spy(target, method) {
    let result = {
        count: 0
    };

    return new Proxy(
        target, {
            get: function (obj, property) {
                if (Reflect.get(obj, property)){
                    if (method === property){
                        result.count++;
                    }
                    return Reflect.get(obj, property);
                }

            }
        }
    )
}

let obj = {
    method: () => console.log("invoked")
};

let spy1 = spy(obj, "method");

obj.method();
obj.method();
obj.method();

console.log(spy1.method());;
spy1.method();




