function isValidParentheses(str) {
    let stack = [];
    let mapObj = ,
    if(str.length % 2 !== 0) return 'not Valid';
    for(let i = 0; i< str.length; i++) {
    const char = str[i];
    if(char === '[' || char === '{' || char === '(') {
    stack.push(char);
    } else if(stack[stack.length-1] === mapObj[char]) {
    stack.pop();
    } else {
    return 'not Valid'
    }
    }
    return stack.length ? 'not Valid' : 'Valid';
    }
    console.log('is Valid Parenthesis', isValidParentheses('{[({})]}'));
    console.log('is Valid Parenthesis', isValidParentheses('{[({})}'));