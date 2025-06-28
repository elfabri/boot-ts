/* Extending multiple interfaces
 *
 * You can extend multiple interfaces at once.
 * "interface InterestingI extends ThisI, ThatI {}"
 *
 * Assignment
 * We want our support bots to be both conversational
 * and autonomous. Combine the existing interfaces
 * into one powerful bot interface.
 *
 * Create and export an interface named SmartReplyBot
 * that extends the three existing interfaces.
 *
 * Add these properties to SmartReplyBot:
 *  * name: string
 *  * status: a value union of "online", "offline", or "starting"
 *  * shutdown: a method with no parameters that returns a string
 */

export interface CanReply {
  reply(text: string): string;
}

export interface CanSummarize {
  summarize(conversation: string[]): string;
}

export interface CanAct {
  takeAction(action: string): void;
}

// don't touch above this line

export interface SmartReplyBot extends CanReply, CanSummarize, CanAct {
  name: string;
  status: "online" | "offline" | "starting";
  shutdown: () => string;
}
