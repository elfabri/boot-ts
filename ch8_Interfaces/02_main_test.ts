import { describe, it, assert, withSubmit } from "../unit_test";
import {
  getEmailDescription,
  getTextMessageDescription,
  Message,
  EmailMessage,
  TextMessage,
} from "./02_utils";

type Expect<T extends true> = T;
type Extends<T, U> = T extends U ? true : false;

describe("TextMessage and EmailMessage", async () => {
  await it("TextMessage should extend Message", () => {
    type Test = Expect<Extends<TextMessage, Message>>;
  });

  await it("EmailMessage should extend Message", () => {
    type Test = Expect<Extends<EmailMessage, Message>>;
  });
});

describe("getEmailDescription", async () => {
  const runCases: [EmailMessage, string][] = [
    [
      {
        id: "e1",
        sender: "noreply@support.ai",
        recipient: "user@example.com",
        timestamp: 1679932900,
        subject: "Welcome!",
        body: "Thanks for joining Support.ai.",
      },
      "[EMAIL] Welcome!: Thanks for joining Support.ai.",
    ],
    [
      {
        id: "e2",
        sender: "support@support.ai",
        recipient: "admin@example.com",
        timestamp: 1679932910,
        subject: "Monthly Report",
        body: "Here is your usage summary.",
      },
      "[EMAIL] Monthly Report: Here is your usage summary.",
    ],
  ];

  const submitCases: [EmailMessage, string][] = [
    [
      {
        id: "e99",
        sender: "auto@support.ai",
        recipient: "you@example.com",
        timestamp: 1679932999,
        subject: "Trial Ending Soon",
        body: "Upgrade now to keep using Support.ai.",
      },
      "[EMAIL] Trial Ending Soon: Upgrade now to keep using Support.ai.",
    ],
  ];

  await it("Should take EmailMessage as a parameter", () => {
    type ParamType = Parameters<typeof getEmailDescription>[0];
    type Test = Expect<Extends<ParamType, EmailMessage>>;
  });

  let testCases = runCases;
  if (withSubmit) {
    testCases = runCases.concat(submitCases);
  }

  for (let i = 0; i < testCases.length; i++) {
    const [input, expected] = testCases[i];

    console.log(`Email ID: ${input.id}`);
    console.log(`Subject: ${input.subject}`);
    console.log(`Expected Description: ${expected}`);

    await it(`Returns correct description for subject: "${input.subject}"`, () => {
      const result = getEmailDescription(input);
      assert.strictEqual(result, expected);
    });
    console.log();
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});

describe("getTextMessageDescription", async () => {
  const runCases: [TextMessage, string][] = [
    [
      {
        id: "t1",
        sender: "bot@support.ai",
        recipient: "+15551234567",
        timestamp: 1679932800,
        text: "Your code is ready!",
        carrier: "Verizon",
      },
      "[TEXT] Your code is ready! - Sent via Verizon",
    ],
    [
      {
        id: "t2",
        sender: "bot@support.ai",
        recipient: "+15557654321",
        timestamp: 1679932810,
        text: "Don't forget your meeting.",
        carrier: "AT&T",
      },
      "[TEXT] Don't forget your meeting. - Sent via AT&T",
    ],
  ];

  const submitCases: [TextMessage, string][] = [
    [
      {
        id: "t99",
        sender: "reminder@support.ai",
        recipient: "+19998887777",
        timestamp: 1679932999,
        text: "Your support session starts in 10 minutes.",
        carrier: "T-Mobile",
      },
      "[TEXT] Your support session starts in 10 minutes. - Sent via T-Mobile",
    ],
  ];

  await it("Should take TextMessage as a parameter", () => {
    type ParamType = Parameters<typeof getTextMessageDescription>[0];
    type Test = Expect<Extends<ParamType, TextMessage>>;
  });

  let testCases = runCases;
  if (withSubmit) {
    testCases = runCases.concat(submitCases);
  }

  for (let i = 0; i < testCases.length; i++) {
    const [input, expected] = testCases[i];

    console.log(`Text ID: ${input.id}`);
    console.log(`Carrier: ${input.carrier}`);
    console.log(`Expected Description: ${expected}`);

    await it(`Returns correct description for carrier: "${input.carrier}"`, () => {
      const result = getTextMessageDescription(input);
      assert.strictEqual(result, expected);
    });
    console.log();
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
