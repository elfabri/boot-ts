import type { SentimentString } from "./01_utils";

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

type Complaint = { angry: true; message: string };
type Praise = { angry: false; message: string };
type Inquiry = { message: string };

type _Test1 = Expect<Equal<SentimentString<Complaint>, "mad" | "furious">>;
type _Test2 = Expect<Equal<SentimentString<Praise>, "content" | "happy">>;
type _Test3 = Expect<Equal<SentimentString<Inquiry>, "content" | "happy">>;

console.log("✓ Pass: TSC Compiled");
