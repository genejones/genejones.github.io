---
layout: post
title: "Analytics Manifesto"
date: 2013-05-24 10:44
comments: true
categories: analytics
---

####An Analytics Manifesto

Analytics has plodded along long enough.  
#####Time to kick it up a notch.
***
<!--more-->

### Manifesto for Providers:

+ Best practices only.
    - Use REST. HTTP POST & PUT only. GET should never be used to give data to the server.
    - Use JSON. Use JSON. Use JSON.
    - Look at other JS best practices.
    - Your Client-side API should be a JS object. ```collector.customVar = 'hello world'``` is easy
+ Make the simplest thing that works, then make it expandable.
+ Focus on one thing, do it well.
+ Be unique. We already have Google Analytics, SiteCat, and others.
+ Have an easy (less than 5 minutes) setup.
+ Reflect Reality.
    - Users have many devices.
    - Users have ADHD.
    - Users don't care about your definition of a session.
+ Be privacy concerned.
    + Use 1st party cookies.
    + Allow opt-out with:
        + DNT
        + no-follow cookies
        + plugins.
+ Be human readable. It eases adoption by coders, analysts, and helps consumers understand you aren't evil.
+ Don't use the work 'track'. It sounds like you are hunting the end-users. 'Observe' is better.
+ Better no data than terrible data.
+ Never trust client code. See above rule for why.
+ Use a schema to validate data. Update schema.
+ Changes should be easy.
+ Changes should not break anything.
+ Make sure changes don't break anything with unit tests.
+ Auto-scale. EC2, duh!
+ AJAX is a thing.
+ Because AJAX is a thing, There are no pages. Only views.
+ There are no events. Only updates to views.

### Manifesto for Customers:

+ Own Data. Never rent data.
+ Open Code is easy to fix, easy to test.
+ The site changes, therefore the analytics changes.

### Impossible Goals

Yes, most of this page is not commercially viable.  
That's not the purpose of this page.

The purpose is to show what I think we should aspire to.

I'm a bit of a jerk about it, and don't take anything as an absolute.
I'd like to think of the list above as similar to Crockford's JS coding style guides: some rules  **must** be followed, some rules *might* be followed, and some rules are *stupid*.

Feel free to critique.

I hope to build a simple analytics tracker with these aims over the summer.  
It will be open source, and it will be glorious.
