// JavaScript Basics

// Variables and data types
let greeting = 'Hello, World!';
console.log(greeting);

// Basic arithmetic operations
let sum: number = 2 + 3;
console.log(sum);

// Strings and string concatenation
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Types and Comparisons

// Data types
let num = 42;
let bool = true;
let str = 'JavaScript';

// Comparisons
console.log(num === 42);
console.log(bool !== false);
console.log(str.startsWith('Java'));

// Conditions

let temperature = 25;

if (temperature > 30) {
    console.log('It\'s a hot day!');
} else if (temperature >= 20) {
    console.log('It\'s a pleasant day.');
} else {
    console.log('It\'s a cold day.');
}

// Loops

// For loop
for (let i = 0; i < 5; i++) {
    console.log('Iteration:', i);
}

// While loop
let counter = 0;
while (counter < 3) {
    console.log('Count:', counter);
    counter++;
}

// Arrays

// Creating an array
let fruits = ['apple', 'banana', 'orange'];

// Accessing elements
console.log(fruits[0]);

// Adding elements
fruits.push('grape');
console.log(fruits);


// Functions

// Function declaration
function addNumbers(a, b) {
    return a + b;
}

// Function call
let result = addNumbers(5, 7);
console.log('Sum:', result);

// Objects

// Creating an object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

// Accessing object properties
console.log(person.firstName + ' ' + person.lastName);

// Applied Function

// Function to calculate square
function square(x) {
    return x * x;
}

// Applying the function to an array
let numbers:[] = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(square);
console.log('Squared Numbers:', squaredNumbers);

// ES6 Features

// Arrow function
let multiply = (a, b) => a * b;

// Template literals
let name = 'Alice';
console.log(`Hello, ${name}!`);

// Array Operations

// Filtering even numbers
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// Dynamic Webpages

// Changing HTML content dynamically
document.getElementById('demo').innerHTML = 'Hello, Dynamic World!';

// Document Object Model (DOM)

// Changing CSS styles dynamically
document.getElementById('myElement').style.color = 'blue';

// JavaScript Events

// Event handling
document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked!');
});

// Synchrony and Asynchrony

// Synchronous operation
console.log('Start');
console.log('Middle');
console.log('End');

// Asynchronous operation (setTimeout)
console.log('Start');
setTimeout(() => {
    console.log('Inside setTimeout');
}, 2000);
console.log('End');

// JavaScript Classes

// Class declaration
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// Creating an instance of the class
let myRectangle = new Rectangle(5, 10);
console.log('Area:', myRectangle.getArea());

// Modules

// Exporting a function from a module
export function greet(name) {
    return `Hello, ${name}!`;
}

// Importing the function in another file
import { greet } from './modules';
console.log(greet('Bob'));

// Libraries

// Using a simple library (lodash)
const _ = require('lodash');

let numbers = [1, 2, 3, 4, 5];
let sum = _.sum(numbers);
console.log('Sum:', sum);

// Node.js in JavaScript

// Creating a simple HTTP server with Node.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, Node.js!');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

