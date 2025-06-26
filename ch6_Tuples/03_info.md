## Tuples vs Objects

Tuples are semantically ordered, ideal when the number and order of elements matter.

They are also destructuring-friendly, which makes them especially useful in patterns like React hooks.

Objects have named properties, which you can use to label the data clearly and can improve readability and maintainability. The structure is flexible, properties can be optional, unordered and you can extend it later. Objects are great for APIs and configs.

Ex. distances of segments in a path:

As a tuple:
```TypeScript
    type Distances = [ number, number, number ];
```

As an object:
```TypeScript
    type Distances = { first: number, second: number, third: number };
```

When the structure is small, fixed and the order matters, tuples are recommended.

When the clarity, extensibility or optionality of the structure is important, you better call objects.

