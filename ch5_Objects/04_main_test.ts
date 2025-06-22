import { describe, it, assert, withSubmit } from "../unit_test";
import { processMail, Mail, Address } from "./04_utils";

describe("processMail", () => {
  const runCases = [
    {
      mail: {
        from: { name: "Ganondorf", domain: "hyrule.com" },
        to: [
          { name: "zelda", domain: "hyrule.com" },
          { name: "link", domain: "hyrule.com" },
        ],
        cc: [{ name: "navi", domain: "hyrule.com" }],
        subject: "Seize the Triforce",
        body: "Meet me at the Temple of Time at midnight.",
        urgent: true,
      },
      expected: `FROM: Ganondorf@hyrule.com
TO: zelda@hyrule.com, link@hyrule.com
CC: navi@hyrule.com
SUBJECT: [URGENT] Seize the Triforce
BODY: Meet me at the Temple of Time at midnight.`,
    },
  ];

  const submitCases = runCases.concat([
    {
      mail: {
        from: { name: "link", domain: "hyrule.com" },
        to: [{ name: "zelda", domain: "hyrule.com" }],
        cc: [{ name: "navi", domain: "hyrule.com" }],
        subject: "LOL",
        body: "I'm not going haha",
        urgent: false,
      },
      expected: `FROM: link@hyrule.com
TO: zelda@hyrule.com
CC: navi@hyrule.com
SUBJECT: LOL
BODY: I'm not going haha`,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { mail, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const result = processMail({
        from: mail.from,
        to: mail.to,
        subject: mail.subject,
        body: mail.body,
        urgent: mail.urgent,
        cc: mail.cc,
      } as Mail);
      console.log("Expected:");
      console.log(expected);
      console.log("");
      console.log("Actual:");
      console.log(result);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
