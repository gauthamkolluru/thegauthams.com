---
title: "Learning What Machine Learning Means"
tags: ["AI/ML","Prose", "Tech"]
date: 2019-08-17T16:34:00+05:30
publishdate: 2019-08-19T10:01:40+05:30
---

<!-- Disclaimer: This is just an attempt to explain the term **Learning** (in the first place) and extending that understanding to understand  what **Machine Learning** means with a real-time based example. However, the mathematical concepts (methods) are not the only methods available in the space/scope of Machine Learning. -->

<b style="font-size:24px">I</b>t would be quiet surprising if we could find someone from the Computer Science or Engineering industry who hasn't heard of the buzz word of these days, "Machine Learning". People researching, working, aspiring or following this space find it no surprise to learn of the number of written, video and audio materials that are seeing the phase of this earth, each day, attempting either to explore the space in more detail or showcase some fresh perspectives on existing ones.

This is my attempt to shed some light on what "Machine Learning" means, hoping that a couple more enthusiasts who got bit by this bug would get benefitted and fascinated by this space as I did myself.

#### Introduction to Learning

Humans have outperformed all other known species on the planet by just one organ, the Brain. Scientists haven't yet completely comprehended the mechanism behind its functioning but every revelation by far has found to be intriguing. One of those them is, "Learning".

We all agree that we were not doing most of the tasks that we currently do day in and day out, when we were infants, right? Even the typical tasks like walking or talking or standing and so on. We say that we have learnt them. So, what does it actually mean by "Learning"?

I would like to define it as, "being able to do something that we haven't done until then by ourselves". Apart from the honorary mentions as above, we have been doing a lot of things that we haven't done until sometime ago like playing sports to musical instruments to solving mathematical equations for missing quantities to perceiving things within and around the Sun (whatever has been done by far) and beyond. One among them being, how are we doing it? Precisely, how are we **learning** ?.

To understand this, just like many scientists / researchers did, let's start learning with and from the alphabet of English, once again.

#### Breaking and Making up of the Process of Learning

Remember the book in our kindergarten that our parents used to teach us the English alphabet and some objects at the same time (we might have learnt neither initially though <span></span>) ? This time let's look at the process break that up into individual components, understand the role of each component and join them back again to understand the complete picture.

Our parent have shown us the image ![png](/img/800px-LetterA.png) and uttered a sound that sounded like '<b style="font-size:18px">ey</b>' and they repeated that until we made the same sound that they were doing when they point to that shape / image. Later we started making that sound almost instantaneously, soon we came across similar or same shape.

What would have essentially happened:

Our parent has given us a visual and an audio input:

<table>
	<tr>
		<th>Visual Input (Image)</th>&nbsp;&nbsp;&nbsp;&nbsp;
		<th>Output (Sound)</th>
	</tr>
	<tr>
		<td><img src="/img/800px-LetterA.png" height="100px" width="100px"></td>&nbsp;&nbsp;&nbsp;&nbsp;
		<td>ey</td>
	</tr>
</table>

*Tab: 1 - Imagine the inputs have been stored in this manner*

Our brain would have taken both and stored the inputs by associating them to each other.

=> Whenever you have heard of the sound 'ey', indentify the character associated with it or

=> Whenever you have visually indentified a character 'A', say it's sound

It is by this method of association that we have learnt identifying a lot of objects, characters and a lot more. It seems more fascinating that irrespective of the change in font of the character (like Times New Roman, Ariel, Calibri, Cambria or Comic Sans etc...) as long as the shape seemed closer to at lease one input that was stored in our brain, we still are able to identify it accurately.

This is just one method of learning that a human brain implements in certain applicable situations among many other learning methodologies that the brain implements in various other situations.

Now, imagine a computer program, that could mimic the infant as mentioned above => (implying) that the program takes an image 'A' in font say 'Times New  Roman' and the sound 'ey' as inputs, stores them like depicted above in table (Tab: 1) and in the runtime you give an image of 'A' written in another font say 'Comic Sans' and the program still identifies it to be 'A' and outputs the its sound 'ey'. Such a computer program is called as a **Machine Learning** program.

