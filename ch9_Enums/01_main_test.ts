import { describe, it, assert, withSubmit } from "../unit_test";
import { isCritical, RequestSeverity } from "./01_utils";

type TestCase = {
  id: string;
  severity: RequestSeverity;
  description: string;
  expected: boolean;
};

describe("Support Request Severity Enum", async () => {
  const runCases: TestCase[] = [
    {
      id: "t-331",
      severity: RequestSeverity.Low,
      description: "Minor UI glitch",
      expected: false,
    },
    {
      id: "t-102",
      severity: RequestSeverity.Medium,
      description: "Slow response times",
      expected: false,
    },
    {
      id: "t-004",
      severity: RequestSeverity.Critical,
      description: "Bear in the server room",
      expected: true,
    },
  ];

  const submitCases = runCases.concat([
    {
      id: "t-899",
      severity: RequestSeverity.Critical,
      description: "System outage",
      expected: true,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const test = testCases[i];

    await it(`Should return ${test.expected} for severity: ${RequestSeverity[test.severity]}`, () => {
      const result = isCritical(test);

      console.log(`Running test for Request ID: ${test.id}`);
      console.log(`Description: ${test.description}`);
      console.log(`Severity: ${RequestSeverity[test.severity]}`);
      console.log(`Expected: ${test.expected}`);
      console.log(`Actual:   ${result}`);

      assert.strictEqual(result, test.expected);
    });
    console.log("\n");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
