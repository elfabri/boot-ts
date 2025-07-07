## TypeScript Public and Private

JavaScript's # private fields didn't come until ES2022, but TypeScript developers had wanted public/private/protected access modifiers for a long time, so TypeScript added support for private and protected before then. So a lot of older TypeScript code uses the keyword syntax which is using "private" instead of '#' and "protected" instead of "private" when you need it to be protected instead.

### Which Syntax Should I Use?
The only reason TypeScript-specific syntax exists is because JavaScript didn't have the # syntax until ES2022. I recommend using the JavaScript # syntax because it's the JavaScript native way to do it. Remember, TypeScript is basically just tools for writing type-safe JavaScript, so conforming to JavaScript standards is the long-term play.

It is recommend using the TypeScript specific syntax if you need to target an older version of JavaScript that doesn't support the # syntax yet.
