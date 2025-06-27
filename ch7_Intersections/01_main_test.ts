import { describe, it, withSubmit } from "../unit_test";
import { SupportBot, TextBot, VoiceBot } from "./01_utils";

type Expect<T extends true> = T;
type UsesIntersection<T, Base> = T extends Base
  ? Base extends T
    ? false
    : true
  : false;

type TestCase = {
  botType: "TextBot" | "VoiceBot";
  bot: TextBot | VoiceBot;
};

describe("SupportBot, TextBot, and VoiceBot", async () => {
  const runCases: TestCase[] = [
    {
      botType: "TextBot",
      bot: {
        id: "123",
        name: "Text Bot Bill",
        status: "online",
        language: "en",
        messageLog: ["Hello", "How can I help you?"],
        sendMessage: (message: string) => {
          return `Sending message: ${message}`;
        },
      },
    },
  ];

  const submitCases = runCases.concat([
    {
      botType: "VoiceBot",
      bot: {
        id: "123",
        name: "Voice Bot Sydney",
        status: "online",
        language: "en",
        callLog: ["555-555-5555", "555-456-7890"],
        phoneNumber: "123-456-7890",
        dialNumber: (phoneNumber: string) => {
          return `Dialing: ${phoneNumber}`;
        },
      },
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const test = testCases[i];
    if (test.botType === "TextBot") {
      await it(`Has valid TextBot`, () => {
        const bot = test.bot as TextBot;
        console.log("Starting Bot:");
        console.log("Name:  ", bot.name);
        console.log("Status:", bot.status);
        console.log(bot.sendMessage("Hello"));
      });
    }

    if (testCases[i].botType === "VoiceBot") {
      await it(`Has valid VoiceBot`, () => {
        const bot = test.bot as VoiceBot;
        console.log("Starting Bot:");
        console.log("Name:  ", bot.name);
        console.log("Status:", bot.status);
        console.log(bot.dialNumber("Hello"));
      });
    }
    console.log();
  }

  await it(`TextBot intersects SupportBot`, () => {
    type TestTextBotUsesIntersection = Expect<
      UsesIntersection<TextBot, SupportBot>
    >;
  });

  await it(`VoiceBot intersects SupportBot`, () => {
    type TestVoiceBotUsesIntersection = Expect<
      UsesIntersection<VoiceBot, SupportBot>
    >;
  });

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
