import { describe, it, assert, withSubmit } from "../unit_test";
import { OrderData, handleSuccessfulOrder } from "./08_utils";

type TestCase = {
  order: OrderData;
  expected: string;
};

describe("handleSuccessfulOrder", () => {
  const runCases: TestCase[] = [
    {
      order: {
        id: "19045",
        accountType: "free",
        amount: 0,
        contact: {
          email: "shelly@doubler.com",
          phone: "0123456789",
        },
      },
      expected: "To shelly@doubler.com: Welcome to Support.ai!",
    },
    {
      order: {
        id: "13948",
        accountType: "free",
        amount: 0,
        contact: {
          email: "norma@doubler.com",
          phone: "0223356789",
        },
      },
      expected: "To norma@doubler.com: Welcome to Support.ai!",
    },
  ];

  const submitCases = runCases.concat([
    {
      order: {
        id: "28991",
        accountType: "premium",
        amount: 99.99,
        contact: {
          email: "ben@oneyedjacks.com",
          phone: "0111226789",
        },
      },
      expected: "To ben@oneyedjacks.com: Thanks for giving us money!",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { order, expected } = testCases[i];

    it(`Test ${i + 1}`, () => {
      const actual = handleSuccessfulOrder(order);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
