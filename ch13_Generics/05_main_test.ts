import { describe, it, assert, withSubmit } from "../unit_test";
import { summarizeFeedback } from "./05_utils";

describe("summarizeFeedback", () => {
  type Feedback = { id: string; text: string };

  type TestCase = {
    input: Feedback[];
    expected: string[];
  };

  const runCases: TestCase[] = [
    {
      input: [{ id: "abigail", text: "More purple chests please." }],
      expected: ["More purple chests please."],
    },
    {
      input: [
        { id: "demetrius", text: "Greenhouse works great." },
        { id: "leah", text: "Too many slimes near the cabin." },
      ],
      expected: ["Greenhouse works great.", "Too many slimes near the cabin."],
    },
  ];

  const submitCases = runCases.concat([
    {
      input: [],
      expected: [],
    },
    {
      input: [
        { id: "sebastian", text: "Needs more rain." },
        { id: "emily", text: "Too many geodes." },
        { id: "penny", text: "Library hours unclear." },
      ],
      expected: [
        "Needs more rain.",
        "Too many geodes.",
        "Library hours unclear.",
      ],
    },
  ]);

  const testCases = withSubmit ? submitCases : runCases;

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = summarizeFeedback(input);
      assert.deepEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
