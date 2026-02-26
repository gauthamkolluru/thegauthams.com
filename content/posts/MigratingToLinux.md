---
title: "Migrating to the Linux World from Windows"
tags: ["OS","Python", "Tech", "Prose"]
date: 2019-01-01T00:21:00+05:30
publishdate: 2019-01-01T02:17:36+05:30
# draft: true
---

### History:

Ever since I have bought my first desktop computer (an assembled one) back in 2005, just like most others even I got *Microsoft's* **Windows** operating system installed in it and the version was **XP**. Be it any OS that I have used till date, I have hardly felt the operating system to be really convenient to use as I haven't explored much on how to gain convenience and was just using the system through the GUI provided. Despite hailing from a Computer Science and Engineering background, I have recently decided not to use mouse/touchpad and to try doing most of my activities such as creating/renaming/moving/deleting files and folders, switching between applications or between tabs in the same application, executing my scripts, installing/opening a program and so on through the command prompt itself. Soon, I have started playing with my system path and creating aliases for the programs (ex: for py2 for Python2 and py for Python3) and even creating my own key combinations using [Auto Hot Key](https://www.autohotkey.com/). I have started liking the Windows 10 Operating System lately for its stability upto some extent but because my increased comfort of using it to the most. 

### Issues with Windows:

Irrespective of my comfort and it's stability, I always wanted to have my pc respond quickly for whatever task I give to it which was not happening with the programs like pycharm or anaconda (IPython / Jupyter) and to achieve the same, I have disabled some of the services like the *Windows Search, Print Spooler, Indexing, etc...*. Disabling such services has definitely imporved the performance of my machine significantly with most of my tasks but not much with Pycharm or Anaconda. The issues have alleviated when I installed Eclipse IDE for some Java Development. Therefore, I have preponed my plans of experiencing the **Linux** Operating System and on 25th December 2018, I have completely wiped my pc (with licensed Windows 10) clean and installed linux ([Click Here to know what happened when I tried sideloading linux on Windows 10](https://gauthamsk.me/technology/underconst/)) the latest 19.1 *Tessa* version of **Linuxmint Cinnamon** edition. Let's leave the discussion of why Linuxmint Cinnamon and not something else for another article, as I want to share some basic, simple yet important tips for the prospective Linux migrants from other platforms for setting up their environments for Python Development.

### Downloading and Installing Linuxmint - Cinnamon Edition:

For installing Linuxmint, all that one has to do is to download the .iso (image file) into your pc and burn it to an empty dvd or make a bootable flashdrive.

* Link to download the latest version of Linuxmint: https://www.linuxmint.com/download.php
* Click on <u>32-bit</u> to download 32 bit version of the OS or <u>64-bit</u> to download the 64 bit version of the edition (Cinnamon/Mate/Xfce) you want to  install. I have downloaded and installed the 64-bit version of Cinnamon, I shall be proceeding with the instructions for the same.
* [Learn how to create a bootable media](https://linuxmint-installation-guide.readthedocs.io/en/latest/burn.html)
* Soon after creating your bootable media, insert your media into your pc and restart your pc into 'One-time boot menu'. [This can be done in multiple ways](https://rivernetcomputers.com/5-ways-windows-10-boot-options-menu/)
* Follow the instructions on the screen and you'll be good to go with a fresh new installation of Linuxmint Cinnamon.

### First Steps:

* Make sure all system drivers are installed and upto date. This can be done fromt he welcome screen that pops-up soon the machine is booted-up, else:
	* pressing the `super` or Windows key (to the left of the left Alt) and search for string 'driver' which shows `Driver Manager` application. Click on the application of hit enter/return -> enter your system password -> the system automatically checks for the drivers (requires active network connection) and driver updates and carefully follow the instructions if there are any updates, else you're done.

* Also you can launch the welcome screen with the following command in the `terminal` -> ```mintwelcome-launcher```

* I recommend to go through the Documentation that is available to launch from the welcome screen for a better understanding of the linux

### Basic and useful information:

* All your application that you install using *Software Manager* will fall into '/usr/bin' or '/usr/local/bin' folders
* To check the folders that are currently present in your system path, type ```echo $PATH```
* A better way to have more control and manage your application is to create a folder in your HOME folder and installing your applications there. This way, the folder gets automatically added to your $PATH enabling you to open your application from the CLI and even remove them easily when  required

### Conclusion:

Now, for a Python developer, he will be content only after successfully setting-up his python development environment which could be a bit of "**Not-as-Expected**" task if you are one like me. I wouldn't want to install multiple instances of any program in a machine and therefore thought of using the instance of python (Python 3.6) that had come with my OS. But, little did I know that Linux, the operating system itself uses the instances that it brings with it and I have confidently tampered with it and have become successful at corrupting my operating systems. Then I have learnt that it is ***highly recommended to not to use those instances for your development environment as that might cause discrepencies with Operating System itself*** as the linux operating system uses those instances for its own scripts and therefore it is ***always recommended to install a separate version of python***

I have downloaded the latest version of Anaconda3 and have used the instance of python that has come with anaconda as my project interpreter for my python projects and am therefore being able to use the package installer and install all my packages such as pyodbc, scrapy, etc.. without any hassles.

I wish you'll a very happy transition to Linux. 

P.S.: This is my first tech article in my blog being published on 1st Jan 2019. Please give comments or suggestions on it as I'm looking forward to improve.

## Wish you all a Very Happy 2019!
