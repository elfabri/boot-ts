import { describe, it, assert, withSubmit } from "../unit_test";
import { Ticket, formatTicket } from "./06_utils";

describe("formatTicket", () => {
  const runCases: {
    input: Ticket;
    expected: string;
  }[] = [
    {
      input: [1, "My cans of tuna fish are missing"],
      expected: "#1 My cans of tuna fish are missing",
    },
    {
      input: [2, "Cats are everywhere!", "WONTFIX"],
      expected: "#2 Cats are everywhere! [WONTFIX]",
    },
  ];

  const submitCases = runCases.concat([
    {
      input: [3, "Send a dog"],
      expected: "#3 Send a dog",
    },
    {
      input: [4, "Give me my tuna!", "REFUND"],
      expected: "#4 Give me my tuna! [REFUND]",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const result = formatTicket(input as Ticket);
      console.log("Input:");
      console.log(`  - ID: ${input[0]}`);
      console.log(`  - Comment: ${input[1]}`);
      console.log(`  - Label: ${input[2]}`);
      console.log(`Expected: ${expected}`);
      console.log(`Actual:   ${result}`);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
