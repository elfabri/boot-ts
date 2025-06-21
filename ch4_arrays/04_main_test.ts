import { describe, it, assert, withSubmit } from "../unit_test";
import { formatLabels } from "./04_utils";

describe("formatLabels", () => {
  const runCases = [
    {
      labels: ["urgent", "critical", "important"],
      expected: "Labels: urgent, critical, important",
    },
    {
      labels: ["wontfix"],
      expected: "Label: wontfix",
    },
  ];

  const submitCases = runCases.concat([
    {
      labels: [],
      expected: "No Labels",
    },
    {
      labels: ["stonewall", "help-needed"],
      expected: "Labels: stonewall, help-needed",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { labels, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const result = formatLabels(...labels);
      console.log("Labels:");
      labels.forEach((label) => {
        console.log(`- ${label}`);
      });
      console.log("Expected:");
      console.log(expected);
      console.log("Actual:");
      console.log(result);
      assert.deepEqual(expected, result);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
