import { describe, it, assert, withSubmit } from "../unit_test";
import { processMail, Mail } from "./01_utils";

describe("processMail", () => {
  const runCases = [
    {
      mail: {
        from: "dan@support.ai",
        to: ["rock@example.com", "star@example.com"],
        subject: "Re: vim",
        body: "Enable vim mode in settings",
        urgent: false,
      } as Mail,
      expected: `FROM: dan@support.ai
TO: rock@example.com,star@example.com
SUBJECT: Re: vim
BODY: Enable vim mode in settings`,
    },
  ];

  const submitCases = runCases.concat([
    {
      mail: {
        from: "hunter@support.ai",
        to: ["yourmajesty@example.com", "beast@example.com"],
        subject: "Stolen Karma",
        body: "Your karma was stolen by a sarcastic llama",
        urgent: true,
      } as Mail,
      expected: `FROM: hunter@support.ai
TO: yourmajesty@example.com,beast@example.com
SUBJECT: [URGENT] Stolen Karma
BODY: Your karma was stolen by a sarcastic llama`,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { mail, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const result = processMail(mail);
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
