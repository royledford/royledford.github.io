---
layout: post
title:  "Bashing Bash"
date:   2017-08-16
categories: blog
img:    "typ-banner.jpg"
img-alt: "Red Chuck Taylors"
tags: [development, mac]
---
If you do any serious work on a Mac then you are probably using the bash terminal fairly often. This post contains some tips to make life a little easier when working with the terminal.

## What is the terminal

The terminal provides command line interface (CLI) into the shell of the MAC OS. It can be used to enter commands to control your MAC.

People frequently refer to the terminal as Bash. Bash is really the shell itself and is an acronym for _Bourne-Again Shell_. You can read this [post on HackMac](http://www.hackmac.org/articles/bash/bash-101-history-of-bash-and-terminal/) for a history on the name.


## How to Open the Terminal
You can access the terminal by:
- Pressing `command + space` (spotlight search) and typing "terminal"
- Open Finder, open the "Utilities" folder and double-click on the Terminal icon.

You can also set the terminal to stay in the dock for easy access. Just right-click on the terminal icon and select _Options_ and then _Keep in Dock_.

## A Better Terminal

The built in teminal will generally meet all your needs, however, if you use it frequently Iterm2 may be a better option. iTerm2 is a replacement that adds a number of options to make the terminal easier to use.

You can download iTerm2 from [https://www.iterm2.com/](https://www.iterm2.com/)

## Open iTerm2 from Finder
Wouldn't it be great if you could just select a folder in Finder and open iTerm in that folder? Well, you can. You will need to create an automator to make it happen however.

Peter Downs has written an [excellent post](http://peterdowns.com/posts/open-iterm-finder-service.html) on how to accomplish just that.

The code in Peter's post didn't work for me though. See [Bryan Schlinings post](http://hohonuuli.blogspot.de/2016/02/iterm2-version-3-open-iterm-here-script.html) update script for Automator to get this working.

## Creating an Alias in Bash
An alias is simply a way to provide a differnt name for a command and include some preset arguments. 

You can also create Bash functions that allow you to group mulitple commands and then run from the the bash CLI.

[Here is a great post](https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions) by Justin Ellingwood on creating a .bash_profile, alias, and alias functions.



---


Have a question or perhaps a correction? Feel free to contact me at <bluesixty@gmail.com>.
