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

### Assignment 01

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

## 02 More compiler options

From most to least:

 * lib: Add dom and dom.iterable (note: lowercase) to the list of libraries to allow all the browser APIs if you're writing front-end code.

 * strict: If true, enables all strict type checking options.

 * skipLibCheck: If true, skips type checking of all declaration files (which means it won't try to type check your infinitely large node_modules folder). Drastically speeds up compilation time.

 * verbatimModuleSyntax: If true, simplifies some weirdness with importing and exporting types, basically it forces you to import and export types using the import type syntax.

 * esModuleInterop: If true, allows you to use import syntax with CommonJS modules. Very useful if you need to work with CommonJS (Node) code.

 * moduleDetection: If set to force, will consider everything to be a module, which is what you want in any new project.

 * noUncheckedIndexedAccess: If true, adds undefined to the type of any indexed access, which can prevent some runtime errors.

### Assignment 02

1. Add all the recommended tsconfig options above

2. Try to compile your code with tsc - it should fail now!

3. Change your main function to console.log the message returned by welcome.

4. Fix the code to pass the strictness check, and ensure it compiles

