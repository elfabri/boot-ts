import { describe, it, assert, withSubmit } from "../unit_test";
import {
  SystemEvent,
  ErrorEvent,
  OutageEvent,
  getHighPriorityEvents,
} from "./04_utils";

type Expect<T extends true> = T;
type Extends<T, U> = T extends U ? true : false;

describe("SystemEvent extensions", async () => {
  await it("ErrorEvent should extend SystemEvent", () => {
    type Test = Expect<Extends<ErrorEvent, SystemEvent>>;
  });

  await it("OutageEvent should extend SystemEvent", () => {
    type Test = Expect<Extends<OutageEvent, SystemEvent>>;
  });

  await it("OutageEvent.severity should be 'critical'", () => {
    const outage: OutageEvent = {
      type: "outage",
      timestamp: 0,
      payload: {},
      affectedService: "billing",
      severity: "critical",
      durationSeconds: 300,
    };

    assert.strictEqual(outage.severity, "critical");
  });
});
console.log();

describe("getHighPriorityEvents", async () => {
  const runCases: [
    (ErrorEvent | OutageEvent)[],
    (ErrorEvent | OutageEvent)[],
  ][] = [
    [
      [
        {
          type: "error",
          timestamp: 1291954900,
          payload: "Minor timeout",
          affectedService: "chat",
          severity: "low",
          code: 408,
        },
        {
          type: "error",
          timestamp: 1058510394,
          payload: "Auth failure",
          affectedService: "auth",
          severity: "high",
          code: 401,
        },
        {
          type: "outage",
          timestamp: 1291954900,
          payload: {},
          affectedService: "billing",
          severity: "critical",
          durationSeconds: 600,
        },
      ],
      [
        {
          type: "error",
          timestamp: 1058510394,
          payload: "Auth failure",
          affectedService: "auth",
          severity: "high",
          code: 401,
        },
        {
          type: "outage",
          timestamp: 1291954900,
          payload: {},
          affectedService: "billing",
          severity: "critical",
          durationSeconds: 600,
        },
      ],
    ],
  ];

  const submitCases: typeof runCases = [
    [
      [
        {
          type: "error",
          timestamp: 1725707724,
          payload: "Token expired",
          affectedService: "api",
          severity: "high",
          code: 498,
        },
      ],
      [
        {
          type: "error",
          timestamp: 1725707724,
          payload: "Token expired",
          affectedService: "api",
          severity: "high",
          code: 498,
        },
      ],
    ],
  ];

  let testCases = runCases;
  if (withSubmit) {
    testCases = runCases.concat(submitCases);
  }

  for (let i = 0; i < testCases.length; i++) {
    const [input, expected] = testCases[i];

    console.log(`Num Input Events:           ${input.length}`);
    console.log(`Num Expected High/Critical: ${expected.length}`);
    console.log(
      `Num Actual High/Critical:   ${getHighPriorityEvents(input).length}`,
    );

    await it(`Returns ${expected.length} high-priority event(s)`, () => {
      const result = getHighPriorityEvents(input);
      assert.deepEqual(result, expected);
    });

    console.log();
  }

  const numSkipped = submitCases.length - (testCases.length - runCases.length);
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
