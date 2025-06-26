import { describe, it, assert, withSubmit } from "../unit_test";
import { Ticket, resolveTicket } from "./02_utils";

describe("resolveTicket", () => {
  const runCases: {
    input: Ticket;
    expected: Ticket;
  }[] = [
    {
      input: [1, "Delivery package missing", true, false],
      expected: [1, "Delivery package missing", true, true],
    },
    {
      input: [2, "Package contained tuna fish", false, true],
      expected: [2, "Package contained tuna fish", false, true],
    },
  ];

  const submitCases = runCases.concat([
    {
      input: [3, "Boots is hungry", false, false],
      expected: [3, "Boots is hungry", false, true],
    },
    {
      input: [4, "Send salmon!", true, true],
      expected: [4, "Send salmon!", true, true],
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i}`, () => {
      console.log("Inputs:");
      for (let j = 0; j < input.length; j++) {
        console.log(`  ${j}. ${input[j]} (${typeof input[j]})`);
      }
      console.log("Expected:");
      for (let j = 0; j < expected.length; j++) {
        console.log(`  ${j}. ${expected[j]} (${typeof expected[j]})`);
      }

      console.log("");
      const actual: Ticket = resolveTicket(input as Ticket);
      console.log("Actual:");
      for (let j = 0; j < actual.length; j++) {
        console.log(`  ${j}. ${actual[j]} (${typeof actual[j]})`);
      }
      assert.deepEqual(actual, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
