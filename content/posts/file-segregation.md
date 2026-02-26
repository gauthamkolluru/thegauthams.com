---
title: "Automation Series 1: Automating File Segregation"
categories: ["Python", "Prose", "Tech"]
date: 2019-10-20T16:00:00+05:30
publishdate: 2019-10-20T18:00:40+05:30
draft: False
---

One of the important reasons why I wanted to learn [Python](https://www.python.org) was to be able to do something that would help me directly. By directly, I mean, writing a program that could help me in my day-to-day life, automating some trivial tasks that I (and I guess, most of us as well) do. When I was learning C programming, I thought, if I become good with it, I could get a job that would pay me salary, which would eventually help me and by that I seem to mean not directly. When I was learning Java, I hadn't even thought of "if I became good with it". Then I realised that I'm not even that bad with Java when I was able to help some UG students with their assignments while working with [Chegg](https://www.chegg.com) as a part-time tutor.

Coming back to the matter at hand, We often download lots of content from the internet, be it bank statements, movies, mp3s, ebooks, softwares, etcetera, etcetera, etc... So, during course of time, our Downloads directory gets clogged with a lots of varieties of files which makes it next to impossible if we have to find a file from that long list of files and directories. That is one of the most important reasons for us in procastinating tasks that involve finding files from that clog.

Therefore, the first task that I wanted to automate with python was to write a file-segregator. A program, that moves all the 'pdf's, 'mp3's, 'mp4', word documents, text files, spreadsheets, softwares and more, into their dedicated directories and that too, whenever I turn my laptop on, this segregation happens completely automatically. If I want to find any file next time, I just have to find for it in its deidcated directory, making it both easier and simpler.

Here, I'm going to explain what I have done so that, with minimal modifications, even you'll be able to implement it in your computers and get a bit relaxed.

So, here we go...

```python
import os
import shutil
import time
```

The first and foremost part of any python program should be importing of the modules so that we could use the functions contained by them throughtout the program. Though one can write these ```import``` statements where ever they require them in the program but it is always preferred and advised to make them the first part of our program.

Here we have imported the,

- [OS module](https://docs.python.org/3/tutorial/stdlib.html#operating-system-interface) as it provides us with the methods with which, we can walk across the paths to the different directories.

- [shutil module](https://docs.python.org/3/library/shutil.html?highlight=shutil#module-shutil) is a module that contains high-level methods for the shell operations like moving files from one location to another. Shutil stands for '**Shell Utilities**'

- [time module](https://docs.python.org/3/library/time.html?highlight=time#module-time) is used to make our program sleep for sometime and as I have used it in my program, I wanted it to sleep for 45 seconds before executing the main program. So that, it would make me feel that my bootup speeds have got deteriorated.

Next, we have to create a string variable to our source directory path, like below

```python
source_directory = '/home/gautham/Downloads/'
```

The next important step is to create directory for saving each type of files. we are free to choose the locations where we create these directories and the naming conventions for each directories. All that we should keep in mind is to make wise choice for the directories names that we wouldn't forget and regret down the lane. Below is the image of the directories that I've created and their names.

![directory-names](/img/folders-for-file-segregation.png)

Next up is creating a [dictionary](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) of the destination directories, where, the keys will be a [tuple](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences) all the related extensions of a particular type of file and the values to each key would be the path to that corresponding directory as a [String](https://youtu.be/AgvV-bfWzro). (See the below code for reference)

```python
destination_directories = {
    ('doc', 'docx'):'/home/gautham/Documents/DOCS/',
    ('pdf'):'/home/gautham/Documents/PDFs/',
    ('txt', 'md'):'/home/gautham/Documents/TXTs/',
    ('ppt', 'pptx', 'odt'):'/home/gautham/Documents/Presentations/',
    ('xls', 'xlsx', 'csv', 'ods'):'/home/gautham/Documents/XLSs/',
    ('mp3'):'/home/gautham/Music/',
    ('mp4', 'mkv', 'mpeg', 'avi'):'/home/gautham/Videos/',
    ('jpg', 'jpeg', 'png'):'/home/gautham/Pictures/',
    ('zip', 'tar', 'gz', 'tgz', 'rar'):'/home/gautham/Documents/ZIPs/',
    ('deb', 'pkg'):'/home/gautham/Documents/Software-Packages/'
    }
```

Now comes the heart or brain of the program. First, we shall look at each line of the code and what it is doing and then the complete code put together.

```python
for abs_path,sub_dirs,file_names in os.walk(source_directory):
```

In the above line, the **os.walk()** method returns a [generator](https://docs.python.org/3/c-api/gen.html?highlight=generator) object that returns the 3 values at each iteration,

- The first value is the absolute path of the path of the directory in the argument (=> for the files in the source_directory, the path will be the one in the arguments itself) which is the path to the directory in the argument right from [**root directory in Linux or Unix based systems like macOS**](https://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/the-root-directory.html) or the [**C: or D:** Drives](https://en.wikipedia.org/wiki/Drive_letter_assignment).

- The second value is the [list](https://docs.python.org/3/tutorial/introduction.html#lists) of sub-directories to a particular file in the source folder. This will be empty for all the files that are placed in the source directory itself.

- The third value is a list of all files in that directory.

Let's see it with an example:

Let's say, our

Source Directory : /home/username/Downloads

and that this Downloads directory contains one sub-directory named as **Dir-1** and that contains another sub-directory called **Dir-1-1** which inturn contains an image with name **file-1-1-1.png**. The tuple of the os.walk object will be like,

```python
abs_path = '/home/username/Downloads/Dir-1/Dir-1-1'
Sub-directories = ['Dir-1', 'Dir-1-1']
file_names = ['file-1-1-1.png']
```

Now, all we have to do is to iterate over the list of the *file_names* that the *os.walk* method has given us as in

```python
    for each_file in file_names:
```

and, the *each_file* variable has the name of each file in the list in each iteration.

Then, we have to split the file name on '**.**' so that, we could get the extension of the file as

```python
each_file.split('.')[-1].lower() in extention else ''
```

but, this file extension should be used to find the matching key from the **destination_directories** dictionary that we've created above. For this, what I have done is, I have created a variable called **folder_key** and assigned it to a null string and took the entension from the file name and checked if that extention is present in any of the key of the dictionary, as below.

```python
folder_key = ''
    for extention in destination_folders:
        if not folder_key:
            folder_key = extention if each_file.split('.')[-1].lower() in extention else ''
```

Finally, once we have our **folder_key** defined, all we have to do is to call for the **move()** method under shell utilities (**shutil**) and move the file to the destination folder.

```python
shutil.move(os.path.join(abs_path, each_file), os.path.join(destination_folders[folder_key], each_file))
```

Here, the  **os.path.join()** method as the names suggests, joins the absolute path of the file with the file name itself to determine the path of the file in the source and destination directories.

With this, we are done with writing the script that segregates the files from our source directory to the destination directories as defined by us.

To run the script, run the following command in our terminal or command prompt.

```shell
python <file_name>.py
```

I shall write a dedicated article on how to automate the execution of python scripts in [Linux](https://www.linux.org) and the link to that will be posted here as well when that is posted.

Youtube Playlist for [Programming in Python](https://www.youtube.com/channel/UCWeOiQJHuUvcwR8Us5iVnAA?view_as=subscriber)

Github Link to the script: [file-segregator.py](https://github.com/gauthamkolluru/PythonLabs/blob/master/Automation/file-segregator.py)
