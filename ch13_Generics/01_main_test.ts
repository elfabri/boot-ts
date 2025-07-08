import { describe, it, assert, withSubmit } from "../unit_test";
import { getFirst } from "./01_utils";

describe("getFirst", () => {
  type TestCases<T> = {
    input: T[];
    expected: T | undefined;
  };

  type Message = {
    role: string;
    message: string;
  };

  type Email = string;

  type Payment = {
    senderId: string;
    amount: number;
  };

  type QueuedItems = Message | Email | Payment | number;

  const runCases: TestCases<QueuedItems>[] = [
    {
      input: [{ role: "support-bot", message: "How may I help you?" }],
      expected: { role: "support-bot", message: "How may I help you?" },
    },
    {
      input: [
        { senderId: "jayne", amount: 25 },
        { senderId: "inara", amount: 300 },
      ],
      expected: { senderId: "jayne", amount: 25 },
    },
  ];

  const submitCases = runCases.concat([
    {
      input: [],
      expected: undefined,
    },
    {
      input: [9999],
      expected: 9999,
    },
    {
      input: [
        { role: "user", message: "I’ve been in this queue for 3 hours" },
        { role: "support-bot", message: "Thanks for your patience!" },
        { role: "user", message: "Hello? Anyone there?" },
        { role: "support-bot", message: "Estimated wait: 14 minutes" },
      ],
      expected: {
        role: "user",
        message: "I’ve been in this queue for 3 hours",
      },
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = getFirst(input);
      assert.deepEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
