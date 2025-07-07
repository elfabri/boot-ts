import { describe, it, assert, withSubmit } from "../unit_test";
import { RegularCustomer } from "./04_utils";

describe("calculateTotal", () => {
  const runCases = [
    {
      customer: new RegularCustomer("John", "Wick", 9999),
      expectedName: "John Wick",
      expectedBalance: 9999,
    },
    {
      customer: new RegularCustomer("Jason", "Bourne", 1000),
      expectedName: "Jason Bourne",
      expectedBalance: 1000,
    },
  ];
  const submitCases = runCases;

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { customer, expectedName, expectedBalance } = testCases[i];
    it(`Test ${i}`, () => {
      const actualName = customer.getFullName();
      assert.strictEqual(actualName, expectedName);

      const actualBalance = customer.getBalance();
      assert.strictEqual(actualBalance, expectedBalance);

      assert.strictEqual(Object.keys(customer).length, 3);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
