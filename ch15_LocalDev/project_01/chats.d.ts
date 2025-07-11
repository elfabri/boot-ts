export declare module "./chats.js" {
  export type chat = {
    time: string;
    message: string;
  };
  export function log(chats: chat[]): void;
  export const chats: chat[];
};
