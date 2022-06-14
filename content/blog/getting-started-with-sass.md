---
title: Getting started with Sass
description: In this tutorial, I will teach you the basic of sass (scss)
imgLink: https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80
alt: image on getting started with sass
---

SASS stands for **Syntactically Awesome Stylesheet** and it is a preprocessor for CSS that lets you use additional features in your CSS stylesheets. It automatically compiles your .**scss** files into **.css** files for the browser to read. Some of these features include:- variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.
Learn more about sass [https://sass-lang.com/](https://sass-lang.com/)

Today, I will be teaching you how to use SCSS in your html application. I have previously taught you [how to use SCSS with Nuxt](https://www.joshytheprogrammer.com/blog/using-sass-with-nuxt).

## Table of contents:-

1. Installations
2. Setting up scss with vscode -installing extensions and so on
3. Usage

 For our usage, we will focus on the following:-

- Variables
- Rule Nesting
- Sass @import
- Sass @mixin
- Sass @extend

This is probably all you will use sass for. If you want to learn more, I encourage you to check out the [sass-documentation](https://sass-lang.com/)

## Installations

In order to use scss in our application, we have to install sass on our computer.
To do this, run the following code in your vscode terminal, this should install sass globally.

`npm install -g sass`

## Setting up scss with vscode

Browsers don't understand scss, so it need to be compiled down to basic css. To do this, we will enlist the help of a wonderful vscode extension. *Note: I am working with vscode here.*

1. Live Sass Compiler (details below):- This extension will allow us compile our SCSS down to regular CSS.

```js
Name: Live Sass Compiler
Id: ritwickdey.live-sass
Description: Compile Sass or Scss to CSS at realtime with live browser reload.
Version: 3.0.0
Publisher: Ritwick Dey
VS_Marketplace_Link: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass"
```

We will apply the following settings to the extension (in the `settings.json` :-

```json
"liveSassCompile.settings.formats":  [
    {
    "format": "expanded",
    "extensionName": ".css",
    "savePath": './dist/css'
    }
]
```

With these extensions configured, the extension will automatically generate a `dist/css/` path and place your compiled CSS in it.

You can find more of the extensions configurations here ->  [live-sass-compiler-settings](https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md)

## Usage

Let's walk through scss :)

### Sass variables

A variable is a store of information. It provides a container in which we can place values.

Syntax:
`$variableName: value;`

The `$` tells the compiler that the text that precedes it is a variable.
The `value` is what you wish to store.

You can use variables to store fonts, colors, sizes, and so on

```scss

$myFont: 'Poppins', Georgia;
$myColor: #000;
$mySize: 480px;

```

Variables are defined primarily at the top of your scss file or in a `variable.scss` dedicated file.

### Rule Nesting

Sass lets you nest css rules in a way that makes code more readable and enjoyable.

#### SCSS

```scss
    nav {
        height: 72px;
        width: 100%;
        background-color: transparent;
        
        .logo {
            width: 72px;
            height: 72px;
        }
    }
```

#### Basic CSS

```css
nav {
    height: 72px;
    width: 100%;
    background-color: transparent;
}

nav .logo {
    width: 72px;
    height: 72px;
}
```

Sass compiles your code with nested rules, down to normal css that browser can understand.

Also, this is one I learnt recently. We can also nest CSS properties, for example :-

#### In SCSS

```scss
h1 {
    font: {
        family: sans-serif;
        weight: 400;
        size: 14px;
    }
    text: {  
        align:  center;  
        transform:  lowercase;  
        overflow:  hidden;  
    }
}
```

#### In CSS

```css
h1 {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;  
    text-transform: lowercase;  
    text-overflow: hidden;
}
```

That's insane :) In my opinion,  SCSS is CSS with superpowers

### SASS @import

SCSS emphasizes DRY (Don't repeat yourself). One way to not repeat yourself is to break down each element of your code into separate files and then import them at build time. Like CSS, SCSS also supports the `@import` statement.

Your import statement should follow this structure,
First, create an scss file called, `_variables.scss` .
And then in your main SCSS,

```scss
@import "variables";
```

The `_` tells sass not to generate a new css file called `variables.css` instead, it imports all the sass code from your variables file to your main file.

You do not need to specify the file extension.

### Sass @mixin

Sass mixins allow you to create css code that can be re-used throughout your website. It is created using the `@mixin` directive.

```scss
@mixin name {
    property: value;
    property: value;
}
```

To use this mixin, we use the `@include` directive

```scss
selector {
    @include name; // Where 'name' is the name of the mixin;
}
```

### Sass @extend

The `@extend` directive lets you share css rules from one selector to another. This best demonstrated by an example:-

```scss
.btn {
    border:  none;  
    text-align:  center;  
    font-size:  16px;  
    cursor:  pointer;
}

.btn-danger {  
    @extend .button-basic;  
    background-color:  red;  
}

.btn-warning {  
    @extend .button-basic;  
    background-color:  yellow;  
}

```

After compilation, your css will be :-

```css
.btn, .btn-danger, .btn-warning {
    border:  none;  
    text-align:  center;  
    font-size:  16px;  
    cursor:  pointer;
}

.btn-danger {  
    background-color:  red;  
}

.btn-warning {  
    background-color:  yellow;  
}
```

That's SCSS, thank you for reading till the end.
