/* Interfaces
 * In 9/10 scenarios, they work the same way as types.
 *
 * Assignment
 * We need a way to get analytics on each
 * of Support.ai's support sessions. Each session
 * contains basic info about the session as well as
 * the customer's feedback on the interaction.
 *
 * Create and export an interface named UserFeedback
 * with the following properties and types:
 *   * rating - number
 *   * comment - string
 *
 * Create and export an interface named SupportSession
 * with the following properties and types:
 *   * id - string
 *   * startedAt - number (unix timestamp, seconds)
 *   * endedAt - number (unix timestamp, seconds)
 *   * feedback - UserFeedback
 *
 * Complete the getSessionDuration function.
 * It takes a SupportSession as a parameter
 * and returns the duration of the session in seconds.
 */

export interface UserFeedback {
  rating: number;
  comment: string;
}

export interface SupportSession {
  id: string;
  startedAt: number;
  endedAt: number;
  feedback: UserFeedback;
}

export function getSessionDuration(session: SupportSession) {
  return session.endedAt - session.startedAt;
}
