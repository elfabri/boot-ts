import { describe, it, assert, withSubmit } from "../unit_test";
import { countComplaints } from "./06_utils";
import type { Topic } from "./06_utils";

type Chat = {
  topic: Topic;
  userId: string;
};

type TestCase = {
  chats: Chat[];
  expected: {
    questions: number;
    complaints: number;
    upgrades: number;
    refunds: number;
  };
};

describe("countComplaints", () => {
  const runCases: TestCase[] = [
    {
      chats: [
        { topic: "question", userId: "user1" },
        { topic: "complaint", userId: "user2" },
        { topic: "upgrade", userId: "user3" },
        { topic: "refund", userId: "user4" },
      ],
      expected: {
        questions: 1,
        complaints: 1,
        upgrades: 1,
        refunds: 1,
      },
    },
    {
      chats: [
        { topic: "question", userId: "user1" },
        { topic: "question", userId: "user2" },
        { topic: "complaint", userId: "user3" },
      ],
      expected: {
        questions: 2,
        complaints: 1,
        upgrades: 0,
        refunds: 0,
      },
    },
  ];

  const submitCases = runCases.concat([
    {
      chats: [
        { topic: "upgrade", userId: "user1" },
        { topic: "refund", userId: "user2" },
        { topic: "refund", userId: "user3" },
        { topic: "complaint", userId: "user4" },
        { topic: "question", userId: "user5" },
      ],
      expected: {
        questions: 1,
        complaints: 1,
        upgrades: 1,
        refunds: 2,
      },
    },
    {
      chats: [], // empty array test case
      expected: {
        questions: 0,
        complaints: 0,
        upgrades: 0,
        refunds: 0,
      },
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { chats, expected } = testCases[i];
    it(`Test ${i + 1}`, () => {
      const actual = countComplaints(chats);
      assert.deepEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
