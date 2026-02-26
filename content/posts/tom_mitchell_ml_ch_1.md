---
title: "Introduction to Machine Learning"
categories: ["Machine Learning", "Artificial Intelligence", "Tom Mitchell"]
date: 2020-04-19T05:53:00+05:30
publishdate: 2020-05-10T07:00:00+05:30
draft: true
---

## Prologue

About 6 months ago, I first started reading this book called _Machine Learning_  written by _Tom Mitchell_. The first line of the book baffled me right away. Still, I kept reading it, trying to understand as much as I can until I reached Chapter 3 on _Decision Trees_. Since I was familiar with it, I was able to comprehend but then I always felt like I must revisit the first 2 chapters again and digest them properly.

Thankfully, this lockdown has given me time to do so but this time I felt like I should share what I understood in this chapter with a bit more known/popular/simpler examples so that I will be to apply what I think I understand and if I got it wrong then somebody might correct me. At the end of the day, learning must happen, isn't it?

So, without any further delay, let's start with the definition of Machine Learning from the book... 

## Mitchell's Definition of Machine Learning

> A Computer Program is said to learn from experience (E) with respect to a class of tasks (T) and performance measure (P), if it's performance at tasks (T), as measured by (P), improves with experience (E).- _Tom M. Mitchell_

The first time I came across this definition, I was pretty confused with all those Ts, Ps, Es etc... However, it simply means that, _a computer program is said to learn, if it could improve its performance (P) at doing a task (T) by it's own experience (E)_.

Let's look at it with an example.

### Example 1

Let's say, we wrote a computer program that can be installed in Ferrari F1 machine. The program has to _drive the car_ in such a way that it should be able to beat the _best lap time_ of any human driver by far.

The solution to this problem can be attained by writing a bunch of `if... else...` conditions as in a traditional programming technic but what if we want the machine to give it's best lap time on any race track.

In any way, if we could make our program itself to learn the track and perform on it, then all we require to do is write the program just once and use it anywhere.

I this scenario, we want our program to keep a timer, to keep track of the lap times, take inputs from the cameras and sensors attached to it to navigate through the track and after each lap it should be able to tweak itself so as to improve it's own decisions and achieve the target of a lap time better than the best human driver.

=> Task (T) = Achieve best / optimal lap time

=> Performance Measure (P) = finding the lap time that is less than the best human lap time and that is not reducable any further

=> Experience (E) = sequence of image and sensory inputs for navigating and avoiding obstacles

### Example 2

Making a program play Tic-Tac-Toe in such a way that in the worst case the result would be come a draw and in any other case the program must win the game

=> Task (T) = Play Tic-Tac-Toe

=> Performance Measure (P) = no.of games won + no.of games drawn should be equal to total no.of games played.

=> Experience (E) = Playing practice games against itself

=> _If a computer program could learn playing Tic-Tac-Toe (T) in such a way that it never loses a game (P) by practicing playing against itself (E) then such a computer program can be called a learner and such a system is called a Machine Learning System._

## Posing the Learning Problem

## Designing the Learning System

## Conclusion

## Epilogue

About 6 months ago, a colleague of mine was walking down the aisle of our floor to reach his / our cubicle. He was so involved in a book that he wasn't looking around or even the path he's walking. His muscle memory brought him to his desk but even then, he wasn't unloading his backpack. Instead, he was standing and reading his book as he was on the last page. Once he's done, I wasn't able to refrain myself from asking what book that was?

It was "Machine Learning" by "Tom Mitchell". Until then, I knew only his / modern definition of Machine Learning. I borrowed the book, read the 1st chapter and retunred it, deciding that that has to be added to my collection. I ordered for my copy and received it the next day. I again started with Chapter 1... 

