## Classes vs Interfaces and Types

Classes can basically do everything that interfaces can do, and more. Some of the most notable things you can't do with interfaces and type aliases are:

 * Have private, protected, static, and abstract members
 * Have dedicated constructors
 * Have method implementations predefined on all instances
 * Support inheritance

And on the other hand:

 * Type aliases and interfaces have no runtime overhead
 * Type aliases and interfaces have fewer features, and as a result, are simpler to work with when you don't need the extra features
 * Type aliases and interfaces are more flexible, especially when working with plain objects because they're not tied to the class implementation (signature only)
 * Interfaces can be extended and merged in ways that types and classes can't

