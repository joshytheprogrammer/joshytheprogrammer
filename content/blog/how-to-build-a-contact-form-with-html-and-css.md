---
title: How to build a simple contact form using HTML and CSS
description: In this tutorial, I will walk you through building a form in html and styling it with css.
imgLink: https://res.cloudinary.com/dsgvwxygr/image/upload/v1656161543/blog/css-blog-form-1-image_fqsbri.png
alt: image of form we built with css
---

One of the things that will come up often during your programming journey is form building. Building forms with html and css can seem daunting as a beginner, but practice makes perfect and the more you do something, the better you get at doing it.

Today, we will be working on a building a contact form using html and css. There will be no JavaScript involved and I will try to break the css down as much as possible. I have this code on [GitLab](https://gitlab.com/joshytheprogrammer/jtp-css-blog-form-1), feel free to fork it but be sure to give it a star while you do.  Let's get started.

Below, I have an image of what we will be building.
![Image of my html and css form](https://res.cloudinary.com/dsgvwxygr/image/upload/v1656161543/blog/css-blog-form-1-image_fqsbri.png)

First, lets scaffold our html default structure in vscode. We do this by typing `html:5` and then pressing either `tab` or `enter`. If you are not using vscode, copy the the code below.

```html
<!DOCTYPE  html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
<title>Simple Html and Css Form with JTP</title>
</head>
<body>

</body>
</html>
```

Next, create the CSS file, and link it to the html. Mine is called `style.css`

```html
<link rel="stylesheet" href="style.css">
```

Let's reset the defaults on our web document. In your CSS remove extra margins and paddings. We also need to set our box-sizing to border-box, this makes it easier to adjust the width and heights of elements later on.

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```

First thing we notice is that the background of our document is somewhat greyed out. The color used is, `#E4E3E3` in hex code.
To achieve this grey color on our document, add the following code.

```css
body {
	background-color: #E4E3E3;
}
```

This tells the browser to grey out the body of our document.
Next is the white stuff. I define it to be a container that houses our form. In your html, create a `div` with a class of container.  Like so:

```html
<div class="container">

</div>
```

Our CSS for this will be simple, we change the background color of the container to white, and we add a border radius of 10px.

```css
.container {
	margin: 2rem auto;
	padding: 1rem;
	width: 900px;
	height: 700px;
	background-color: #fff;
	border-radius: 10px;
}
```

I defined the width and height so that the container can show properly. The padding gives us an internal spacing of 1rem. Feel free to edit any of this to whatever suits your needs.

Next up, the heading. It says, contact form. This will be a simple `h1` element. Before we do this, lets add the Roboto font. I will be doing so with CSS.

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

html {
	font-family: 'Roboto', Verdana, Georgia, 'Times New Roman', Times, serif;
}
```

Now we can say,

```html
<h1>Contact Form</h1>
```

Let's center it:

```css
.container h1 {
	text-align: center;
}
```

Now for what you've been waiting to here, copy and paste the html code below to get the form.

```html
<form class="form">
	<div class="form-group">
		<label for="name">full name *</label>
		<input type="text" class="form-control" name="name">
	</div>
	<div class="form-group w-md">
		<label for="email">email *</label>
		<input type="text" class="form-control" name="email">
	</div>
	<div class="form-group w-md r">
		<label for="phone">phone number *</label>
		<input type="text" class="form-control" name="phone">
	</div>
	<div class="form-group">
		<label for="services">needed services *</label>
		<select class="form-control" name="services">
			<option value="">Web Design</option>
			<option value="">Printing</option>
			<option value="">Graphic Design</option>
		</select>
	</div>
	<div class="form-group">
		<label for="messages">message *</label>
		<textarea class="form-control lg" name="" id="" cols="30" rows="10"></textarea>
	</div>
	<button type="submit">Submit</button>
</form>
```

Now for the css,

```css
.form {
	width: 90%;
	margin: auto;
}

.form  .form-group {
	display: flex;
	flex-direction: column;
}

.form  .form-group  label {
	text-transform: uppercase;
	font-weight: 900;
	font-size: 10px;
	padding: 0.2rem  0  0.2rem  0;
}

.form  .form-group  .form-control {
	height: 48px;
	background: #ECECEC;
	color: #000;
	border: none;
	outline: 1px  solid  #D9D9D9;
	border-radius: 4px;
	padding: 0  0  0  0.2rem;
	margin-bottom: 1rem;
	transition: background  .2s  linear, outline .1s  ease-in-out;
	font-size: 16px;
	font-weight: 400;
}

.form  .form-group.w-md {
	width: 45%;
	display: inline-flex;
	justify-content: space-between;
}

.form  .form-group.w-md.r {
	float: right;
}

.form  .form-group.w-md  .form-control {
	width: 100%;
}

.form  .form-group  .form-control.lg {
	height: 10rem;
	padding: 0.2rem;
}

.form  .form-group  .form-control:focus {
	outline: 2px  solid  #000;
	background: #ECECEC;
}

.form  button {
	width: 100%;
	padding: 12px;
	color: #fff;
	font-weight: 500;
	font-size: 14px;
	cursor: pointer;
	background-color: #000;
	border-radius: 20px;
}

.form  button:hover {
	background-image: linear-gradient(rgba(66, 66, 66, 0.4) 0  0);
}
```

The `.form` style tells the form to only occupy 90% of its container, and also to center itself within the container.
The `.form-group` style tells the form display vertically all of its contents. This is what allows the input to come directly under the label and not beside it.
The `.w-md` class makes it so that all elements under the form-group display on the same line. This is done to make both the email and phone number display on the same line.
The `.r` class makes it so that the element float itself to the right. There are simpler ways to achieve this though.

And that's all. I'll give you an assignment though :- using media queries, make the form we have just built mobile responsive. I'll make a post doing just that soon so be on the look out.
