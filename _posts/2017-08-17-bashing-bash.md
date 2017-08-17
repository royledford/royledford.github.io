---
layout: post
title:  "Bashing Bash"
date:   2017-08-17
tags: [development, mac]
---
## Bashing Bash
<!--excerpt.start-->
If you do any serious work on a Mac then you are probably using the bash terminal fairly often. This post contains some tips to make life a little easier when working with the terminal.
<!--excerpt.end-->
### What is the terminal

The terminal provides a command line interface (CLI) to the shell of the MAC OS. It can be used to enter commands to control your MAC.

BASH is an acronym for Bourne-Again Shell. You can read this [post on HackMac](http://www.hackmac.org/articles/bash/bash-101-history-of-bash-and-terminal/) for a history on where the name comes from.


### How to Open the Terminal
You can access the terminal by:
- Pressing command+space and typing "terminal"
- Open Finder, open the "Utilities" folder and double-click on the Terminal icon.

You can also set the terminal to stay in the dock for easy access.

### A Better Terminal

The built in teminal generally meet all your needs, but there are some better options.

iTerm2 is a replacement that adds a number of options to make the terminal easier to use.

You can download iTerm2 from [https://www.iterm2.com/](https://www.iterm2.com/)

### Open iTerm2 from Finder

Wouldn't it be great if you could just select a folder in Finder and open iTerm in that folder? Well, you can. You will need to create an automator to make it happen.

Peter Downs has written an [excellent post](http://peterdowns.com/posts/open-iterm-finder-service.html) on how to accomplish just that.

However, the code listed in the section to add an icon button to Finder didn't work for me. See [Bryan Schlinings post](http://hohonuuli.blogspot.de/2016/02/iterm2-version-3-open-iterm-here-script.html) update script for Automator to get this working.

### Creating an Alias in Bash

An alias is simply a named group of commands(s) that you can create to run from the the bash CLI.

[Here is a great post](https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions) by Justin Ellingwood on creating a .bash_profile and creating alias.
