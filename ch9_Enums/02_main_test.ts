import { describe, it, assert, withSubmit } from "../unit_test";
import { convertSeverityToLabel, RequestSeverity } from "./02_utils";

type TestCase = {
  id: string;
  severity: number;
  expected?: RequestSeverity;
  shouldThrow?: boolean;
};

describe("Support Request Severity Conversion", async () => {
  const runCases: TestCase[] = [
    {
      id: "t-331",
      severity: 0,
      expected: RequestSeverity.Low,
    },
    {
      id: "t-102",
      severity: 99,
      shouldThrow: true,
    },
    {
      id: "t-004",
      severity: 3,
      expected: RequestSeverity.Critical,
    },
  ];

  const submitCases = runCases.concat([
    {
      id: "t-899",
      severity: 2,
      expected: RequestSeverity.High,
    },
    {
      id: "t-500",
      severity: 5,
      shouldThrow: true,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const test = testCases[i];

    await it(`Should return "${test.expected ? test.expected : "Unknown severity"}" for severity number: ${test.severity}`, () => {
      try {
        console.log(`Running test for Request ID: ${test.id}`);
        console.log(`Severity number: ${test.severity}`);
        console.log(`Expected: ${test.expected}`);

        if (test.shouldThrow) {
          assert.throws(
            () => convertSeverityToLabel(test.severity),
            "Unknown severity",
          );
          return;
        } else {
          const result = convertSeverityToLabel(test.severity);
          console.log(`Actual:   ${result}`);
          assert.strictEqual(result, test.expected);
        }
      } catch (error) {
        console.log(
          `Test failed for Request ID: ${test.id}. Unexpected error: ${error}`,
        );
        throw error;
      }
    });
    console.log("\n");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
