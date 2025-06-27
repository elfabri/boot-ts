/* Extending Interfaces
 * Interfaces are better than types when it comes to
 * extending other interfaces (inheriting properties).
 *
 * Similar to the & (intersection) operator to extend types,
 * interfaces have the "extends" keyword
 *
 * Why is "interface extends" usually better?
 * Microsoft's wiki says:
 *    Interfaces create a single flat object type
 * that detects property conflicts, which are usually
 * important to resolve! Intersections on the other hand
 * just recursively merge properties, and in some cases
 * produce never. Interfaces also display consistently better,
 * whereas type aliases to intersections can't be displayed
 * in part of other intersections. Type relationships
 * between interfaces are also cached, as opposed to
 * intersection types as a whole.
 *
 *    A final noteworthy difference is that when
 * checking against a target intersection type, every constituent
 * is checked before checking against the "effective"/"flattened" type.
 *
 *    For this reason, extending types with interfaces/extends
 * is suggested over creating intersection types.
 *
 * Put simple, with interfaces the developer ergonomics
 * are a bit better and compilation is a bit faster.
 *
 * Assignment
 * Support.ai handles different types of messages,
 * like emails and text messages, but all messages
 * share some common structure.
 *
 * Create and export two new message interfaces
 * that extend the Message interface
 *
 *  TextMessage:
 *    text - string
 *    carrier - string
 *
 *  EmailMessage:
 *    subject - string
 *    body - string
 *
 * Update the getEmailDescription
 * and getTextMessageDescription function signatures
 * so that they use the new interfaces you just created.
 */

export interface Message {
  id: string;
  sender: string;
  recipient: string;
  timestamp: number;
}

// don't touch above this line

export interface TextMessage extends Message {
  text: string;
  carrier: string;
}

export interface EmailMessage extends Message {
  subject: string;
  body: string;
}

export function getEmailDescription(email: EmailMessage): string {
  return `[EMAIL] ${email.subject}: ${email.body}`;
}

export function getTextMessageDescription(text: TextMessage): string {
  return `[TEXT] ${text.text}` + ` - Sent via ${text.carrier}`;
}
