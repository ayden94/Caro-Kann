import { Context, useContext, useSyncExternalStore } from "react";
import { Board } from "../types/Types";

export function useStore<T>(Board: Context<Board<T>>): T;
export function useStore<T, S>(Board: Context<Board<T>>, selector: (state: T) => S): S;

export function useStore<T, S>(Board: Context<Board<T>>, selector?: (state: T) => S) {
  const { getBoard, subscribe } = useContext(Board);

  const notationSnapshot = () => (selector ? selector(getBoard()) : getBoard());

  const board = useSyncExternalStore(subscribe, notationSnapshot, notationSnapshot);

  return board;
}
