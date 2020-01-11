function result() {
    let num1, num2,result;

    function init (numOneSel, numTwoSel, resultSel) {
        num1 = $(numOneSel);
        num2 = $(numTwoSel);
        result = $(resultSel);
    }

    function add() {
       action((a, b) => a + b);
    }

     function subtract() {
         action((a, b) => a - b);
     }

    function action(operation){
        let val1 = Number(num1.val());
        let val2 = Number(num2.val());
        result.val(operation(val1, val2));

    }



    let obj = {init, add, subtract};

    return obj;
}
