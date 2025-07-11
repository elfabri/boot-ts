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

### Assignment

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
