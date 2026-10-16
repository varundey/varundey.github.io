---
comments: true
layout: post
title: Functional Programming in Python - II
tags: ['python', 'functional programming', 'map', 'reduce']
author: "Varun Dey"
publish: true
excerpt: Diving deep into Python functional paradigm
date: '2016-10-31'
---
In my [last blog](https://varundey.me/blogs/functional-programming-in-python), we saw how higher order functions work in Python using `lambda` and `filter`. The filter method takes a list object and another function and another function and it uses this function to filter out the elements from a list. In this post, we learn about a new(read awesome) higher order function called `map` and `reduce`

## `map`
Just like `filter`, the `map` function takes in two arguments; a function and a list. Similar to filter, it goes through the list but unlike filter, it doesn't throw the objects away, rather it transforms them into a new list.

Let us see a simple function

```py
li = list(range(0,5))
new_li = []
def squared(x):
    for i in x:
        new_li.append(i**2)
    return new_li

print sqared(li)
# Output
[0, 1, 4, 9, 16]
```

*Boo boring!! code base wants the functional way..*

Now let's see how we can do it in functional way

```py
li = list(range(0,5))
def squared(x):
    return x**2

print map(squared, li)
# Output
[0, 1, 4, 9, 16]
```

Now let's see how if can make it one-liner using [`lambda`](https://varundey.me/blogs/functional-programming-in-python)

```py
li = list(range(0,5))
print map(lambda x: x**2, li)
# Output
[0, 1, 4, 9, 16]
```

Just gorgeous right?! With the help of map, we have just compressed the whole function in a single line. It is, however, important to note that the map function always returns a list type just like the filter.

## `reduce`
Now we will talk about another higher order function called `reduce`. The reduce function is a little less obvious in its intent. This function reduces a list to a single value by combining elements via a supplied function. Similar to map and filter, it takes two arguments; a function and a list. It is, however, notable that the return type of reduce is not always list. Let us see what we mean by that. But first let's write a normal function in all its glory:
```py
li = list(range(1,5))
prod = 1
def product(x):
    for i in x:
        prod = prod * i
    return prod
print product(li)
#Output
24
```

Now the functional way

```py
print reduce(lambda x,y: x*y, list(range(1,5)))
# Output
24
```

BAM! Now let us see another example of reduce:

```py
fox = ['What ', 'does ', 'the ', 'fox ', 'say', '?']
print reduce(lambda x,y: x+y, fox)
# Output
# What does the fox say?
```

Over here, lambda function takes two arguments x and y. The x is what it iterates from the list and y is what is returned from lambda. Like so:

| Iteration |            x            |    y    |            x+y           |                Current List                |
|:---------:|:-----------------------:|:-------:|:------------------------:|:------------------------------------------:|
|     I     |         "What "         | "does " |       "What does "       | ['What does ', 'the ', 'fox ', 'say', '?'] |
|     II    |       "What does "      |  "the " |     "What does the "     |   ['What does the ', 'fox ', 'say', '?']   |
|    III    |     "What does the "    |  "fox " |   "What does the fox "   |     ['What does the fox ', 'say', '?']     |
|     IV    |   "What does the fox "  |  "say " |  "What does the fox say" |       ['What does the fox say', '?']       |
|     V     | "What does the fox say" |   "?"   | "What does the fox say?" |         ['What does the fox say?']         |

If you don't see the beauty in this, I really am tending to believe that you are an alien and you have devised a super neat and better trick on your planet.

That concludes the Functional Programming with Python. FPs take a bit to master on but once you start using it, you will see its application practically everywhere in your codebase.

Happy hacking!
