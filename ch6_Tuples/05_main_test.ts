import { describe, it, assert, withSubmit } from "../unit_test";
import { Ticket, formatTicket } from "./05_utils";

describe("formatTicket", () => {
  const runCases: {
    input: Ticket;
    expected: string;
  }[] = [
    {
      input: [1, "Can't turn off capslock for login", "WONTFIX"],
      expected: "#1 Can't turn off capslock for login [WONTFIX]",
    },
    {
      input: [2, "Electrical outlet missing for charging", "CRIT"],
      expected: "#2 Electrical outlet missing for charging [CRIT]",
    },
  ];

  const submitCases = runCases.concat([
    {
      input: [3, "Account locked after capslock mishap", "RESOLVED"],
      expected: "#3 Account locked after capslock mishap [RESOLVED]",
    },
    {
      input: [4, "Phone crushed by toilet seat", "REPLACE"],
      expected: "#4 Phone crushed by toilet seat [REPLACE]",
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
