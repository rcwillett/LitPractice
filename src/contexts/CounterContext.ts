import { createContext } from "@lit/context";

export const CountContext = createContext<number>("CountContext");
export const IncrementCountContext = createContext<() => void>("IncrementCountContext");
export const DecrementCountContext = createContext<() => void>("DecrementCountContext");