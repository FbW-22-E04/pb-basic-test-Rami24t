// Add answers here 
// # Test - Programming Basics 
// ## Test Instructions 
// * Work from the `index.js` file provided in this repository.
// * Work in the `master` branch. Commit your changes to the `index.js` file and push them to your repository. Your answers will be automatically graded when you push to your repository. If you do not push an updated `index.js` file to the `master` branch, the automatic grading will fail.
// * Follow the instructions below to complete the test. **Important**: Make sure that the *names* of your variables/functions match the names in the instructions below.
// * All your functions should return a value.
// * Good luck!

// ### Conditional Algorithms 
//  1. Los or New?
// Create a function named "nameOfCity". If a passed string begins with "Los" or "New", then return the full string. If not, return "The city name does not begin with Los or New". The function should be **case insensitive**.


const nameOfCity = city => city.toLowerCase().startsWith('los') || city.toLowerCase().startsWith('new') ? city : "The city name does not begin with Los or New"
//  
// 
console.log(nameOfCity('New York'), nameOfCity('newark'), nameOfCity(nameOfCity('London')));
// ➞ 'newark'
// nameOfCity('London') ➞ 'The city name does not begin with Los or New'
// 
//  2. isDivisible?
// Create a function named "isDivisible". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.


let isDivisible = n => n % 100 == 0

//  
console.log(isDivisible(1)
    , isDivisible(1000)
    , isDivisible(100))


//  4. What's the weather?
// Use a **ternary operator** to complete this task. Create a function named "isRaining". If passed `true`, return "wet day - you need an umbrella". If passed `false`, return "dry day - leave your umbrella at home".

const isRaining = state => state ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home"

//  
// 

console.log(isRaining(true));

// ➞ 'wet day - you need an umbrella'

// ### Loops 

//  1. Sequence
// Create a function named "geometricalSequence" and **use a loop** to return the following sequence: `1 2 4 8 16 32 64 128 256`. Concatenate each value to a string and return a string.

const geometricalSequence = () => {
    let sequence = '';
    for (i = 1; i <= 256; i = i * 2) {
        sequence += i.toString() + ' ';
    }
    return sequence.trim();
}

console.log(geometricalSequence());


const multiplesOfThree = () => {
    let result = '';
    let multiples = 0;
    for (i = 0; i < 5; i++) {
        multiples += 3;
        result += multiples + ' ';
    }
    return result;
}

console.log(multiplesOfThree());

const powerOf = n => Math.pow(n, n)


console.log(powerOf(3), powerOf(4));


const vowelCount = str => {
    const vowels = 'AaEeIiOoUu';
    const length = vowels.length;
    let count = 0;
    for (i = 0; i < length; i++) {
        if (vowels.includes(str[i]))
            count++;
    }
    return count;
}

console.log(vowelCount("hello"), vowelCount("test"), vowelCount("fbw"));


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
