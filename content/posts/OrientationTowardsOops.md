---
title: "Orienting Towards Object-Orientation"
categories: ["Programming-Paradigm","Object-Orientation"]
date: 2019-11-21T18:21:00+05:30
publishdate: 2019-11-21T20:17:36+05:30
draft: true
---

## Introduction

A while ago, I was walking for my evening dose (cup) of kaphi (I mean caffine (coffee)), my habbit of pondering upon myself while travelling has took over the control over my thoughts and started throwing some thoughts at random at me to choose. The one I chose was, "It's been a while since I wrote a tech article". It might seem like this is the direct result of it but it isn't. It is just an eventual end point. 

"The other day, while I was pursuing my research (my own and nobody-else-would-even-give-a-damn research) on motorcycles..." is the thought I immediately came up with, since, I've been already thinking about the opening lines of an article about de-mystifying the data science. While compiling the complete article in my mind itself, after explaining the concept of data science with my example, I thought, maybe it would be better, if I used the concepts that would discuss in applying to any other *object*, concluding with reinforcing the understanding.

And that thought, about understanding a concept and applying it to another not-at-all-related subject has triggered the question, "Isn't this sounding similar to the Object-Oriented Programming Paradigm ?" and it is this thought that brought up a conversation that I had quiet recently with one of my ex-colleagues. I was trying to explain him what object-oriented programming paradigm is, which I have actually done about an year ago while we were working together and immediately understood that I have failed then. Even when we had the same discussion, lately, I wasn't much satisfied with my explanation.

I have heard experts explaining the Object-oriented Programming Systems (OOPS) concepts, using `cars` as an example, using `buildings` as an example. I used to explain, using `motorcycles` as an example, yes, I can guess what you've thought, knowing my choice of example. I used to complain about myself to my friend that I, though not literally, suck at giving decent examples. 

But, today, I have come up with not just an example but an entire story of how to interpret object-orientation and it's properties.

## The Story

Long long ago, so long ago that I myself don't know how long ago, there lived a Software Engineer who once was walking down the road. There were multiple constructions that were happening along it. Being a curious person, he tries to figure out what was being constructed at each site. The first thing he noticed immediately was the materials used at the site. All of them had deposits of sand, concrete, steel and bricks. He then observed the difference in quantity of material deposits. With these observations, he concluded that, one has to be bigger than the other and arranged those under construction buildings in a sorted order. Then he starts observing the structures and notes down the observations, as follows:

- 2 structures have their distances from ground to the slab visibly same
    - but vary largely in the quantity of material deposits in their sites

- 1 structure has a vast difference in the height between ground and slab

And with these observations, he concludes as below:

- The site with least material deposits was being used for constructing an independant house

- The site with the highest distance from ground to slab, was being used to construct a mall, and

- The other site was being used to construct an apartment

He then tries to genaralise his conclusion. All the entities are commonly called as 'buildings' with differences in the variables like the quantity of materials being used and that basing on other parameters like height and width, it can be determined whether it is a residential individual entity or a complex or even a mall => that each entity has a different functionality. Their functionality and their variables together are giving the structure a more specific identity. 









<!-- man who learnt how to make a pot, thinking to make his living with it and yeah, his name is not Harry (a PJ).He bought the pottery wheel and some mud and started making pots of same size and shape. 

One day, a customer came to buy a pot but doesn't have enough money. Being a passionate, compassionate and optimistic person himself, the potter didn't quiet wanted to lose neither the customer nor the profit. So, the potter took the money and asked the customer to collect his pot a week later. The potter then starts pondering how can he make it happen and comes up with '*proportionally reducing the dimensions of the pot*'. Basing on the new calculations, the potter builds up a new pot, a smaller one, and delivers it. Being awestruck with this achievement of his, he realises, how many different sized pots he could make. 

Another day, while making a yet-another-pot, a bit of distraction intrudes his work, leaving the pot with a different shape. The pot took the shape of a regular, drinking water tumbler. With which, he discovers, this new shaped pot, is comparatively easier to make and has a decent functionality (drinking water) as well, attached to it, which inturn makes him ponder on the different shaped pots that he could make that could be used for different purposes. 

With the increase in the variety of pots that he could make, he decides to create a menu for the display at his outlet, which initially looked like the below:

```
items:
1. Flower Pots
2. Cooking Pots
```

and before proceeding any further, being a bit lazy as well, he wanted to find a way to reduce writing 'Pots' for every item in the list as it seems to be common among all his items (Just like the way we take the 'common value(s)' out in mathematics) and he starts drafting the menu like below:

```
Items - Pots:
1. Flower
    1.1 Small
    1.2 Medium
    1.3 Large
2. Cooking
    2.1 Small
    2.2 Medium
    2.3 Large
3. Drinking:
```

and again before proceeding any further, he re-engineers his menu like below:

```
Items - Pots:
1. Flower
2. Cooking
3. Drinking

Sizes: Small, Medium, Large
Shapes: shape_name_1, shape_name_2, shape_name_3, ..., shape_name_n
```

Years later, the potter's son becomes a Software Engineer. Acquainted with the menu of his father's outlet and inheriting the inquisitiveness and passion, the son, finds an intriguing pattern when found menus, in exactly similar style at different outlets that are running different kinds of businesses.

He then tries to adopt this intriguing style into his coding and create a software to make his father's job easier and initially does something like below:

```
Type FLower-Pots{
    material = 'mud';
    sizes = ['small', 'medium', 'large'];
    function opening(){
        # code;
    }
    function drain(){
        # code;
    }
}

Type Cooking-Pots{
    material = 'mud';
    sizes = ['small', 'medium', 'large'];
    function opening(){
        # code;
    }
    function drain(){
        # code;
    }
    function heat-resistance(){
        # code;
    }
}
```

So that, when a customer walks into his father's shop and places an order for, say, a cooking pot of 'medium' size, the program must immediately output the dimensions of the pot with all the functionalities that it should have, as below:

```
new_cooking_pot = Cooking-Pots('medium')
print(new_cooking_pot.material)
print(new_cooking_pot.size)
print(new_cooking_pot.opening())
print(new_cooking_pot.drain()) # (and so on...)
```

Since, he is a Software Engineer who wants to code like the the term 'Engineer' in his designation is expected to, comes up with the  -->