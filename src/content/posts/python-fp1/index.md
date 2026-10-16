---
publish: true
layout: post
title: Functional Programming in Python - I
author: "Varun Dey"
date: '2016-10-24'
---
### What is functional programming (FP)?
Simply put, in a **fun**ctional programming, functions are treated as values or a first class objects. Let us see a very basic example of a function in Python

```py
def square(x):
    return x**2
print square(4)
# Output
16
```

Well duh, right? But if you have read my [previous blog](https://varundey.me/blogs/deep-dive-into-python-functions), you will know that we can play around with our functions. Like this

```py
def square(x):
    return x**2
squaredNum = square(4)
print squaredNum
#Output
16
```

In FP languages, functions are values. Means functions can be assigned to variables just like strings or numbers or can be passed into other functions as arguments. This is the beauty of functional programming and with this, the code has fewer bugs as it is easier to reason about and can be built in less time because you can reuse it again.

### Higher order functions
Till now we have scratched the surface of FP and we have learned how to play around with functions in Python. There is still a lot you can do with FP in python other than assigning it to a variable or passing it as an argument. Higher order functions are the inbuilt functions in Python(or any other FP language) which allows us to do a lot more work in a lot fewer lines of code.

### `lambda`
Before going deep into FP with python, let's learn about `lambda` function in Python. lambda is a powerful function which is often used in conjunctions with typical higher order functions in python

```py
def square(x):
    return x**2
print square(8)

squared = lambda x: x**2
print squared(8)
#Output
64
64
```

As you can see, square() and squared() do exactly the same and can be used in the same ways. But note that `lambda` definition does not include a "return" statement; it always contains an expression which is returned. And thus you can put a lambda definition anywhere a function is expected, and you don't have to assign it to a variable at all.

## `filter`
`filter` is one of the higher order functions in python. As the name suggests, it *filters* out the element from the **list**. It takes two arguments:

1. User defined function
2. A list

This is what `filter` does:

1. Iterate over each item in the *list* (argument no 2)
2. Each iterated item is passed through the *user defined function* (argument no 1)
3. The user-defined function returns either `True` or `False`
4. According to this return statement, `filter` decides if it to be extracted or not
5. Returns a list of *filtered* items from the original list

*Oh well that's easy to do! I can just define a function with a for loop and append it to a new list*:

```py
# Le old method
li = list(range(-5,5))
new_li = []
def lessThanZero(x):
    for i in x:
        if i<0:
            new_li.append(i)
    return new_li
print lessThanZero(li)
#Output
[-5, -4, -3, -2, -1]
```

Well yeah. But can do it with less code and more logic?

```py
# Le functional method
li = list(range(-5,5))
print filter(lambda x: x<0, li)
#Output
[-5, -4, -3, -2, -1]
```

:scream:

I know right! You can clearly see how many bytes you have saved with a single line of the functional statement. You can do **SO MUCH** more in Functional Programming with **SO MUCH** less lines of code. After all, it literally has the word *fun* in it.

Here the `li` list is being iterated over by `lambda` (user defined) function. If the `lambda` function returns `True`, the item is extracted from `li` and is automatically appended to the `filter` list. Awesome, AmIRight?! :smiley:

You can also try this without using lambda operator

```py
li = list(range(-5,5))
def isLessThanZero(x):
  if x<0:
    return True
  return false

print filter(isLessThanZero, li)
#Output
[-5, -4, -3, -2, -1]
```

But where's the glory in that? After all, this is a functional post right.

I surely hope you found this post informative and useful. In my next blog post, I will talk about other higher order functions like `map` and `reduce`. Don't forget to get your hands dirty with FP till then :wink:
