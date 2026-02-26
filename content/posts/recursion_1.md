---
title: "Understanding Recursion"
categories: ["Python", "Recursion", "Functional Programming"]
date: 2019-12-21T16:00:00+05:30
publishdate: 2019-12-21T17:00:40+05:30
draft: false
---

<center>
<i>To Understand <b>Recursion</b>, one must first understand <b>Recursion</b></i>
<p style="text-align:right"><i> &nbsp; - &nbsp; <b>Stephen Hawking</b></i></p>
</center>

## Introduction

Recursion is that type of programming construct that first bewilders those who take their first glance at it and then frightens only until they take a step forward fearlessly. Once taken, they'll realise that it's just like that _dragon_ that's hard to tame but nevertheless the strongest.

So, without any further ado, let's just barge in.

Today, I have come across a video on Youtube by **interviewing.io** called [Python interview with a Google Engineer: Coin Change](https://youtu.be/HWW-jA6YjHk)

Before getting into solving the problem, let's first try and understand the Problem itself.

<!-- Recursion is that type of programming construct that first bewilders those who take their first glance at it, frightens when tried to approach but once stepped forward fearlessly and compassionately (slowly and steadily with understanding, in this context), one'll get to tame it and that is when one'd realise that it isn't just any other pet that one could have but the strongest and omnipotent (sort of, exaggeration) Dragon that one could have by their side. One that boosts the performance of the function.-->

## Problem Statement

Suppose, You are at a grocery store and about to buy some groceries worth INR 99.15/-. You give the shopkeeper at the counter an INR 100/- bill and now the shopkeeper must return the exact change back to you and not some *mints* or *chocolates* like they got used to.

We know that, he has to return 85 paise (100 - 99.15) and (assume) we have only the following denominations of coins available.

* 50 paise
* 25 paise
* 05 paise
* 01 paise

We have to calculate the number of coins that the shopkeeper has to return to return the exact change. As per the premise above, the shopkeeper has to return:

* 1 of 50 paise coin
* 1 of 25 paise coin
* 2 of 05 paise coin

=> a total of **4 coins**.

Now, what we have to do is, write a program for the same, i.e.one that returns the __number of coins__ to be returned by the shopkeeper.

Hoping that you've understood the problem, let's now get into solving it.

### Approach Towards Solution

All we've to do is to write a function that takes in the _amount_ (input) that has to be given back to the customer and returns the *number of coins* to return.

For this, let's first define a function with the _input parameter_ and _return value_.

``` python
def coins_change(amount):
    # Calculation comes here
    return no_of_coins
```

Now, somehow, we have to store the denominations of coins available to be able to return the exact number of coins to return. There exists decent room for optimisation here, which is, considering the premise above, when the shopkeeper has to return 85 paisa, he can do it by giving _85 nos of 1 paisa coins_ or _19 nos of 5 paisa coins_ etc, instead, the shopkeeper always tries to get rid of only least nos of coins. For which, he starts picking the coins from the highest denomination possible and proceeds towards the least, which means that he picks _one coin from the 50 paisa_ drawer, then _one from the 25 paisa_ drawer and so on, and this is exactly what our program has to do.

For this, I felt like having a `dictionary` data structure with the __denominations of the coins__ as **keys** and the __number of coins__ of that denomination that are available as **values**.

Any data structure among _lists_, _tuples_ and _sets_ can be used for this data but just to make the program closer possible a real-time's simulation, I have decided to go with dictionaries.

> This data structure can be created within or outside the function as it doesn't matter much for our current problem statement as the _number of coins_ available isn't of our concern with respect to the current problem statement

``` python
def coins_change(amount):
    denominations = {50:5, 25:5, 5:10, 1:20}
    # Calculation comes here
    return no_of_coins
```

Now the actual solution starts. From the number of coins available of each denomination, we have to start from the highest denomination available and possible.

=>[^note] if I have to return 35 paise, then I have to start picking the coins from 25 paise denomination slot and then from the 5 paise coins slot.

=> If I have to return 9 paise, then I have to pick 1 of the 5 paise coins and 4 of 1 paise coins.

=> We've to read the keys of the dictionary in a descending order for which I have passed it to the `sorted()` with the parameter for `reverse` keyword argument being `True` which returns the keys of the dictionary in the required descending order.

``` python
def coins_change(amount):
    denominations = {50:5, 25:5, 5:10, 1:20}
    for denomination in sorted(denominations, reverse = True):
    # Calculation comes here
    return no_of_coins
```

Now, at each iteration of the `for` loop, we get each denomination available in descending order.

Therefore, we've to first check if the `amount` (the change we've to return) is bigger than the `denomination` at hand (the value, the `denomination` object is holding in the iteration). If it turns out to be `false` (=> if `amount` < 50 paisa) , go to the next denomination, else (if `amount` > 50 paisa, as in our case, 85 paisa), we've to calculate the number of coins of 50 paise to return and this will be given by the **Floor Division** ( `//` ) operator and the remaining amount to be given is determined by the **Modulo** ( `%` ) operator.

