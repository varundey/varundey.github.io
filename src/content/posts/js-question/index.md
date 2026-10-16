---
title: Can you solve this JavaScript problem?
publish: true
excerpt: I'll walk you through an interesting JavaScript problem I came through recently.
tags: javascript, closure, composition, currying
date: '2019-09-10'
---

> I also made a copy of this post on [dev.to](https://dev.to/varundey/can-you-solve-this-javascript-problem-272o)

I recently came across this JavaScript brain teaser and I thought to share it with you folks.

> Create a function which takes in a bunch of function as arguments and performs left to right composition on them. It then returns the result from a function which takes in a single argument on which it performs the composition.

### Example:
```javascript
const addOne = num => num + 1;
const substractTwo = num => num - 2;
const multiplyThree = num => num * 3;

const resp = compose(addOne, substractTwo, multiplyThree);
const result = resp(4);
console.log(result);	// 9

/**
This is similar to multiplyThree(substractTwo(addOne(4)));
*/
```

Fun right? It took me about 20 minutes to come up with a working solution without googling/pair coding. I used classic vanilla JavaScript, browser console as my editor and console.logs/break points for debugging. :sweat_smile: I certainly hope you can do better than that. I would recommend you to come up with your own working implementation before reading further.

## Spoiler alert
I pen down my approach for this problem from this section onward. This is a walk through of how I solved it. This would be a good point to write your own solution before going through the steps. If you are stuck somewhere, you can probably jump to that section from the list below (assuming your approach is same as mine). Consider yourself warned I guess? :man_shrugging:

### Identifying the parts of the problem statement
So far by looking closely at the problem I know that:
	1. I need to create a function
	2. This function should take a bunch of function arguments
	3. Should return a function
	4. This return function should take the input value
	5. Do the calculations
	6. Return the result

Since for prototyping, I find it easiest to create a snippet in Chrome dev tools. I fired up my Chrome and created a snippet `composition.js` under `Snippets` section of `Sources` tab. I usually go via this route as it helps me set console.logs and put breakpoints without the need of creating an unnecessary web-app.

###  1. Creating a function
This is probably the easiest step. I will also set given example arguments as part of this step

```javascript
const addOne = num => num + 1;
const substractTwo = num => num - 2;
const multiplyThree = num => num * 3;

const compose = () => {}
```

### 2. Unknown number of arguments
Now that I have my dummy function in place, I need to pass in unknown number of arguments to this. This is easy. The only way you can pass in unknown number of arguments in JavaScript function is `...args`. This returns an array of passed arguments.
```javascript
const compose = (...args) => console.log(args);

compose(1, 2, 3);
```

### 3. Return a function
Till now, I have set up a function which takes in a bunch of arguments and just prints them. It works till now. Now from the example given, it is evident that the final result lies in another function closure which seems to be returned from `compose` function.
```javascript
const compose = (...funcs) => {
	return () => console.log(funcs)
}

const result = compose(addOne, substractTwo, multiplyThree);
result();
```


### 4. Making closure take the input
Now that I have created my closure, I need to make this take in an argument and I'll just verify that it is holding good till this point.
```javascript
const compose = (...funcs) => {
	return n => console.log(funcs, n)
}

const result = compose(addOne, substractTwo, multiplyThree);
result(4);
```

### 5. Doing the calculations
This was the step where I spent most of my time. If you reached till here without looking at any of the steps above, congratulations! I would still recommend to give it your best shot before reading further.

Now that I have all my functions working and in place, I need to do the calculations somewhere. But where? Should it go inside compose function? Or should it reside in the closure? 🤔 _Think Varun, think._

Look at the example closely. `compose` takes in function argument but they mean nothing without the input number. The closure is where we take in that argument. So the calculations should be part of the closure function.

Cool. But how do I go about that?

Hmmm.. Since we are composing functions left to right, I need to pass my input to the first function. The result of that should be passed as an argument to the second function and so on and so forth.

But how do I do that?

Seems like I already have the functions as a list of array and since I do not need to mutate these elements of the array, I can use a `forEach`.

#### Iteration 1
```javascript
const compose = (...funcs) => {
	return n => funcs.forEach(func => console.log(func))
}
```

#### Iteration 2
```javascript
const compose = (...funcs) => {
	return n => funcs.forEach(func => console.log(func(n)))
}
```

Now comes the tricky part. I need to pass the result of the function as the argument to another function. I will make advantage of the fact that closures have the scope of their parent function.
#### Iteration 3
```javascript
const compose = (...funcs) => {
	return n => {
		let result;
		funcs.forEach(func => {
			result = func(n);
		})
	}
}
```

I set up a break point inside `forEach`, and realized my mistake. This won't work. This will take in the same input on every function argument and will just assign `result` to that function's return value. I need to make it input for the first argument and the result of that for the remaining ones.

Hmm. This seems like a simple if/else condition. But to do that, I will also need to set up index for the loop. Meh. I probably can do it in more _JavaScript_'y way.

#### Iteration 4
```javascript
const compose = (...funcs) => {
	return n => {
		let result;
		funcs.forEach(func => {
			result = func(result || n);
		});
	}
}
```
From the breakpoint that I have set in the earlier iteration, I can see that it is working as expected. But remember, this won't work if you swap the operators for OR condition. Since we need to short-circuit the OR, we need to check if the result exists before the input. If we switch the operators, `n` will always be present before `result` and we will be back to iteration 3.

### 6. Return the result
We already have our answer stored in `result` variable. We just need to return it back to the caller. If you have reached till here, this should be really easy,
```javascript
const compose = (...funcs) => {
	return n => {
		let result;
		funcs.forEach(func => {
			result = func(result || n);
		});
		return result;
	}
}
```

Aand we are done. My final solution with removing the extra brackets and making it more ES8 friendly looked like this.
```javascript
const compose = (...funcs) => n => {
	let result;
	funcs.forEach(func => result = func(result || n));
	return result;
}

const addOne = num => num + 1;
const substractTwo = num => num - 2;
const multiplyThree = num => num * 3;

const res = compose(addOne, substractTwo, multiplyThree);
res(4);		// 9

// We can also curry it together
compose(addOne, substractTwo, multiplyThree)(5);	// 12
```

That's it. This example takes a good test of your JavaScript closure and currying skills. I am fairly certain that you can also do it using `.reduce()` but I always tend to forget how the arguments of reduce works and since I challenged myself not to open Google, I came up with this. Let me know how well you did in the comments. :v:
