---
title: prototype, __proto__ and Prototypal inheritance in JavaScript
publish: true
excerpt: In this article, I take a deep dive into JavaScript prototypes and also explain about prototypal inheritance through it.
tags: javascript, fundamental, prototype, inheritance
date: '2019-08-11'
---

> You can also read this post on [dev.to](https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl)

If you have spent some time with JavaScript, chances are that you have already seen or atleast heard about prototypes. If you are unsure about prototypes or what does it do, this article is just for you. In this article, I will try to help you understand working of JavaScript prototypes and in the process, try to explain what is prototypical inheritance and how does it work.

Before beginning, I hope that you are already aware that everything in JavaScript is a high level object. What this means is except null and undefined, everything in JavaSscript is derived from `Object`.

> But Varun, how is that possible? We have several primitives in JavaScript like String, Number, Boolean etc. How can a data type, say Number, be derived from Object?

## prototype and \_\_proto__
To answer that, we need to first understand what is prototype. Prototypes in JavaScript is nothing but a special set of properties which an object holds (remember, almost everything in JavaScript is derived from `Object`). Each object holds it's own set of `prototype` properties. Let's see a very basic example of what I mean by that. Open your browser dev tools and try the snippets as you go along.
```javascript
var fooFunc = function() {
    return {
        foo: 42
    }
};
fooFunc.prototype.bar = 'baz';
var fooVal = fooFunc();
console.log(fooVal);   // {foo: 42}
console.log(fooFunc.prototype);     // {bar: "baz", constructor: ƒ}
```
The second print statement gives you the example of prototypal inheritance in all it's beauty. Function `fooFunc` is derived from `Object` instance and has it's own set of _properties_ with it i.e. `{bar: baz}` along with whatever it carried along when it instantiated from `Object` i.e. `{constructor: ƒ}`.

> So if `fooFunc` is derived from `Object`, can I go up the chain and see `Object`'s prototype?

Good question and absolutely you can. However one thing you need to keep in mind is that except JavaScript `function` type, every other prototype of an object resides in it's `__proto__` property. Let's see what I mean by that.
```javascript
console.log('prototype of fooFunc:');
console.log(fooFunc.prototype);     // {bar: "baz", constructor: ƒ}
console.log('prototype of Object:');
console.log(fooFunc.prototype.__proto__);   // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```
Do you see what I see? The last console statement returns an object with it's own set of _special properties_. This is nothing but prototype chain of `Object`. This confirms that we can actually traverse up the prototype chain and that our function `fooFunc` is derived from `Object`.

> So what happens when I try to traverse the prototype chain of `Object`?

Let's see what happens:
```javascript
console.log(fooFunc.prototype); // {bar: "baz", constructor: ƒ}
console.log(fooFunc.prototype.__proto__);// {constructor: ƒ, __defineSetter__: ƒ, …}
console.log(fooFunc.prototype.__proto__.__proto__);     // null
```
You see, `Object` in JavaScript is the top level construct. If you try to see what properties does `Object`'s parent hold, you'll get null because there is no parent of `Object`.

At this point, I would like you to go back to the begining and co-relate everything till here to what I said earlier in the post.
> Prototpyes in JavaScript are nothing but a special set of properties held by an object.

## Prototypal inheritance
Now that you've understood how prototype works, prototypical inheritance should be pretty straight forward. Let's look at the following example:
```javascript
var obj = function(){
    this.firstName = 'Varun';
    this.lastName = 'Dey'
}
obj.prototype.age = 25;
var nameObj = new obj()
console.log(nameObj.age);   // 25
```
Let's break down what is happening over here:
- First off, we are defining a function `obj`.
- Now we are also assigning another property `age` directly on `obj`'s prototype chain.
- We instantiate a variable called `nameObj` from `obj`. `nameObj` is an object which gets two properties appended to it namely `firstName` and `lastName`.
- When I ask `newObj` for it's `age` property, it firstly goes into it's own object and tries to find it. Does it find `age` in `nameObj` object?
    - No. So it goes up the chain, which is `nameObj.__proto__` and looks for an `age` property in that object.
    - It finds an `age` property over here because `nameObj.__proto__` is exactly the same as `obj.prototype`.

And this is what JavaScript's prototypal inheritance is all about. Whenever you ask JavaScript to fetch you a key, it first looks into it's own object's property. If it does not find anything, it goes up to its prototypal chain (`obj.__proto__`) and tries to find that key among those properties, if it does not find it there, it goes one level up it's current prototypal chain (`obj.__proto__.__proto__`) and does the same thing. It keeps on repeating the same process until it reaches the `Object`'s prototype chain and returns undefined from there if it can not find it even there.

## Prototype pollution

This makes an interesting case of inheritance in JavaScript which is quite different than other class-based languages like Java/C++:
```javascript
function parent(){
    return{
        foo: 42,
        bar: 'baz'
    }
}
child = new parent()
```
If you look closely, you will see that `child` is an instantiated object of `parent`. And `parent` ultimately is nothing but an instantiated method of `Object`. What this means is that `child`'s' and `parent`'s prototype's prototype is `Object`'s prototype
```javascript
child.__proto__ === parent.prototype.__proto__      // true
```

Now let's see one more example:
```javascript
function parent(){
    return{
        foo: 42,
        bar: 'baz'
    }
}
parent.prototype.__proto__.baz = 'I should not belong here'
child = new parent()
console.log(child.__proto__)
```
Here you see a prime example of protoype pollution. I created a property `baz` directly on `Object`'s prototype by going over function's prototype chain. Now this `baz` will be shared across all instances of `Object` and that is why if you see the console statement, you will find that along with other `Object` properties, we now also have `baz: "I should not belong here"`. This is a bad practice and is frowned upon as it breaks encapsulation.

Similarly I can also do this and JavaScript would allow me to do so:
```javascript
function parent(){
    return{
        foo: 42,
        bar: 'baz'
    }
}
delete parent.prototype.constructor
child = new parent()
```

## Performance
Needless to say, as you traverse up your prorototype chain, the lookup time increases and hence the performance suffer. This becomes critical when you are trying to access a non existent property across the full prototypal chain. To check whether the property you need is defined in the object itself, you can use `hasOwnProperty`.
```javascript
child.hasOwnProperty('foo');    // true
parent.hasOwnProperty('baz');   // false
Object.prototype.hasOwnProperty('baz'); // true
```

## Completing the circle
In the very beginning, I said that except null and undefined, everything is `Object` instantiation. Let's prove that:
```javascript
const foo = 42;
const bar = 'fooBar';
const baz = true;
foo.__proto__.__proto__ === bar.__proto__.__proto__;    // true
bar.__proto__.__proto__ === baz.__proto__.__proto__;    // true
```
So you see what I'm talking about. Almost everything in JavaScript comes from `Object`

## Conclusion
Prototypes makes the fundamental blocks of JavaScript. I hope I was able to help you understand the how prototypes work in JavaScript. Once you get the proper hang of it, you can extend this knowledge to understand how `this` works in JavaScript. Mozilla has an excellent resource on this and I encourage you to go through it as well - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

I would love to hear if this article helped you in understanding JavaScript better. :)
