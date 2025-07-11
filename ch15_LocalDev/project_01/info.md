## tsconfig

TypeScript is configured by a *json* file named tsconfig. It allows
a lot of configuration options that will determinate the way TS
handles some of the errors, the structure of the result of
compiling the program, and the versions of JavaScript that is going
to be used on that final result, and some other things.

### A simple tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["esnext"],
    "target": "esnext"
  }
}
```
where:

 * lib specifies the library files to include in the compilation.
 It's what APIs are available for us to use in our code.

 * target specifies the ECMAScript target version for the JavaScript output.

### Assignment 02

1. Create a new Node project
```
npm init -y
```

2. Add a tsconfig.json file to the root of your directory.

 * Set the lib and target to esnext

3. Create an index.ts file with following code

```TypeScript
function main(): void {
  const projectName = "support.ai";
  welcome(projectName);
}

function welcome(name) {
  return "Hello, " + name.toLowerCase();
}

main();
```

4. Run *tsc* to make sure it compiles. You should see a newly compiled *index.js* file.

## 03 More compiler options

From most to least:

 * lib: Add dom and dom.iterable (note: lowercase) to the list of libraries to allow all the browser APIs if you're writing front-end code.

 * strict: If true, enables all strict type checking options.

 * skipLibCheck: If true, skips type checking of all declaration files (which means it won't try to type check your infinitely large node_modules folder). Drastically speeds up compilation time.

 * verbatimModuleSyntax: If true, simplifies some weirdness with importing and exporting types, basically it forces you to import and export types using the import type syntax.

 * esModuleInterop: If true, allows you to use import syntax with CommonJS modules. Very useful if you need to work with CommonJS (Node) code.

 * moduleDetection: If set to force, will consider everything to be a module, which is what you want in any new project.

 * noUncheckedIndexedAccess: If true, adds undefined to the type of any indexed access, which can prevent some runtime errors.

### Assignment 03

1. Add all the recommended tsconfig options above

2. Try to compile your code with tsc - it should fail now!

3. Change your main function to console.log the message returned by welcome.

4. Fix the code to pass the strictness check, and ensure it compiles


## 04 Declaration Files

*.d.ts* files are declaration files. They only contain type information - no runtime code is allowed. They're very useful for defining the types for JavaScript code that exists in your app, but that doesn't have any type information.

### Assignment 04

Support.ai started off as a vanilla JavaScript shop (ew), and not all legacy code has been ported over. Let's work around that.

1. Create an index.html file at the root of your project. Add the provided html code

2. Add the provided Js code to a file named *legacy.js*

3. Update the *index.ts* with the provided code.

TypeScript should now be complaining that supportAI doesn't exist on Window.

4. Create a global.d.ts file that adds the correct type for window.supportAI. You might need to export an empty object from the file so that TypeScript recognizes it as a module.

5. Compile your project with *tsc*

6. Serve your project over *localhost* to avoid CORS errors, then:

```
npx http-server .
```

7. Open the server URL in your browser and click the button. You should see a Auto-reply enabled. alert.

## 05 Using JS Libraries

Sometimes you need to install random js libraries that do not come with any type definitions.

The options to handle this are:

    1. Allow the *any* types to flow through your code.

    2. Create your own type definitions.

    3. Check "DefinitlyTyped" and see if they have definitions for the library

DefinitelyTyped is a community-driven repository of type definitions for popular JavaScript libraries.

### Creating Your Own Type Definitions For An Existing JS Library

With Declaration Files, you can declare modules with the name of things used in the library, and TypeScript is going to use these declarations when you import said library.

For internal modules, you just need a declaration file where you just export the types.

### Assignment 05

You're importing a JavaScript module written by one of the more creative engineers at Support.ai.
The runtime works fine, but TypeScript has no idea what this module exports.
Time to write your own declaration.

1. Create a new *chats.js* file in your project with the code provided.

2. Update your *index.ts* to import and use the module provided.

3. Create a file named chats.d.ts in your project root.
Inside it, declare the module’s shape and export it.

4. Compile your TypeScript code.

5. Serve your project with a local dev server.

6. Open the server URL in your browser.
Open your developer tools and check the console.
You should see something like

```
LOG: 2023-01-01T12:00:00Z | Mom, I need the doritos
chats.js:3 LOG: 2023-01-01T12:02:00Z | MOOOOOOOOM I really need the doritos
```

## 06 TypeScript Language Server

Your editor tooling and your build tooling are separate.
If your editor is using TypeScript 4 and one tsconfig.json file,
but your build tooling is using TypeScript 5 and another tsconfig.json file,
you can run into scenarios where your editor and what's being compiled
in production are out of sync. *Keep them in sync*.

### Assignment 06

Let's pin the version of TypeScript used in our moonshot proof of concept AI Support site.

1. Install TypeScript as a developer dependency:

```
npm i -D typescript
```

## 07 TypeScript Ignore

Comments with *@* can be used to tell the compiler how to behave in certain places, with 
certain values, functions, etc. some of this comments only affect the next line, some others
are file-wide.

 * To ignore the next line's errors: *@ts-ignore*

 * To disable type checking for the entire file: *@ts-nocheck*

### Assignment 07

Management at Support.ai is sick of maintaining the global.d.ts file
for the Window.supportAI type. They've decided it's better
to just add @ts-ignore... who needs good developer experience anyway?

1. Delete the global.d.ts file.

2. Try to compile your code. It should error.

3. Add a @ts-ignore comment to the one line that's erroring. *Don't ignore the entire file*.

4. Try to compile your code again, it should "work".
