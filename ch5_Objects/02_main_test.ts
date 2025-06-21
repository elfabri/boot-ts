import { describe, it, assert, withSubmit } from "../unit_test";
import { processMail } from "./02_utils";

describe("processMail", () => {
  const runCases = [
    {
      mail: {
        from: "allan@support.ai",
        to: ["pear2pear@example.com", "baker@example.com"],
        subject: "Salmon delivery",
        body: "We need more salmon or else",
        urgent: true,
        cc: ["ballan@support.ai", "boots@support.ai"],
      },
      expected: `FROM: allan@support.ai
TO: pear2pear@example.com, baker@example.com
CC: ballan@support.ai,boots@support.ai
SUBJECT: [URGENT] Salmon delivery
BODY: We need more salmon or else`,
    },
  ];

  const submitCases = runCases.concat([
    {
      mail: {
        from: "waseem@support.ai",
        to: ["david@example.com"],
        subject: "llama llama",
        body: "LLAMA llama llama llama",
        urgent: false,
        cc: ["hunter@support.ai", "lane@support.ai"],
      },
      expected: `FROM: waseem@support.ai
TO: david@example.com
CC: hunter@support.ai,lane@support.ai
SUBJECT: llama llama
BODY: LLAMA llama llama llama`,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { mail, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = processMail({
        from: mail.from,
        to: mail.to,
        subject: mail.subject,
        body: mail.body,
        urgent: mail.urgent,
        cc: mail.cc,
      });
      console.log("Expected:");
      console.log(expected);
      console.log("");
      console.log("Actual:");
      console.log(actual);
      assert.strictEqual(actual, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
