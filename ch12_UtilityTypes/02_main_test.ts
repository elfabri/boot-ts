import { describe, it, assert, withSubmit } from "../unit_test";
import { updateUser } from "./02_utils";

type testCase = {
  input: {
    id?: string;
    email?: string;
  };
  expected: string;
};

describe("Partial Utility Type", () => {
  const runCases: testCase[] = [
    {
      input: { email: "amy@ev.com" },
      expected: "updating email to amy@ev.com",
    },
    {
      input: { id: "93471", email: "mike@lp.com" },
      expected: "can't update id",
    },
  ];
  const submitCases = runCases.concat([
    {
      input: {},
      expected: "nothing to update",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = updateUser(input);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