* Floor Division for _number of coins_:

``` python
>>>85 // 50
1
```

* Modulo Division for _remainder_:

``` python
>>>85 % 50
35
```

And here comes the crucial part.

Now, if the `amount >= denomination` , then calculate the `no_of_coins` that are to be given and check if the remainder, `amount - (no_of_coins * denomination)` , is greater than `0` . If `false` , meaning there is no remainder, therefore, return `no_of_coins` but if `true` , meaning that remainder exists, `return`  `no_of_coins +` , since we are yet to calculate the number of coins to be returned for the remaining amount, we return `coins_change(amount % denomination)` . Where, 

> `no_of_coins` = `amount // denomination` , and

> remaining amount = `amount` - `no_of_coins` * denomination.

__The above mentioned property of a function calling itself (as in the `return` statement mentioned above) is called *Recursion*__

Here's the code for the same:

``` python
def change_coins(amount=None):
    denominations = {50: 5, 25: 5, 5: 10, 1: 20}
    if amount:
        for denomination in sorted(denominations, reverse=True):
            if amount >= denomination:
                if amount % denomination:
                    return (amount // denomination) + change_coins(amount % denomination)
                else:
                    return amount // denomination
```

Now for a clearer understanding, let's check how this function works by analysing the working of the function at each step.

### Applying the Function to Validate the accomplishment

#### Steps

1. `change_coins(85)` , _calling the function with the __*amount*__ to be returned to the customer_

2. `if amount:` , check if amount is not `None` , just to make sure that the function _literally_ does nothing when _nothing is to be returned_.

3. `for denomination in sorted(denominations, reverse=True):` == `for denomination in [50, 25, 5, 1]:` 
    - in the first iteration, `denomination` = 50
    - `if amount >= denomination:` => `if 85 >= 50:` =  `True`
        - `if amount % denomination:` => `if 85 % 50:` => `if 35` = `True` because, `35 > 0` => __remainder exists!__
            - `return (amount // denomination) + change_coins(amount % denomination)` => `return ( 85 // 50) + change_coins( 85 % 50)` => `return 1 + change_coins(35)`
                - `change_coins(35)`, _calling the function with the __*amount*__ to be returned to the customer **_again_**_
                - `for denomination in [50, 25, 5, 1]:`
                    - in the _first_ iteration, `denomination` = 50
                    - `if amount >= denomination:` => `if 35 >= 50:` =  `False`
                    - in the _second_ iteration, `denomination` = 25
                    - `if amount >= denomination:` => `if 35 >= 25:` =  `True`
                        - `return ( 35 // 25 ) + change_coins( 35 % 25 )` == `return 1 + change_coins(10)`
                            - `change_coins(10)`, _calling the function with the __*amount*__ to be returned to the customer **_again_**_
                            - `for denomination in [50, 25, 5, 1]:`
                                - in the _first_ iteration, `denomination` = 50
                                - `if amount >= denomination:` => `if 10 >= 50:` =  `False`
                                - in the _second_ iteration, `denomination` = 25
                                - `if amount >= denomination:` => `if 10 >= 25:` =  `False`
                                - in the _third_ iteration, `denomination` = 5
                                - `if amount >= denomination:` => `if 10 >= 5:` =  `True`, __*but*__
                                    - `if 10 % 5:` = `False` because, `0` is a __*falsy*__ value and there it
                                    - `return 10 // 5` => `return 2`


