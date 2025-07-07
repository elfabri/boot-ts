import { describe, it, assert, withSubmit } from "../unit_test";
import { addBillingInfo } from "./03_utils";

type testCase = {
  input: {
    email: string;
    phoneNumber: string;
  };
  expected: string;
};

describe("Required Utility Type", () => {
  const runCases: testCase[] = [
    {
      input: { email: "amy@ev.com", phoneNumber: "9384974" },
      expected: "billing info: amy@ev.com, 9384974",
    },
  ];
  const submitCases = runCases.concat([
    {
      input: { email: "mike@lp.com", phoneNumber: "7314235" },
      expected: "billing info: mike@lp.com, 7314235",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = addBillingInfo(input);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
