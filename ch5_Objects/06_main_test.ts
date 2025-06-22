import { describe, it, assert, withSubmit } from "../unit_test";
import { findNumUniqueLabels } from "./06_utils";

describe("findNumUniqueLabels", () => {
  const runCases: {
    labels: string[];
    expected: number;
  }[] = [
    {
      labels: ["spam", "urgent", "updates", "spam"],
      expected: 3,
    },
    {
      labels: ["promo", "promo", "promo", "promo"],
      expected: 1,
    },
  ];

  const submitCases = runCases.concat([
    {
      labels: [],
      expected: 0,
    },
    {
      labels: ["finance", "6'5", "blue eyes", "white dragon", "finance"],
      expected: 4,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { labels, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const result = findNumUniqueLabels(labels);
      console.log("Inputs:");
      for (const label of labels) {
        console.log(`-`, label);
      }
      console.log("Expected:", expected);
      console.log("Actual:  ", result);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
