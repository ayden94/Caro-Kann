import { createContext, useContext, useSyncExternalStore } from "react";
import { Board } from "./Types";
import createBoard from "./funcs/createBoard";

export const playTartakower = <T extends object>(initFn: (set: (nextState: Partial<T> | ((prev: T) => T)) => void, get: () => T) => T) => {
  const Board = createContext<Board<T>>(createBoard(initFn));

  function useBoard(): T;
  function useBoard<S>(selector: (state: T) => S): S;

  function useBoard<S>(selector?: (state: T) => S) {
    const { getBoard, subscribe } = useContext(Board);

    const notationSnapshot = () => (selector ? selector(getBoard()) : getBoard());

    const board = useSyncExternalStore(subscribe, notationSnapshot, notationSnapshot);

    return board;
  }

  return { useBoard };
};
