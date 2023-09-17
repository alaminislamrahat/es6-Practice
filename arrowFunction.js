const doMath = (x,y) => {
    const add = x + y;
    const dif = x - y;
    const result = add * dif;
    return result;
}

const out = doMath(10, 5);
console.log(out);