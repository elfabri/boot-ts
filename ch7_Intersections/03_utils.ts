/* Intersecting Incompatible Types
 * When combining explicit types with one o more properties
 * with the same name and type, the resulting type is a merge
 * of those properties, there are no problems.
 *
 * When the types have properties with the same name but the
 * diffrent types, the combination results in type never.
 * The solution is to redesign the types to avoid incompatible
 * intersections.
 *
 * Assignment
 * Support.ai enriches customer tickets with two types of metadata:
 *
 *   Sentiment tags, which describe the emotional tone of the message.
 *   Channel tags, which describe how the message was received.
 *
 * These two types were combined using an intersection
 * to create the TicketMetadata type — but there's a bug!
 * Hover over TicketMetadata and notice that it's "never"
 * due to an incompatible intersection.
 *
 * Update the TicketMetadata to hold both the SentimentTag
 * and ChannelTag types inside it as properties.
 * Call them sentiment and channel respectively.
 *
 * Update the getReviewMethod function to work
 * with your new nested structure.
 * It should have the same logic as before:
 *
 * getReviewMethod should return "manual_review" if any of the following are true:
 *
 *   The sentiment is flagged
 *   The channel is not verified
 *   The channel type is "phone"
 *
 * Otherwise, it should return "auto_process".
 */

export type SentimentTag = {
  type: "positive" | "neutral" | "negative";
  score: number;
  flagged: boolean;
};

export type ChannelTag = {
  type: "chat" | "email" | "phone";
  receivedAt: string;
  verified: boolean;
};

export type ReviewMethod = "manual_review" | "auto_process";

// don't touch above this line

export type TicketMetadata = {
  channel: ChannelTag;
  sentiment: SentimentTag;
};

export function getReviewMethod(metadata: TicketMetadata): ReviewMethod {
  const needsReview = metadata.sentiment.flagged || !metadata.channel.verified || metadata.channel.type === "phone";

  return needsReview ? "manual_review" : "auto_process";
}
