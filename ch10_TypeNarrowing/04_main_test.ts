import { describe, it, assert, withSubmit } from "../unit_test";
import type { Attachment } from "./04_utils";
import { processAttachment } from "./04_utils";

type TestCase = {
  attachment: Attachment;
  expected: string;
};

describe("processAttachment", () => {
  const runCases: TestCase[] = [
    {
      attachment: {
        fileSize: 2404,
        width: 1280,
        height: 1024,
      },
      expected: "Attached image, size: 2404, dimensions: 1280x1024",
    },
    {
      attachment: {
        fileSize: 5342,
        numPages: 10,
      },
      expected: "Attached document, size: 5342, pages: 10",
    },
  ];

  const submitCases = runCases.concat([
    {
      attachment: {
        fileSize: 777,
      },
      expected: "Attached file, size: 777",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { attachment: message, expected } = testCases[i];
    const messageType =
      "content" in message
        ? "TextMessage"
        : "imageUrl" in message
          ? "ImageMessage"
          : "FileMessage";

    it(`Test ${i + 1}: ${messageType}`, () => {
      const actual = processAttachment(message);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
