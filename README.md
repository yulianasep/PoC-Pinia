# POC DE PINIA

## Table of Contents

1. [Introduction](#introduction)
2. [Project Setup](#project-setup)
3. [Folder Structure](#folder-structure)
4. [Dependencies](#dependencies)
5. [Getting Started](#getting-started)
6. [Creating a Store with Pinia](#creating-a-store-with-pinia)

## **Introduction**

This Proof of Concept (POC) is aimed at showcasing the usage of Pinia in a web application. Pinia is used as the state management library. For this proof, we gonna build a simple store of products with different actions from the components.

## **Project Setup**

To set up a project using Pinia, you have to install the dependency by the following command

```bash
bun install pinia
```

Then, you have to Create a pinia instance (the root store) and pass it to the app as a plugin:

```ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
```

## **Folder Structure**

The folder structure of this project ...

## **Dependencies**

- Pinia
- Bun
- TypeScript
- Vue 3
- Vite

## **Getting Started**

### **Run the project**

In the system terminal run the following commands:

Clone the repository:

```bash
git clone ...
```

Change to the project directory:

```bash
cd PoC-Pinia
```

Install the dependencies:

```bash
bun install
```

Run development server:

```bash
bun run dev
```

Build the project:

```bash
bun build
```

## **Creating a Store with Pinia**
