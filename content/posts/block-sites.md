---
title: "Automation Series - Article 2: Block Websites"
tags: ["Python", "Prose", "Tech"]
date: 2019-10-25T16:00:00+05:30
publishdate: 2019-10-25T20:00:40+05:30
draft: false
---

There are two kinds of procrastinators in humans as categorised by [Tim Urban in one of his Ted Talks](https://youtu.be/arj7oStGLkU) basing on their actions, on the approach of the due date. Type-1, are those who barely react even when the due date passes by and then the Type-2, are just most of us. we all have something called as the '**Panic Monster**' that wakes up right at the eleventh hour. Until then even if our mind reminds us of the due date, often, the (mental) '**Monkey**' that is having the control / steering wheel, wouldn't give up. Which is why we end up doing some random stuff like watching youtube videos or playing games even if the due date is next day. Right at the eleventh hour, the panic monster comes into consciousness and we all know what happens next. We find no difference between day and night or hunger or thirst until we complete the task or at least **almost** complete the task.

Therefore, I decided, to keep myself restricted of the options that my (mental) monkey has and to block those sites for most part of the days and it is then I learnt how to block websites from this article on [GeeksforGeeks](https://www.geeksforgeeks.org/website-blocker-using-python/).

> Note: I took the basic idea of what to do from the above mentioned blog and customised for my requirements which we shall look into. Again, I'll take a line by line approach.

<!-- \newpage

\tableofcontents

\newpage -->

## Requirements

Websites in the `block_site_list` variable below should not be accessible for:

- **Days: Monday to Friday**
- **Time: 1000 Hrs to 21 Hrs**

## Preparations

### Imports

```python
import time
from datetime import datetime as dt
```

The first part of a python program is just about importing the required packages. Here, I have imported **time**, again for the only reason, to make the program sleep for some time and it's the **datatime** package that the code is essentially dependant on just like `Delay Start` options for startup applications.

Then the `datetime class` is imported from the `datetime module` with the alias `dt` (alias is just to satisfy my laziness).

### Theory of Routing

> Since this topic doesn't come under the scope of this article, we'll directly get to the concept to understand.

Whenever a web browser tries to access a website, it is redirected through the `hosts` file in the local machine that checks, if that website is defined in the file. If it is defined, it means that, that site is being served / hosted locally. Implying that at that ip address, the machine that is being used, serves web applications that are running locally and that is how the ip address `127.0.0.1` / `localhost` or in other words are defined as the address of the internal server. If not, then the request proceeds through the internet to the DNS and further which is out of the scope of this article.

These declarations are defined in the file called as `hosts`, in most linux distros if not all, also in macOS and Windows with the difference between linux and Windows based operating systems being the location where the `hosts` file is stored / saved / placed.

> This article is being discussed with the location details of the file for Linux based distros or Debain based distros to be more precise.

### hosts file path

Find the path to the `hosts` file in your machine and store that in a variable as below as we're going make modifiications to that file, precisely.

```python
hosts_path = '/etc/hosts'
```

### Redicting the access to Website

Simply put, we just create a variable that stores the localhost ip address

```python
redirect = '127.0.0.1'
```

### Sites to block

Define a list of all the site that are to be blocked.

```python
block_site_list = [
    'www.facebook.com', 'facebook.com', 'mail.google.com', 'studio.youtube.com',
    'www.primevideo.com', 'www.amazon.in', 'www.flipkart.com',
    'www.myntra.com', 'www.jabong.com', 'www.imdb.com', 'www.netflix.com'
]
```

## Program Logic

A sequential step-wise approach for lucidity

- **Step 1** : Get the current time from the system using the `dt` class that we've imported. This class has a few class methods (meaning that, these methods can be accessed using the class name itself) which can be found using `help(dt)`. The `now()`& `weekday()` are 2 such functions that we can make use of without creating an object.

- **Step 2** : The `dt.now()` method returns a (`datetime.datetime`) object that contains all the details of the day of that moment and the time which can be accessed using keyword like `weekday` and `hour`

  - The weekdays are enumerated in the modules as ('Monday','Tuesday',...,'Sunday') = (0,1,...,7) => we've to check if the current day is between 0 & 5 as 6 and 7 stand for 'Saturday' & 'Sunday' respectively which are not a part of our constraint

- **Step 3** : Check if the value for the `weekday` and `hour` attributes of `dt.now()` object are between 0 & 5 and 10 & 20, respectively

```python
if 0 <= dt.weekday(dt.now()) < 5 and 10 <= dt.now().hour <= 20:
```

- **Step 4** : If the condition in **Step 3** is true, then open the `hosts` file in `read and append` mode and write the redirects to the websites mentioned in the `block_site_list` variable above, one in each line.

```python
with open(hosts_path, 'r+') as file_ob:
    content = file_ob.read()
    for site in block_site_list:
        if not site in content:
            file_ob.write(redirect + " " + site + "\n")
```

- **Step 5** : If the condition in **Step 3** is false,

  - Then open the `hosts` file in `read and append` mode and read the contents of the file into a list using the `file.readlines()` method and seek the pointer back to the start of the file using the `file.seek(0)` method

  - Iterate over the elements in the `content` variable (which is a list as returned by the `readlines()` method)

  - For each value in the `content` variable, check if it is existing in the `block_site_list` collection

    - If yes, then simple skipp the value since we do not to block them anymore

    - If not, then it means that that particular line is operating system defined, hence, just write it back to the `hosts` file

  - Once done with writing back all the lines that are Operating system dependant, just truncate the remaining lines of the file.

```python
with open(hosts_path, 'r+') as file_ob:
    content = file_ob.readlines()
    file_ob.seek(0)
    for line in content:
        if not any(site in line for site in block_site_list):
            file_ob.write(line)
    file_ob.truncate()
```

## Youtube Playlist

- [Programming in Python](https://www.youtube.com/playlist?list=PLA5TLVwPYW19RAGiGfmoeGq1CxbqyR8iQ)

## Github Link to the script

- [website_blocker.py](https://github.com/gauthamkolluru/PythonLabs/blob/master/Automation/website_blocker.py)

<!-- ---

## Author

[Sai Gautham Kolluru](https://gauthamsk.me) -->
