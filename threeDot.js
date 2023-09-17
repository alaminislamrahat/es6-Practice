const age = [11, 24, 21, 12, 17, 18];
const age2 = [16, 17, 19]
const age3 = [23, 27, 29, 32,31];
allAge = age.concat(age2).concat(age3); // normal js
allAge2 = [...age, ...age2,...age3];   // es6 js
console.log(allAge2);
console.log(allAge);


const minister = 340;
const king = 678;
const badsha = 789;
const maximum = Math.max(minister, king, badsha); //normal js

const tk = [45,6,333];
const maximum2 = Math.max(...tk);   // es 6 js
console.log(maximum);
console.log(maximum2);

