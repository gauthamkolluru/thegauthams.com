---
title: "Which Laptop to buy next?"
categories: ["Linux","Python"]
date: 2019-07-29T06:41:00+05:30
publishdate: 2019-07-29T10:51:36+05:30
# draft: true
---

## My Laptop already got slow, which one should I buy next?

One day, I was working with python on [Visual Studio Code](https://code.visualstudio.com) and [MSSQL](https://www.microsoft.com/en-us/sql-server/sql-server-2019) (SSMS) on my Dell laptop powered by Windows 10 operating system and when I executed a query in SSMS and a program in VS Code at the same time, the system which was stuttering until then suddenly hung up. I had to restart my machine to resume my work. But, soon I restarted the machine and the applications, it started stuttering again. I decided to see what is causing it and opened Task Manager (Ctrl + Shift + Esc). I expanded it and stumbled upon some percentages, like CPU : 25%, Ram : 86% and Disk : 100%. I haven't seen something like that befoe in Windows because I moved to Windows from Mac just about then (after about 6 years). I was actually shocked to see those figures because I was actually expecting it like even the CPU would've been running at 80% - 90% of it's capacity. This concerned me. My 2 years (in 2017) old laptop with 2 generations old processor is not being used beyond 30%? Meaning, if I extend the RAM and move to a Solid State drive, I should be able to use this laptop with no problems for a long enough, ain't it?. I thought that I shall first find a software fix for the Disk issue. I searched online and implemented the below:

<table>
    <tr>
        <th colspan="2">Configuration</th>
    </tr>
    <tr>
        <td>Processor &nbsp;</td>
        <td> Intel Core i5 - 4210 (4th gen) &nbsp;</td>
    </tr>
    <tr>
        <td>RAM &nbsp;</td>
        <td>4GB DDR3 SD &nbsp;</td>
    </tr>
    <tr>
        <td>HDD &nbsp;</td>
        <td>512 GB SATA @ 5400 rpm &nbsp;</td>
    </tr>
    <tr>
        <td>OS &nbsp;</td>
        <td>Linuxmint 19 Tessa (Cinnamon Edition) &nbsp;</td>
    </tr>
</table>

### What I did to improve the performance of my computer with Windows 10

1. Disabled as many applications as I could from the Startup ("Startup" tab in the "Task Manager").

2. Disabled the following services from the services window (windows + 'r' -> type "services.msc" -> click 'ok') and restarted machine:
    - Superfetch
    - Windows Search
    - Fax
    - Print Spooler
    - Windows Tips and Tricks

3. Some articles (online) also suggested to disable "Shadows and Visual effects" but I wasn't interested in it and let it be.

4. (Uninstall if you have any anti-virus installed in your computer) Since I studied about the Windows Defender and found it to be pretty effective I haven't installed any 3rd party anti-virus solution on my pc.

5. Uninstalled Bloatware - All applications that I deemed unnecessary. (Please be careful to not to uninstall any OS required application. Learn about the applications thoroughly online using articles or forums)

6. Disk Cleanup - which cleaned about 8gb of unnecessary files.

After implementing the above I haven't encountered much with the stuttering as long as I haven't used Pycharm with MSSQL or installed Visual Studio (for trying Iron Python). I learnt that the issue is with the most resource heavy software development application / IDE (Visual Studio), I uninstalled it.

Sometime later, I met one of my old friends and we were planning to go for a coffee (from the meeting point). He received a call just then from somebody. I thought maybe in the meanwhile I could shut his laptop down so that we could go, even while he's talking. I failed at it. The UI seemed clueless, there were no regular options like shutdown or something on the lockscreen and the lockscreen resembled the screens of the hackers they show in movies/series. I was zapped, waited until he completed his call and he was already giving that "I'm a geek, faka!" kinda smile. I became all inquisitive, did a bit of research and installed Linuxmint and the performance of my computer has already been better. Better than what I was getting with Windows and since then I've been using the same computer though expanded RAM to 8gb.

Now, even after opening [VS Code](https://code.visualstudio.com/) with 3 - 4 tabs, 4 - 5 Terminals, [Chrome](https://code.visualstudio.com/) browser with 4 - 5 tabs, [Opera](https://www.opera.com/) browser running [Jupyter Notebook](https://jupyter.org/), and [Pycharm](https://www.jetbrains.com/pycharm/), my CPU utilisation is getting between 85% - 95% of it's capacity yet providing me with stutter free performance. I close Pycharm and the CPU utilization is back to being 10% - 15%.

Hence, I conclude that If we are not using a 4 generations old processor (in 2019) to it's fullest extent, even about a decade old processor (as of 2019) should be able to accomplish a good deal of tasks, provided we know how.

I have used 3 major operating systems by far with respect to laptop / desktop computers. Windows from 95 to the latest 10, Ubuntu 12 LTS, 18.04 LTS, MacOS and currently Linuxmint Cinnamon 19 Tessa and therefore would like to share my views on them which might help someone out there in making their choice.

- Usecase :
    - <u>Creative Art (Audio / Visuals) / Any Apple Software Development</u>: Apple Mac - Pro > Air > MacBook
    - <u>.Net Development</u> : Windows or Mac machine with at least the then latest Core i5, 8gb RAM (min) and preferrably SSD of any capacity could be used for some good time down the lane
    - <u>Gaming</u> : Windows only
    - <u>Artificial Intelligence Programming</u> : A Core i5 processor (min), dedicated GPU (highly suggested), 8gb of RAM (min) and an SSD preferably. Buy a machine with such hardware and install Linux.
    - <u>Anything else</u> : I suggest, installing Linux as they've come a long way in terms of UI and ease of access. Most of the applications / software packages are being made available in the official repositories. Also, **updates do not take a lifetime to install as in Windows** & With the availability of so many flavours in it, there will be one version suiting even those age old computers of our grandfather generations.

Also, I would like to show a comparisioon between these 3 OSs basing on certain aspects of computing that I deemed important (this factors are my choice):

<center>
    <table>
        <tr>
            <th>Requirement &nbsp;</th>
            <th>Linux &nbsp;</th>
            <th>MacOS &nbsp;</th>
            <th>Windows &nbsp;</th>
        </tr>
        <tr>
            <td> UI &nbsp;</td>
            <td> 1 &nbsp;</td>
            <td> 2 &nbsp;</td>
            <td> 1 &nbsp;</td>
        </tr>
        <tr>
            <td> Bootup Speeds &nbsp;</td>
            <td> 2 &nbsp;</td>
            <td> 1 &nbsp;</td>
            <td> 0 &nbsp;</td>
        </tr>
        <tr>
            <td> Application Startup Speeds &nbsp;</td>
            <td> 2 &nbsp;</td>
            <td> 1 &nbsp;</td>
            <td> 0 &nbsp;</td>
        </tr>
        <tr>
            <td> Consistency &nbsp;</td>
            <td> 0 &nbsp;</td>
            <td> 2 &nbsp;</td>
            <td> 1 &nbsp;</td>
        </tr>
        <tr>
            <td> Application Availability &nbsp;</td>
            <td> 0 &nbsp;</td>
            <td> 1 &nbsp;</td>
            <td> 2 &nbsp;</td>
        </tr>
        <tr>
            <td> Customisability &nbsp;</td>
            <td> 2 &nbsp;</td>
            <td> 0 &nbsp;</td>
            <td> 1 &nbsp;</td>
        </tr>
    </table>
</center>

Legend: 0 < 1 < 2

Finally, all I suggest is, identify your use case, basing on which, decide the operating system that suits your requirements and the hardware, finalise it as your budget in the order :

<center>
    <b>Operating System > Processor (Core i7 > Core i5 > Core i3) > HDD (SDD > @ 7200 rpm > @ 5400 rpm)</b>
    <br>
    <br>
    <br>
    <br>
    <video height="240" width="320" controls>
        <source src="https://youtu.be/2-klA62Xl9o">
    </video>
</center>

<!-- Things I didn't like about Windows OS (Vista, 8 and 8.1 versions I hated though) -->

<!-- As one of my most recent guru says, "Computers are good at repetitions". For example, Humans might require all the time in the world to add a billion integers together and give the sum and that's where computers came into picture, originally. But, those repetitions themselves paved way for the implementation of the concepts like Servers, Automation and AI (the most recent repetition utilization technology).

But, to be able to implement those technologies I need a computer that has the capacity / configuration of a latest server if not a super computer, as it has already got about half a decade old and runs at the speed of a computer from the previous century. I think I have to buy a new one. (assuming) I have a budget for a MacBook Pro, I'm not sure of how long would that support me? Cuz, me experiencing the sluggishness of my laptop started with my 2012 edition MacBook Pro itself. I started experiencing the lags in system bootups and application startups from 2017. I genuinely thought, it served me well for 5 years, maybe its time for it's retirement. Then, I had a relatively new Dell laptop with 4th generation Intel Core i5 processor and OS upgraded to Windows 10 (when Microsoft rolled out free upgrade for all users of Windows 7 or newer). I felt it to be comparatively faster to my relatively older MacBook Pro, but still I wasn't happy with the boot-up times or the application startup times but I thought I had no choice, at least for then, until, I buy a beast of a machine.

It was around then that I met my new manager and his age old laptop (could be from the 18th century... a couple of years more and it could find a place for itself in the nearest museum) at work and I wondered and asked him "how are you still managing with your laptop, how old is it? what are the boot up times with Windows 10 on it? what is it's configuration?". Trust me, the answers to all those questions were utterly depressing but looking at my pityful expression for him, he said this finally, "I manage my windows services on it!". Now, that hit my mind hard and got stuck in it, even to date.

I did a bit of research implemented a couple of suggesstions that I found online and the machine picked up with a significant improvement in the bootup and application start times and my Disk too is no more engaged at 100% utilization even when no application was running (other than the ones that the OS runs).

Later in the year, I met my friend (whose's name was mentioned in the bottom of my [homepage](http://gauthamsk.me)) and learnt about Linux. He was using a laptop which was older to mine then and to my shock it had some exciting bootup and application startup times. Then I did my tiny research on Linux operating systems and the various distros available and finally zeroed on to [Linuxmint](https://linuxmint.com/) which my friend suggested.

All this was in 2017 and I'm still using the same Dell laptop, in the 2nd half of 2019. It now has a bootup time of about 25 seconds and shutdown time of 7 seconds. Which means, If I have a task that takes about half a minute, I could turn my laptop on, get the task done and shut it down in under a minute, literally. Lately, I realised that I did the right thing with my computer once again when I tried to setup a rasa project in my laptop and work on it as doing the same in my work computer feels like a nightmare though it is a relatively newer machine. -->


<!-- A while ago, my friend, while talking to one of his students' asked "What happens if a carpenter does not have the proper tools or tools that are not in proper condition?", rhetorically ofcourse. I'm not sure whether the student asked about something or said something prior but that actually doesn't matter, because, both the analogy and that question of my friend seemed more important.

**How is "proper" defined in the context if the tool is a Computer?**

Well, I've been pursuing the quest of finding the "proper" machine for my work since then. I was not fully satisfied with my computer then and I don't think I'm even now but for different reasons.  -->

<!-- So, here is what I've learnt by far: -->
