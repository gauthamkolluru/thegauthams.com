---
title: "Automation Series - Article 3: A Simple Personal Password Manager with Encryption"
categories: ["Python", "Automation", "Linux", "Windows", "Perosnal Password Manager"]
date: 2019-12-15T16:00:00+05:30
publishdate: 2019-12-15T18:00:40+05:30
draft: false
---

Below is the code for a simple password manager for personal use with encryption for those who want to store all your passwords hassle free, without spending a penny. This is just 1.0 version of this task. ` `  ` Version 2.0 `  ` ` in under development and the strategy will be almost completely different from this one. This is just a beginning.

### Details of the Development Environment

* Python Version :

``` python
Python 3.8.0 (tags/v3.8.0:fa919fd, Oct 14 2019, 19:37:50) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
```

* Source Code :

``` python
import pickle
import os
from cryptography.fernet import Fernet

def read_pickle():
    if os.path.exists('password_book.pkl'):
        with open('password_book.pkl', 'rb') as fp:
            if len(fp.read()):
                fp.seek(0)
                pl = pickle.load(fp)
            else:
                pl = {}
    else:
        pl = {}
    return pl

def user_inputs(n=False):
    if n:
        return input('Enter Site Name: '), input('Enter Site Username: '), input('Enter Site Password: ')
    else:
        return input('Enter Site Name: '), input('Enter Site Username: ')

def write_pickle(pl):
    with open('password_book.pkl', 'wb') as fp:
        pickle.dump(pl, fp)
    return 'Done'

def encrypt_decrypt(key=None):
    if key:
        return Fernet(key)
    else:
        return Fernet.generate_key()

def write_password():
    site_name, username, password = user_inputs(True)
    pl = read_pickle()
    key = encrypt_decrypt()
    if site_name in pl:
        pl[site_name].update({username: encrypt_decrypt(key).encrypt(
            bytes(password, 'utf-8')), f'key_{username}': key})
    else:
        pl.update({site_name: {username: encrypt_decrypt(key).encrypt(
            bytes(password, 'utf-8')), f'key_{username}': key}})
    return write_pickle(pl)

def read_remove(n=False):
    site_name, username = user_inputs()
    pl = read_pickle()
    if pl:
        if n:  # 'n' is True -> Delete
            if site_name and site_name in pl:
                if username and username in pl[site_name]:
                    pl[site_name].pop(username)
                    pl[site_name].pop(f'key_{username}')
                    return write_pickle(pl)
                else:
                    delete_site_flag = input(
                        "Do You Want to Delete All Usernames and Passwords Associated with this Site Name ? (Y/N)").lower()
                    if delete_site_flag == 'y':
                        pl.pop(site_name)
                        return write_pickle(pl)
        else:  # 'n' is False -> Display
            if site_name and site_name in pl:
                if username and username in pl[site_name]:
                    return username, encrypt_decrypt(pl[site_name][f'key_{username}']).decrypt(pl[site_name][username])
            print("Please Try Again!!!")
            return pass_menu()
    else:
        return 'Cannot Read or Remove That Which Does Not Exist!'

def selected_choice(ch):
    if ch.isdigit():
        if int(ch) in (1, 2):
            return write_password()
        elif int(ch) == 4:
            return read_remove(True)
        elif int(ch) == 3:
            return read_remove()
    return 'Amazing Choice! Thank You!! Bye!!!'

def pass_menu():
    print('1. New Password')
    print('2. Change Password')
    print('3. Show Password')
    print('4. Delete Password')
    print('5. Exit')
    user_choice = input('Enter a choice: ')
    return selected_choice(user_choice)

if __name__ == '__main__':
    final_string = pass_menu()
    print(final_string)

```

Please write to me for any clarifications in the code. I would surely value the opinions passed on this code.

[You can reach me by clicking Here](https://gauthamsk.me/contact-me/)

