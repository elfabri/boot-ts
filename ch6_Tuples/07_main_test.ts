import { describe, it, assert, withSubmit } from "../unit_test";
import { tokenize } from "./07_utils";

describe("tokenize", () => {
  const runCases = [
    {
      input: "Dude! You got a tattoo!",
      expected: [0.05, "Dude!", "You", "got", "a", "tattoo!"],
    },
    {
      input: "So do you, dude!",
      expected: [0.04, "So", "do", "you,", "dude!"],
    },
  ];

  const submitCases = runCases.concat([
    {
      input: "Dude, what does mine say?",
      expected: [0.05, "Dude,", "what", "does", "mine", "say?"],
    },
    {
      input: "Sweet! What about mine?",
      expected: [0.04, "Sweet!", "What", "about", "mine?"],
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const result = tokenize(input);
      console.log(`Input: ${input}`);
      console.log("Expected:");
      console.log(`  - Cost: ${expected[0]}`);
      console.log("  - Tokens:");
      for (const token of expected.slice(1)) {
        console.log(`    - ${token}`);
      }
      console.log("");
      console.log("Actual:");
      console.log(`  - Cost: ${result[0]}`);
      console.log("  - Tokens:");
      for (const token of result.slice(1)) {
        console.log(`    - ${token}`);
      }
      assert.deepEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
