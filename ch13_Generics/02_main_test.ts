import { describe, it, assert, withSubmit } from "../unit_test";
import { pair } from "./02_utils";

describe("pair", () => {
  type TestCase<A, B> = {
    a: A[];
    b: B[];
    expected: [A, B][];
  };

  type PairableValue = string | number;

  const runCases: TestCase<PairableValue, PairableValue>[] = [
    {
      a: ["Bilbo"],
      b: ["hungry", "sleepy"],
      expected: [["Bilbo", "hungry"]],
    },
    {
      a: ["Aragorn", "Boromir"],
      b: [1],
      expected: [["Aragorn", 1]],
    },
  ];
  const submitCases = runCases.concat([
    {
      a: [],
      b: ["lonely"],
      expected: [],
    },

    {
      a: ["Gimli"],
      b: [],
      expected: [],
    },

    {
      a: ["Frodo", "Sam"],
      b: ["ring-bearer", "gardener"],
      expected: [
        ["Frodo", "ring-bearer"],
        ["Sam", "gardener"],
      ],
    },
  ]);

  const testCases = withSubmit ? submitCases : runCases;

  for (let i = 0; i < testCases.length; i++) {
    const { a, b, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = pair<PairableValue, PairableValue>(a, b);
      assert.deepEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
