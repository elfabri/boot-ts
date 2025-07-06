import { describe, it, assert, withSubmit } from "../unit_test";
import { Customer } from "./01_utils";

type TestCase = {
  customer: Customer;
  expected: string;
};

describe("calculateTotal", () => {
  const runCases: TestCase[] = [
    {
      customer: new Customer("John", "Wick"),
      expected: "John Wick",
    },
    {
      customer: new Customer("Jason", "Bourne"),
      expected: "Jason Bourne",
    },
  ];
  const submitCases = runCases.concat([
    {
      customer: new Customer("Jake", "Peralta"),
      expected: "Jake Peralta",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { customer, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = customer.getFullName();
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
