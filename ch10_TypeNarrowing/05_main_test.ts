import { describe, it, assert, withSubmit } from "../unit_test";
import type { Model } from "./05_utils";
import { activateModel } from "./05_utils";

type TestCase = {
  model: Model;
  expected: string;
};

describe("activateModel", () => {
  const runCases: TestCase[] = [
    {
      model: {
        version: "3.5",
        search: false,
      },
      expected: "Activated model Skippity version 3.5 with searching disabled",
    },
    {
      model: {
        version: "3.14",
        think: false,
      },
      expected: "Activated model Jean version 3.14 with thinking disabled",
    },
    {
      model: {
        version: "2",
        think: true,
      },
      expected: "Activated model Jean version 2 with thinking enabled",
    },
  ];

  const submitCases = runCases.concat([
    {
      model: {
        version: "4s",
        search: true,
      },
      expected: "Activated model Skippity version 4s with searching enabled",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { model, expected } = testCases[i];
    it(`Test ${i + 1}`, () => {
      const actual = activateModel(model);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
