---
layout: post
title:  "Quick Guide to Github"
date:   2017-07-15 09:11:03
categories: blog
img:    "typ-banner.jpg"
img-alt: "Red Chuck Taylors"
tags: [github, development, web design, tech]
---
This is just a quick guide to how to use [Git](https://git-scm.com/0) and [Github](https://github.com/). I found it a little difficult to find a good guide to get started. There are many resources available but they explain it a little differently.

This is just my opinion and the way I am using git and githum so...YMMV.

## Overview
Git and Github are 2 parts of a technology for source code version control.

Git is used locally on a computer and tracks the changes that are been made to files in a
project. It can be used in a distributed fashion but I don't think many people use it that way.

GitHub is an online repository where Git controlled files can be stored.

Git and Github work together to provide a way to manage version controlled files for both individuals and teams.

[Andrew McWilliam](https://jahya.net/blog/git-vs-github/) has a great post about the differences between Git and Github, it's worth a read.

## The Process
The basic process for using git/github on a project are:
1. Create a remote repository (at Github)
- Go to [https://github.com/](https://github.com/)
- Create an account
- Create a new repo
- Click the 'Clone' button and copy the path to the clipboard
1. Clone the remote repo to your local machine 
- `git clone https://github.com/user/repo-name.git`
- Git will create a new folder using the repo name
1. Create/change files
- Just create and modify files like you normally would
1. Save your changes to the local repo (git commit)
- `git add .` - stages all changed file so they can be commited
- `git commit -m "A message describing the changes"`
1. Push the local commit to the Github repo (git push)
- `git push origin HEAD`



---


Have a question or perhaps a correction? Feel free to contact me at <bluesixty@gmail.com>.
