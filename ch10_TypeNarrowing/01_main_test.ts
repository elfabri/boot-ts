import { describe, it, assert, withSubmit } from "../unit_test";
import { openTicket } from "./01_utils";
import type { Customer } from "./01_utils";

type TestCase = {
  customer: Customer;
  expected: number;
};

describe("calculateTotal", () => {
  const runCases: TestCase[] = [
    {
      customer: {
        plan: "regular",
        tickets: 2,
        aboveLimit: false,
      },
      expected: 3,
    },
    {
      customer: {
        plan: "premium",
        tickets: 5,
      },
      expected: 6,
    },
  ];
  const submitCases = runCases.concat([
    {
      customer: {
        plan: "regular",
        tickets: 5,
        aboveLimit: true,
      },
      expected: -1,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { customer, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = openTicket(customer);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
