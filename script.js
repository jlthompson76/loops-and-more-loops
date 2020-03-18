// Loop #1
// Make a loop that counts from 0 to 10.  It should print out in uppercase, "The number is" and each integer, from 0 to 10, in the Console. Make sure to have the right spacing in the sentence.

console.log("Loop #1");
for(let i = 0; i <= 10; i++) {
    let message1 = `The number is ${i}.`.toUpperCase();
    console.log(message1);
    }

// Loop #2
// Make a loop that counts from 5 to 15 in the Console, in multiples of 3. NOTE: Comment out the code for problem #1 when you run this code.

console.log("Loop #2");
for(let i = 5; i <= 15; i++) {
    let message2 = `The number is ${i}, which is a multiple of 3.`;
    if (i % 3 === 0) {
        console.log(message2);
    }
}

// Loop #3
// Make a loop that counts by two, from 40 to 60. Alert the results with each integer and then the following text, "little monkeys sitting in a tree" in lowercase. Make sure to have the right spacing in the sentence and add line breaks between lines (add the string "\n" in between each value).

console.log("Loop #3");
for(let i = 40; i <= 60; i++) {
    let message3 = `${i} little monkeys sitting in a tree`.toLowerCase();
    if (i % 2 === 0) {
        alert(message3);
        console.log(message3);
    }
}

// Loop #4
// Make a loop that counts backwards from 100 to 0, and prints out in the Console. NOTE: Comment out the code from problem #1 and #2 when you run this code.

console.log("Loop #4");
for(let i = 100; i >= 0; i--) {
    let message4 = `Counting backwards, the number is ${i}.`;
    console.log(message4);
    }

// Loop #5
// Make a loop that repeats a phrase a certain amount of times. Declare a variable called love and have it be a string that says, "Boston CodeSquad". Use the length of love to determine how many times this phrase should repeat. The phase should say, "I love JavaScript!" repeatedly.

console.log("Loop #5");
let love = `Boston CodeSquad`;
let x = love.length;
console.log(x);
for(i = 0; i < x; i++) {
    console.log(`I love JavaScript!`);
}
