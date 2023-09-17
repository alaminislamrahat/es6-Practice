

function addNumber(num1, num2 = 3){
    // num2 = num2 || 2;     default parameter
    return num1 + num2;
}
let result = addNumber(15, 1);
console.log(result);