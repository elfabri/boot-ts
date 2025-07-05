/* Type Hierarchy
 * any and unknown are the top hierarchy, they can represent
 * all of the other types and are known to be the widest types
 * to work with. 
 *
 * On the bottom of the hierarchy is the never type, which is the
 * narrowest type because it represents values that can't occur.
 *
 * Assignment
 * Our AI magic™ uses sentiment analysis
 * to algorithmically deduce whether user feedback
 * is positive or negative.
 *
 * Complete the respondToSentiment function:
 *   * If the input is positive, pass it to
 *   handlePositiveSentiment and return the result.
 *
 *   * If the input is negative, pass it to
 *   handleNegativeSentiment and return the result.
 *   
 *   * If the input is anything else:
 *     * Return the message "We don't understand."
 *     * Notify the manager
 *
 * Complete the handlePositiveSentiment function:
 *   * If the input is "happy":
 *     * The response message should be "Hooray!"
 *     * Don't notify the manager
 *
 *   * If the input is "satisfied":
 *     * The response message should be "We are glad."
 *     * Don't notify the manager
 *
 * Complete the handleNegativeSentiment function:
 *   * If the input is "dissatisfied":
 *     * The response message should be "We are sorry."
 *     * Don't notify the manager
 *
 *   * If the input is "angry":
 *     * The response message should be
 *     "We apologize. A manager will contact you."
 *     * Notify the manager
 */

type PositiveSentiment = "happy" | "satisfied";
type NegativeSentiment = "dissatisfied" | "angry";

export type Sentiment = PositiveSentiment | NegativeSentiment;
export type Response = { message: string; notify: Boolean };

export function respondToSentiment(sentiment: Sentiment): Response {
  if (sentiment === "happy" || sentiment === "satisfied") {
    return handlePositiveSentiment(sentiment);
  } else if (sentiment === "dissatisfied" || sentiment === "angry") {
    return handleNegativeSentiment(sentiment);
  }
  return {
    message: "We don't understand.",
    notify: true
  } as Response;
}

function handlePositiveSentiment(sentiment: PositiveSentiment): Response {
  const res: Response = {
    message: "",
    notify: false,
  }
  if (sentiment === "happy") {
    res.message = "Hooray!";
    return res;
  }
  res.message = "We are glad.";
  return res;
}

function handleNegativeSentiment(sentiment: NegativeSentiment): Response {
  const res: Response = {
    message: "",
    notify: false,
  }
  if (sentiment === "angry") {
    res.message = "We apologize. A manager will contact you.";
    res.notify = true;
    return res;
  }
  res.message = "We are sorry.";
  return res;
}