__change_coins(85) = return 1 + change_coins(35) = return 1 + change_coins(return 1 + change_coins(10)) = return 1 + (return 1 + change_coins(10)) = return 1 +(return 1 + (return 2)) = 1 + (1 + (2)) = 1 + 1 + 2 = 4__

<!-- 

``` python
def coins_change(amount):
    coins_draw = {50:5, 25:5, 5:10, 1:20}
    for denomination in sorted(denominations, reverse = True):
        if amount >= denomination:
    # Calculation comes here
    return no_of_coins
```

We've to check if enough coins of `denomination` at hand would clear the amount to be returned. For example, 

If the the change to be returned is 50 paise then 1 of the 50 paise coins should be enough to be returned right? So, to check this, we use the **Modulo** `(%)` operator again.

``` python
if amount % denomination:
```

and *Here comes __Recursion__*

> If the _definition_ of a function also contains the calling of itself (_a function call_) then it is called __RECURSION__.

Don't worry about the definition above but just try looking closely into the example below and try to fathom.

``` python
def coins_change(amount):
    coins_draw = {50:5, 25:5, 5:10, 1:20}
    for denomination in sorted(denominations, reverse = True):
        if amount >= denomination:
            if amount % denomination:
                return (amount // denomination) + coins_change(amount - ((amount // denomination) * denomination))
    # Calculation comes here
    return no_of_coins
```

Did you observe that the return statement nested in the `if` conditions, contains `coins_change()` function call? That is what recursion is.

Now, we are just calculating the number of coins of the current `denomination` that we have at hand, should be returned and the remaining amount for which the no of coins are yet to be calculated are being given back to the `coins_change()` function.

Ex: As with the premise that we've been looking into, since we've to get 85 paise back, 

``` python
(amount // denomination) # This will determine that 1 of 50 paise coins have to be given and

amount - ((amount // denomination) * denomination) # This will be the amount for which the no. of. coins is yet to be calculated
```

=> which is nothing but, amount  = 85

=> amount // 50 = 85 // 50 = 1

=> ((amount // denomination) * 50) = ((85 // 50) * 50) = 50

=> amount - ((amount // denomination) * denomination) = 85 - 50 = 35 is given back to the `coins_change()` function to calculate the number of coins the remaining 35 paise take.

Now, when `coins_change()` function gets **35** as the input, it would again repeat the process that was done for the initial 85 paise, 

=> if 35 >= 50

`False` 

=> the iterator goes to the `next` value, which is 25.

=> if 35 >= 25

`True` 

Therefore, calculate 35 // 25 and the remaining `amount` for which the number of coins is yet to be determined, which is (35 - (35 // 25) * 25) = (35 - (1) * 25) = 35 - 25 = 10

and now, the value **10** is passed to our function and again it checks

=> if 10 >= 50

`False` 

=> if 10 >= 25

`False` 

=> if 10 >= 5

`True` 

but only this time, `amount % denomination` will be `0` , as `10 % 10` gives no remainder and therefore, the recursion stops as we've included the conditon that says

``` python
if amount % denomination: # this condition will return `False` 
    return amount // denomination # and therefore, this statement gets executed
```

which finally results in, 1 (of 50 paise coin) + 1 (of 25 paise coin) + 2 of (of 5 paise coins) which totals to **4 coins** which is exactly what the program has to return.

And this is how **Recursion** is implemented.

and here is the complete working code:

Please comment below in case of any doubts or if you like or dislike the article or reach me [here](https://gauthamsk.me/contact-me/) -->

[^note]: a symbol meaning `implies` 

