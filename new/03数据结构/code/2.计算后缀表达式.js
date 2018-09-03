//计算后缀表达式(逆波兰表达式)
function calc_exp(exp) {
    var stack = new Stack();
    for (var i = 0; i < exp.length; i++) {
        var item = exp[i];
        if (["+", "-", "*", "/"].indexOf(item) >= 0) {
            var value_1 = stack.pop();
            var value_2 = stack.pop();
            var exp_str = value_2 + item + value_1;
            //计算并取整
            var res = parseInt(eval(exp_str));
            //在计算结果压入栈中
            stack.push(res.toString());
        } else {
            stack.push(item);
        }
    }
    return stack.pop();
}

var exp_1 = ["4", "13", "5", "/", "+"];
console.log(calc_exp(exp_1));