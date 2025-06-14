import { describe, it, assert, withSubmit } from "./unit_test";
import { averageScore } from "./utils";

describe("averageScore", () => {
  const runCases = [
    {
      ratings: [7, 11, 42],
      expected: 20,
    },
    {
      ratings: [17, 76, 17, 87, 18, 61],
      expected: 46,
    },
  ];
  const submitCases = runCases.concat([
    {
      ratings: [],
      expected: 0,
    },
    {
      ratings: [1111, 1337, 80085],
      expected: 27511,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { ratings, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = averageScore(ratings);
      console.log("Ratings: ", ratings);
      console.log("Expected: ", expected);
      console.log("Actual:   ", actual);
      assert.strictEqual(actual, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
