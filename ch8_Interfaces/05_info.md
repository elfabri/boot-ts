## Declaration Merging

When there are several interfaces declared with the same name,
all of them are merged into a unique interface with
all the properties.

This:

```TypeScript
interface Spaceship {
  name: string;
}

interface Spaceship {
  engines: number;
}

interface Spaceship {
  lightSpeed: boolean;
}
```

is the same as this:

```TypeScript
interface Spaceship {
  name: string;
  engines: number;
  lightSpeed: boolean;
}
```

It is not possible to override properties that have already been declared.

Types are different since they can not be redeclared.
