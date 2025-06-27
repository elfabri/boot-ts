import { describe, it, assert, withSubmit } from "../unit_test";
import {
  getTicketCount,
  SupportAgentUser,
  SupportAgent,
  EndUser,
  SupportAdmin,
} from "./04_utils";

type Expect<T extends true> = T;
type Extends<T, U> = T extends U ? true : false;

describe("getTicketCount", async () => {
  const runCases: [SupportAgentUser, number][] = [
    [{ id: 623, role: "agent", assignedTickets: 5 }, 5],
    [{ id: 212, role: "admin", assignedTickets: 10 }, 10],
    [{ id: 111, role: "customer", submittedTickets: 2 }, 2],
  ];

  const submitCases = runCases.concat([
    [{ id: 420, role: "admin", assignedTickets: 10 }, 10],
  ]);

  await it("Should take SupportAgentUser type as a parameter", () => {
    type ParamType = Parameters<typeof getTicketCount>[0];
    type TestSupportAgentUser = Expect<Extends<ParamType, SupportAgentUser>>;
  });

  await it("Should properly handle different user roles", () => {
    type Assert<T extends true> = T;
    type IsValidSupportAgentUser = SupportAgentUser extends
      | SupportAgent
      | SupportAdmin
      | EndUser
      ? true
      : false;
    type _Test = Assert<IsValidSupportAgentUser>;
  });
  console.log();

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const [input, expected] = testCases[i];

    console.log(`User ID: ${input.id}`);
    console.log(`Role:    ${input.role}`);
    if (input.role === "agent" || input.role === "admin") {
      console.log(`Tickets: ${input.assignedTickets}`);
    }
    if (input.role === "customer") {
      console.log(`Tickets: ${input.submittedTickets}`);
    }
    console.log(`Expected Ticket Count: ${expected}`);

    await it(`Returns ${expected} for role: ${input.role}`, () => {
      const result = getTicketCount(input);
      assert.strictEqual(result, expected);
    });

    console.log();
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
