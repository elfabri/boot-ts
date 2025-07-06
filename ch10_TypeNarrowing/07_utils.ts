/* Guard Clauses
 * Also known as "early returns", it is used to narrow the type,
 * to filter it. This happens all the time with
 * optional fields in web apps.
 *
 * Assignment
 * We at Support.ai value customer feedback
 * (or at least that's what we tell the customers)!
 *
 * Complete the handleFeedback function.
 * It takes a UserFeedback object and validates it.
 *
 * Add some guard clauses to narrow
 * the undefined's away on the "happy path"
 * (when it returns the given "Thanks..." string).
 *
 *   * If the rating is undefined, or it's not a "valid" rating
 *     (use the helper type predicate function)
 *     return the string Give a rating between 1 and 5.
 *
 *   * If the email is undefined, or it doesn't include a @,
 *     return the string Provide a valid email address.
 */
export type UserFeedback = {
  email?: string;
  rating?: number;
};

export function handleFeedback(feedback: UserFeedback) {
  // guard clauses to narrow
  if (!feedback.rating || !isValidRating(feedback.rating)) {
    return "Give a rating between 1 and 5.";
  }

  // guard clauses to narrow
  if (!feedback.email || !feedback.email.includes('@')) {
    return "Provide a valid email address.";
  }

  return `Thanks, ${getEmailUsername(feedback.email)}! Rating: ${ratingToString(feedback.rating)}`;
}

function getEmailUsername(email: string): string {
  const atIndex = email.indexOf("@");
  return atIndex !== -1 ? email.slice(0, atIndex) : email;
}

function isValidRating(rating: number): rating is 1 | 2 | 3 | 4 | 5 {
  return (
    rating === 1 || rating === 2 || rating === 3 || rating === 4 || rating === 5
  );
}

function ratingToString(rating: 1 | 2 | 3 | 4 | 5): string {
  switch (rating) {
    case 1:
      return "Very Bad";
    case 2:
      return "Bad";
    case 3:
      return "Average";
    case 4:
      return "Good";
    case 5:
      return "Excellent";
  }
}
