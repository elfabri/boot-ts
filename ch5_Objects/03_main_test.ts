import { describe, it, assert, withSubmit } from "../unit_test";
import { processMail, Mail } from "./03_utils";

describe("processMail", () => {
  const runCases = [
    {
      mail: {
        from: "winston@support.ai",
        to: ["captainfalcon@example.com", "laughinglast@example.com"],
        subject: "The Gathering",
        body: "The magical nexus has begun",
        urgent: true,
      } as Mail,
      expected: `FROM: winston@support.ai
TO: captainfalcon@example.com,laughinglast@example.com
SUBJECT: [URGENT] The Gathering
BODY: The magical nexus has begun`,
    },
  ];

  const submitCases = runCases.concat([
    {
      mail: {
        from: "dan.g@support.ai",
        to: ["dan.h@example.com"],
        subject: "Beach weather",
        body: "bring your sunscreen and flip flops",
        urgent: false,
        cc: ["waseem@support.ai", "alex@support.ai"],
      } as Mail,
      expected: `FROM: dan.g@support.ai
TO: dan.h@example.com
CC: waseem@support.ai,alex@support.ai
SUBJECT: Beach weather
BODY: bring your sunscreen and flip flops`,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { mail, expected } = testCases[i];
    it(`Test ${i}`, () => {
      let result = "";
      if (!!mail.cc) {
        result = processMail({
          from: mail.from,
          to: mail.to,
          subject: mail.subject,
          body: mail.body,
          urgent: mail.urgent,
          cc: mail.cc,
        });
      } else {
        result = processMail({
          from: mail.from,
          to: mail.to,
          subject: mail.subject,
          body: mail.body,
          urgent: mail.urgent,
        });
      }
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
