---
title: Building a Navigation bar with HTML and CSS
description: In this tutorial, I will be building a company navigation bar with just html and css.
imgLink: https://res.cloudinary.com/dsgvwxygr/image/upload/v1657389187/blog/nav-blog-post-thumbnail_h1jebe.png
alt: image of navbar we built with css
---

As a Full Stack developer, I can't count the amount of times that I have built Navigation Bars. Whilst nav bars can vary in look and feel, they have a similar build to them. In this tutorial, I will be building a navigation  bar with just html and css.
Here is the end result. ![Preview of Navigation Bar](https://res.cloudinary.com/dsgvwxygr/image/upload/v1657387698/blog/image-of-nav-blog_s8zhzp.png)
You can track the code on [GitLab](https://gitlab.com/joshytheprogrammer/jtp-css-blog-navbar-1), feel free to fork it but be sure to give it a star while you do.  Let's get started.

Scaffold your html project with `html:5` in vscode. For the html, copy and paste the following:

```html
<nav>
	<div class="logo">
		<h2>My Company Logo</h2>
	</div>
	<div class="links">
		<a href="#">Home</a>
		<a href="#">Projects</a>
		<a href="#">Work</a>
		<a href="#">About</a>
		<a href="#">Contact</a>
	</div>
</nav>
```

Let me explain:-
The nav is the html semantic element that signifies that this is where you want to build your navigation bar.
The `.logo` section holds the logo of your website. It can be an image or just text. Ours will be just text.
The `.links` section holds the navigation links we will be creating. By the way, I have a tutorial on [how to create your company contact form here.](https://joshytheprogrammer.com/blog/how-to-build-a-contact-form-with-html-and-css)

Note: Don't forget to link the css file.
`<link rel="stylesheet" href="style.css">`

Next we move on to the CSS,

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', Verdana, Georgia, 'Times New Roman', Times, serif;
}

body {
  background-color: #E4E3E3;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  padding: 1rem;
}

.logo h2 {
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 400;
}

.links a {
  text-decoration: none;
  color: #000;
  padding: 0 8px;
}

.links a:hover {
  text-decoration: underline;
  text-underline-offset: 8px;
}
```

Let's explain,

First we import the Roboto font. You can just copy what I wrote or you can yours via google fonts [here](fonts.google.com).
We apply the document reset. Telling the document to remove default margins padding and so on.
Next, we tell the document to use Roboto and we make the body greyish.

For our nav, we change the display to flex. This will allow it stay on a single row. Using flexbox, we then tell the document to leave a space between the two elements in the nav tag, and also to align these element at the center of one another. After this, we tell css to make this nav white, and also add a little padding.

For our logo, we are just increasing the font-size and reducing the font-weight. We are also make it all caps.
Note:- I used `h2` instead of `h1` for a reason. It is because crawlers take the h1 tag very seriously. It is recommended a site has just one per page, as whatever is on it will typically be used to describe the page.

For our links, we remove text-decoration and change the color to match the logo i.e. Black. We also add padding to each link to separate them.,
When the use hovers however, we want the link to be decorated. I decided to underline the link and make it 8px away from the text.

And that's how you build a Navigation bar with just html and css. Note that it isn't responsive yet. I will be working on that in a later post. Hope you enjoy :)
