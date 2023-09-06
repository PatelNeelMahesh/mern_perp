# React

## Client-Server Architecture

We have created applications up to this point that used HTML pages that the server supplied. In other words, the server returned an HTML page in response to each URL request made by the browser.

When building simple websites, this method works well, but every time a user clicks a link or needs to view or send data, the entire page must be refreshed, slowing down user interaction.

<img src="https://www.mindk.com/wp-content/uploads/2017/12/Traditional-page-lifecycle-8-560x315.png"/>

A superior strategy has recently become more popular.

Now, applications consist of two parts:

## Frontend:

Frontend (also known as client-side) is a component that offers a user interface, manages user input, and uses APIs to connect to the backend.

- Client-Side
- Users typically see an interactive interface.

The primary difficulty a front-end developer has is the website's ongoing evolution. They guarantee that the same website will display properly across various browsers, operating systems, and gadgets.

## Backend:

APIs are provided by the backend (also known as the server side), which no longer renders HTML for client applications.

By being closer to or having the ability to interface with the essential resource, a "backend" application or software indirectly supports and offers frontend services. Typically, the application's backend will manage information retrieval from the database (or other storage location) and transmission to the frontend so that the frontend interface can display the information in some fashion (although sometimes the transmission of this info is handled by yet another intermediate program)

## Single Page Applications (SPA)

Single-page applications are frequently created using this client-server architecture. The majority of a user's interactions with a web application take place on a single page, or SPA (single page application).

<img src="https://www.mindk.com/wp-content/uploads/2017/12/SPA-page-lifecycle-560x315.png" />

All of the views that we require for our entire application, loading data from the back-end, will be on this page (Node API).

Since we may load numerous views into it, the most noticeable difference between a standard website and an SPA is the decreased amount of page refreshes.

Twitter, Gmail, and Facebook are a few SPA examples.

There will be only one HTML page in our React application, typically called index.html. In response to user navigation, the framework will then dynamically load HTML code (templates).

## Framework

A software framework is a common, reusable software environment that makes it easier to construct software products, solutions, and applications.

The framework may include Support programs, Compilers, Code libraries, Toolsets, APIs (Application Programming Interfaces).

A web application framework created in JavaScript is known as a JavaScript framework.

## Why JavaScript Frameworks & Libraries are important?

It provides details on the application's structure. It offers the developer a technique to structure the code to increase the flexibility and scalability of an application.

You may be familiar with other frameworks, such as the Node.js framework Express. Using React, we will learn how to build the client side of the application in this module. The debate over whether React is a framework or a library is still very contentious. It is difficult to draw a line and choose one over the other because React takes the best of both worlds. Let's go over some of the essential characteristics of libraries because we previously highlighted some of the important ones of frameworks:

Using a library gives developers more freedom, but it also means more responsibility for designing the entire system and app flow, as well as carrying more risk. One library can be combined with multiple other libraries, whereas that is not the case with frameworks — it's almost impossible to have two frameworks combined on the same app.

# Introduction to React

According to its official definition, React is a free JavaScript library used to create user interfaces for Single Page Applications (SPA). It manages the view layer for both online and mobile applications.

Reusable UI components may also be made using React. Jordan Walke, a software engineer for Facebook, developed it at first. In 2011 and 2012, Facebook's newsfeed and Instagram.com both used React for the first time.

One of React's primary advantages is that it enables programmers to build sizable web applications that can modify data without refreshing the browser. React's primary goals are to be quick, scalable, and easy to use. It only functions with the application's user interfaces.

## React Features

### Declarative:

Interactive user interfaces may be easily made with React. React will effectively update and render the appropriate components as your data changes if you provide straightforward views for each state in your application. Declarative views improve the predictability and debuggability of your code.

### Component-Based:

Create state-managing, encapsulated components, then combine them to create intricate user interfaces. You can simply transmit rich data through your app and keep state off of the DOM because component functionality is written in JavaScript rather than templates.

### JSX:

React uses JSX for templating rather than standard JavaScript. JSX is an object-oriented, statically-typed programming language created for use with contemporary web browsers. Basically, JavaScript is a simple language that supports HTML quoting and renders components using HTML tag syntax. React Framework JavaScript calls are generated from HTML syntax. Don't worry; we will investigate this further later.

### React Native:

Facebook announced React's native libraries in 2015, bringing the React architecture to native apps for iOS and Android.

### Single-Way data flow:

In React, a collection of immutable values are sent as properties in the HTML tags of the component to the renderer. Components cannot alter any properties directly, but they can send a callback function to which we can make changes. The entire process can be summed up by the phrase “properties flow down; actions flow up”.

### React Installation using CDN

CDN: One method for including React on your system. You can go through this article for a better understanding.

Article: https://www.copycat.dev/blog/reactjs-cdn/

Note: Try practically implementing the step by step approach for React installation using CDN in the above article.
