---
title: Iterators, Generators and Iteration Protocol in Javascript
publish: true
description: In this post, I explain how JavaScript iterates over object and what are the characteristics it looks before iterating.
tags: javascript, iteration protocol, iterators, generators
date: '2019-08-24'
---

> You can also read this post on [dev.to](https://dev.to/varundey/iterators-generators-and-iteration-protocol-in-javascript-51hl)

If you have been writing JavaScript for a while, you might be well aware what data types are iteratables in JavaScript. If you are not or just can't remember from top of your head, it's `String`, `Array`, `Map`, `Set` and `TypedArray`.

> But Varun, except `String` isn't everything here an implementation of `Object`?

## Iterable protocol
You would be absolutely correct to think that. After all [most data-types in JavaScript are derived from `Object`](https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl). So what makes `Array`, `Map`, `Set` and `TypedArray` an iteratable but not `Object`? Let's open up our console and find out.
```javascript
Array.prototype[Symbol.iterator]
Map.prototype[Symbol.iterator]
Set.prototype[Symbol.iterator]
Int16Array.prototype[Symbol.iterator]
Object.prototype[Symbol.iterator]
```
You might have noticed that except the last statement, every line returns us a function. All the remaining object type have a property called `Symbol.iterator` up their prototype chain. Since this property is not available in `Object` it returns `undefined`. Thus, for an object to be iteratable, it must implement iterable protocol which means that the given object must have a `Symbol.iterator` up it's prototype chain. `Symbol.iterator` is a function which takes no argument and returns an `Object`. This returned `Object` should follow convention of iterator protocol.

## Iterator Protocol
Iterator protocol states that for an iterator object, there is a standard way in which the values should be returned back. The object returned from `Symbol.prototype` is said to be adhering to iterator protocol if it has a method `next` which returns following two properties:

- done [boolean]
    A boolean value denoting if the iteration sequence has finished
- value
    Any value returned while iterating. Can be optional when `done` is `true`

Let's prove what we've learnt so far
```javascript
const map = new Map()
mapIterator = map[Symbol.iterator]()
mapIterator.next          // function next()
```
This means that `Map` implements
- Iterable protocol
    - becuase it has `Symbol.iterator` in it's \_\_proto\_\_ chain.
- Iterator protocol
    -   because iterable protocol returns an `Object` which has a method `next` in it.

## Iteration protocol in action
Let's put our theory to test on some actual data types
```javascript
const string = "Hello"
const stringIterator = string[Symbol.iterator]()
stringIterator.next()       // Object { value: "H", done: false }
stringIterator.next()       // Object { value: "e", done: false }
stringIterator.next()       // Object { value: "l", done: false }
stringIterator.next()       // Object { value: "l", done: false }
stringIterator.next()       // Object { value: "o", done: false }
stringIterator.next()       // Object { value: undefined, done: true }
```
We just proved that `String` implements both iterable and iterator protocol. Many constructs (for..of, spread, destructuring, yield, etc.) implements iteration protocol under the hood. You can try the same thing with other data types and the result will be similar.
```javascript
const map = new Map()
map.set('a', 1)
map.set('b', 2)
const mapIterator = map[Symbol.iterator]()
[...mapIterator]
```

## Custom iteratation protocol
> So basically my object should have a property `Symbol.iterator` which is a method and should return me an `Object` which should have a `next` method in it, calling which should give me a `done` and `value` property? That shouldn't be hard to create.

Turns out, it isn't. 😄
```javascript
const customIteratationProtocol = (start, end) => ({
	[Symbol.iterator]: () => {
		let startIndex = start;
		return {
			next: () => {
				if(startIndex !== end){
					return {
						value: startIndex += 1,
						done: false
					}
				}
				return {
					done: true
				}
			}
		}
	}
});

const customIteratationProtocolInstance = customIteratationProtocol(1, 3);
const customIterationProtocolObj = customIteratationProtocolInstance[Symbol.iterator]()
customIteratationProtocolInstance.next();  // Object { value: 2, done: false }
customIteratationProtocolInstance.next();  // Object { value: 3, done: false }
customIteratationProtocolInstance.next();  // Object { done: true }
```
You can also implement either of iterable protocol or iterator protocol but that is generally not advisable as it might throw a run-time error if such an object is consumed by a construct which expects an iterable. An object which implements iterable protocol but does not implement iterator protocol is known as non-well-formed iterables.

## Generators
Generators in JavaScript are a special kind of function whose execution is not continuous. They allow you to create an internal state in the function construct. The value from this function is returned only when it comes across a `yield` keyword. Generators are defined by `function*` syntax. Generator function can be instantiated n number of times but each instantiated object can iterate over the generator only once. You can't use generators with arrow functions though.
```javascript
function* myGenerator(n) {
    let index = n;
    while(true) {
        yield index += 1;
    }
}
const myGeneratorObj = myGenerator(2);
myGeneratorObj.next().value;      // 3
myGeneratorObj.next().value;      // 4
myGeneratorObj.next().value;      // 5
```

## Are generators really useful? 😕
Although iterators are a great concept of JavaScript engine, I personally never had to use generators in JavaScript. Also in a prototypical language such as JavaScript, I really do not understand the use case which ES6 generators tries to solve. In my opinion, generators bring a lot of complexity to the language because of the following reasons:
1. It creates a constructor
2. It then creates a method under that constructor
3. The value is finally inside the object of that method call

This creates a performance overhead and introduces lots of throwaway stuff. I think we can do away with generators by introducing a simple function factory. The above example can be rewritten as
```javascript
const myGenerator = n => {
    let index = n;
    return () => index += 1;
}
const gen = myGenerator(2);
gen();      // 3
gen();      // 4
gen();      // 5
```

## Conclusion
JavaScript has a lots of things going under its hood. Iterations is just one of them. If you would like to learn more about iterators and generators, I would recommend going through the official [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables). I would love to hear from you what you think about this post. Also if there is a particular use case which generator solved for you I would love to hear that as well. Happy coding! 😁

