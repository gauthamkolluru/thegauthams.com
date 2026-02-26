---
title: "Truthy & Falsy Values"
categories: ["Python"]
date: 2019-10-17T16:34:00+05:30
publishdate: 2019-10-17T07:01:40+05:30
draft: False
---

## Truthy values

Def: any expression or an entity that gets evaluated to a Boolean true

ex: True, not False, any comparison operation that gets evaluated to a True and any variable that is referring to anything but a None or a Null value

## Falsy Values

Def: any expression or an entity that gets evaluated to a false

ex: False, not True, any comparison that gets evaluated to a False and any variable that is precisely referring to None or Null value

```python

print('Examples of Truthy Values')

# Example 1
if True:
    print('1. Yay!')

# Example 2

if not False:
    print('2. Yay!')

# Example 3

if not 0:
    print('3. Yay!')

# Example 4

if 1:
    print('4. Yay!')

# Example 5

if 'Gautham':
    print('5. Yay!')

# Example 6

if not '':
    print('6. Yay!')

# Example 7

if 1 > 0:
    print('7. Yay!')

# Example 8

if 0 < 1:
    print('8. Yay!')

# Example 9

if not 1 < 0:
    print('9. Yay!')


print('Examples of Falsy Values')

# Example 1
if False:
    print('10. Yay!')

# Example 2

if not True:
    print('11. Yay!')

# Example 3

if not 1:
    print('12. Yay!')

# Example 4

if 0:
    print('13. Yay!')

# Example 5

if not 'Gautham':
    print('14. Yay!')

# Example 6

if '':
    print('15. Yay!')

# Example 7

if not 1 > 0:
    print('16. Yay!')

# Example 8

if not 0 < 1:
    print('17. Yay!')

# Example 9

if 1 < 0:
    print('18. Yay!')

```

Video on Youtube: <a href="https://youtu.be/wet9W3I1OGk"><img src="/img/Truthy-and-Falsy-values.png" height="240" width="320"></a>

Youtube channel: [Gautham S Kolluru](https://www.youtube.com/channel/UCWeOiQJHuUvcwR8Us5iVnAA?view_as=subscriber)

My Github Link: https://github.com/gauthamkolluru
