---
title: "Searching File Content"
categories: ["Python", "Automation"]
tags: ["Python", "Automation"]
date: 2020-02-09T18:26:00+05:30
publishdate: 2020-02-09T20:00:36+05:30
draft: true
---

* Problem Statement
* Explain the solution and how it is being implemented in the script
    - ask users to visit the other article to learn about the explanation for `os.walk` 
* had it been useful?
* current limitations
* planned enhancements

## Inception

While writing my first `automation` script using Python which was for _[file segregation](https://gauthamsk.me/technology/file-segregation/)_ in my machine, a thought stuck me which was, "How'd it be if I had a script that could search through the contents of files (_unlike the regular file names_) for a string of characters that I say it to look for"? And that was my very _second_ automation script that I wrote with Python (_if I'm not wrong_).

## Solution

The code that is being demostrated below is the simplest version of itself, accomlishing the task, as all it reads through are the `text` and `markdown` file types.

### Requirements

- Zero in on
    - Folders to search : `Documents`, `Downloads` and `Desktop`
    - File Types to search : `markdown` and `text`
        - Word documents and Spreadsheets are for enhancement as reading those files like regular files would through `encoding` errors.




<!-- With the experience of working with the `os.walk` function for my _[file segregation](https://gauthamsk.me/technology/file-segregation/)_ script, I was already aware of how to traverse through the _n_-level of sub-directories and finding files and all I have to decide is on from where to start the search. 

I zeroed in on `Documents`, `Downloads` and `Desktop` as the directories and `.md` & `.txt` as the file types to search for.  -->

<!-- and it wasn't a use case that I came up with but found it in [Automate the Boring Stuff with Python](https://automatetheboringstuff.com) book, suggested by my friend.-->

