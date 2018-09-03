//判断字符串里的括号是否合法
function is_leagl_brackets(string) {
    var stack = new Stack();

    for (var i = 0; i < string.length; i++) {
        var item = string[i];
        // 遇到左括号入栈
        if (item == "(") {
            stack.push(item);
        } else if (item == ")") {
            //遇到右括号，判断栈是否为空
            if (stack.isEmpty()) {
                return false;
            } else {
                // 将栈顶的元素弹出
                stack.pop();
            }
        }
    }
    return stack.size() == 0;
}

console.log(is_leagl_brackets("()()))"));
console.log(is_leagl_brackets("sdf(ds(ew(we)rw)rwqq)qwewe"));
console.log(is_leagl_brackets("()()sd()(sd()fw))("));



