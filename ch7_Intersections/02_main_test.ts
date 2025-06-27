import { describe, it, assert, withSubmit } from "../unit_test";
import { handleSlashCommand } from "./02_utils";

describe("handleSlashCommand", async () => {
  const runCases: string[][] = [
    ["greet", "Hello! How can I assist you?"],
    ["info", "Sure! Here’s a list of things I can do..."],
  ];

  const submitCases = runCases.concat([
      ["help", "I can help you with that!"],
      ["asd", "Not a command: asd"],
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const test = testCases[i];
    const command = test[0];
    const expected = test[1];

    await it(`Handles command: ${command}`, () => {
      const result = handleSlashCommand(command as any);
      assert.strictEqual(result, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
