import type { EditableFields } from "./04_utils";

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

type Profile = {
  name: string;
  age: number;
  password: string;
  updateProfile(): void;
  preferences: {
    theme: string;
  };
};

type Expected = {
  name: string;
  age: number;
  password: string;
  updateProfile: never;
  preferences: never;
};

type _Test1 = Expect<Equal<EditableFields<Profile>, Expected>>;
type _Test2 = Expect<
  Equal<
    EditableFields<{ a: string; b: () => void; c: number[] }>,
    { a: string; b: never; c: never }
  >
>;
type _Test3 = Expect<Equal<EditableFields<{}>, {}>>;

console.log("✓ Pass: TSC Compiled");
