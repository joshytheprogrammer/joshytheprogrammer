---
title: Code report - Day 23 of 100Daysofcode challenge
description: Summary of activities on 28/7/2022 - consumed checkout api and improved backend systems...
imgLink: https://res.cloudinary.com/dsgvwxygr/image/upload/v1659018620/blog/Code_report_-_28-07_thumbnail_xglkpy.png
---

## Welcome to today's code report

This marks the second code report I have ever created. Whilst this section was created specifically for the 100Daysofcode twitter challenge, I intend to continue with the section even after the challenge ends...

### My changes to the TECpastryworld website

To catch you up on where I am now, I have created the cart page and a basic checkout page just next to it. Every part of this site has been built to mobile friendly. If you wish to take a peek at the code,
You can find the code for the frontend of the site [here](https://github.com/joshytheprogrammer/tecpastryworld), and you can find the code for the backend [here](https://github.com/joshytheprogrammer/tpw_backend).

Today, the changes made to the site are as follows.

1. All the data collected throughout the site that are relevant to checkout have been centralized in one single checkout file.
2. The data has then been used to consume the checkout api - Clicking the proceed to checkout button now does something.
3. I created a system to validate the phone using regex. Actually I didn't create it, I copied it from somewhere on stack overflow. - This regex, checks the phone number to make sure that is is a valid Nigerian phone number.
4. On the backend - I also implemented phone number verification using the same regex.
5. I changed the status code for error messages sent by the backend. Instead of it sending a `406` error now it sends a `200` success with an error message that is then neatly displayed.

I made some other minor changes to the frontend like displaying notification if the order was created successfully. Disabling the input bar when phone number is verified. And much more...

Here is a video demonstration of the frontend changes... - This is just a 1 minute clip, I will be doing a full video display when the product is done - [click_here_to_watch.](https://asset.cloudinary.com/dsgvwxygr/5f7a7ad6d41ca8977146515d59492f6d)

That concludes today's code report. I may or may not end up writing a blog post. If I do, I'll announce it on my twitter.
