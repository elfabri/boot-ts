import { describe, it, assert, withSubmit } from "../unit_test";
import {
  getReviewMethod,
  ChannelTag,
  SentimentTag,
  TicketMetadata,
} from "./03_utils";

type Expect<T extends true> = T;
type Extends<T, U> = T extends U ? true : false;

describe("getReviewMethod", async () => {
  const runCases: [TicketMetadata, "manual_review" | "auto_process"][] = [
    [
      {
        sentiment: { type: "positive", score: 0.9, flagged: false },
        channel: {
          type: "chat",
          verified: true,
          receivedAt: "2025-03-24T12:00:00Z",
        },
      },
      "auto_process",
    ],
    [
      {
        sentiment: { type: "negative", score: 0.3, flagged: true },
        channel: {
          type: "email",
          verified: true,
          receivedAt: "2025-03-24T12:00:00Z",
        },
      },
      "manual_review",
    ],
    [
      {
        sentiment: { type: "neutral", score: 0.6, flagged: false },
        channel: {
          type: "phone",
          verified: true,
          receivedAt: "2025-03-24T12:00:00Z",
        },
      },
      "manual_review",
    ],
  ];

  const submitCases = runCases.concat([
    [
      {
        sentiment: { type: "positive", score: 0.85, flagged: false },
        channel: {
          type: "email",
          verified: false,
          receivedAt: "2025-03-24T12:00:00Z",
        },
      },
      "manual_review",
    ],
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  await it("Should take TicketMetadata type", () => {
    type ParamType = Parameters<typeof getReviewMethod>[0];
    type TestTicketMetadata = Expect<Extends<ParamType, TicketMetadata>>;
  });

  await it("Should return ReviewMethod type", () => {
    type MetaReturnType = ReturnType<typeof getReviewMethod>;
    type TestReviewMethod = Expect<
      Extends<MetaReturnType, "manual_review" | "auto_process">
    >;
  });
  await it("Should properly nest Sentiment and Channel", () => {
    type Assert<T extends true> = T;
    type IsTicketMetadataValid = TicketMetadata extends {
      sentiment: SentimentTag;
      channel: ChannelTag;
    }
      ? true
      : false;
    type _Test = Assert<IsTicketMetadataValid>;
  });
  console.log();

  for (let i = 0; i < testCases.length; i++) {
    const [input, expected] = testCases[i];

    console.log(`Sentiment: ${input.sentiment.type}`);
    console.log(`Flagged:   ${input.sentiment.flagged}`);
    console.log(`Channel:   ${input.channel.type}`);
    console.log(`Verified:  ${input.channel.verified}`);
    console.log(`Expected:  ${expected}`);

    await it(`Returns "${expected}" for sentiment: ${input.sentiment.type} and channel: ${input.channel.type}`, () => {
      const result = getReviewMethod(input);
      assert.strictEqual(result, expected);
    });
    console.log();
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
