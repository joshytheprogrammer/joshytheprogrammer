---
title: How to get integrate sass (scss) into Nuxtjs
description: For Nuxtjs developers who want to use sass in their next Nuxt project
imgLink: https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80
alt: image on Nuxtjs and Sass
---

Today, we are going to learn how we can work with sass in our Nuxtjs application. Its actually very easy so we'll go straight to the point.
First off  **what is sass?**

Sass is a CSS preprocessor, which adds special features such as nested rules and mixins into regular CSS. The syntax used in Sass is called SCSS.

## Installations

In order to get Sass to work with Nuxtjs, we will need to install the following packages.
*I'm assuming you've already installed Nuxtjs*

1. Style Resources.
2. Sass
3. Sass loader version 10 ( the latest version causes a conflict. )

**Note:-** *We will be using NPM for this tutorial.*

   `npm i @nuxtjs/style-resources sass sass-loader@10`

Once all the packages have successfully been installed, we can move on to the next step:

## Configuration

Before we can start using sass we need to setup a few more things, let's configure the `style resources` package in our `nuxt config`
**Note:-** *I'm assuming you use Nuxtjs with JavaScript not TypeScript.*

```js

buildModules: [
    '@nuxtjs/style-resources'
],

styleResources: {
  scss: [
    '@/assets/scss/app.scss',
    '@/assets/scss/mixins.scss'
  ],
  hoistUseStatements:  true,
},

```

As you can see, we are telling Nuxt where the base of our sass files will be. I placed mine in the `scss` section of the  `assets` folder I created. The `app.scss` file is typically where I place universal configurations such as colors and viewport definitions. Take a look at the `app.scss` file of one of my nuxt apps:

```scss
// Color Pallete

$light:  #F5F5F5;
$dark:  #0A0A0A;
$success:  #85CB33;
$warning:  #D78521;
$danger:  #CC2936;

// Viewport Sizes

$small:  728px;
$mediumDesktop:  900px;

html,
body  {
  background: $light;
  overflow-x: hidden;
}

```

The `mixins.scss` file is how I add mix-ins.
**Note:-** *You don't have to add the mix-in file. Do so only if you want to add mixins*

Once you've done all this, you can then begin to use

```jsx
<style lang="scss" scoped>
.blog  {
  width:  90%;
  margin:  0 auto;
  padding:  1rem;
}
</style>
```

## Some difficulties I encountered

1. **Errors when importing fonts:-** I remember at some point while using scss with nuxt, I realized I couldn't use the `@import` statement in scss. I never really found the solution to this problem, only a workaround.
**Solution**
 Basically, you handle font import in CSS and then link it in your nuxt config, that solved the problem for me.
 **Note:-** *This problem doesn't just arise in fonts, it can actually arise from any universal declaration. No matter the case, the solution is pretty much the same.*

That's all. Thanks for reading all the way to the end.
