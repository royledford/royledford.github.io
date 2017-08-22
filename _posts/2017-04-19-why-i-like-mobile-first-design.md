---
layout: post
title:  "Why I like mobile first design"
date:   2017-04-19 09:11:03
categories: blog
tags: [web design, mobile]
img:    "typ-banner.jpg"
img-alt: "Red Chuck Taylors"
---
While I was working on my personal website I ran into an issue viewing it in mobile browsers. Although I knew it needed to be responsive, I didn't plan for that from the beginning. I built the desktop version and was going to make  adjustments after to fit with viewing it on mobile browsers.

Once of the challenges I faced was how animated and hovered divs would change when viewed in a mobile environment. Especially how hover should or should not work on different devices.

I had a few situations where you had to hover on a div to see additional information about an item, and the clicking the item woud take you to a more detailed view. This wasn't working on mobile as the hover didn't happen until the item was tapped. You never really saw the additional information.

I quickly realised that it is much harder to modify that behavior to work on mobile and still a design I was comfortable with. It would be much easier to have built a mobile design that worked and then add in additional hover/animated functionality in a media query.

## Progressive Enhancement
Starting with mobile and adding functionality is called _Progressive Enancement_. As the design moves from smaller screens to larger ones, we add in new functionality. 

The overall goal at the beginning is to provide a design, UX, and functionality that looks good on mobile _and_ on larger screen sizes. Once that is complete, we have the oppurtunity to improve the UX on larger screen sizes.

> It looks great on mobile and it looks good on desktop...but it can be better.

Starting with mobile forces you to address all the challenges of mobile right now. Yes, it can be more difficult to start small as there are more constaints to address, but they will need to be addressed at some point.

A benefit of that is you are forced to think deeply about the design and how to provide the user with a great UX on all screens. I feel you end up with a better design overall with this approach.


## Graceful Degradation
Starting with a full featured web site that is designed for large desktops screens and removing features and functionality as the screen gets smaller is called _Gracefule Degradation_. A lot of projects are built this way and they can be successful.

I have come to realise that it takes more work and time to get to this point. At least that is what it feels like to me.

> We did all the fun cool stuff up front, now we get to take it away to fit constraints we didn't think about. :(


---

Have a question or perhaps a correction? Feel free to contact me at <bluesixty@gmail.com>.







