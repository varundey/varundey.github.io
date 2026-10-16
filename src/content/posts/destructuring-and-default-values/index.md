---
layout: post
title: Destructuring JavaScript objects with default value
author: "Varun Dey"
publish: true
date: '2019-12-30'
---
Destructuring introduced in JavaScript ES6 is a nifty trick to scoop out properties directly from an object as variables.
```js
const obj = {
    a:1,
    b:2,
    c:3
};

const {a, b, c} = obj;

console.log(a, b, c); // 1 2 3
```

## Destructure and assign default values - the naive way
But what if you have to do some validation checks on your destructured properties before doing any operation
```javascript
const {a, b, c} = obj;

if(typeof a === 'undefined'){
    // assign a to something
}

if(typeof b === 'undefined'){
    // assign b to something
}

if(typeof c === 'undefined'){
    // assign c to something
}

// start the actual work
```

## Destructure and assign default values - the JavaScript way
Though it works perfectly fine but it is boring and redundant. What if we could make use of default values (just like default arguments in functions) right at the time of destructuring objects so that our unpacked property is never `undefined`.
```javascript
const obj = {a: 1, b: 2};

const {
    a = 'foo',
    b = 'bar',
    c = 'baz',
} = obj;

console.log(a, b, c); // 1 2 baz
```
Easy right? You just need to assign the values as and when you unpack it.

## Destructure, rename and assign default values
Neat! But what if we want to rename a parameter **and** set a default value to it? Pay attention.
```javascript
const obj = {a: 1, b: 2};

const {
    a: A="foo",
    b: B="bar",
    c: C="baz"
} = obj;

console.log(A, B, C); // 1 2 baz
```
Confusing? I bet it is. Here are the steps to it.

- First we destructure properties of the object
```javascript
const {a, b, c} = obj;
```
- Next, we assign variables to these properties
```js
const {a: A, b: B, c: C} = obj;
```
- After that, assign the default value as how we did in the previous example
```js
const {a: A="foo", b: B="bar", c: C="baz"} = obj;
```
And there you have it. Adding default values right at the time of unpacking objects.

## Caveats
Please note that destructuring with default value only works when there is no property to unpack in the object i.e. the property is `undefined`. This means that JavaScript treats `null`, `false`, `0` or other falsy values as a valid property and will not assign default value to them.
```js
const obj = {a: null, b: false, c: 0};

const {
    a = 1,
    b = 2,
    c = 3,
    d = 4
} = obj;

console.log(a, b, c, d); // null false 0 4
```

I hope this was informative and will help you when you need to do something similar. You can find the copy of this post at [dev.to](https://dev.to/varundey/destructuring-javascript-objects-with-default-value-2765). ✌️
