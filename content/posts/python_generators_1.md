---
title: "Data Engineering Through Custom Generators"
date: 2021-07-03T21:23:20-04:00
draft: true
tags: ["Tech", "Python"]
---

To understand _generators_, one must first understand _iterators_.

> an iterator is an object that enables a programmer to traverse a container - _Wikipedia_

In other words, an _iterator_ is just another term for a _collection_ object or simply,

> one variable being used to access/address more than one values.

Ex:

```python
>>> grocery_items = ['Flours', 'Milk', 'Fruits']
```

Note, the variable `grocery_items` is being used to store `3` values, as in the case above.

So, what happens when we say, `print(grocery_items)`?

It simply prints all the items store in it (shown below).

```python
>>> print(grocery_items)
['Flours', 'Milk', 'Fruits']
```

Good to see that we're able to access more than one values using just one variable but what if we need to access each value individually from the collection.

**Of course** and that is precisely addressed by the concept of _Indices_

> Index: (in programming) an address of _value_ relative to the address of it's prior value in the collection.

> Indices start from `0` and go all the way till the `number of values in the collection - 1`

=> in the above example,

> the indices start at 0 and since there are 3 elements, the indices of the values go till 3-1 => 2.

=>

> index of **Flours** will be **0**

> index of **Milk** will be **1** and

> index of **Fruits** will be **2**
