---
title: "All About Arrow Functions"
summary: "Arrow functions are introduced in ES6. It has easier syntax and unlike regular functions, it actually has lexical scoping which can be taken advantage off in certain situations"
publishedAt: "2021-12-29"
tags: ["JavaScript"]
image: ./hero.webp
---

Arrow functions are an alternative to regular functions in JavaScript. They have short and simple syntax. But they weren't designed just to have a shorter and simpler way to write functions. In this post, we will deep dive in to the logic and reasoning for introducting arrow functions in JavaScript. We'll also walk through examples on the way. Buckle up!
 

## 1. Functions in JavaScript

[Functions in JavaScript](/everything-you-need-to-know-about-js-functions) are created using the `function` keyword. You can also assign a function definition to a variable to create a function expression.

```js
// function declaration

function double(n) {
  return n * n
}

// function expression

const double = function (n) {
  return n * n
}
```

Arrow functions are function expressions but they don't use `function` keyword. Instead, they have the fat arrow syntax.

```js
// arrow function

const double = n => n * n
```

This way of creating functions comes with much simpler syntax. But more importantly, there is also a difference in how the scope gets implemented.

## 2. Scope

[Scope](/JavaScript-scope-an-easy-explanation) of a variable determines where the variable can be used. A variable declared in global scope can be used everywhere compared to a variable declared in function scope, which can be only used inside the function.

If you think vice-versa, a function has to be declared in the right scope to access the right variable. A function declared in global scope cannot access a variable declared inside an object.

### 2.1 Functions and scope

Regular functions in JavaScript defines its own scope depending on their invocation. The following function will be in global scope.

```js
function globalFunc() {
  console.log(this)
}

globalFunc() // Window
```

However, this one will be in object scope.

```js
const obj = {
  meth: function () {
    console.log(this)
  },
}

obj.meth() // Object
```

The difference is that one was invoked as a normal function while the other was invoked as a method. This becomes a problem when you have a situation like this:

```js
const obj = {
  meth: function () {
    console.log(this)
    function hello() {
      console.log(this)
    }
    hello() // Window
  },
}

obj.meth() // Object
```

Here, we have a function `hello` that is invoked inside a `method`. However, since the function `hello` was invoked normally, it ends up in global context. This becomes an issue when we have to use variables defined inside the object.

```js
const obj = {
  name: "Mike",
  meth: function () {
    console.log(this)
    function hello() {
      console.log("My name is " + this.name)
    }
    hello() // My name is undefined
  },
}

obj.meth() // Object
```

Since the function `hello` has global scope, `this` represents `Window` object. So the value of `name` is undefined.

To overcome this, we can use solutions like `bind()` (or arrow functions, which will discuss in a while).

```js
const obj = {
  name: "Mike",
  meth: function () {
    console.log(this)
    function hello() {
      console.log("My name is " + this.name)
    }
    const bindedHello = hello.bind(this)
    bindedHello() // My name is Mike
  },
}

obj.meth() // Object
```

For the uninitiated, `bind()` method is used to bind a function to a scope. In the above case, we binded function `hello` to scope of `obj` which is the value of `this`. Now the `bindedHello()` is being executed inside the `obj` scope. So variable `name` has value Mike.

This might look like a straight-forward solution, but as the code gets complex, it becomes immensely difficult to predict the value of `this`. There will also be a swarm of confusion on which method is appropriate - bind, call, or apply. There is also a reduced performance associated with the `bind()` method.

In the end, these are all work arounds to an obvious solution - _lexical scoping_.

### 2.2 Lexical scope

Lexical scoping is simply inheriting the scope of your parent along with your own scope. In the above case, if the function `hello` had lexical scoping, it would have object scope instead of window scope. So, the big deal about arrow functions is that it comes with lexical scoping.

```js
const obj = {
  name: "Mike",
  meth: function () {
    console.log(this)
    const hello = () => {
      console.log("My name is " + this.name)
    }
    hello() // My name is Mike
  },
}

obj.meth() // Object
```

So arrow functions cannot change the value of `this` depending on how they're invoked. It inherits scope of its parent. In the above case, function `hello` inherited scope from `meth`. Since `meth` has object scope as it was invoked as a method, so will function `hello`.

On the flip side, you cannot use arrow functions as methods for the same reason.

```js
const obj = {
  meth: () => {
    console.log(this)
  },
}

obj.meth() // Window
```

Since arrow functions does not have the ability to define its own `this`, it doesn't matter whether it was invoked as a method in the above case. It will always inherit the scope of parent. The parent here is `obj` which is in window scope.

## 3. Arrow functions

Now that we learned the big deal about arrow functions is that it comes with lexical scoping, let's dig a little deeper.

Arrow functions have deliberate limitations,

- It cannot have binding to `this` or `super` (due to lexical scoping)
- `bind`, `call`, and `apply` methods doesn't work as intended as they cannot establish a new scope
- Cannot be used as constructors. Constructors use the `new` keyword to create new instances. It is not possible to create a new instance of an arrow function when you cannot actually change the scope.
- Host of other related limitations.

### 3.1 When to use arrow functions?

Arrow functions are very limited in nature but there are instances where this limitation can be a gift. We already saw that we can use arrow functions inside a method without loosing scope. So here are few instances where you should be using arrow functions instead of regular ones.

**1. When it offers simpler syntax**

```js
// regular function

function double(n) {
  return n * n
}

// arrow function

const double = n => n * n
```

In the above case, there is no need to go for the longer, less-readble syntax when you can just get away with the arrow function. Note that unlike regular function declaration, arrow functions does not have [hoisting](/javascript-hoisting-eloquently-explained).

**2. Inside array methods**

```js
const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(n => n * 2)

console.log(doubled) // [2, 4, 6, 9, 10]
```

Using arrow functions inside array methods make our lives far easier. The code typically remains in a single line maximizing readability.
