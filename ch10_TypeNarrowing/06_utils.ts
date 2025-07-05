/* Exhaustive Checks
 * The switch statement is exhaustive, and TypeScript is smart enough to know that
 * anything after it (when all the cases have a return statment)
 * is actually unreachable code, and will give us a compiler error
 * (assuming we have configured tsc to do so)!
 *
 * Design your types so that you get these kinds of useful errors.
 *
 * Assignment
 * The incrementCount function is working as intended at runtime,
 * but someone committed an unnecessary default case that throws an error.
 *
 * Remove the unnecessary code.
 */

export type Topic = "question" | "complaint" | "upgrade" | "refund";

type Chat = {
  topic: Topic;
  userId: string;
};

type CountReport = {
  questions: number;
  complaints: number;
  upgrades: number;
  refunds: number;
};

export function countComplaints(chats: Chat[]): CountReport {
  let counts = { questions: 0, complaints: 0, upgrades: 0, refunds: 0 };
  for (const chat of chats) {
    counts = incrementCount(chat, counts);
  }
  return counts;
}

function incrementCount(chat: Chat, counts: CountReport): CountReport {
  switch (chat.topic) {
    case "question":
      counts.questions++;
      return counts;
    case "complaint":
      counts.complaints++;
      return counts;
    case "refund":
      counts.refunds++;
      return counts;
    case "upgrade":
      counts.upgrades++;
      return counts;
  }
  // Unreachable code, chat topic cannot be anything else than what it can be
  // throw new Error(`Unhandled topic: ${chat.topic}`);
}
