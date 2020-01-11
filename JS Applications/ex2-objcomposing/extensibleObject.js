function extensibleObject() {
    let obj = {
        extend: function (template) {
            for (let parentProperty of Object.keys(template)){
                if (typeof (template[parentProperty]) === "function"){
                    Object.getPrototypeOf(obj)[parentProperty] = template[parentProperty];
                }else{
                    obj[parentProperty] = template[parentProperty];
                }
            }
        }
    };
    return obj;
}