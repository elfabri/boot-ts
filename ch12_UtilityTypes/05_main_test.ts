import { describe, it, assert, withSubmit } from "../unit_test";
import { getStatusMessage, ModelStatus } from "./05_utils";

type testCase = {
  input: ModelStatus;
  expected: string;
};

describe("Record Utility Type", () => {
  const runCases: testCase[] = [
    {
      input: "waiting",
      expected: "Awaiting prompt",
    },
  ];

  const submitCases = runCases.concat([
    {
      input: "thinking",
      expected: "Cooking",
    },
    {
      input: "responding",
      expected: "Sending response",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];

    it(`Test ${i}: should return the correct status message for '${input}'`, () => {
      const message = getStatusMessage(input);
      assert.strictEqual(message, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
