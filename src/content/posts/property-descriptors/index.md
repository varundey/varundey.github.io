---
title: Property descriptors in JavaScript
publish: true
excerpt: In this article, I take a deep dive into JavaScript prototypes and also explain about prototypal inheritance through it.
description: Let's take a look at how JavaScript behaves with different object properties and create our own custom implementation of Array.length
date: '2020-04-26'
---
Whether you are new to JavaScript or have been working with it since some time, the language never seems to amaze because of it's quirks. Let's look at one tiny contrived example:

```javascript
const myArray = [1, 2, 3];
myArray.length; // 3

/**
* Adding a random property to the
* array like an Object it is.
*/
myArray.justForTheLulz = "lolwut";
Object.keys(myArray);  // [ "0", "1", "2", "justForTheLulz" ]

/**
* Let's try deleting the newly
* added property.
*/
delete myArray.justForTheLulz; // true
Object.keys(myArray); // [ "0", "1", "2" ]

/**
* Cool! Can I do the same with length?
*/
delete myArray.length; // false
myArray.length; // 3
```

Well ofcourse we can not just simply remove the `length` property from an `Array.prototype` but the question persists - how does the JavaScript engine knows which properties are safe to delete and which ones are not? Given it is a simple property and not a method invocation, what stops us from deleting _any_ property from _any_ JavaScript object? How is our custom property any different than the inbuilt ones?

## Come Property Descriptors
Property descriptors in JavaScript are a way of defining our own property inside an Object which can be immutable and non-enumerable. Think of them as meta properties of a property i.e. you can choose which operations you want to allow on the property. You can do this by calling a static method `defineProperty` of `Object`. `defineProperty` takes three arguments:
- object on which to define the property
- property name which needs to be defined
- configuration object for the property which needs to be configured
```javascript
const myObject = {};
const configuration = {};
Object.defineProperty(myObject, 'myProperty', configuration);
```
The return type of `defineProperty` is again an object with your input property and the meta configurations applied to it. The configuration object can be either of two type:
1. Data descriptor
2. Accessor descriptor

Let's take a look on how each of them work.

## Data descriptors
Data descriptors is a kind of property that may or may not be writable and enumerable. They take the following four parameters:
- `value`: Value of the property. Defaults to `undefined`
- `writable`: If the property value can be overridden. Defaults to `false`
- `enumerable`: If the property can be enumerated upon. Defaults to `false`
- `configurable`: If the property can be deleted or if the data descriptor can be converted to accessor descriptor or vice versa. Defaults to `false`.

```javascript
const object = {};
Object.defineProperty(object, 'key', {
  value: 'value',
  writable: false,
  enumerable: false,
  configurable: false
})

object.anotherKey = 'anotherValue'

/**
* You can neither delete the object.key
* property, neither enumerate over it
*/
console.log(object); // { anotherKey: "anotherValue", key: "value" }
Object.keys(myObject) // [ "anotherKey" ]
delete myObject.key; // false
delete myObject.anotherKey; // true
```

## Accessor descriptor
Accessor descriptor have a getter and setter property defined in an object which works as a function.
- `get`: Function which works as a getter of the property. Called without any arguments and returns the value of property. Defaults to `undefined`
- `set`: Function which works as a setter of the object property. Called with an argument to set the value of property. Defaults to `undefined`

> Please note that a descriptor configuration can not have both of `value` or `writable` and `get` or `set`.

```javascript
function NameKeeper(name){
  this.name = name;
  Object.defineProperty(this, "name", {
    get() {
      return name
    },
    set(val){
      name = val
    }
  });
};

const nameKeeper = new NameKeeper("Alice");
nameKeeper.name; // "Alice"
nameKeeper.name = "Bob";
nameKeeper.name;  // "Bob"
```

## Building our own custom length property
So now we know how to build our custom property using meta properties, let's try to build our own property which works similar to `Array.prototype.length`. Given an array, our property should return it's length.
```javascript
Object.defineProperties(Array.prototype, {
  valuesContainer: {
    value: [],
    writable: true,
    enumerable: true,
    configurable: true
  },
  customLength: {
    value: 0,
    writable: true
  },
  value: {
    get() {
      return this.valuesContainer;
    },
    set(val) {
      this.valuesContainer.push(val);
      this.customLength += 1
    }
  }
});

const arr = new Array();
arr.value = 1;
arr.value = 2;
arr.value; // [ 1, 2 ]
arr.customLength; // 2
```

Awesome! In this example we did the following things:
1. Create a container where we can store the elements of the array.
2. Create a getter and setter methods so that we can view and insert elements into array.
3. Our custom implementation of getting the length of Array using the above two points.

> Note that I have used `defineProperties` here which is similar to `defineProperty` except that it can take multiple properties at once.

## Getting property descriptors of an Object
Now if you want to view how the property descriptor of any property is listed, you can make use of `getOwnPropertyDescriptors`
```javascript
Object.getOwnPropertyDescriptors(Array, 'prototype')
```

## Difference from `Object.freeze`
Now you might be wondering what is the difference between `defineProperty` and `Object.freeze`? The answer is not so much. The reason is when you assign a property to an object using dot notation, it looks something like this:
```javascript
const obj = {};
const obj.key = 'value';
Object.getOwnPropertyDescriptors(obj);
/**
* Output:
* {
*  configurable: true,
*  enumerable: true,
*  value: "value",
*  writable: true
* }
*/
```
And when you do `Object.freeze` on an object, it makes the object immutable and non configurable
```javascript
Object.freeze(obj);
Object.getOwnPropertyDescriptors(obj);
/**
* Output:
* {
*  configurable: false
*  enumerable: true
*  value: "value"
*  writable: false
* }
*/
```

## Conclusion
Although you might not use `defineProperty` extensively but it is always fun to understand how things work internally. Here we learnt different behaviours of properties and to also create our custom implementation of calculating Array length. Let me know in comments if this post was helpful to you.

> Psst. Have something to say about this post? You can do that on [dev.to](https://dev.to/varundey/property-descriptors-in-javascript-5bb0) 😊