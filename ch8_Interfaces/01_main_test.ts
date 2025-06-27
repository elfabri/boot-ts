import { describe, it, assert, withSubmit } from "../unit_test";
import { getSessionDuration, SupportSession, UserFeedback } from "./01_utils";

type Expect<T extends true> = T;
type Extends<T, U> = T extends U ? true : false;

describe("UserFeedback and SupportSession interfaces", async () => {
  await it("SupportSession.feedback should be of type UserFeedback", () => {
    type FeedbackType = SupportSession["feedback"];
    type Test = Expect<Extends<FeedbackType, UserFeedback>>;
  });

  await it("SupportSession must be an interface", () => {
    interface Extended extends SupportSession {
      somethingExtra: boolean;
    }
    type Test = Expect<Extends<Extended, SupportSession>>;
  });
  console.log();
});

describe("getSessionDuration", async () => {
  const runCases: [SupportSession, number][] = [
    [
      {
        id: "sess_001",
        startedAt: 1700000000,
        endedAt: 1700000450,
        feedback: {
          rating: 5,
          comment: "Boots cast a spell on me!",
        },
      },
      450,
    ],
    [
      {
        id: "sess_002",
        startedAt: 1697563200,
        endedAt: 1697564100,
        feedback: {
          rating: 3,
          comment: "Okay experience.",
        },
      },
      900,
    ],
  ];

  const submitCases: [SupportSession, number][] = [
    [
      {
        id: "sess_999",
        startedAt: 1698912000,
        endedAt: 1698912600,
        feedback: {
          rating: 4,
          comment: "Pretty good overall.",
        },
      },
      600,
    ],
  ];

  await it("Should take SupportSession as a parameter", () => {
    type ParamType = Parameters<typeof getSessionDuration>[0];
    type Test = Expect<Extends<ParamType, SupportSession>>;
  });

  let testCases = runCases;
  if (withSubmit) {
    testCases = runCases.concat(submitCases);
  }

  for (let i = 0; i < testCases.length; i++) {
    const [input, expected] = testCases[i];

    console.log(`Session ID: ${input.id}`);
    console.log(`Started At: ${input.startedAt}`);
    console.log(`Ended At:   ${input.endedAt}`);
    console.log(`Expected Duration: ${expected} seconds`);
    console.log(`Actual Duration:   ${getSessionDuration(input)} seconds`);

    await it(`Returns ${expected} seconds for session "${input.id}"`, () => {
      const result = getSessionDuration(input);
      assert.strictEqual(result, expected);
    });
    console.log();
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
