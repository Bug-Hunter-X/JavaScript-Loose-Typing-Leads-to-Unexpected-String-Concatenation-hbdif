# JavaScript Loose Typing Bug
This repository demonstrates a common, yet subtle, bug in JavaScript stemming from its loose typing system.  The `add` function is intended to add two numbers, but due to JavaScript's automatic type coercion, it concatenates a number and a string instead of throwing an error as one might expect in a more strictly-typed language.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Observe the unexpected output: `12`

## Solution
The solution involves explicit type checking to prevent unexpected behavior.  The improved `add` function in `bugSolution.js` includes a type check to ensure both inputs are numbers. If not, it throws a TypeError.

This example highlights the importance of defensive programming and awareness of JavaScript's dynamic typing when working on larger projects where implicit type coercion may lead to harder to find bugs.