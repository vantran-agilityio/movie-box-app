# React Practice

## OVERVIEW

- This document provides a detailed estimate of the React practice. This practice creates a Movie Box App with goals that I can apply Next.js knowledge.

## TIMELINE

- Estimate time: **7 days (2022/04/08 - 2022/08/10)**

## TEAM SIZE

- 1 developer:
  - [Van Tran](van.tran@asnet.com.vn)

## TARGETS

- Apply Multi-pages
- Apply Slug
- Apply API Routing
- Apply next/link
- Apply next/image

## TECHNICAL STACK

- Next.js: Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
- React/React hooks: Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.
- TypeScript: TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- HTML/CSS
- [Mockapi](https://mockapi.io/): MockAPI is a simple tool that lets you easily mock up APIs, generate custom data, and preform operations on it using RESTful interface. MockAPI is meant to be used as a prototyping/testing/learning tool.
- Axios: Axios is a promise-based HTTP Client for node.js and the browser.

## REQUIREMENT DETAILS

- Read more detail requirement in [here](https://docs.google.com/document/d/1EMusyZLScN4POSMZO7hh8WOhflCAjUpjdtanIeFusHg/edit?usp=sharing).

## ENVIRONMENT

- Windows

## EDITOR

- [Visual studio code](https://code.visualstudio.com)

## DIRECTORY STRUCTURE

```
├── .husky
├── node_modules
├── public
└── src
    ├── style
    ├── components
    │   ├── Button
    │   ├── Card
    │   ├── Text
    │   ├── TextField
    │   ├── Title
    │   ├── Filter
    │   ├── Icon
    │   ├── Form
    │   ├── Banner
    │   ├── Tabs
    │   └── SearchBox
    ├── constants
    ├── helpers
    ├── services
    ├── layouts
    │   ├── Header
    │   ├── Footer
    │   └── Main
    ├── models
    ├── pages
    │   ├── login
    │   └── movie-detail
    └── utils

```

## GET STARTED

- Clone project:

  ```bash
  $ git clone git@gitlab.asoft-python.com:van.tran/react-training.git
  ```

- Checkout branch:

  ```bash
  $ git checkout develop
  ```

- Change directory:

  ```bash
  $ cd movie-box-app
  ```

- Install packages:

  ```bash
  $ pnpm i
  ```

- Start project

  ```bash
  $ pnpm dev
  ```

- Open browser and and type http://localhost:3000 in address bar
