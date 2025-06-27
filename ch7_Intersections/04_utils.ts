/* Intersections vs Unions
 *  * Use unions to say your type is "this OR that"
 *  * Use intersections to say your type is "this AND that",
 *  or sometimes more simply,
 *  "this with the additional properties of that"
 *
 * Assignment
 * Support.ai stores information about different types
 * of users who interact with support tickets.
 * However, there’s a problem, our SupportAgentUser type
 * is impossible to use (incompatible never).
 *
 * Fix the SupportAgentUser type so that it correctly represents
 * a user who can be either a SupportAgent OR an EndUser
 * without causing a conflict.
 *
 * Add and export a new type called SupportAdmin.
 * It's exactly the same as a SupportAgent,
 * but it's role is always "admin".
 *
 * Add the new SupportAdmin type as an option
 * for the SupportAgentUser type.
 *
 * Update getTicketCount to correctly return
 * the user's assignedTickets if they are an admin.
 */

export type SupportAgent = {
  id: number;
  role: "agent";
  assignedTickets: number;
};

export type EndUser = {
  id: number;
  role: "customer";
  submittedTickets: number;
};

// don't touch above this line

export type SupportAdmin = {
  id: number;
  role: "admin";
  assignedTickets: number;
}

export type SupportAgentUser = SupportAgent | EndUser | SupportAdmin;

export function getTicketCount(user: SupportAgentUser): number {
  switch (user.role) {
    case "agent":
      return user.assignedTickets;
    case "customer":
      return user.submittedTickets;
    case "admin":
      return user.assignedTickets;
    default:
      return -1;
  }
}

