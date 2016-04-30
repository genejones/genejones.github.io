---
layout: post
title: "A Sane Blog: Switching from Wordpress to Octopress"
date: 2013-04-12 23:37
comments: true
categories: code
---
In what (*hopefully*) is my final blog website change before I sit down and actually type some blog posts, I've migrated over to Octopress.

##Why Did You Move Sites **Again** 

I used to host this site with Wordpress, powered by the good folk over at [NearlyFreespeech](https://www.nearlyfreespeech.net/) (who offer fantastically cheap rates). 
But while Wordpress had a great community, constant bug fixes, and millions of tutorials, there was always something that felt wrong.
<!--more-->

Wordpress always struck me a little odd.

- Wordpress can be slow  
- It was expensive to host, due to  
- a database requirement  
- Wordpress is a complicated beast, and writing even a basic theme is the task of many a tutorial.  
- Wordpress can have tons of security vulnerabilities.  

Worst of all, *Wordpress is written in __PHP__*, the *[devil's programming language](http://me.veekun.com/blog/2012/04/09/php-a-fractal-of-bad-design/)*.  

I once wrote a site in PHP. Once.
{% blockquote @codinghorror https://twitter.com/codinghorror/status/224269282396225536 %}
How can you even be a PHP programmer without a sense of humor? You write PHP. That's hilarious.
{% endblockquote %}
How could I ever make changes to a PHP powered site, and keep myself sane?  

I looked around for alternatives for quite some time, and it seemed my search was in vain.  

I have a...*unique* list of requirements for a blog framework:

- I need the ability to self host. It can be on someone else's server, but I need the HTML to be on my hard drive, scattered on random flash drives. I don't want a host to go under and lose all my work. I even run my [own link shortner, YOURLS](yourls.org), for fear of VC money running out at all the main link shortening firms. A Tumblr was out of the question. I eventually conceded that [Quora](http://genejones.quora.com) makes for a decent micro-blogging platform, but I still needed a full-sized blog.  
- Custom domains are a must. The domain hack of GeneJon.es ([thanks Spain!](http://en.wikipedia.org/wiki/.es)) is too good to pass up. A ton of hosted sites only allow for .net, .com, and other boring TLDs, so they were a no-go.  
- I like Open source, and might want to tweak a few things under the hood later.  

Eventually I found a few flat-file blog frameworks, but they lacked something I desperately needed: good looking themes.  

I've been cursed by having a graphic designer for a mother.
In my primitive youth, I once considered Adobe Indesign *a fun computer game*.
I know some of typography, even if by accident of my birth. I can see good design, and I appreciate it.
I loathed the crappy 2004 era themes that the flat-file frameworks offered me.
I harshly judged sites with similiar appeareance.
I love substance in a blog, yes, but I stay for style of all kinds: style in the theme, style in the writing, style of personality.  
But while I can *see* good design, I am not very good at *making* good design.

CSS isn't my strong suite. 
After spending hours upon hours trying to learn it's intricacies only to end up with horrible, miserable looking webpages, I conceded defeat. 
Moreover, the idea of taking an existing theme, and smushing another framework into it, was abhorent to me (and time consuming).

####Finding Octopress
Eventually I heard of something called Jeykll. It seemed like a cool idea, but it also seemed like a ton of work.

After attending a few Javascript meetups, I decided to embark on the creation of a staticly hosted Single Page Application. 
It would be the Apex of Ajax. I even kinda-sorta [got it to work](https://github.com/genejones/north-american-hipster) before I tired of feeding the Javascript, and returned to the safety of Python. 
A Django blog seemed like such overkill as to be laughable, and the formatting would have sucked. 
My ego is not sufficient to suffer with a terrible blog site backend just because I wrote it.

I resigned myself to Wordpress. 
It wouldn't be so bad, look at all those features! 
But I still lingered for more.

As I kept seeing more and more sites hosted on github, it was obvious there was some kind of framework behind this upswell. 
And then, low and behold: "Powered by [Octopress](octopress.org)". It was perfect.

Octopress has a nice theme out of the box, much like Wordpress does. 
And the [Third Party themes](https://github.com/imathis/octopress/wiki/3rd-Party-Octopress-Themes) are even better, and more are being created constantly as new folks join on the Octopress bandwagon.  

I found the [FoxSlide theme](https://github.com/sevenadrian/foxslide) and here we are.  

All this text without even mentioning all the technical benefits. When it comes to a personal blog, [**Go Static or Go Home**](http://highscalability.com/blog/2011/8/22/strategy-run-a-scalable-available-and-cheap-static-site-on-s.html) (really).

- CDN, caching, etc. make static sites *blazing fast*  
- Revision Control? Heck yes!  
- Simple text files. Beautiful, editable text files.  

I learned how to do a Ruby install on Windows for you, Octopress.
I'm never going to give you up now.  
And if that's not an example of the sunk cost fallacy, I don't know what is.
