---
comments: true
layout: post
title: Hacking my October away with Hacktoberfest
tags: ['Hacktoberfest', 'open source']
author: "Varun Dey"
publish: true
excerpt: My experience with Hacktoberfest 2016
date: '2016-11-07'
---
Recently I came to know about Digital Ocean's Hacktoberfest in which they encouraged developers around the world to contribute to open source by submitting pull requests to any existing open source project on Github. What do you get in return? Free Digital Ocean swags of course! Its's an open source win-win.

### Inception
So I was looking for a perfect jekyll theme for my website and I came across this amazing [Light Material theme](http://jekyllthemes.org/themes/light-material/) by [Lukas Himsel](https://github.com/lukas-h). I made a fork of the original repo and started customizing according to my needs. At several occasions however, I found that this theme could be made a lot better with some simple tweaking. So here's what followed in due course of October and thus my journey with Hacktoberfest.

### Tweak #1

##### Code highlighting support
While writing my first blog post [Deploying Flak app on Heroku](https://varundey.me/blogs/deploy-flask-app-on-heroku), I realised that the code highlighting in this theme is not supported yet for some unknown reason. Definitely ofcourse I created an issue for this but I had no idea when is it going to be resolved and thus I decided to take the matter in my own hands.

Being first timer in Jekyll, it wasn't hard at all to understand the modular architecture of it. In fact, I wouldn't be surprised at all if you decided to build your own jekyll theme. It's that simple really. This issue however seemed to be a bit dense. I did a thorough research on code highlighting option in jekyll blog posts and came to know that you just have to use the `kramdown markdown` with `rogue highlighter`. Easy, right? Nope. Didn't seem to work on this theme for some reason. I came to a conclusion that maybe this was because of some ugly CSS.

Of course I didn't want to go through each CSS line and inspecting the DOM. So what do I do now? This is where the fun begins. I came across this awesome hack. Since I knew that I was only going to write my posts in `markdown`, I decided to create a separate CSS for it. How? The open source way of course :smiley:

Thanks to [@sindresorhus](https://github.com/sindresorhus). He made an awsome tool to [convert markdown to css](https://github.com/sindresorhus/generate-github-markdown-css) using `npm`. I just had to write a sample post in markdown and run through the CLI. Voila! I now have a universal CSS for my markdown blog posts

### Tweak #2

##### Footer Tooltips
See those awesome tooltips while you hover on any icon? Thanks to Materialize being open source this was rather easy. I simply had to use the `tooltip class` from [here](http://materializecss.com/dialogs.html) and use it in my icon class. Since this theme is already built on materialize, I didn't have to use any big CDN for this sole purpose.

### Tweak #3

##### Auto sliding footer
If you have reached till here, you might probably have noticed the badass footer at the bottom which auto slides out of display upon scrolling down and comes back up while scrolling up. This was made possible by [@WickyNilliams](https://github.com/WickyNilliams)'s awesome [headroom.js](http://wicky.nillia.ms/headroom.js/). It's a lightweight JS widget which takes care of all the CSS properties of the DOM element once the API is initialised. That's all. No CSS, only JS. The `headroom.js` takes care of all the CSS properties of the DOM with the user scroll event.

### Tweak #4

##### Let's Disqus
This theme didn't support any kind of interaction and that felt kind of odd to me after writing several posts. I need to make sure that anyone using this theme should be able to welcome discussion on his post. Now here I learnt about Disqus. Disqus is an amazing tool that helps bloggers to enable interaction on their posts. With jekyll's modular architecture, it didn't took me long to figure out how to keep the Disqus plugin so that each user can access it just by putting the Disqus credentials in `config.yml`

## Profit??
So what I see waking up after a long night?
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BMPAW-BAjEd/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">My idea of a good weekend and a Happy diwali 😋 #geek #hacktoberfest #GitHub #opensourceFTW #LatePost</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Varun Dey (@varundey) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-10-31T16:44:43+00:00">Oct 31, 2016 at 9:44am PDT</time></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

Yup. Sharing is caring. And even better so if you get rewarded for it. :innocent:

Since I have kept all my confidential server files linked to my website under the same folder, I have decided to make it a private repo. But you can always check out the latest work on the theme over where it actually [belongs](http://himsel.me/material-theme/).
