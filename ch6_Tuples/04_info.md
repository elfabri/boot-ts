## Destructuring Tuples

A tuple, along with destructuring, is a handy way to return positional data.

```TypeScript
function getName(fullName: string): [string, string] {
  const parts = fullName.split(" ");
  return [parts[0], parts[1]];
}

const [firstName, lastName] = getName("Frodo Baggins");
```

You can also destructure nested tuples and objects all at once. For example:

```TypeScript
type UserWithAddress = [string, { city: string; country: string }];

const userData: UserWithAddress = [
  "Aragorn",
  { city: "Minas Tirith", country: "Gondor" },
];

const [userName, { city, country }] = userData;
```
