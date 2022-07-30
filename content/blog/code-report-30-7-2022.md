---
title: Code report - Day 24 of 100Daysofcode challenge
description: Summary of activities on 30/7/2022 - Successfully integrated the paystack API with my backend...
imgLink: 
---

## Welcome to today's code report

Yesterday, I didn't write a code report. Something came up that didn't allow to code enough. However, I made up for that today. I hope you will find today's report encouraging...

### Big Announcement

I am about to announce something big for the JTP brand, don't tell those on twitter yet. I have successfully created my own email list. I'm in the process of crafting unique content for that medium and it may take a while. I'd love to know your thoughts though, to pass them on feel free to DM me.

### joshytheprogrammer

With regards to changes made to my blog, I integrated the newsletter form into every page and styled it. You will find it at the very end of this post as well. I'm still in the process of finding more innovative ways of getting people to join up but if you are interested, feel free to enter your email below.

### TEC

With regards to TEC, in the last code report, I discussed how I had centralized every data point into a single checkout file. Well today, I moved up a bit. I have successfully integrated paystack into the backend of the site. I wouldn't call it seamless just yet but its getting there. As for the frontend, it receives the payment URL generated and redirects the user to that URL. You can find the code for the frontend of the site [here](https://github.com/joshytheprogrammer/tecpastryworld), and the code for the backend [here](https://github.com/joshytheprogrammer/tpw_backend).

--- **Problems Arising** ---
Whilst trying to integrate paystack, I found a major problem. The most popular package, the one that even paystack recommends could not hold up to my specific use case. It requires that data be sent through the request handler `request()->someData`. Meaning, all the data it needs cannot be passed through a variable as you would every other function, it can only be fetched directly from the request. This is good and effective, if you use the Laravel template engine (blade). But if you are like me, and are using Laravel only for api building, this doesn't hold up. The only solution I could think of was to use a different package. This did the job for me and much easier might I add. I would recommend it for anyone needing API's. Here is the package and its GitHub => `composer require iamolayemi/laravel-paystack` -  [https://github.com/iamolayemi/laravel-paystack].

That concludes today's code report. You can join my squad by providing your email below.
