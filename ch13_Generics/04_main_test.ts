import { describe, it, assert, withSubmit } from "../unit_test";
import { createQueue, runNext } from "./04_utils";

describe("runNext", () => {
  type Job = { id: string; task: string };

  type TestCase = {
    jobs: Job[];
    expected: Job | undefined;
  };

  const runCases: TestCase[] = [
    {
      jobs: [{ id: "1", task: "catalog Amaranta’s wardrobe" }],
      expected: { id: "1", task: "catalog Amaranta’s wardrobe" },
    },
    {
      jobs: [
        { id: "2", task: "repair Melquíades’ manuscripts" },
        { id: "3", task: "translate Sanskrit" },
      ],
      expected: { id: "2", task: "repair Melquíades’ manuscripts" },
    },
  ];

  const submitCases = runCases.concat([
    {
      jobs: [],
      expected: undefined,
    },
    {
      jobs: [
        { id: "4", task: "track Aureliano (unspecified)" },
        { id: "5", task: "reinforce banana company fencing" },
      ],
      expected: { id: "4", task: "track Aureliano (unspecified)" },
    },
  ]);

  const testCases = withSubmit ? submitCases : runCases;

  for (let i = 0; i < testCases.length; i++) {
    const { jobs, expected } = testCases[i];

    const queue = createQueue<Job>();
    for (const job of jobs) {
      queue.push(job);
    }

    it(`Test ${i}`, () => {
      const actual = runNext<Job>(queue);
      assert.deepEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
