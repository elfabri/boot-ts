## Vanilla Vite

Vite is a build tool that focuses on speed and simplicity.
It does a few key things that make it great for many projects,
and even vanilla TypeScript apps:

 * *Fast*: Vite uses the Golang-powered esbuild to do heavy lifting, which is partially why it's so fast. It also uses [Rollup](https://rollupjs.org) under the hood for production builds.

 * *Simple*: Vite is simple to use and configure, at least for a JS/TS tool (look, we're comparing it to Webpack here, so it's all relative).

 * *Server*: Vite has a built-in development server that serves your files and handles hot module replacement (HMR) for you.

 * *Compiler*: Vite compiles your code in development on the fly, so you don't have to manually rebuild each time you make a change.

### Assignment

1. Install Vite

```
npm i -D vite
```

2. Commit all your old code and delete it,
even the tsconfig.json and package.json files.
We won't need it where we're going, we want a clean slate.\*

3. Create a new Vite project using the vanilla TypeScript template:

```
npm create vite@latest . -- --template vanilla-ts
```

4. Install the dependencies:

```
npm i
```

5. Run the development server and take a look at the simple webpage it serves:

```
npm run dev
```

6. Notice that when you click the "count is x" button in the browser, the count increments.

7. Update src/counter.ts to increment it by 10 instead of 1 each time it's clicked.

Notice that when you update the code and save the file, Vite will automatically recompile your code and update the browser for you!

\* I decided to have both projects to compare more easily and because I already made a separated folder before reading the steps.

