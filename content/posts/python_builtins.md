---
title: "Python Builtins"
categories: ["Python"]
tags: ["Python"]
date: 2020-02-03T17:13:00+05:30
publishdate: 2020-02-03T20:00:36+05:30
draft: true
---

<!-- * Background 
* Idea
* function
* conclusion -->

## Background

One of the `key` aspects of `Python's` popularity is it's extensive `Libraries` . With the inception of Machine Learning, Data Science and Artificial Intelligence in general, people have sure become familiar with the packages like `scikit learn` , `numpy` , `pandas` and more but most of the functions that reside in those packages are still staying out of sight of the human eye.

Likewise, recently, I have come across the `os.path.expanduser()` function from, of course, the `os` module, which had been super useful for the script that I was developing. And this was suggested by my _[mentor](https://sharats.me/)_.

And almost instantaneously a thought struck that, one way to _at least_ learn about existence of a lot of such functions is to make sure to skim the _amazing_ documentation every once in a while and hopefully periodically (intervals of _every day_ sounds _too ambitious_ and _every week_ sounds _too lethargic_, so, let's see) and implement the famous `Feynman Technique` with it.

## Idea

The idea is to _literally_ look into each function available in each module of the Python Standard Library with `syntax` and examples along with some useful usecases.

For the purpose of this article we'll only be covering the functions that are part of the `modules` of the [ `Python Standard Library` ](https://docs.python.org/3/library/index.html).

## Platform

This article is written with `Python 3.8` running on `Microsoft Windows 10` , as shown below :

``` powershell
PS C:\> systeminfo
OS Name:    Microsoft Windows 10 Enterprise

PS C:\> python -V
Python 3.8.0
```

<!-- ## How to use this page effectively

> _Just in case your adrenaline is rushing you to scroll right to the bottom of this page, read the below_

Since, I expect to update this page regularly with more and more functions which would eventually lead to exhibiting increase in the length of the page to more than frustrating numbers of scrolls, I suggest you to either use `ctrl/cmd + f` key combination and find the word you're looking for or use the `PgDn` key to manually scroll but with a relatively better levels of frustration.-->

Note: 

1. This article is not a substitute for the official documentation. The official documentation is the base upon which some examples and certain practical nuances are being added. This document is intended as a supplement that covers the topics with additional detail.

2. We'll not be convering any of the standard or builtin `Exception` classes or type as part of this article. However, I might do separate article specific to them in future.

## Library : Standard

The Python _Modules_ and _Functions_ that are shipped along with the interpreter are called as the `Python Standard Library` . Some of the components (modules / functions) are optional yet are commonly shipped through Python distributions.

The library contains modules written in `C` for system level access like the functions for accessing files and the ones written in Python to provide some standardized solutions like `.sort()` .

Though most of the modules and functions are common across distributions, there can be some _platform_ (Windows, Unix (based)) specific or _distribution_ (CPython, IronPython, Anaconda) specific modules or functions that can be found only in their respective distributions and some of them are truly optional, as in, one can choose to get them installed or otherwise.

### Module : Builtins

As the title suggests, this section will be hosting the functions that reside in the `__builtins__ ` module that are packaged with the Python distribution and are loaded as soon as the interpreter is invoked.

To check the functions available in the `__builtins__` module of the _Python_ distribution residing in your machine, fireup your terminal / command prompt and do as below.

Also, for further simplicity (_my laziness, actually_), I would refer Powershell / Command Prompt / Terminal as just `Terminal` and wherever I use that term (in this article) it refers to Powershell/Command Prompt as well unless otherwise specified.

``` powershell
PS C:\> python

Python 3.8.0 (tags/v3.8.0:fa919fd, Oct 14 2019, 19:37:50) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.

>>> dir(__builtins__)

['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException', 'BlockingIOError', 'BrokenPipeError', 'BufferError', 'BytesWarning', 'ChildProcessError', 'ConnectionAbortedError', 'ConnectionError', 'ConnectionRefusedError', 'ConnectionResetError', 'DeprecationWarning', 'EOFError', 'Ellipsis', 'EnvironmentError', 'Exception', 'False', 'FileExistsError', 'FileNotFoundError', 'FloatingPointError', 'FutureWarning', 'GeneratorExit', 'IOError', 'ImportError', 'ImportWarning', 'IndentationError', 'IndexError', 'InterruptedError', 'IsADirectoryError', 'KeyError', 'KeyboardInterrupt', 'LookupError', 'MemoryError', 'ModuleNotFoundError', 'NameError', 'None', 'NotADirectoryError', 'NotImplemented', 'NotImplementedError', 'OSError', 'OverflowError', 'PendingDeprecationWarning', 'PermissionError', 'ProcessLookupError', 'RecursionError', 'ReferenceError', 'ResourceWarning', 'RuntimeError', 'RuntimeWarning', 'StopAsyncIteration', 'StopIteration', 'SyntaxError', 'SyntaxWarning', 'SystemError', 'SystemExit', 'TabError', 'TimeoutError', 'True', 'TypeError', 'UnboundLocalError', 'UnicodeDecodeError', 'UnicodeEncodeError', 'UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 'UserWarning', 'ValueError', 'Warning', 'WindowsError', 'ZeroDivisionError', '_', '__build_class__', '__debug__', '__doc__', '__import__', '__loader__', '__name__', '__package__', '__spec__', 'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'copyright', 'credits', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'exit', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'license', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'quit', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip']
```

#### abs( X ) : 

`abs` is an abbreviation for `absolute` , the function that belongs to Mathematics that is used fetch the unsigned value of a real (integer / float) number.

* Input :
    - Real : -infinity.infinity to infinity.infinity
    - Complex : a + bj ( `j` is the symbol denoting the `imaginary` part of the number, replacement for `i` in our Mathematics & `a` and `b` are any real numbers)

* Output :
    - Real : the `unsigned` value of the input with the `return type` being that of the input
    - Complex : the `magnitude` of the input => <span>&radic; (a)<sup>2</sup>+(b)<sup>2</sup></span> with the `return type` being `float` 

Example :

``` python
>>>abs(-5)
5
>>>
>>>abs(-2908475.9238746)
2908475.9238746
>>>
>>>abs(-3+4j)
>>>5.0
```

> Note : `abs()` function's inputs cannot be _sequences_ or _iterables_

#### all( iterable ) : 

The `all()` function takes in an iterable of `truthy` / `falsy` values and returns `bool` type value, `True` if all the values in the iterable are `truthy` and `False` otherwise. 

> Note : It returns `True` when the iterable is _empty_.

* Input : `list` , `tuple` , `dictionary` , `set` , `string` 
* Output : `True` or `False` 

Example : 

``` python
>>>all([True, False, True])
>>>False
>>>
>>>all((True, True, True))
>>>True
>>>
>>>all({4,6,2,6,7})
>>>True
>>>
>>>all({4,6,2,6,7,0})
>>>False
>>>all('Hello World!')
>>>True
>>>
>>>all(['Hello World!',''])
>>>False
>>>
>>>all([]) == all(()) == all({}) == all('')
>>>True
```

A _probably_ more useful example:

```python
>>># check if all the given numbers are even
>>>
>>>closet_today = ['suit', 'shoes']
>>>closet_tomorrow = ['jeans', 'shirt']
>>>closet
>>>all([n for n in given_numbers if n%2 == 0])
>>>
```

#### any( iterable ) :

The `any()` function takes in an iterable of `truthy` / `falsy` values and returns `bool` type value, `True` if any of the values in the iterable are `truthy` and `False` in any case otherwise.

> Note : It returns `False` when the iterable is _empty_.

* Input : `list` , `tuple` , `dictionary` , `set` , `string` 
* Output : `True` or `False` 

Example : 

``` python
>>>any([True, False, True])
>>>True
>>>
>>>any((False, False, False))
>>>False
>>>
>>>any({4,6,2,6,7,0})
>>>True
>>>any([0])
>>>False
>>>any('Hello World!')
>>>True
>>>
>>>any(['Hello World!',''])
>>>True
>>>
>>>any([''])
>>>False
>>>any([])
>>>False
>>>any([]) == any(()) == any({}) == any('')
>>>True
```

A _probably_ more useful example:

```python
>>>weather_today = 'cloudy with heavy winds'
>>>weather_tomorrow = 'bright and sunny'
>>>weather_day_after = 'heavy rains'
>>>constraints = ['cloudy', 'rains']
>>>
>>>
>>>print('Carry Umbrella') if any([constraint for constraint in constraints if constraint in weather_today]) else print('No need to carry Umbrella') # 'cloudy' is found in weather_today
>>>Carry Umbrella
>>>
>>>print('Carry Umbrella') if any([constraint for constraint in constraints if constraint in weather_tomorrow]) else print('No need to carry Umbrella') # neither 'cloudy' nor 'rains' are found in weather_tomorrow
>>>No need to carry Umbrella
>>>
>>>print('Carry Umbrella') if any([constraint for constraint in constraints if constraint in weather_day_after]) else print('No need to carry Umbrella') # 'rains' found in weather_day_after
>>>Carry Umbrella
```