#### Defining Machine Learning

Machine has been defined by a lot of scientists and researches and many other in their own terms. The most modern definition is said to be from **[Tom M. Mitchell](http://www.cs.cmu.edu/~tom/)** among a couple of other's definitions.

>	Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it learn for themselves. - [expertsystem](https://www.expertsystem.com/machine-learning-definition/)
<br>
<br>
>	Machine learning is the science of getting computers to act without being explicitly programmed. - [Stanford](https://www.coursera.org/lecture/machine-learning/what-is-machine-learning-Ujm7v)
<br>
<br>
>	A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E. - [Tom M. Mitchell](http://www.cs.cmu.edu/~tom/)
<br>
<br>
>	Imparting a computer program with the learning capabilities of a brain (preferrably a human's) is Machine Learning. - [Gautham Kolluru](https://gauthamsk.me/technology/ml-in-layman-terms/)

**P.S**: This is just the first part of the tutorial on understanding the most basics of ML. In the continuation to this article, we shall try understanding a couple of concepts, considering a few more constraints on the same / similar example. In these articles, I would try just to throw some light on some basic learning methodologies employed by our brain compared with the existing Machine Learning algorithms that seem similar.


<!-- As part of our childhood, we all have come across the problems like, "if a person took 30 mins to cover a distance of 15 units how much time would he require to cover a distance of 9 units ?", ain't we?

The solution for that problem drawing a table, writing the values in the appropriate place, denoting the unknown with a character 'x' and solve the problem for 'x' (like below). isn't it?

<table>
<tr>
<th>Distance</th>
<th>Duration</th>
</tr>
<tr style="text-align:center">
<td>15</td>
<td>30</td>
</tr>
<tr style="text-align:center">
<td>9</td>
<td>x</td>
</tr>
</table>

All we used to do in such a problem is find the missing quantity by applying simple rule of cross-multiplication

```
	15x = 30 X 9
=>	x = (30 X 9) / 15
=>	x = 18
```

and we used to determine that that person requires 18 minutes to cover the distance of 9 units, isn't it?

On one fine day, a person travels from his House to Office (House -> Office) covering a distance of 10 kilometers in 30 mins. Next day he plans to travel from the House to movie theatre in the direction of House -> Office but situated at a distance of 19 kilometers. This time, he wants to find out how much time does he require to cover that distance.

As soon as the person thought of this real-time problem at hand, he identified that this problem is very similar to the problem that he used to solve during his schooling attempts to solve it in the same method as above.

<table>
<tr>
<th>Distance</th>
<th>Duration</th>
</tr>
<tr style="text-align:center">
<td>10</td>
<td>30</td>
</tr>
<tr style="text-align:center">
<td>19</td>
<td>x</td>
</tr>
</table>

Applying the same rule of cross-multiplication

```
	10x = 30 X 19
=>	x = (30 X 19) / 10
=>	x = 57
```

and understands that he requires 57 minutes to reach the theatre.

Now, basing on the above result, he decides to find a formula to determine the duration of travel basing on the distance from his place. Now, all he does is figure out how many minutes would it require to travel 'x' units of distance.

This time, the table looks like :

<table>
<tr>
<th>Distance</th>
<th>Duration</th>
</tr>
<tr style="text-align:center">
<td>10</td>
<td>30</td>
</tr>
<tr style="text-align:center">
<td>x</td>
<td>y</td>
</tr>
</table>

Applying the same rule of cross-multiplication

```
	10y = 30x
=>	y = 30x / 10
=>	y = 3x
```

This means that, for any given distance 'x', all the person requires is a duration of 3 times 'x' to travel. isn't it?

and this means that, we have learnt that the duration required to travel 'x' distance is nothing but the distance 'x' times 3.

Now, we can determine that if we want to travel :
- 1 km we require 3 mins
- 2 km we require 6 mins
- 10 km we require 30 mins

so on and so forth. -->
