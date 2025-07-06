## Double Assertion

TypeScript won't allow you to assert absolute nonsense:

```TypeScript
const num = 42;

// Error: Conversion of type 'number' to type
// 'string' may be a mistake because neither
// type sufficiently overlaps with the other.
const str = num as string;
```

We can get around this with a double assertion:

```TypeScript
const id = 42;

// This works - but is very unsafe!
const userId = id as unknown as string;

// Now TypeScript treats this as a string
console.log(userId.toUpperCase());
// Compiles, but still CRASHES at runtime!
```

It is a bad bad idea but it is still something that might be useful in some special way, but bad.

### Why is double assertion usually a bad idea?

Because you should have used OCaml anyways.
