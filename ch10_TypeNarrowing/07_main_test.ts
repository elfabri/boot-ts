import { describe, it, assert, withSubmit } from "../unit_test";
import type { UserFeedback } from "./07_utils";
import { handleFeedback } from "./07_utils";

type TestCase = {
  feedback: UserFeedback;
  expected: string;
};

describe("handleFeedback", () => {
  const runCases: TestCase[] = [
    {
      feedback: {
        email: "franklin@gmail.com",
        rating: 4,
      },
      expected: "Thanks, franklin! Rating: Good",
    },
    {
      feedback: {
        email: "trevor@gmail.com",
        rating: 0,
      },
      expected: "Give a rating between 1 and 5.",
    },
    {
      feedback: {
        email: "michael@gmail.com",
        rating: 5,
      },
      expected: "Thanks, michael! Rating: Excellent",
    },
  ];

  const submitCases = runCases.concat([
    {
      feedback: {
        email: "lester@gmail.com",
      },
      expected: "Give a rating between 1 and 5.",
    },
    {
      feedback: {
        rating: 1,
      },
      expected: "Provide a valid email address.",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { feedback, expected } = testCases[i];

    it(`Test ${i + 1}: ${i + 1}`, () => {
      const actual = handleFeedback(feedback);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
