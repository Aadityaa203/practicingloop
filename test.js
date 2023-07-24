// 1. Create a variable that is equal to an empty array and push the values 1-10 into the array using a For Loop.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops
let myArr = [];
for (i = 0; i <= 10; i++) {
  myArr.push(i);
}
console.log(myArr);

// 2. Repeat the same steps as above, but you're going to use a While Loop instead, push the values 1-10(inclusive) in ascending order.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops
const myArr = [];
let i = 1;
while (i <= 10) {
  myArr.push(i);
  i++;
}
console.log(myArr);

// 3. Again set a Variable to an empty array but this time push a set of odd numbers 11-21 into the array using a For Loop.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop
myArr = [];
for (i = 11; i < 22; i += 2) {
  myArr.push(i);
}
console.log(myArr);

// 4. This time around you'll be pushing values onto an array but you will be counting backwards instead! Same set up as the other three questions, but use the numbers 15-1 and count backwards by 2.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/count-backwards-with-a-for-loop
myArr = [];
for (i = 15; i >= 1; i -= 2) {
  myArr.push(i);
}
console.log(myArr);
