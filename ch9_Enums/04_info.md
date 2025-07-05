## Const Enums

Special variant of Enums which are completely removed during compilation and replaced with their literal values.
Const Enums do not ship extra mapping code and are more performant.

The values can not be computed, this means you can't assign a fucntion call on the enum members, although you can make references to other members (concatenation of strings values with '+').

Since these enums have no runtime representation, it will not be possible to obtain the name of the members from their values.
A const enum member can only be accessed using a string literal to obtain it's corresponding value.
