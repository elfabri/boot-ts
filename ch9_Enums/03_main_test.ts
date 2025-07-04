import { describe, it, assert, withSubmit } from "../unit_test";
import { getErrorLabel, InternalErrors } from "./03_utils";

type TestCase = {
  code: number;
  expected: string;
};

describe("getErrorLabel", async () => {
  const runCases: TestCase[] = [
    {
      code: 1001,
      expected: "1001: InvalidPrompt",
    },
    {
      code: 1004,
      expected: "1004: ContextWindowOverflow",
    },
    {
      code: 9999,
      expected: "9999: SelfAwarenessAchieved",
    },
    {
      code: 404,
      expected: "404: Unknown error",
    },
  ];

  const submitCases: TestCase[] = [
    {
      code: 2233,
      expected: "2233: EthicalGuardrailTriggered",
    },
    {
      code: 2401,
      expected: "2401: TokenLimitExceeded",
    },
    {
      code: 1234,
      expected: "1234: Unknown error",
    },
  ];

  let testCases = runCases;
  if (withSubmit) {
    testCases = runCases.concat(submitCases);
  }

  for (const test of testCases) {
    await it(`should return ${test.expected} for ${test.code}`, () => {
      const result = getErrorLabel(test.code);

      console.log(`Error Code: ${test.code}`);
      console.log(`Expected:   ${test.expected}`);
      console.log(`Actual:     ${result}`);

      assert.strictEqual(result, test.expected);
    });
    console.log();
  }

  const numSkipped = submitCases.length - (testCases.length - runCases.length);
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
