import { describe, it, assert, withSubmit } from "../unit_test";
import type { Sentiment, Response } from "./03_utils";
import { respondToSentiment } from "./03_utils";

type TestCase = {
  input: Sentiment;
  expected: Response;
};

describe("respondToSentiment", () => {
  const runCases: TestCase[] = [
    {
      input: "happy",
      expected: {
        message: "Hooray!",
        notify: false,
      },
    },
    {
      input: "dissatisfied",
      expected: {
        message: "We are sorry.",
        notify: false,
      },
    },
    {
      input: "satisfied",
      expected: {
        message: "We are glad.",
        notify: false,
      },
    },
  ];

  const submitCases = runCases.concat([
    {
      input: "angry",
      expected: {
        message: "We apologize. A manager will contact you.",
        notify: true,
      },
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i + 1}: respondToSentiment(${JSON.stringify(input)})`, () => {
      const actual = respondToSentiment(input);
      assert.strictEqual(actual.message, expected.message);
      assert.strictEqual(actual.notify, expected.notify);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
