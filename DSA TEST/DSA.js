let S = "aabbbaaccdc";

const stack = [];
var top = -1;

for(var i = 0; i < S.length; i++) {

    var c = S.charAt(i);

    if(stack.length === 0 || stack[top] !== c) {
        stack.push(c);
        top++;
    }
}

var s = stack.join("");

console.log(s)