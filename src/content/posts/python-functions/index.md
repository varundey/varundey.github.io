---
comments: true
layout: post
title: A deep dive into Python functions
tags: ['python', 'functions']
author: "Varun Dey"
publish: true
excerpt: Python functions - explained
date: '2016-10-12'
---
In this post I will be discussing Python's function in depth, accompanied by a bunch of examples on the way to clear up the concepts. All examples are in Python 2.7 but the same concepts should apply to Python 3 with some change in the syntax.

## What you need to know about functions
In Python, functions are first class citizens, they are objects and that means we can do a lot of useful stuff with them.

### Assign functions to variables
```py
def greet(name):
    return "hello "+name

greet_someone = greet
print greet_someone("John")

# Outputs: hello John
```

### Define functions inside other functions

```py
def greet(name):
    def get_message():
        return "Hello "

    result = get_message()+name
    return result

print greet("John")

# Outputs: Hello John
```

### Functions can be passed as parameters to other functions

```py
def greet(name):
   return "Hello " + name

def call_func(func):
    other_name = "John"
    return func(other_name)

print call_func(greet)

# Outputs: Hello John
```

### Functions can return other functions
In other words, functions generating other functions.

```py
def compose_greet_func():
    def get_message():
        return "Hello there!"

    return get_message

greet = compose_greet_func()
print greet()

# Outputs: Hello there!
```

### Inner functions have access to the enclosing scope
Python only allows read access to the outer scope and not assignment. Notice how we modified the example above to read a "name" argument from the enclosing scope of the inner function and return the new function.

```py
def compose_greet_func(name):
    def get_message():
        return "Hello there "+name+"!"

    return get_message

greet = compose_greet_func("John")
print greet()

# Outputs: Hello there John!
```

## Phew!
That was an introduction and a deep dive to functions in Python. I hope that you found this post helpful, if you have any suggestions or questions please do share their to [me](mailto:varundey20@gmail.com) and I'll be sure to get back to you.

Happy coding! :smile:
