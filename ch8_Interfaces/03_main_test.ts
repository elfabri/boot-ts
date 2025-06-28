import { describe, it, assert, withSubmit } from "../unit_test";
import { SmartReplyBot, CanReply, CanSummarize, CanAct } from "./03_utils";

type Expect<T extends true> = T;
type Extends<T, U> = T extends U ? true : false;

describe("SmartReplyBot extends", async () => {
  await it("Should extend CanReply", () => {
    type Test = Expect<Extends<SmartReplyBot, CanReply>>;
  });

  await it("Should extend CanSummarize", () => {
    type Test = Expect<Extends<SmartReplyBot, CanSummarize>>;
  });

  await it("Should extend CanAct", () => {
    type Test = Expect<Extends<SmartReplyBot, CanAct>>;
  });
});
console.log();

describe("SmartReplyBot", async () => {
  const runCases: [
    SmartReplyBot,
    { reply: string; summary: string; shutdown: string },
  ][] = [
    [
      {
        name: "EchoBot",
        status: "online",
        reply: (text) => `Echo: ${text}`,
        summarize: (lines) => `Summary: ${lines.join(" / ")}`,
        takeAction: (action) => console.log(`Action: ${action}`),
        shutdown: () => "Shutting down EchoBot...",
      },
      {
        reply: "Echo: Hello!",
        summary: "Summary: Hi / I need help",
        shutdown: "Shutting down EchoBot...",
      },
    ],
    [
      {
        name: "HelperBot",
        status: "starting",
        reply: (text) => `You said: ${text}`,
        summarize: (lines) => `Summary: ${lines.length} messages`,
        takeAction: (action) => console.log(`Executing ${action}`),
        shutdown: () => "Goodbye from HelperBot.",
      },
      {
        reply: "You said: Hello!",
        summary: "Summary: 2 messages",
        shutdown: "Goodbye from HelperBot.",
      },
    ],
  ];

  const submitCases: typeof runCases = [
    [
      {
        name: "TaskerBot",
        status: "offline",
        reply: (text) => `Text received: ${text}`,
        summarize: (lines) => lines.reverse().join(" | "),
        takeAction: (action) => console.log(`TASK: ${action}`),
        shutdown: () => "TaskerBot is now offline.",
      },
      {
        reply: "Text received: Hello!",
        summary: "I need help | Hi",
        shutdown: "TaskerBot is now offline.",
      },
    ],
  ];

  let testCases = runCases;
  if (withSubmit) {
    testCases = runCases.concat(submitCases);
  }

  for (let i = 0; i < testCases.length; i++) {
    const [bot, expected] = testCases[i];

    console.log(`Bot Name:         ${bot.name}`);
    console.log(`Bot Status:       ${bot.status}`);
    console.log(`Expected Reply:   ${expected.reply}`);
    console.log(`Expected Summary: ${expected.summary}`);
    console.log(`Expected Shutdown Message: ${expected.shutdown}`);

    await it(`Return reply: ${expected.reply}`, () => {
      const result = bot.reply("Hello!");
      assert.strictEqual(result, expected.reply);
    });

    await it(`Returns summary: ${expected.summary}`, () => {
      const result = bot.summarize(["Hi", "I need help"]);
      assert.strictEqual(result, expected.summary);
    });

    await it(`Returns shutdown message: ${expected.shutdown}`, () => {
      const result = bot.shutdown();
      assert.strictEqual(result, expected.shutdown);
    });
    console.log();
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
