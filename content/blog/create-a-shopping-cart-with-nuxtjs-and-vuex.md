---
title: How to create an e-commerce shopping cart using Vuex in Nuxtjs
description: In this tutorial, we will create and implement cart functionality in Nuxtjs using Vuex - state, mutations, actions and getters. 
imgLink: https://res.cloudinary.com/dsgvwxygr/image/upload/v1658579757/blog/Cart_with_Nuxtjs_g1xti6.png
alt: image-how-to-create-shopping-cart
---


Let's build a shopping cart. Here is what the site will look like when we finish. ![Image of finished product](https://res.cloudinary.com/dsgvwxygr/image/upload/v1658580335/blog/finished-post-cart-blog_z54ddd.png)
You can see the finished product on GitLab [here](https://gitlab.com/joshytheprogrammer/nuxt-shopping-cart).
I truly do hope that this project will be of use to you in some way or another. Even if it only makes you love and appreciate Nuxtjs more, it would have been worth it.

Here is what you will learn today,

 1. How to implement "add to cart" functionality with Vuex - state, actions and mutations.
 2. How to delete an item from cart.
 3. How to remove cart duplicates.
 4. How to make these cart array persist after reload.

I will not bother with css much today, just some basic stuff. I will assume you have a product with [ id, name, and price ]. A button that says "add to cart". And a frontend view of the shopping cart. Let's get started.

## Creating the 'add to cart' feature with Vuex

In your `store` folder, create an `index.js` folder and delete the `Readme.md` file. This will initialize Vuex. Copy and paste the following code into it.

```js
export  const  state  = () => ({

})

export  const  mutations  = {

}

export  const  actions  = {

}

export  const  getters  = {

}

export  const  modules  = {

}
```

Create a new state called cart. It should be an array like so
`cart: []`. This cart array will hold all your cart items.

Next, you want to create a new mutation. This will be called `ADD_ITEM` and it will accept two parameters, `state` and 	`payload`.  Like so:

```js
ADD_ITEM(state, payload) {

}
```

The work of this function is simple, it accepts an item as `payload` and pushes it to the cart. To implement this, add the following code `state.cart.push(payload)`.
That's all, we have created the add to cart feature.

It's bad practice to call a mutation directly, its better we call it from an action. That's why we want to create the add item `action`. It should accept two parameters. The first is the `commit` and the second is the payload or in our case the `item`.

> Please note that the commit should be de-structured.

This action will simply commit the `ADD_ITEM` mutation.
Like so:

```js
addToCart({ commit }, item) {
	commit('ADD_ITEM', item)
}
```

Now, all that remains is to dispatch the action from the frontend. In your frontend, call the add to cart action.

```html
<button @click="addItem(product)"> Add to Cart </button>
```

```js
addItem(product){
	this.addToCart(product)
}
```

Please note that I have a method in my index page called `addItem`. It is that method that dispatches the action `addToCart`.

That's it, we have created the `addToCart` functionality. Please note that if you want to see the `cartItems` at this stage, you must add the following code to your `ADD_ITEMS` mutation => `console.log(state.cart)`. Here is how it looks in the console
![Image from console](https://res.cloudinary.com/dsgvwxygr/image/upload/v1658572121/blog/how-it-should-look-console-cart-blob-post_udnrm6.png)

Our `index.js` store looks like this:

```js
export  const  state  = () => ({
	cart: []
})

export  const  mutations  = {
	ADD_ITEM(state, payload) {
		state.cart.push(payload)
		console.log(state.cart)
	}
}

export  const  actions  = {
	addToCart({ commit }, item) {
		commit('ADD_ITEM', item)
	}
}
```

## Deleting cart item with Vuex

Create a new mutation called `DELETE_ITEM`. In order to delete an item from cart, we need two things:

1. ID of the item
2. Location of item in array

As for the id of the item, we will send that to our `action` from the client. It will be received as the payload, we use this payload to search for the item in the array. Once we have found it, we get its location, then slice that item out of the array. Its simple, I promise, just three lines of code :

```js
DELETE_ITEM(state, payload) {
	let item  = state.cart.find(p => p.id === payload)
	let index = state.cart.indexOf(item)
	state.cart.splice(index, 1)
}
```

The `item` is the unique item we wish to delete. The `index` is the location of that item in the array. Then the JavaScript splice function removes that `item` based on the `index` we give it.

## How to remove cart duplicates

You will notice that as of now, if a user clicks the add to cart button twice, it adds that item to the cart array two times. This is unacceptable. We want the cart to contain unique items only. To achieve this, we just need to modify our `ADD_ITEM` mutation.
Before we push our product to the cart array, we must first search that array to make sure the item isn't already there. If it is there, we do nothing. If it isn't, we add the item to the array. Your mutation should look like this:

```js
ADD_ITEM(state, payload) {
	let  inCart = state.cart.find(p => p.id === payload.id)

	if(!inCart) {
		state.cart.push(payload)
	}else {
		console.log("Item already added")
	}
},
```

## How to make these cart variables persist after reload

For now, whenever we reload our web page, the entire cart disappears. That is obviously not what we want. We want it to persist even after the user closes the app and returns later on. To achieve this, we will be working with the local storage API. Essentially whenever a new item is added or removed from the cart, we update the cart variable in local storage.
To achieve this, add the following code to the end of each mutation. Remember, whenever the cart array is updated, run this code.

```js
localStorage.setItem('cart', JSON.stringify(state.cart))
```

Lastly, we have to make it that whenever before the page loads, we populate the state array with the items in local storage.

First, create a new mutation called `INITIATE_CART`

```js
INITIATE_CART(state) {
	if(localStorage.getItem('cart')){
		state.cart  =  JSON.parse(localStorage.getItem('cart'))
	}
}
```

In your component, call this function in the `beforeMount()` hook.

```js
beforeMount() {
	this.$store.commit("global/cart/INITIATE_CART")
}
```

That's it. We have successfully created and implemented basic cart functionality in our web page. Now whenever the user the page reloads the cart will remain. If you learnt something, feel free to share it with friends. You can also follow me on twitter and ask questions there.
