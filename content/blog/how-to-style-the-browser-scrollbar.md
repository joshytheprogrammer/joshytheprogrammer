---
title: How to style the scrollbar
description: In this short blog post, I will show you how to style the scrollbar also know as the overflow section.
imgLink: https://res.cloudinary.com/dsgvwxygr/image/upload/v1658739296/blog/Blog_-_How_to_style_css_scrollbar_c2dosw.png
alt: image-how-to-style-the-browser-scrollbar
---


## What is a scrollbar

According to Wikipedia :- A **scrollbar** is an [interaction technique](https://en.wikipedia.org/wiki/Interaction_technique "Interaction technique") or [widget](https://en.wikipedia.org/wiki/Widget_(GUI) "Widget (GUI)") in which continuous text, pictures, or any other content can be [scrolled](https://en.wikipedia.org/wiki/Scrolling "Scrolling") in a predetermined direction (up, down, left, or right) on a [computer display](https://en.wikipedia.org/wiki/Computer_display "Computer display"), [window](https://en.wikipedia.org/wiki/Window_(computing) "Window (computing)"), or [viewport](https://en.wikipedia.org/wiki/Viewport "Viewport") so that all of the content can be viewed, even if only a fraction of the content can be seen on a device's screen at one time.

According to me :- A scrollbar is that line on the right side of the browser that allows users to scroll through the page. It can be added or removed using the overflow property.

## Usage Example

```css
::-webkit-scrollbar {
	width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
	background: #FBFFfE;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #230903;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #000;
}
```

The following will result in  :- ![enter image description here](https://res.cloudinary.com/dsgvwxygr/image/upload/v1658738581/blog/overflow-blog-scrollbar-example_bthb9q.png)

## Explanation

The  `-webkit-scrollbar`  family of properties consists of  _seven_  different pseudo-elements that, together, comprise a full scrollbar UI element:

1. `::-webkit-scrollbar`  addresses the background of the bar itself. It is usually covered by the other elements
2. `::-webkit-scrollbar-button`  addresses the directional buttons on the scrollbar
3. `::-webkit-scrollbar-track`  addresses the empty space “below” the progress bar
4. `::-webkit-scrollbar-track-piece`  is the top-most layer of the the progress bar not covered by the draggable scrolling element (thumb)
5. `::-webkit-scrollbar-thumb`  addresses the draggable scrolling element that resizes depending on the size of the scrollable element
6. `::-webkit-scrollbar-corner`  addresses the (usually) bottom corner of the scrollable element, where two scrollbars might meet
7. `::-webkit-resizer`  addresses the draggable resizing handle that appears above the  `scrollbar-corner`  at the bottom corner of some elements

The explanation section was scraped from css-tricks. Read their breakdown [here](https://css-tricks.com/almanac/properties/s/scrollbar/)
