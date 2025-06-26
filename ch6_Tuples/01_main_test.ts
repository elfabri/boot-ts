import { describe, it, assert, withSubmit } from "../unit_test";
import { createTicket } from "./01_utils";

describe("createTicket", () => {
  const runCases = [
    {
      prevTicket: 0,
      comment: "Critical help needed",
      expected: [1, "Critical help needed", true],
    },
    {
      prevTicket: 1,
      comment: "Salmon is missing",
      expected: [2, "Salmon is missing", false],
    },
  ];

  const submitCases = runCases.concat([
    {
      prevTicket: 2,
      comment: "Call animal control",
      expected: [3, "Call animal control", false],
    },
    {
      prevTicket: 3,
      comment: "Bear at critical mass!",
      expected: [4, "Bear at critical mass!", true],
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { prevTicket, comment, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const result = createTicket(prevTicket, comment);
      console.log("Inputs:");
      console.log(`  - Previous Ticket: ${prevTicket}`);
      console.log(`  - Comment: ${comment}`);
      console.log("Expected:");
      for (let j = 0; j < expected.length; j++) {
        console.log(`  ${j}. ${expected[j]} (${typeof expected[j]})`);
      }
      console.log("");
      console.log("Actual:");
      for (let j = 0; j < result.length; j++) {
        console.log(`  ${j}. ${result[j]} (${typeof result[j]})`);
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
