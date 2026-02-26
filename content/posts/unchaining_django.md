---
title: "Unchaining Django"
categories: ["Linux","Python"]
date: 2019-07-27T20:12:00+05:30
# publishdate: 2019-01-01T02:17:36+05:30
draft: true
---

## Unchaining Django... A Kick (Quick) Start to Develop Web Applications

Before diving into the topic itseslf, let's first understand the scopes of Web Application development and this tutorial.

### Prerequisites

1. **User Interface (UI)** : **HTML**, **CSS**, **Bootstrap**, **JavaScript**, **jQuery**, etc... that are required to design the user interface and **Template** language called [Jinja](http://jinja.pocoo.org/) for some UI magic.

2. **Database (DB)** : Any **SQL** or **NoSQL** based databases can be used as per the developer's choice. For the purpose of this tutorial I'll be using [MySQL]() (Open Source). Knowledge of Creating, Retrieving, Updating and Deleting (CRUD) data from the database would suffice for this tutorial.

3. **Python** : used to handle everything between the UI and DB. Concepts like, variables, data structures, conditionals, loops, functions, modules and basics of OOPS through Python would be sufficient for now.

### Versions

1. User Interface : You may use any versions of the UI technologies as per your interest. Doesn't matter! except for Template Language.

2. Template Language : **Jinja2** (This comes by default when you install Django. So, no need to worry.)

3. Database : Just like any type or make of DB, any version of DB as well.

4. Python : This tutorial will be dealing with  version 3.7.3

5. PIP (Python Package Installer) : 19.2.1

6. Django : 2.2.2

### Tutorial Scope

We'll be dealing only with understand of Django and therefore those who are not familiar with any of the perequisites mentioned above apart from Django and Template language are suggested to get some familiarity with those concepts and come back to this tutorial.

<hr/>

### Demystifying Jargons

#### Framework

Suppose you want to buy clothings for yourself, basically you have 2 options of doing so. You can either buy the material and get it stitched or you can buy the readymade ones and just get them altered as per your requirement. We highly prefer the latter for the reason that alterations are quicker and easier as the clothings are already stitched with some standard dimensions pre-defined like Small, Medium, Large, XL, etc...

Ejjgatly (exactly) what a Framework is. A set of pre-defined files, folders and instructions of altering them for quicker and easier development of a project.

#### Django

It is a Python based web application development framework that stands true to it's tag line, "**For Perfectionists with Deadlines**".

It means nothing but a set of python files, folders and instructions of developing a web application.

Let's explore further by actually developing the application.

#### Virtual Environment

With respect to Python, a virtual environment is something that works as if a fresh new copy of Python has been installed along with the basic modules like PIP, Setup tools and Wheel.

(A Virtual environment looks just like another folder that contains few files and folders within in your CWD/PWD that you created it in.)

Installing modules in Python using PIP also installs all its dependencies which sometimes might conflict with the some existing packages / modules which might result in adverse results. Which is why it is recommended to have a virtual environment, preferably one for each project.

<hr/>

Now, since we're done with defining the scopes, let's kick start...

Step 0:

##### Install Virtualenv for Python

```terminal
pip install virtualenv
```

##### Create Virtual Environment

Open terminal<sup>1</sup> / command prompt<sup>2</sup>, navigate to the directory where you want to create the Django Project and run the following:

Syntax:

```terminal
virtualenv <environment name>
```

Example:

```terminal
virtualenv djenv
```

Note:

<sup>1</sup> Linux / Unix / MacOS

<sup>2</sup> Windows


##### Activate Virtual Environment