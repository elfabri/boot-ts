/* Intersection of Types
 * An intersection type combines multiple types into one
 * with the "&" operator. The resulting intersection
 * type satisfies all the component type simultaniously.
 *
 * Assignment
 * Create and export new TextBot and VoiceBot types.
 * They should each intersect with the existing SupportBot
 * type but have the following additional properties:
 *
 *  TextBot:
 *   messageLog - an array of strings
 *   sendMessage - a function that takes a message string
 *                 and returns a string
 *
 *  VoiceBot:
 *   callLog - an array of strings
 *   phoneNumber - a string
 *   dialNumber - a function that takes a phoneNumber string
 *                and returns a string
 */

export type SupportBot = {
  id: string;
  name: string;
  status: string;
  language: string;
};

// don't touch above this lines

export type TextBot = SupportBot & {
  messageLog: string[];
  sendMessage: (msg: string) => string;
}

export type VoiceBot = SupportBot & {
    callLog: string[];
    phoneNumber: string;
    dialNumber: (phnNum: string) => string;
}
