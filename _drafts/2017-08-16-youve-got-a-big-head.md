---
layout: post
title:  "You've got a big head"
img:    "typ-banner.jpg"
img-alt: "Red Cuck Taylors"
date:   2017-08-16
tags: [development, mac]
---
If you develop web sites one of the first things people won't see on your the <head>. This invisible, but crazy important, part of the page can be overlooked when putting site together.

This is a guide for some items that can be placed in the <head>, what they are, and how they are used. Note, all sites are different and it is up to you to decide what should or shouldn't be on your site.

### ```<Title>``` Tag
The ```<title>``` tag is used to provide a descriptive title for your web site. It is a requirement and must be present for a valid page.

The title will:
- Display in the browser toolbar (or in the page tab)
- Used as the text for the name in favorites/bookmarks
- Display as the title in search results

**Example:**

```<title>My Crazy Awesome Site</title>```

See also:

[https://www.w3schools.com/tags/tag_title.asp](https://www.w3schools.com/tags/tag_title.asp)


### I'm ```<meta>``` af!
![That's so metal](/assets/img/posts/metal-af.webp)

The ```<meta>``` is used to record metadata about the page being displayed. Typically it contains descriptive data about the page but is also used by search engines for cataloging, browsers for rendering/display information, social sites, and web services.

Meta information consists of key/value pairs.

In HTML the ```<meta>``` does **_not_** require a closing ```</meta>``` tag.

See [The w3schools specification](https://www.w3schools.com/tags/tag_meta.asp) for more information on the tag.

**Example:**

{% highlight html %}
<meta name="description" content="Lame puns..." >
{% endhighlight %}

### Meta Tags Examples

```<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">```

This is used frequently and instructs IE browsers to run in the highest mode possible, or to use Chrome Frame if available.

This really only applies to IE 8 and 9 and Chrome Frame support ended in 2014. If you need to support those browsers it may be worth keeping.

See:
- [Stack Overflow discussion](https://stackoverflow.com/questions/22059060/is-it-still-valid-to-use-ie-edge-chrome-1)
- [Some workarounds to use if needed](http://www.validatethis.co.uk/tag/x-ua-compatible/)

```<meta name="viewport" content="width=device-width, initial-scale=1">```

The ```name=viewport``` meta tag is used to control how the browser will initialy display the page in a browser. This is most important on mobile devices as, by default, they may use zooming/scaling to display a page on a small screen.

```width=device-width``` tells the browser to show the page at the same width as the device it is being displayed on.

```initial-scale=1``` tells the browser to show the page at a scale of 1. Without the browser may scale the entire page to fit in the browser window.

The [Mozilla MDN docs](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) describes what happens on mobile browsers and how best to use the tag.

And [CSS Tricks Meta Responsive Tag](https://css-tricks.com/snippets/html/responsive-meta-tag/) has great info as well.

```<meta name="description" content="This is my page about being super awesome">```

The description name allows you to provide a description of what the page contains. Search engines will use this as a description of the page contents in search results.

#### Facbook Open Graph Meta tags
See Facebooks ["A Guide to Sharing for Webmasters"](https://developers.facebook.com/docs/sharing/webmasters) for information on how to include meta tag information for pages that are shared on Faceboo.


[Facebook post on image formats for news article previews](https://developers.facebook.com/docs/sharing/best-practices#images)

Test your Facebook metadata on [Facebooks Sharing Debugger](https://developers.facebook.com/tools/debug/)

```<meta property="og:url"                content="{{ page.url | prepend:site.baseurl }}" />
        <meta property="og:type"               content="article" />
        <meta property="og:title"              content="{{ page.title }}" />
        <meta property="og:description"        content="{{ page.excerpt | strip_html }}" />
        {% if page.img %}<meta name="og:image" content="/assets/img/posts/{{ page.img  | prepend: site.baseurl }}">{% endif %}```

#### Twitter Card Meta tags

See the [Twitter Developer Guide](https://dev.twitter.com/cards/getting-started) for information on creating data specific to pages shared on twitter.

Twitter utilizes some of the Open Graph markup. See [Cards Markup Tag Reference](https://dev.twitter.com/cards/markup) for information on which tags can be reused.

Markup can be validated at the [Twitter Validator](https://cards-dev.twitter.com/validator).

Twitter cards should be [Whitelisted](https://dev.twitter.com/cards/troubleshooting#whitelisting) to make sure they display in tweets properly. Just use the [Twitter Validator](https://cards-dev.twitter.com/validator) and there should be a link to whitelist once it is validated.

See [Yoast](https://yoast.com/metadata-seo-head-section/) for some additional information about SEO using meta tags.









#### Apple mobile device tags
```<!-- third-generation iPad with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://developer.cdn.mozilla.net/static/img/favicon144.a6e4162070f4.png">
<!-- iPhone with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://developer.cdn.mozilla.net/static/img/favicon114.0e9fabd44f85.png">
<!-- first- and second-generation iPad: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://developer.cdn.mozilla.net/static/img/favicon72.8ff9d87c82a0.png">
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="https://developer.cdn.mozilla.net/static/img/favicon57.a2490b9a2d76.png">
<!-- basic favicon -->
<link rel="shortcut icon" href="https://developer.cdn.mozilla.net/static/img/favicon32.e02854fdcf73.png">```



#### Pinterest Rich Pins

[Pinterest](https://developers.pinterest.com/docs/rich-pins/overview/)
[Validator](https://developers.pinterest.com/tools/url-debugger/)

[Big List](https://gist.github.com/kevinSuttle/1997924) of possible meta tags.

```<link rel="canonical" href="https://www.example.com/some-page.html"/>```

This link is only used when you have mulitple duplicate pages and want to instruct search engines which page is the _real_ one. It may sound like a strange thing to do, but it does happen.

See [rel=canonical the ulitmate guide](https://yoast.com/rel-canonical/) for an in-depth discussion on how and when to use.
